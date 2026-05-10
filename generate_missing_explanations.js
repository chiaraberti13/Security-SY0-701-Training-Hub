import fs from 'fs';
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const QUESTIONS_FILE = './src/data/questions.json';

async function generateExplanations() {
  const data = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
  const missingExplanations = data.filter(q => !q.explanation);

  console.log(`Total questions: ${data.length}`);
  console.log(`Questions missing explanations: ${missingExplanations.length}`);

  if (missingExplanations.length === 0) {
    console.log("No missing explanations found.");
    return;
  }

  // Process in small batches to avoid timeouts and rate limits
  const batchSize = 10;
  const processedBatchLimit = 5; // Let's do 50 questions for now to show progress
  let processedCount = 0;

  for (let i = 0; i < missingExplanations.length && processedCount < processedBatchLimit * batchSize; i += batchSize) {
    const batch = missingExplanations.slice(i, i + batchSize);
    console.log(`Processing batch ${i / batchSize + 1}...`);

    const promptItems = batch.map(q => ({
      id: q.id,
      question: q.text.en,
      options: q.options.map(o => ({ id: o.id, text: o.text.en, correct: o.correct }))
    }));

    const prompt = `You are a CompTIA Security+ SY0-701 expert.
For each of the following questions, provide a concise explanation (1-2 sentences) of why the correct answer is correct.
Provide the output as a JSON array of objects, each with "id", "en" (English explanation), and "it" (Italian explanation).

Input questions:
${JSON.stringify(promptItems, null, 2)}

Output format:
[
  { "id": "SCREEN_XXX", "en": "...", "it": "..." },
  ...
]`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
      });

      const output = response.text;
      const results = JSON.parse(output);
      
      results.forEach(res => {
        const question = data.find(q => q.id === res.id);
        if (question) {
          question.explanation = {
            en: res.en,
            it: res.it
          };
          processedCount++;
        }
      });

      // Save after each batch to avoid losing work
      fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(data, null, 2));
      console.log(`Saved batch. Total explanations added: ${processedCount}`);
      
    } catch (error) {
      console.error(`Error processing batch:`, error);
    }
  }

  console.log("Finished generating explanations.");
}

generateExplanations();
