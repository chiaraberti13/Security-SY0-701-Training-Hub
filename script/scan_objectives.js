const fs = require('fs');
const pdf = require('pdf-parse');

async function scanObjectives(filename, bookNum) {
  console.log(`\n=================== SCANNING OBJECTIVES IN Book ${bookNum} (${filename}) ===================`);
  try {
    const buf = fs.readFileSync(filename);
    const p = new pdf.PDFParse({ data: buf });
    const textObj = await p.getText();
    const text = textObj.text || '';
    const lines = text.split('\n');

    let currentChapter = '';
    
    // We want to find which chapters mention which objectives, e.g. "Obiettivo 1.1" or "Objective 1.1" or similar pattern at the beginning or in headers
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.match(/^Capitolo\s+(\d+)/i)) {
        currentChapter = line.trim() + ": " + (lines[i+1] ? lines[i+1].trim() : '');
      }
      
      // Look for indicators like "Obiettivi del capitolo" or "Obiettivi d'esame" or similar
      // or "1.1", "1.2" with "Obiettivo"
      const match = line.match(/(?:Obiettivo|Obiettivi|Objective|Objectives|OBJ|Syllabus)\s+([1-5]\.[1-9])/i);
      if (match && currentChapter) {
        console.log(`[${currentChapter}] mentions Objective: ${match[1]} in line: "${line}"`);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await scanObjectives('CompTIA Security_1.pdf', 1);
  await scanObjectives('CompTIA Security_2.pdf', 2);
}
main();
