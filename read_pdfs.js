const fs = require('fs');
const { PdfReader } = require('pdfreader');

function extractPdfToTxt(filename, outfilename) {
  return new Promise((resolve, reject) => {
    console.log(`Extracting ${filename} to ${outfilename}...`);
    const paragraphs = [];
    let currentPageText = [];
    
    new PdfReader().parseFileItems(filename, (err, item) => {
      if (err) {
        reject(err);
      } else if (!item) {
        // End of file
        if (currentPageText.length > 0) {
          paragraphs.push(currentPageText.join(' '));
        }
        fs.writeFileSync(outfilename, paragraphs.join('\n\n'), 'utf8');
        console.log(`Finished extracting ${filename}. Total characters: ${paragraphs.join('\n\n').length}`);
        resolve();
      } else if (item.page) {
        // New page
        if (currentPageText.length > 0) {
          paragraphs.push(`--- PAGE ${item.page - 1} ---`);
          paragraphs.push(currentPageText.join(' '));
          currentPageText = [];
        }
      } else if (item.text) {
        currentPageText.push(item.text);
      }
    });
  });
}

async function run() {
  try {
    await extractPdfToTxt('CompTIA Security_1.pdf', 'CompTIA_Security_1.txt');
    await extractPdfToTxt('CompTIA Security_2.pdf', 'CompTIA_Security_2.txt');
    console.log("Extraction complete!");
  } catch (err) {
    console.error("Error during extraction:", err);
  }
}

run();
