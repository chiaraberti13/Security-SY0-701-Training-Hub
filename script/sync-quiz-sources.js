const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, '..', 'quiz_database.xml');
if (!fs.existsSync(xmlPath)) {
  console.error('quiz_database.xml not found at:', xmlPath);
  process.exit(1);
}

const xmlContent = fs.readFileSync(xmlPath, 'utf8');
const qMap = {};
// Quick regex based extractor for <question id="...">...</question>
const questionRegex = /<question\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/question>/g;
let qm;
while ((qm = questionRegex.exec(xmlContent)) !== null) {
  const id = qm[1];
  const body = qm[2];
  const sourceMatch = /<source>([\s\S]*?)<\/source>/.exec(body);
  if (sourceMatch) {
    qMap[id] = sourceMatch[1].trim();
  }
}

console.log(`Loaded ${Object.keys(qMap).length} questions with source from XML.`);

const chFolder = path.join(__dirname, '..', 'chapters');
if (!fs.existsSync(chFolder)) {
  console.error('chapters directory not found at:', chFolder);
  process.exit(1);
}

const files = fs.readdirSync(chFolder).filter(f => f.endsWith('.html'));
console.log(`Processing ${files.length} HTML files...`);

let totalModifiedQuestions = 0;
let totalModifiedFiles = 0;

files.forEach(file => {
  const filePath = path.join(chFolder, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let isModified = false;

  // 1. Strip existing source: '...' properties if any (idempotency step)
  // Match forms like source:'TL', or source:"TL", or source: 'TL',
  const stripped = content.replace(/(\{\s*id\s*:\s*['"]SCREEN_\d+['"])\s*,\s*source\s*:\s*['"][^'"]*['"]\s*,/g, '$1,');
  if (stripped !== content) {
    content = stripped;
    isModified = true;
  }

  // 2. Inject source: '...' properties
  let modifiedQuestionsInFile = 0;
  const updatedContent = content.replace(/(id\s*:\s*['"](SCREEN_\d+)['"]\s*,)/g, (match, prefix, id) => {
    if (qMap[id]) {
      modifiedQuestionsInFile++;
      totalModifiedQuestions++;
      return `id:'${id}', source:'${qMap[id]}',`;
    }
    return match;
  });

  if (modifiedQuestionsInFile > 0) {
    content = updatedContent;
    isModified = true;
  }

  // 3. Update the counter UI line to render the source subtly in counterEl
  const beforeStr = "counterEl.textContent = 'Domanda ' + (quiz.idx + 1) + ' / ' + n;";
  const afterStr = "counterEl.innerHTML = 'Domanda ' + (quiz.idx + 1) + ' / ' + n + (q.source ? ' <span class=\"quiz-source-tag\" style=\"font-size: 0.72rem; font-weight: 500; color: #475569; background: #F1F5F9; border: 1px solid #CBD5E1; padding: 2px 6px; border-radius: 4px; margin-left: 8px; display: inline-block; vertical-align: middle;\">' + q.source + '</span>' : '');";

  if (content.includes(beforeStr)) {
    content = content.split(beforeStr).join(afterStr);
    isModified = true;
  } else {
    // Spacer/regex fallback if literal string fails
    const counterRegex = /counterEl\s*\.\s*textContent\s*=\s*['"]Domanda\s*['"]\s*\+\s*\(\s*quiz\s*\.\s*idx\s*\+\s*1\s*\)\s*\+\s*['"]\s*\/\s*['"]\s*\+\s*n\s*;/g;
    if (counterRegex.test(content)) {
      content = content.replace(counterRegex, afterStr);
      isModified = true;
    }
  }

  if (isModified) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalModifiedFiles++;
    console.log(`- Updated ${file} (${modifiedQuestionsInFile} questions updated with source)`);
  }
});

console.log(`\nSync complete!`);
console.log(`Total HTML files modified: ${totalModifiedFiles}`);
console.log(`Total question objects enriched: ${totalModifiedQuestions}`);
