const fs = require('fs');

const syllabusObj5_1 = [
  "Acceptable use policy", "AUP", "Information security policies", "Business continuity", "Disaster recovery", "Incident response", "Software development lifecycle", "SDLC", "Change management",
  "Password standard", "Access control standard", "Physical security standard", "Encryption standard",
  "Onboarding", "Offboarding", "Playbooks",
  "Regulatory", "Legal", "Industry", "Local/regional", "National", "Global",
  "Monitoring and revision",
  "Boards", "Committees", "Government entities", "Centralized", "Decentralized",
  "Owners", "Controllers", "Processors", "Custodians", "Stewards", "Data custodians", "Data stewards"
];

const syllabusObj5_2 = [
  "Risk identification", "Risk assessment", "Ad hoc", "Recurring", "One-time", "Continuous",
  "Qualitative", "Quantitative", "Single loss expectancy", "SLE", "Annualized loss expectancy", "ALE", "Annualized rate of occurrence", "ARO", "Probability", "Likelihood", "Exposure factor", "EF", "Impact",
  "Risk register", "Key risk indicators", "KRI", "Risk owners", "Risk threshold",
  "Risk tolerance", "Risk appetite", "Expansionary", "Conservative", "Neutral",
  "Transfer", "Accept", "Exemption", "Exception", "Avoid", "Mitigate",
  "Risk reporting", "Business impact analysis", "BIA", "Recovery time objective", "RTO", "Recovery point objective", "RPO", "Mean time to repair", "MTTR", "Mean time between failures", "MTBF"
];

const syllabusObj5_3 = [
  "Vendor assessment", "Penetration testing", "Right-to-audit", "Evidence of internal audits", "Independent assessments", "Supply chain analysis",
  "Vendor selection", "Due diligence", "Conflict of interest",
  "Service-level agreement", "SLA", "Memorandum of agreement", "MOA", "Memorandum of understanding", "MOU", "Master service agreement", "MSA", "Work order", "WO", "Statement of work", "SOW", "Non-disclosure agreement", "NDA", "Business partners agreement", "BPA",
  "Vendor monitoring", "Questionnaires", "Rules of engagement"
];

function checkPage(filename, terms) {
  const path = 'chapters/' + filename;
  if (!fs.existsSync(path)) {
    console.log(`❌ File not found: ${path}`);
    return;
  }
  const content = fs.readFileSync(path, 'utf8');
  const missing = [];
  const found = [];
  for (const term of terms) {
    const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    if (regex.test(content)) {
      found.push(term);
    } else {
      missing.push(term);
    }
  }
  console.log(`=== Chapter: ${filename} ===`);
  console.log(`Found (${found.length}/${terms.length})`);
  console.log(`Missing details:`, missing);
  console.log("");
}

console.log("Checking Coverage in Chapters:\n");
checkPage("obj5_1_governance.html", syllabusObj5_1);
checkPage("obj5_2_risk_management.html", syllabusObj5_2);
checkPage("obj5_3_third_party.html", syllabusObj5_3);

console.log("Checking Glossary Presence (glossario.html):\n");
const glossContent = fs.readFileSync('glossario.html', 'utf8');
const glossaryStatus = {
  "5.1": [],
  "5.2": [],
  "5.3": []
};

function checkGlossary(section, terms) {
  for (const term of terms) {
    const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Check if it appears as an acronym: "Term" or name: "Term" etc.
    const regex = new RegExp(escaped, 'i');
    if (regex.test(glossContent)) {
      // found
    } else {
      glossaryStatus[section].push(term);
    }
  }
}

checkGlossary("5.1", syllabusObj5_1);
checkGlossary("5.2", syllabusObj5_2);
checkGlossary("5.3", syllabusObj5_3);

console.log("Glossary missing/partially mentioned (by direct English search):");
console.log("5.1:", glossaryStatus["5.1"]);
console.log("5.2:", glossaryStatus["5.2"]);
console.log("5.3:", glossaryStatus["5.3"]);
