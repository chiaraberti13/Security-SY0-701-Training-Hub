const fs = require('fs');

function manualParse() {
  const content = fs.readFileSync('quiz_database.xml', 'utf8');
  const questions = [];
  
  // Quick regex based extractor for <question>...</question>
  const qRegex = /<question id="([^"]+)" objective="([^"]+)">([\s\S]*?)<\/question>/g;
  let match;
  while ((match = qRegex.exec(content)) !== null) {
    const qId = match[1];
    const objective = match[2];
    const inner = match[3];
    
    // Extract text
    const textMatch = /<text>([\s\S]*?)<\/text>/.exec(inner);
    const text = textMatch ? textMatch[1].trim() : '';
    
    // Extract options
    const optRegex = /<option id="([^"]+)" correct="([^"]+)">([\s\S]*?)<\/option>/g;
    let optMatch;
    const options = [];
    while ((optMatch = optRegex.exec(inner)) !== null) {
      options.push({
        id: optMatch[1],
        correct: optMatch[2] === 'true',
        text: optMatch[3].trim()
      });
    }
    
    questions.push({ id: qId, objective, text, options });
  }
  
  console.log(`Total parsed questions: ${questions.length}`);
  
  // Find questions with more than one correct option
  const multiCorrect = questions.filter(q => q.options.filter(o => o.correct).length > 1);
  console.log(`\nQuestions with MULTIPLE correct options (${multiCorrect.length}):`);
  multiCorrect.forEach(q => {
    console.log(`- ${q.id} (Obj ${q.objective}): ${q.options.filter(o => o.correct).length} correct answers out of ${q.options.length} options.`);
    console.log(`  options: ${q.options.map(o => `${o.id}(${o.correct ? '✔' : '✘'}): ${o.text}`).join(' | ')}`);
  });

  // Find questions with more than 4 options
  const moreThanFour = questions.filter(q => q.options.length > 4);
  console.log(`\nQuestions with MORE THAN 4 options (${moreThanFour.length}):`);
  moreThanFour.forEach(q => {
    const corrects = q.options.filter(o => o.correct).map(o => o.id);
    console.log(`\n- ${q.id} (Obj ${q.objective}): ${q.options.length} options. Corrects: ${corrects.join(', ')}`);
    console.log(`  Text: "${q.text}"`);
    console.log(`  Options:`);
    q.options.forEach(o => {
      console.log(`    ${o.id} (${o.correct ? '✔' : ' '}): ${o.text}`);
    });
  });
}

manualParse();
