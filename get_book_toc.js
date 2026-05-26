const fs = require('fs');

const content = fs.readFileSync('CompTIA_Security_2.txt', 'utf8');
const lines = content.split('\n');

// Find lines containing "Capitolo " and print them with surrounding lines
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().match(/^Capitolo\s+\d+/i)) {
    console.log(`Line ${i+1}:`);
    for (let j = Math.max(0, i); j < Math.min(lines.length, i + 5); j++) {
      console.log(`  ${lines[j]}`);
    }
    console.log("------------------");
  }
}
