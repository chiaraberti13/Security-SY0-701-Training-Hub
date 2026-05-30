const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'quiz-database.js');
const jsonPath = path.join(__dirname, 'quiz-database.json');
const xmlPath = path.join(__dirname, '..', 'quiz_database.xml');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function syncAllQuizSources() {
  if (!fs.existsSync(jsPath)) {
    console.error('Source JS database not found at:', jsPath);
    process.exit(1);
  }

  // 1. Read and parse script/quiz-database.js
  const jsContent = fs.readFileSync(jsPath, 'utf8');
  console.log(`Successfully read JS source from: ${jsPath}`);

  let quizDatabase = null;
  try {
    const sandbox = { window: {} };
    const runInSandbox = new Function('window', jsContent);
    runInSandbox(sandbox.window);
    quizDatabase = sandbox.window.quizDatabase;
  } catch (err) {
    console.error('Error executing/parsing quiz-database.js in sandbox:', err);
    process.exit(1);
  }

  if (!Array.isArray(quizDatabase)) {
    console.error('Error: window.quizDatabase is not a valid array.');
    process.exit(1);
  }

  console.log(`Successfully parsed ${quizDatabase.length} questions from quiz-database.js.`);

  // 2. Write script/quiz-database.json (pretty-printed with 2 spaces)
  fs.writeFileSync(jsonPath, JSON.stringify(quizDatabase, null, 2), 'utf8');
  console.log(`Successfully generated and wrote JSON fallback to: ${jsonPath}`);

  // 3. Write quiz_database.xml
  let xml = '<quiz>\n';

  quizDatabase.forEach((q) => {
    const objective = escapeXml(q.objective || '');
    const id = escapeXml(q.id || '');
    xml += `  <question id="${id}" objective="${objective}">\n`;
    xml += `    <text>${escapeXml(q.text)}</text>\n`;
    xml += `    <options>\n`;
    (q.opts || []).forEach((opt) => {
      const optId = escapeXml(opt.id || '');
      const isCorrect = opt.c ? 'true' : 'false';
      xml += `      <option id="${optId}" correct="${isCorrect}">${escapeXml(opt.t)}</option>\n`;
    });
    xml += `    </options>\n`;
    if (q.expl) {
      xml += `    <explanation>${escapeXml(q.expl)}</explanation>\n`;
    } else {
      xml += `    <explanation/>\n`;
    }
    if (q.source) {
      xml += `    <source>${escapeXml(q.source)}</source>\n`;
    }
    xml += `  </question>\n`;
  });

  xml += '</quiz>\n';

  fs.writeFileSync(xmlPath, xml, 'utf8');
  console.log(`Successfully generated and synchronized ${quizDatabase.length} questions to: ${xmlPath}!`);
}

syncAllQuizSources();
