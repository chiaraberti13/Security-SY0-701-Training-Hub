const fs = require('fs');

const requestedTerms = [
  "Default Configurations",
  "Restricting Applications",
  "Trusted Operating Systems",
  "Updates",
  "Patches",
  "Patch Management",
  "Group Policies",
  "SELinux",
  "Data Encryption Levels",
  "Full-disk Encryption",
  "Partition Encryption",
  "File Encryption",
  "Volume Encryption",
  "Database Encryption",
  "Record Encryption",
  "Secure Baselines",
  "Hardening"
];

const glossarioContent = fs.readFileSync('glossario.html', 'utf8');

console.log("Checking exact requested list against glossario.html database...\n");

for (const term of requestedTerms) {
  // Let's search inside the acronym: "..." or name: "..." blocks
  // to make sure it is a top-level term
  const acronymRegex = new RegExp(`acronym:\\s*"${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}"`, 'i');
  const nameRegex = new RegExp(`name:\\s*"[^"]*${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}[^"]*"`, 'i');
  
  const hasAcronym = acronymRegex.test(glossarioContent);
  const hasName = nameRegex.test(glossarioContent);
  
  if (hasAcronym || hasName) {
    console.log(`✅ [FOUND] "${term}" is present!`);
  } else {
    console.log(`❌ [MISSING] "${term}" is NOT a primary term!`);
  }
}
