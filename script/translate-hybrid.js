const fs = require('fs');
const path = require('path');

const CHAPTERS_DIR = path.join(__dirname, '../chapters');
const EN_CHAPTERS_DIR = path.join(CHAPTERS_DIR, 'en');

if (!fs.existsSync(EN_CHAPTERS_DIR)) {
  fs.mkdirSync(EN_CHAPTERS_DIR, { recursive: true });
}

// Map of common interface and general guide terms in Italian with high-quality CompTIA-specific English technical terms
const GLOSSARY = [
  // Breadcrumb & Headings
  { search: 'Indice generale', replace: 'General Index' },
  { search: 'Dominio 1 — General Security Concepts', replace: 'Domain 1 — General Security Concepts' },
  { search: 'Dominio 1 — Concetti generali di sicurezza', replace: 'Domain 1 — General Security Concepts' },
  { search: 'Dominio 2 — Threats, Vulnerabilities, and Mitigations', replace: 'Domain 2 — Threats, Vulnerabilities, and Mitigations' },
  { search: 'Dominio 2 — Minacce, vulnerabilità e mitigazioni', replace: 'Domain 2 — Threats, Vulnerabilities, and Mitigations' },
  { search: 'Dominio 3 — Security Architecture', replace: 'Domain 3 — Security Architecture' },
  { search: 'Dominio 3 — Architettura di sicurezza', replace: 'Domain 3 — Security Architecture' },
  { search: 'Dominio 4 — Security Operations', replace: 'Domain 4 — Security Operations' },
  { search: 'Dominio 4 — Operazioni di sicurezza', replace: 'Domain 4 — Security Operations' },
  { search: 'Dominio 5 — Governance, risk, and compliance', replace: 'Domain 5 — Governance, Risk, and Compliance' },
  { search: 'Dominio 5 — Governance, rischio e conformità', replace: 'Domain 5 — Governance, Risk, and Compliance' },
  
  // Chapter Meta lines
  { search: '📖 Riferimento Manuale:', replace: '📖 Manual Reference:' },
  { search: '<strong>Riferimento Manuale:</strong>', replace: '<strong>Manual Reference:</strong>' },
  { search: 'Peso esame:', replace: 'Exam weight:' },
  { search: 'Obiettivo ufficiale (CompTIA):', replace: 'Official Objective (CompTIA):' },
  { search: 'Obiettivi coperti:', replace: 'Objectives covered:' },
  { search: 'Prerequisiti:', replace: 'Prerequisites:' },
  { search: 'Capitoli correlati:', replace: 'Related chapters:' },
  { search: 'Capitolo', replace: 'Chapter' },

  // General Chapter Navigation
  { search: '← Indice generale', replace: '← General Index' },
  { search: 'Quiz interattivo', replace: 'Interactive Quiz' },

  // Flashcards visual cues
  { search: 'Clicca per girare', replace: 'Click to flip' },
  { search: 'Esempio multi-asse:', replace: 'Multi-axis example:' },

  // Table Columns & UI Elements
  { search: '<thead>\n              <tr>\n                <th>Pilastro</th>', replace: '<thead>\n              <tr>\n                <th>Security Pillar</th>' },
  { search: '<th>Definizione</th>', replace: '<th>Definition</th>' },
  { search: '<th>Minaccia tipica</th>', replace: '<th>Typical Threat</th>' },
  { search: '<th>Controllo esemplare</th>', replace: '<th>Example Control</th>' },
  { search: '<th>Categoria</th>', replace: '<th>Category</th>' },
  { search: '<th>Tipo</th>', replace: '<th>Type</th>' },
  { search: '<th>Descrizione</th>', replace: '<th>Description</th>' },
  { search: '<th>Esempio pratico</th>', replace: '<th>Practical Example</th>' },
  { search: '<th>Obiettivo</th>', replace: '<th>Objective</th>' },
  { search: '<th>Concept</th>', replace: '<th>Concept</th>' },
  { search: '<th>Impatto</th>', replace: '<th>Impact</th>' },

  // Chapter specific terminology (preserving technical accuracy)
  { search: 'Riservatezza', replace: 'Confidentiality' },
  { search: 'Integrità', replace: 'Integrity' },
  { search: 'Disponibilità', replace: 'Availability' },
  { search: 'Non ripudio', replace: 'Non-repudiation' },
  { search: 'Autenticazione', replace: 'Authentication' },
  { search: 'Autorizzazione', replace: 'Authorization' },
  { search: 'Controlli di Sicurezza', replace: 'Security Controls' },
  { search: 'Controlli di sicurezza', replace: 'Security controls' },
  { search: 'Attori delle minacce', replace: 'Threat actors' },
  { search: 'Gestione del cambiamento', replace: 'Change Management' },
  { search: 'Crittografia avanzata', replace: 'Advanced Encryption' },
  { search: 'Sicurezza fisica', replace: 'Physical Security' },
  { search: 'Tecniche di mitigazione', replace: 'Mitigation techniques' },

  // Explanations & dynamic quiz UI labels
  { search: 'Verifica della risposta...', replace: 'Verifying answer...' },
  { search: 'Seleziona un\'opzione', replace: 'Select an option' },
  { search: 'Invia risposta', replace: 'Submit answer' },
  { search: 'Spiegazione:', replace: 'Explanation:' },
  { search: 'Risposta corretta:', replace: 'Correct Answer:' },
  { search: 'Risposta errata', replace: 'Incorrect Answer' },
];

