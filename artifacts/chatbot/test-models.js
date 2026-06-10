import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`,
);
const data = await response.json();

console.log("Available chat models:");
data.models
  .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
  .forEach((m) => console.log(" -", m.name));
