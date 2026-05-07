import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf-8'));
const suspicious = [];

data.forEach(q => {
  if (q.text && q.text.it) {
    if (q.text.it.match(/\b(of the|which of the|following|is the best|would be|should be|administrator|analyst|security)\b/i)) {
      // Check if it's just a common term or actual English sentence structure
      if (q.text.it.match(/\b(the|a|an|is|are|was|were|has|have|been|with|for|by)\b/i)) {
         suspicious.push({ id: q.id, type: 'question', it: q.text.it, en: q.text.en });
      }
    }
  }
  
  if (q.options) {
    q.options.forEach(o => {
      if (o.text && o.text.it) {
        if (o.text.it.match(/\b(of the|which of the|following|is the best|would be|should be)\b/i)) {
          suspicious.push({ id: q.id, optionId: o.id, type: 'option', it: o.text.it, en: o.text.en });
        }
      }
    });
  }

  if (q.explanation && q.explanation.it) {
    if (q.explanation.it.match(/\b(of the|following|is the best|would be|should be|because|theoretically)\b/i)) {
      suspicious.push({ id: q.id, type: 'explanation', it: q.explanation.it, en: q.explanation.en });
    }
  }
});

console.log(JSON.stringify(suspicious, null, 2));
