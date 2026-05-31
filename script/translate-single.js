/* global process, __dirname, require, module, setTimeout */
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('ERROR: GEMINI_API_KEY environment variable is not set.');
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

const CHAPTERS_DIR = path.join(__dirname, '../chapters');
const EN_CHAPTERS_DIR = path.join(CHAPTERS_DIR, 'en');

if (!fs.existsSync(EN_CHAPTERS_DIR)) {
  fs.mkdirSync(EN_CHAPTERS_DIR, { recursive: true });
}

async function translateHTMLChunk(chunkText, contextInfo = '') {
  const prompt = `Translate this HTML study guide content from Italian to English.
- Retain the exact same HTML tags, IDs, classes, attributes, structure, and scripts.
- Translate only the visible text.
- Do NOT translate technical tags or code.
- Translate terms: "Controlli di sicurezza" -> "Security controls", "Minacce" -> "Threats", "Categoria" -> "Category", "Tipo" -> "Type".
- Output only the raw translated HTML. Do not wrap in markdown fences.

HTML:
${chunkText}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });
  
  let result = (response.text || '').trim();
  if (result.startsWith('```html')) result = result.slice(7);
  else if (result.startsWith('```')) result = result.slice(3);
  if (result.endsWith('```')) result = result.slice(0, -3);
  
  return result.trim();
}

function parseAndChunkHTML(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const sectionRegex = /<section\b[^>]*>([\s\S]*?)<\/section>/gi;
  
  let match;
  let sections = [];
  let lastIndex = 0;
  
  while ((match = sectionRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      sections.push({
        type: 'static',
        text: content.slice(lastIndex, match.index)
      });
    }
    sections.push({
      type: 'section',
      text: match[0],
      id: (match[0].match(/id="([^"]+)"/) || [])[1] || 'unknown'
    });
    lastIndex = sectionRegex.lastIndex;
  }
  
  if (lastIndex < content.length) {
    sections.push({
      type: 'static',
      text: content.slice(lastIndex)
    });
  }
  
  return sections;
}

async function translateFile(filename) {
  const srcPath = path.join(CHAPTERS_DIR, filename);
  const destPath = path.join(EN_CHAPTERS_DIR, filename);
  
  console.log(`Translating: ${filename}`);
  const chunks = parseAndChunkHTML(srcPath);
  let translatedContent = '';
  
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    if (chunk.type === 'static') {
      if (chunk.text.includes('<html lang="it"') || chunk.text.includes('breadcrumb') || chunk.text.includes('<header>')) {
        const tHeader = await translateHTMLChunk(chunk.text);
        translatedContent += tHeader
          .replace(/lang="it"/g, 'lang="en"')
          .replace(/data-lang="it"/g, 'data-lang="en"')
          .replace(/href="chapters\//g, 'href="')
          .replace(/href="\.\.\//g, 'href="../');
      } else {
        translatedContent += chunk.text.replace(/lang="it"/g, 'lang="en"').replace(/data-lang="it"/g, 'data-lang="en"');
      }
    } else {
      const tSection = await translateHTMLChunk(chunk.text);
      translatedContent += tSection;
    }
  }
  
  translatedContent = translatedContent
    .replace(/html lang="it"/g, 'html lang="en"')
    .replace(/data-lang="it"/g, 'data-lang="en"')
    .replace(/href="obj([1-5])_([1-9])_([^"]+)"/g, 'href="obj$1_$2_$3"')
    .replace(/href="([^"]+)\.html"/g, function(match, p1) {
       // Only replace relative URLs that point to chapter files (no index.html, checklists etc)
       if (p1.startsWith('obj') && !p1.includes('/')) {
         return `href="${p1}.html"`;
       }
       return match;
    });

  fs.writeFileSync(destPath, translatedContent, 'utf8');
  console.log(`Saved: chapters/en/${filename}`);
}

async function run() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node translate-single.js <filename_or_index>');
    process.exit(1);
  }
  
  if (arg === 'index') {
    const srcPath = path.join(__dirname, '../index.html');
    const destPath = path.join(__dirname, '../index_en.html');
    const content = fs.readFileSync(srcPath, 'utf8');
    
    // Quick split translation of index
    const welcomeCardStart = content.indexOf('<div id="view-intro"');
    const welcomeCardEnd = content.indexOf('<div id="view-chapters"');
    const endBody = content.indexOf('</body>');
    
    const headerPart = content.slice(0, welcomeCardStart);
    const infoPart = content.slice(welcomeCardStart, welcomeCardEnd);
    const chaptersPart = content.slice(welcomeCardEnd, endBody);
    const footerPart = content.slice(endBody);
    
    console.log('Translating index header...');
    let tHeader = await translateHTMLChunk(headerPart);
    tHeader = tHeader.replace(/lang="it"/g, 'lang="en"').replace(/data-lang="it"/g, 'data-lang="en"');
    
    console.log('Translating index guide info...');
    let tInfo = await translateHTMLChunk(infoPart);
    
    console.log('Translating index chapters checklist list...');
    let tChapters = await translateHTMLChunk(chaptersPart);
    
    let result = tHeader + tInfo + tChapters + footerPart;
    result = result
      .replace(/lang="it"/g, 'lang="en"')
      .replace(/data-lang="it"/g, 'data-lang="en"')
      .replace(/href="chapters\/([^"]+)"/g, 'href="chapters/en/$1"')
      .replace(/<span>Completato<\/span>/gi, '<span>Completed<\/span>');
      
    fs.writeFileSync(destPath, result, 'utf8');
    console.log('Saved index_en.html');
  } else {
    await translateFile(arg);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
