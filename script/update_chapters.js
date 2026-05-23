const fs = require('fs');
const path = require('path');

const chFolder = path.join(__dirname, '..', 'chapters');
const files = fs.readdirSync(chFolder).filter(f => f.endsWith('.html'));

const map = {
  'obj1_1': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 1: Il professionista della sicurezza, oggi',
  'obj1_2': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 1: Il professionista della sicurezza, oggi &amp; Capitolo 9: Resilienza e sicurezza fisica',
  'obj1_3': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 16: Governance e conformità della sicurezza',
  'obj1_4': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 7: Crittografia e PKI',
  'obj2_1': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 2: Panorama delle minacce alla sicurezza',
  'obj2_2': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 4: Ingegneria sociale e attacchi alle password &amp; CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 13: Sicurezza wireless e mobile',
  'obj2_3': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 3: Codice malevolo, Capitolo 5: Valutazione e test della sicurezza, &amp; Capitolo 6: Sicurezza delle applicazioni',
  'obj2_4': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 3: Codice malevolo',
  'obj2_5': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 11: Sicurezza degli endpoint',
  'obj3_1': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 10: Sicurezza del cloud e della virtualizzazione',
  'obj3_2': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 12: Sicurezza della rete &amp; Capitolo 13: Sicurezza wireless e mobile',
  'obj3_3': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 17: Gestione dei rischi e privacy',
  'obj3_4': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 9: Resilienza e sicurezza fisica',
  'obj4_1': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 6: Sicurezza delle applicazioni &amp; CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 11: Sicurezza degli endpoint &amp; Capitolo 13: Sicurezza wireless e mobile',
  'obj4_2': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 11: Sicurezza degli endpoint &amp; Capitolo 16: Governance e conformità della sicurezza',
  'obj4_3': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 5: Valutazione e test della sicurezza',
  'obj4_4': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 14: Monitoraggio e risposta agli incidenti',
  'obj4_5': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 12: Sicurezza della rete',
  'obj4_6': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 8: Gestione delle identità e degli accessi',
  'obj4_7': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 14: Monitoraggio e risposta agli incidenti',
  'obj4_8': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 14: Monitoraggio e risposta agli incidenti',
  'obj4_9': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 15: Analisi forense digitale',
  'obj5_1': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 16: Governance e conformità della sicurezza',
  'obj5_2': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 17: Gestione dei rischi e privacy',
  'obj5_3': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 17: Gestione dei rischi e privacy',
  'obj5_4': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 16: Governance e conformità della sicurezza &amp; Capitolo 17: Gestione dei rischi e privacy',
  'obj5_5': 'CompTIA Security_1.pdf (Libro 1) &rarr; Capitolo 5: Valutazione e test della sicurezza &amp; CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 16: Governance e conformità della sicurezza',
  'obj5_6': 'CompTIA Security_2.pdf (Libro 2) &rarr; Capitolo 16: Governance e conformità della sicurezza',
};

let count = 0;
files.forEach(file => {
  const match = file.match(/^obj\d_\d/);
  if (match) {
    const key = match[0];
    if (map[key]) {
      const filePath = path.join(chFolder, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // If already has manual-reference-line, skip
      if (content.includes('manual-reference-line')) {
        console.log(`Skipping ${file} - already has manual reference.`);
        return;
      }
      
      // Insert right after <div class="chapter-meta">
      const targetStr = '<div class="chapter-meta">';
      if (content.includes(targetStr)) {
        const replacementStr = `<div class="chapter-meta">\n  <p class="manual-reference-line"><span>📖</span> <strong>Riferimento Manuale:</strong> ${map[key]}</p>`;
        content = content.replace(targetStr, replacementStr);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} successfully.`);
        count++;
      } else {
        console.log(`Error: <div class="chapter-meta"> not found in ${file}`);
      }
    }
  }
});

console.log(`Total chapters updated: ${count}`);
