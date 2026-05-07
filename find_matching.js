
const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

const manyOptions = questions.filter(q => q.options.length >= 6);
console.log('Total questions with 6+ options:', manyOptions.length);

manyOptions.slice(0, 10).forEach(q => {
  console.log(`ID: ${q.id}, Options: ${q.options.length}, Correct: ${q.options.filter(o => o.correct).length}`);
});

const matchingCandidates = manyOptions.filter(q => q.options.every(o => o.correct) || q.options.filter(o => o.correct).length > 2);
console.log('\nMatching Candidates (more than 2 correct or all correct):');
matchingCandidates.slice(0, 10).forEach(q => {
  console.log(`ID: ${q.id}, Options: ${q.options.length}, Correct: ${q.options.filter(o => o.correct).length}`);
  console.log('Text EN:', q.text.en);
  q.options.forEach(o => console.log(`  - ${o.text.en}`));
});
