const fs = require('fs');
const pdf = require('pdf-parse');

async function searchDNS() {
  console.log('Searching DNS, sinkhole context in Book 2...');
  try {
    const buf2 = fs.readFileSync('CompTIA Security_2.pdf');
    const p2 = new pdf.PDFParse({ data: buf2 });
    const textObj2 = await p2.getText();
    const text2 = textObj2.text || '';
    
    const lines = text2.split('\n');
    const matches = [];
    lines.forEach((line, idx) => {
      const lc = line.toLowerCase();
      if (lc.includes('dns') || lc.includes('reindirizz') || lc.includes('buco') || lc.includes('black')) {
        matches.push({ lineNum: idx + 1, text: line.trim() });
      }
    });
    
    console.log(`Matched DNS-related lines: ${matches.length}`);
    console.log('Sample matched lines:');
    matches.slice(0, 30).forEach(m => {
      console.log(`[Line ${m.lineNum}]: ${m.text}`);
    });
  } catch(e) {
    console.error(e);
  }
}
searchDNS();
