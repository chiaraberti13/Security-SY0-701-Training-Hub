const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('No GEMINI_API_KEY env variable found.');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function test() {
  console.log('Sending request to Gemini...');
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Hello, say 'API is active and working!'",
    });
    console.log('Gemini Response:', response.text);
  } catch (err) {
    console.error('Gemini API Error:', err);
  }
}

test();
