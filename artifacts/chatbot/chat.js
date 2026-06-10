import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const embeddingModel = genAI.getGenerativeModel({
  model: "models/gemini-embedding-001",
});
const chatModel = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash-lite",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

// -----------------------------------------------
// STEP 1 — Embed the user's question
// -----------------------------------------------
async function embedQuery(query) {
  const result = await embeddingModel.embedContent(query);
  return result.embedding.values;
}

// -----------------------------------------------
// STEP 2 — Find relevant chunks from Supabase
// -----------------------------------------------
async function retrieveContext(query) {
  const embedding = await embedQuery(query);

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 4,
  });

  if (error) {
    console.error("Retrieval error:", error.message);
    return [];
  }

  return data;
}

// -----------------------------------------------
// STEP 3 — Build prompt and get Gemini response
// -----------------------------------------------
async function chat(userQuestion) {
  const context = await retrieveContext(userQuestion);

  if (context.length === 0) {
    return {
      answer:
        "I'm sorry, I don't have information on that yet. Please visit the relevant government agency website directly or contact their offices for assistance.",
      sources: [],
    };
  }

  const contextText = context
    .map((c) => `[${c.agency} — ${c.title}]\n${c.content}`)
    .join("\n\n");

  const sources = [
    ...new Set(context.map((c) => `${c.agency}: ${c.source_url}`)),
  ];

  const prompt = `You are a helpful Ugandan civic assistant. Your job is to guide citizens through government services and processes clearly and accurately.

Use ONLY the information provided below to answer the question. If the answer is not in the provided information, say you don't have that information and suggest the user visit the relevant agency website or office directly.

Always:
- Give step by step guidance where relevant
- Mention specific fees, documents, and timelines if available
- Be friendly and clear — many users may not be familiar with formal processes
- End by telling the user which agency to contact and where

CONTEXT FROM GOVERNMENT SOURCES:
${contextText}

USER QUESTION:
${userQuestion}

ANSWER:`;

  const result = await chatModel.generateContent(prompt);
  const answer = result.response.text();

  return { answer, sources };
}

// -----------------------------------------------
// TEST — run a sample question
// -----------------------------------------------
const testQuestion = "How do I register a sole proprietorship in Uganda?";
console.log(`\nQuestion: ${testQuestion}\n`);

const response = await chat(testQuestion);
console.log("Answer:\n", response.answer);
console.log("\nSources:", response.sources);