function translateChapterProgrammatically(srcPath, destPath, filename) {
  let content = fs.readFileSync(srcPath, 'utf8');

  // Replace lang tags
  content = content
    .replace(/<html lang="it" data-lang="it">/gi, '<html lang="en" data-lang="en">')
    .replace(/data-lang="it"/gi, 'data-lang="en"')
    .replace(/lang="it"/gi, 'lang="en"');

  // Replace relative URLs to redirect from standard Italian subfolder to English chapters correctly
  content = content.replace(/href="obj([1-5])_([1-9])_([^"]+)"/g, 'href="obj$1_$2_$3"');

  // Replace phrases using the Glossary
  GLOSSARY.forEach(({ search, replace }) => {
    content = content.split(search).join(replace);
  });

  // Specifically translate the headers and visual cues programmatically using regex
  // Translate chapter head block
  content = content.replace(/<h1>OBJ ([1-5])\.([1-9]) — ([\s\S]+?)<\/h1>/gi, function(match, dom, sub, title) {
    // Keep standard format but make sure we map Italian titles nicely
    let engTitle = title.trim();
    // Simple custom mapping for the main titles in English
    const titleMaps = {
      "Controlli di Sicurezza (Security Controls)": "Security Controls",
      "Controlli di sicurezza (Security Controls)": "Security Controls",
      "Concetti Fondamentali di Sicurezza (Fundamental Security Concepts)": "Fundamental Security Concepts",
      "Concetti fondamentali di sicurezza (Fundamental Security Concepts)": "Fundamental Security Concepts",
      "Change Management &amp; Baselines (Change Management)": "Change Management &amp; Baselines",
      "Soluzioni Crittografiche (Cryptographic Solutions)": "Cryptographic Solutions",
      "Threat Actors e Motivazioni (Threat Actors)": "Threat Actors and Motivations",
      "Tipi di minacce e vettori": "Threat Types and Vectors",
      "Tipi di vulnerabilità": "Vulnerability Types",
      "Indicatori di attività malevola": "Indicators of Compromise and Malicious Activity",
      "Tecniche di mitigazione": "Mitigation Techniques",
      "Modelli architetturali": "Architectural Models",
      "Infrastruttura enterprise sicura": "Secure Enterprise Infrastructure",
      "Proteggere i dati": "Protecting Data",
      "Resilienza e recovery": "Resilience and Recovery",
      "Gestione degli asset (Hardware, software e dati)": "Asset Management (Hardware, Software, and Data)",
      "Gestione delle vulnerabilità (Vulnerability Management)": "Vulnerability Management",
      "Allarmistica e monitoraggio di sicurezza (Alerting and Monitoring)": "Alerting and Monitoring",
      "Configurare le capacità aziendali di sicurezza (Modify Enterprise Capabilities)": "Modify Enterprise Security Capabilities",
      "Sicurezza delle identità e degli accessi (Identity and Access)": "Identity and Access Security",
      "Automazione e orchestrazione (Automation and Orchestration)": "Automation and Orchestration",
      "Attività di Incident Response (Incident Response Activities)": "Incident Response Activities",
      "Fonti di dati per le investigazioni (Data Sources)": "Investigation Data Sources",
      "Principi di Governance della sicurezza": "Security Governance Principles",
      "Gestione dei rischi aziendali (Risk Management)": "Enterprise Risk Management",
      "Gestione di terze parti (Third-Party Security)": "Third-Party Security Management",
      "Concetti di conformità e standard (Compliance and Standards)": "Compliance and Standards Concepts",
      "Valutazioni di efficacia e audit di sicurezza": "Security Effectiveness Assessments and Audits",
      "Cultura e consapevolezza della sicurezza (Security Awareness)": "Security Culture and Awareness"
    };
    if (titleMaps[engTitle]) {
      engTitle = titleMaps[engTitle];
    }
    return `<h1>OBJ ${dom}.${sub} — ${engTitle}</h1>`;
  });

  // Programmatically translate flashcard titles and common Italian explain sentences
  content = content
    .replace(/<span>La telecamera a circuito chiuso è classificata come:<\/span>/g, '<span>The closed-circuit television (CCTV) is classified as:</span>')
    .replace(/basato su hardware\/software automatici/g, 'based on automated hardware/software')
    .replace(/guidato da procedure quotidiane eseguite da persone/g, 'guided by daily procedures executed by people')
    .replace(/governance, policy e risk assessment/g, 'governance, policy, and risk assessment')
    .replace(/protezione tangibile dell'ambiente/g, 'tangible protection of the physical environment')
    .replace(/blocca fisicamente o logicamente l'azione/g, 'physically or logically blocks the action')
    .replace(/scoraggia psicologicamente dal compiere l'azione/g, 'psychologically discourages performing the action')
    .replace(/rileva e registra un incidente/g, 'detects and logs an incident')
    .replace(/ripristina lo stato precedente/g, 'restores the previous state')
    .replace(/rimedia provvisoriamente a un rischio/g, 'temporarily mitigates a risk')
    .replace(/sancisce regole e prescrizioni/g, 'establishes guidelines and regulations');

  fs.writeFileSync(destPath, content, 'utf8');
  console.log(`[HYBRID SAVED] ${filename}`);
}

function run() {
  console.log('Starting programmatic hybrid translation for all 28 chapters...');
  
  const files = fs.readdirSync(CHAPTERS_DIR);
  const htmlChapters = files.filter(f => f.endsWith('.html') && f.startsWith('obj')).sort();
  
  htmlChapters.forEach(file => {
    const srcPath = path.join(CHAPTERS_DIR, file);
    const destPath = path.join(EN_CHAPTERS_DIR, file);
    translateChapterProgrammatically(srcPath, destPath, file);
  });
  
  console.log('Hybrid chapters generation successful!');
}

run();
