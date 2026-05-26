const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const chaptersDir = path.join(rootDir, 'chapters');

console.log('Injecting global search scripts into pages...');

// 1. Process Root Files
const rootFiles = ['index.html', 'quizzes.html', 'glossario.html'];
rootFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('global-search.js')) {
    console.log(`- ${file} already contains global-search.js script.`);
    return;
  }

  if (content.includes('</body>')) {
    const replacement = '<script src="script/global-search.js" defer></script>\n</body>';
    content = content.replace('</body>', replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`+ Successfully injected search script in root file: ${file}`);
  } else {
    console.warn(`! ${file} does not contain </body> tag.`);
  }
});

// 2. Process Chapter Files
try {
  const files = fs.readdirSync(chaptersDir);
  files.forEach(file => {
    if (!file.endsWith('.html')) return;
    const filePath = path.join(chaptersDir, file);

    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('global-search.js')) {
      console.log(`- chapters/${file} already contains global-search.js script.`);
      return;
    }

    if (content.includes('</body>')) {
      const replacement = '<script src="../script/global-search.js" defer></script>\n</body>';
      content = content.replace('</body>', replacement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`+ Successfully injected search script in chapter: chapters/${file}`);
    } else {
      console.warn(`! chapters/${file} does not contain </body> tag.`);
    }
  });
} catch (err) {
  console.error('Error processing chapters folder:', err);
}

console.log('Script injection complete.');
