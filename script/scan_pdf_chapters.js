const fs = require('fs');
const pdf = require('pdf-parse');

async function scanPDF(filename) {
  console.log(`\n=================== SCANNING ${filename} ===================`);
  try {
    const buf = fs.readFileSync(filename);
    const p = new pdf.PDFParse({ data: buf });
    const textObj = await p.getText();
    const text = textObj.text || '';
    const lines = text.split('\n');
    console.log(`Total lines: ${lines.length}`);
    
    // Find all occurrences of "Capitolo" or "Chapter"
    let capCount = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^Capitolo\s+\d+/i) || line.match(/^Chapter\s+\d+/i) || line.match(/Indice\s+Generale/i) || line.match(/^Sommario/i)) {
        console.log(`Line ${i + 1}: ${line}`);
        // Print next 3 lines
        for (let j = 1; j <= 3; j++) {
          if (lines[i + j]) console.log(`  + ${lines[i + j].trim()}`);
        }
        capCount++;
      }
    }
    console.log(`Total chapters/index signals found: ${capCount}`);
  } catch(e) {
    console.error(`Error reading ${filename}:`, e.message);
  }
}

async function run() {
  await scanPDF('CompTIA Security_1.pdf');
  await scanPDF('CompTIA Security_2.pdf');
}

run();
