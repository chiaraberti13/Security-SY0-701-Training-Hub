const fs = require('fs');

const content = fs.readFileSync('CompTIA_Security_2.txt', 'utf8');

// We want to find pages related to Governance, Risk Management, etc.
// Let's search for "--- PAGE 188 ---" to "--- PAGE 230 ---"
const startPage = "--- PAGE 188 ---";
const endPage = "--- PAGE 220 ---";

const startIdx = content.indexOf(startPage);
const endIdx = content.indexOf(endPage);

if (startIdx !== -1 && endIdx !== -1) {
  console.log(`Extracted pages 188 to 220:`);
  fs.writeFileSync('extracted_pages_188_220.txt', content.substring(startIdx, endIdx), 'utf8');
  console.log("Saved to extracted_pages_188_220.txt");
} else {
  console.log("Could not find start or end page.");
}
