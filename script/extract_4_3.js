const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, '..', 'quiz_database.xml');
const xmlContent = fs.readFileSync(xmlPath, 'utf8');

const questions = [];
const questionRegex = /<question\s+id="([^"]+)"\s+objective="4\.3">([\s\S]*?)<\/question>/g;

let match;
while ((match = questionRegex.exec(xmlContent)) !== null) {
  const id = match[1];
  const body = match[2];

  // Extract text
  const textMatch = body.match(/<text>([\s\S]*?)<\/text>/);
  const text = textMatch ? textMatch[1].trim() : '';

  // Extract options
  const opts = [];
  const optRegex = /<option\s+id="([^"]+)"\s+correct="([^"]+)">([\s\S]*?)<\/option>/g;
  let optMatch;
  while ((optMatch = optRegex.exec(body)) !== null) {
    opts.push({
      id: optMatch[1],
      t: optMatch[3].trim().replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'),
      c: optMatch[2] === 'true'
    });
  }

  questions.push({
    id,
    text: text.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'),
    opts,
    expl: ""
  });
}

console.log(`Extracted ${questions.length} questions for OBJ 4.3.`);
fs.writeFileSync(path.join(__dirname, 'extracted_4_3.json'), JSON.stringify(questions, null, 2));
