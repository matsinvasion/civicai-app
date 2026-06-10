import { GoogleGenerativeAI } from '@google/generative-ai'
import { createClient } from '@supabase/supabase-js'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const embeddingModel = genAI.getGenerativeModel({ model: 'models/gemini-embedding-001' })
const chatModel = genAI.getGenerativeModel({ model: 'models/gemini-2.0-flash' })

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

async function embedQuery(query) {
  const result = await embeddingModel.embedContent(query)
  return result.embedding.values
}

async function retrieveContext(query, agency) {
  const embedding = await embedQuery(query)

  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 4
  })

  if (error) {
    console.error('Retrieval error:', error.message)
    return []
  }

  // filter by agency if results exist for it, otherwise return all
  const agencyFiltered = data.filter(d => d.agency === agency)
  return agencyFiltered.length > 0 ? agencyFiltered : data
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, agency } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const context = await retrieveContext(message, agency)

    if (context.length === 0) {
      return res.status(200).json({
        answer: "I'm sorry, I don't have information on that yet. Please visit the relevant government agency website directly or contact their offices for assistance.",
        sources: []
      })
    }

    const contextText = context
      .map(c => `[${c.agency} — ${c.title}]\n${c.content}`)
      .join('\n\n')

    const sources = [...new Set(context.map(c => `${c.agency}: ${c.source_url}`))]

    const prompt = `You are CivicAI, a helpful Ugandan civic assistant. Your job is to guide Ugandan citizens through government services and processes clearly and accurately.

Use ONLY the information provided below to answer the question. If the answer is not in the provided information, say you don't have that information and suggest the user visit the relevant agency website or office directly.

Always:
- Give step by step guidance where relevant
- Mention specific fees, documents required, and processing timelines if available
- Be friendly and clear — many users may not be familiar with formal processes
- Where helpful, include a Luganda phrase or translation
- End by telling the user which agency to contact and the official website

CONTEXT FROM GOVERNMENT SOURCES:
${contextText}

USER QUESTION:
${message}

ANSWER:`

    const result = await chatModel.generateContent(prompt)
    const answer = result.response.text()

    // log query to Supabase
    await supabase.from('query_logs').insert({
      query: message,
      agency_detected: agency,
      response_preview: answer.slice(0, 200)
    })

    return res.status(200).json({ answer, sources })

  } catch (err) {
    console.error('Chat error:', err.message)
    return res.status(500).json({
      error: 'Something went wrong',
      answer: "I'm having trouble right now. Please try again in a moment.",
      sources: []
    })
  }
}