const fs = require('fs');
const path = require('path');

const chFolder = path.join(__dirname, '..', 'chapters');
const files = fs.readdirSync(chFolder).filter(f => f.startsWith('obj5_'));

files.forEach(file => {
  const filePath = path.join(chFolder, file);
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=================== FILE: ${file} ===================`);
  
  // Extract Title from <title>
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'N/A'}`);
  
  // Extract headings (<h2>, <h3>)
  const h2Regex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>/g;
  let match;
  const headings = [];
  while ((match = h2Regex.exec(content)) !== null) {
    headings.push(match[1].replace(/<[^>]+>/g, '').trim());
  }
  
  console.log('Headings:');
  headings.slice(0, 30).forEach(h => console.log(`  - ${h}`));
  if (headings.length > 30) {
    console.log(`  ... and ${headings.length - 30} more headings`);
  }
});
