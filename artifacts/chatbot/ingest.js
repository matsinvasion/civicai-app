import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const embeddingModel = genAI.getGenerativeModel({
  model: "models/gemini-embedding-001",
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
);

const documents = [
  {
    title: "Business registration overview",
    agency: "URSB",
    source_url: "https://ursb.go.ug",
    content: `The Uganda Registration Services Bureau (URSB) is the government agency responsible for business registration in Uganda. All businesses operating in Uganda must be registered with URSB. The main business structures you can register are: sole proprietorship, partnership, and limited liability company. Registration can be done online at ursb.go.ug or in person at URSB offices in Kampala on Jinja Road.`,
  },
  {
    title: "Sole proprietorship registration",
    agency: "URSB",
    source_url: "https://ursb.go.ug/business-registration",
    content: `A sole proprietorship is the simplest business structure in Uganda, owned and run by one person. To register a sole proprietorship with URSB you need: a valid national ID or passport, a proposed business name, physical address of the business, and nature of business activity. The registration fee is UGX 35,000. Processing takes 1-3 business days. You will receive a certificate of registration upon completion.`,
  },
  {
    title: "Limited liability company registration",
    agency: "URSB",
    source_url: "https://ursb.go.ug/business-registration",
    content: `A limited liability company (LLC) in Uganda requires a minimum of one director and one shareholder. Required documents include: proposed company name, memorandum and articles of association, details of all directors and shareholders including their national IDs or passports, registered physical address in Uganda. The registration fee starts at UGX 165,000 for a company with share capital up to UGX 5 million. Processing takes 2-5 business days.`,
  },
  {
    title: "Business name search",
    agency: "URSB",
    source_url: "https://ursb.go.ug/name-search",
    content: `Before registering a business in Uganda you must search to confirm your proposed business name is available. Name search can be done online at ursb.go.ug or at the URSB offices. The name search fee is UGX 10,000. A name reservation lasts 30 days. Your business name must not be identical or too similar to an existing registered business. Names that are offensive or misleading will be rejected.`,
  },
  {
    title: "TIN registration after business registration",
    agency: "URA",
    source_url: "https://ura.go.ug",
    content: `After registering your business with URSB, you must obtain a Tax Identification Number (TIN) from the Uganda Revenue Authority (URA). A TIN is required to open a business bank account, file tax returns, and apply for government contracts. TIN registration is free and can be done online at ura.go.ug or at any URA office. You will need your URSB certificate of registration, national ID, and business address to apply.`,
  },
  {
    title: "KCCA trading licence",
    agency: "KCCA",
    source_url: "https://kcca.go.ug",
    content: `Any business operating within Kampala city must obtain a trading licence from Kampala Capital City Authority (KCCA). The trading licence fee depends on your business category and location. Fees range from UGX 100,000 to UGX 2,000,000 annually. Required documents include your URSB certificate of registration, TIN certificate, and proof of business premises. Trading licences are renewed annually before 31st March each year.`,
  },
];

function chunkText(text, maxLength = 500) {
  const sentences = text.split(". ");
  const chunks = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > maxLength) {
      if (current) chunks.push(current.trim());
      current = sentence;
    } else {
      current += (current ? ". " : "") + sentence;
    }
  }
  if (current) chunks.push(current.trim());
  return chunks;
}

async function getEmbedding(text) {
  const result = await embeddingModel.embedContent(text);
  return result.embedding.values;
}

async function ingest() {
  console.log("Starting ingestion...");
  let totalChunks = 0;

  for (const doc of documents) {
    const chunks = chunkText(doc.content);
    console.log(`Processing: ${doc.title} — ${chunks.length} chunk(s)`);

    for (const chunk of chunks) {
      try {
        const embedding = await getEmbedding(chunk);

        const { error } = await supabase.from("documents").insert({
          content: chunk,
          embedding,
          agency: doc.agency,
          source_url: doc.source_url,
          title: doc.title,
        });

        if (error) {
          console.error(`Supabase error: ${error.message}`);
        } else {
          totalChunks++;
          console.log(`  ✓ inserted`);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
      }
    }
  }

  console.log(`\nDone. ${totalChunks} chunks loaded into Supabase.`);
}

ingest();
