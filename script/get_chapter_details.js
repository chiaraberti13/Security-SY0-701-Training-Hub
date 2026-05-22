const fs = require('fs');
const pdf = require('pdf-parse');

async function getChapterDetails() {
  console.log('Extracting details for Chapters 16 and 17 in CompTIA Security_2.pdf...');
  try {
    const buf = fs.readFileSync('CompTIA Security_2.pdf');
    const p = new pdf.PDFParse({ data: buf });
    const textObj = await p.getText();
    const text = textObj.text || '';
    
    const lines = text.split('\n');
    let insideChapter16 = false;
    let insideChapter17 = false;
    
    console.log('\n--- Heading Scan Chapter 16 ---');
    let printedHeaderCount = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.match(/^Capitolo\s+16$/i)) {
        insideChapter16 = true;
        insideChapter17 = false;
        console.log(`[Line ${i+1}] START OF CAPITOLO 16`);
      } else if (line.match(/^Capitolo\s+17$/i)) {
        insideChapter16 = false;
        insideChapter17 = true;
        console.log(`[Line ${i+1}] START OF CAPITOLO 17`);
      }
      
      if (insideChapter16 && printedHeaderCount < 50) {
        // Print lines that look like main headings (uppercase or similar)
        if (line.match(/^[A-Z][A-Za-z\s’'“”,]{3,40}$/) || line.includes('Governance') || line.includes('Conformità') || line.includes('Audit')) {
          console.log(`  [Line ${i+1}]: ${line}`);
          printedHeaderCount++;
        }
      }
      
      if (insideChapter17 && printedHeaderCount < 100) {
        if (line.match(/^[A-Z][A-Za-z\s’'“”,]{3,40}$/) || line.includes('Rischio') || line.includes('Privacy') || line.includes('BIA') || line.includes('Fornitori')) {
          console.log(`  [Line ${i+1}]: ${line}`);
          printedHeaderCount++;
        }
      }
    }
  } catch(e) {
    console.error(e);
  }
}
getChapterDetails();
