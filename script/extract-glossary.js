const fs = require('fs');
const path = require('path');

function extract() {
  const glossarioPath = path.join(__dirname, '..', 'glossario.html');
  const outputPath = path.join(__dirname, 'glossario_db.json');
  const jsOutputPath = path.join(__dirname, 'glossario_db.js');
  
  // Helper to safely write the JS file from standard JSON array
  function writeJsDatabase(database) {
    try {
      fs.writeFileSync(jsOutputPath, `window.GlossarioDatabase = ${JSON.stringify(database, null, 2)};\n`, 'utf8');
      console.log(`Successfully generated static JS database with ${database.length} terms to ${jsOutputPath}`);
    } catch (err) {
      console.error('Error writing glossario_db.js:', err);
    }
  }

  if (!fs.existsSync(glossarioPath)) {
    console.error(`Error: ${glossarioPath} not found`);
    process.exit(1);
  }

  const content = fs.readFileSync(glossarioPath, 'utf8');
  
  const startPattern = 'const database = [';
  const startIdx = content.indexOf(startPattern);
  if (startIdx === -1) {
    if (fs.existsSync(outputPath)) {
      console.log('Glossary database already extracted successfully. Ensuring glossario_db.js exists and is up-to-date.');
      try {
        const database = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
        writeJsDatabase(database);
      } catch (err) {
        console.error('Error recovering database from existing JSON to write JS:', err);
      }
      process.exit(0);
    }
    // Fallback: Recover from search-data.json if present
    const searchDataPath = path.join(__dirname, 'search-data.json');
    if (fs.existsSync(searchDataPath)) {
      try {
        const searchData = JSON.parse(fs.readFileSync(searchDataPath, 'utf8'));
        if (searchData && Array.isArray(searchData.glossary)) {
          fs.writeFileSync(outputPath, JSON.stringify(searchData.glossary, null, 2), 'utf8');
          console.log(`Successfully recovered ${searchData.glossary.length} glossary terms from search-data.json`);
          writeJsDatabase(searchData.glossary);
          process.exit(0);
        }
      } catch (err) {
        console.error('Error recovering glossary from search-data.json:', err);
      }
    }
    console.error('Error: Could not find start pattern in glossario.html');
    process.exit(1);
  }

  // Find the end pattern. We search for the closing ]; followed by DOM element selections
  // We'll extract from startPattern + length of 'const database = ' so that we get a valid JS array '[' to ']'
  const dbStartIdx = startIdx + 'const database = '.length;
  
  // Let's find where the array ends.
  // The array ends with '];' and is followed by '// DOM element selections'
  // To be safe against platform line-end variations, we can search for '// DOM element selections'
  const domSelectionsPattern = '// DOM element selections';
  const domIdx = content.indexOf(domSelectionsPattern);
  if (domIdx === -1) {
    console.error('Error: Could not find DOM selections pattern');
    process.exit(1);
  }

  // Now back off to find the closing bracket ']' before that index
  const subForEnd = content.substring(dbStartIdx, domIdx);
  const lastBracketIdx = subForEnd.lastIndexOf(']');
  if (lastBracketIdx === -1) {
    console.error('Error: Could not find closing bracket');
    process.exit(1);
  }

  const arrayStr = subForEnd.substring(0, lastBracketIdx + 1);
  
  try {
    // Safely evaluate the array block using Function in a Node context
    const parseArray = new Function(`return ${arrayStr};`);
    const database = parseArray();
    
    if (!Array.isArray(database)) {
      throw new Error('Parsed result is not an array');
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(database, null, 2), 'utf8');
    console.log(`Successfully extracted ${database.length} terms to ${outputPath}`);
    writeJsDatabase(database);
  } catch (err) {
    console.error('Error parsing array string:', err);
    process.exit(1);
  }
}

extract();
