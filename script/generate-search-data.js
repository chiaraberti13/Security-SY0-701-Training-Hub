const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.join(__dirname, '..');
const indexHtmlPath = path.join(rootDir, 'index.html');
const glossarioHtmlPath = path.join(rootDir, 'glossario.html');
const searchDataJsonPath = path.join(rootDir, 'script', 'search-data.json');

console.log('Generating search data index...');

// 1. Parse index.html to extract chapters
let chapters = [];
try {
  const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
  const cardBlocks = indexContent.split('<div class="ch-card"');
  
  for (let i = 1; i < cardBlocks.length; i++) {
    const block = cardBlocks[i];
    
    const idMatch = /id="([^"]+)"/.exec(block);
    const id = idMatch ? idMatch[1] : '';
    
    // Clean up title (remove &amp; etc.)
    const titleMatch = /<span class="ch-card-title">([\s\S]*?)<\/span>/.exec(block);
    let title = titleMatch ? titleMatch[1].trim() : '';
    title = title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
    const objMatch = /<span class="objectives-tag">([\s\S]*?)<\/span>/.exec(block);
    const objective = objMatch ? objMatch[1].trim() : '';
    
    const refMatch = /<span class="manual-ref-tag">([\s\S]*?)<\/span>/.exec(block);
    let manualRef = refMatch ? refMatch[1].trim() : '';
    manualRef = manualRef.replace(/&amp;/g, '&');
    
    const hrefs = [];
    const hrefRegex = /href="([^"]+)"/g;
    let match;
    while ((match = hrefRegex.exec(block)) !== null) {
      hrefs.push(match[1]);
    }
    
    const chapterUrl = hrefs.find(u => u.includes('chapters/') && !u.includes('#quiz-section'));
    const quizUrl = hrefs.find(u => u.includes('chapters/') && u.includes('#quiz-section'));
    
    const numQuestionsMatch = /Quiz\s*·\s*(\d+)/.exec(block);
    const numQuestions = numQuestionsMatch ? parseInt(numQuestionsMatch[1], 10) : 0;
    
    if (title && objective) {
      chapters.push({
        id,
        title,
        objective,
        manualRef,
        chapterUrl,
        quizUrl,
        numQuestions
      });
    }
  }
  console.log(`Successfully indexed ${chapters.length} chapters.`);
} catch (err) {
  console.error('Error parsing index.html:', err);
  process.exit(1);
}

// 2. Parse glossario.html to extract the glossary database
let glossary = [];
try {
  const glossarioContent = fs.readFileSync(glossarioHtmlPath, 'utf8');
  const match = /const\s+database\s*=\s*\[/i.exec(glossarioContent);
  if (!match) {
    console.error('Database array not found inside glossario.html!');
    process.exit(1);
  }
  
  const startIndex = match.index + match[0].length - 1; // opening '['
  
  let depth = 1;
  let curr = startIndex + 1;
  let inString = false;
  let stringQuote = '';
  
  while (curr < glossarioContent.length && depth > 0) {
    const char = glossarioContent[curr];
    if ((char === "'" || char === '"' || char === '`') && glossarioContent[curr - 1] !== '\\') {
      if (!inString) { inString = true; stringQuote = char; }
      else if (stringQuote === char) { inString = false; }
    }
    if (!inString) {
      if (char === '[') depth++;
      else if (char === ']') depth--;
    }
    curr++;
  }
  
  const arraySource = glossarioContent.substring(startIndex, curr);
  glossary = vm.runInNewContext(arraySource);
  console.log(`Successfully indexed ${glossary.length} glossary terms.`);
} catch (err) {
  console.error('Error parsing glossario.html glossary:', err);
  process.exit(1);
}

// 3. Write compiled dataset to script/search-data.json
const outputData = {
  chapters,
  glossary
};

try {
  fs.writeFileSync(searchDataJsonPath, JSON.stringify(outputData, null, 2), 'utf8');
  console.log(`Search data successfully generated at ${searchDataJsonPath}`);
} catch (err) {
  console.error('Error writing search-data.json:', err);
  process.exit(1);
}
