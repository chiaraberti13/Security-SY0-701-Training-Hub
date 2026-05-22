const fs = require('fs');
const lines = fs.readFileSync('script/objectives_extracted.txt', 'utf8').split('\n');
console.log(lines.slice(491, 814).join('\n'));
