const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

let count = 0;
data.forEach(q => {
    if (q.text.it === q.text.en && q.text.en.length > 20) {
        console.log(`Question ID: ${q.id}`);
        console.log(`English: ${q.text.en}`);
        console.log(`Italian: ${q.text.it}`);
        console.log("--------------------");
        count++;
    }
    
    q.options.forEach(opt => {
        if (opt.text.it === opt.text.en && opt.text.en.length > 20) {
             const ignoreTerms = ["WPA3", "AES", "FIM", "SIEM", "IDS", "IPS", "OAuth", "Common Vulnerabilities and Exposures"];
             const isTechnical = ignoreTerms.some(term => opt.text.en.includes(term));
             if (!isTechnical) {
                console.log(`Option ID: ${opt.id} in ${q.id}`);
                console.log(`English: ${opt.text.en}`);
                console.log(`Italian: ${opt.text.it}`);
                console.log("--------------------");
                count++;
             }
        }
    });
});

console.log(`Found ${count} suspicious matches.`);
