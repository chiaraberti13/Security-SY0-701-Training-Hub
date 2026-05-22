const fs = require('fs');
const pdf = require('pdf-parse');

async function findChapters(filename) {
  console.log(`\n=================== CHAPTERS IN: ${filename} ===================`);
  try {
    const buf = fs.readFileSync(filename);
    const p = new pdf.PDFParse({ data: buf });
    const textObj = await p.getText();
    const text = textObj.text || '';
    
    const lines = text.split('\n');
    let currentChapter = null;
    let titleLineCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^Capitolo\s+\d+$/i)) {
        currentChapter = line;
        titleLineCount = 1;
        console.log(`\nFound: ${line}`);
      } else if (currentChapter && titleLineCount === 1) {
        console.log(`  Title: ${line}`);
        titleLineCount = 0;
      }
    }
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await findChapters('CompTIA Security_1.pdf');
  await findChapters('CompTIA Security_2.pdf');
}
main();
