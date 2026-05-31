/* global process, __dirname, require, module, setTimeout */
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('ERROR: GEMINI_API_KEY environment variable is not set.');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const CHAPTERS_DIR = path.join(__dirname, '../chapters');
const EN_CHAPTERS_DIR = path.join(CHAPTERS_DIR, 'en');

if (!fs.existsSync(EN_CHAPTERS_DIR)) {
  fs.mkdirSync(EN_CHAPTERS_DIR, { recursive: true });
}

async function translateFullHTML(content, filename) {
  const prompt = `You are a professional security and technical translator specializing in the CompTIA Security+ SY0-701 certification.
Your task is to translate the following HTML file from Italian to English.

CRITICAL INSTRUCTIONS:
1. Retain and preserve EXACTLY all HTML tags, structure, classes, IDs, styles, attributes, and href attributes. Do not modify, omit, or reorganize any HTML structure.
2. Translate only the visible text content (e.g., headings, table text, paragraphs, lists, card text, questions, options, and explanations).
3. Translate cybersecurity terms accurately according to official English CompTIA materials:
   - "Controlli di sicurezza" -> "Security controls"
   - "Minacce, vulnerabilità e mitigazioni" -> "Threats, vulnerabilities, and mitigations"
   - "Riservatezza, Integrità, Disponibilità" -> "Confidentiality, Integrity, Availability"
   - "Tecnicamente" / "Fisicamente" -> "Technical" / "Physical"
4. Update elements: Change '<html lang="it" data-lang="it">' to '<html lang="en" data-lang="en">'.
5. Update breadcrumbs and parent references appropriately.
6. The output must be raw translated HTML ONLY. Do NOT wrap the code in markdown formatting code fences like \`\`\`html or \`\`\`. Start directly with the translated HTML itself.

HTML file to translate (${filename}):
${content}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  let result = (response.text || '').trim();
  if (result.startsWith('```html')) result = result.slice(7);
  else if (result.startsWith('```')) result = result.slice(3);
  if (result.endsWith('```')) result = result.slice(0, -3);

  return result.trim();
}

// High-fidelity programmatic translation for index.html
function translateIndexProgrammatically() {
  console.log('Running programmatic index.html translation...');
  const srcPath = path.join(__dirname, '../index.html');
  const destPath = path.join(__dirname, '../index_en.html');
  let content = fs.readFileSync(srcPath, 'utf8');

  const replacements = [
    { search: 'html lang="it" data-lang="it"', replace: 'html lang="en" data-lang="en"' },
    { search: 'CompTIA Security+ SY0-701 — Guida interattiva', replace: 'CompTIA Security+ SY0-701 — Interactive Guide' },
    { search: '<span>Guida interattiva</span>', replace: '<span>Interactive Guide</span>' },
    { search: 'Guida di studio & Risorse d\'esame', replace: 'Study Guide & Exam Resources' },
    { search: 'Benvenuto nella piattaforma di studio interattiva per la certificazione CompTIA Security+ (SY0-701). Segui i moduli, esercitati con i quiz e tieni traccia dei tuoi progressi.', replace: 'Welcome to the interactive study guide platform for the CompTIA Security+ (SY0-701) certification. Study the modules, practice with quizzes, and keep track of your progress.' },
    { search: 'Salta al contenuto principale', replace: 'Skip to main content' },
    { search: 'Panoramica dell\'Esame Ufficiale', replace: 'Official Exam Overview' },

    // Tabs
    { search: 'Introduzione &amp; Info Esame', replace: 'Introduction &amp; Exam Info' },
    { search: 'Capitoli &amp; Progressi (28 Obiettivi)', replace: 'Chapters &amp; Progress (28 Objectives)' },

    // Intro View Text
    { search: '<h2>Benvenuto nel tuo Portale di Studio Interattivo!</h2>', replace: '<h2>Welcome to your Interactive Study Portal!</h2>' },
    { search: '<p>Questa applicazione è stata progettata per darti la migliore preparazione possibile all\'esame <strong>CompTIA Security+ SY0-701</strong>. Monitora i tuoi progressi di studio capitolo per capitolo, affronta simulazioni d\'esame realistiche e consulta istantaneamente il glossario terminologico integrato.</p>', replace: '<p>This application was designed to give you the best possible preparation for the <strong>CompTIA Security+ SY0-701</strong> exam. Track your study progress chapter by chapter, tackle realistic exam simulations, and instantly consult the integrated terminology glossary.</p>' },
    
    // Exam Stats Grid
    { search: '<h3>Panoramica dell\'Esame Ufficiale</h3>', replace: '<h3>Official Exam Overview</h3>' },
    { search: '<h4>90 Minuti</h4>', replace: '<h4>90 Minutes</h4>' },
    { search: '<p>Tempo totale a disposizione nella sessione d\'esame ufficiale.</p>', replace: '<p>Total time available in the official exam session.</p>' },
    { search: '<h4>Max 90 Domande</h4>', replace: '<h4>Max 90 Questions</h4>' },
    { search: '<p>Quesiti a scelta multipla e complessi di tipo Performance-Based (PBQs).</p>', replace: '<p>Multiple-choice and complex Performance-Based Questions (PBQs).</p>' },
    { search: '<h4>750 / 900</h4>', replace: '<h4>750 / 900</h4>' },
    { search: '<p>Il punteggio minimo richiesto per superare e conseguire la certificazione.</p>', replace: '<p>The minimum score required to pass and obtain the certification.</p>' },
    { search: '<h4>Rapporto di Peso</h4>', replace: '<h4>Weight Ratio</h4>' },
    { search: '<p>I 28 obiettivi d\'esame sono rigorosamente divisi in cinque ampi domini professionali.</p>', replace: '<p>The 28 exam objectives are strictly divided into five broad professional domains.</p>' },

    // Domains Grid
    { search: '<h3>Ripartizione dei 5 Domini d\'Esame</h3>', replace: '<h3>Breakdown of the 5 Exam Domains</h3>' },
    { search: '<strong>Concetti generali di sicurezza (12% del peso d\'esame)</strong>', replace: '<strong>General security concepts (12% of exam weight)</strong>' },
    { search: '<p>Comprensione approfondita dei controlli di sicurezza, triage del rischio e architetture base guidate dal cambiamento.</p>', replace: '<p>In-depth understanding of security controls, risk triage, and baseline change-driven architectures.</p>' },
    
    { search: '<strong>Minacce, vulnerabilità e mitigazioni (22% del peso d\'esame)</strong>', replace: '<strong>Threats, vulnerabilities, and mitigations (22% of exam weight)</strong>' },
    { search: '<p>Profili di hacker (Threat Actors), tipologie di malware strutturati e metodologie preventive di cyber-indurimento.</p>', replace: '<p>Hacker profiles (Threat Actors), structured malware types, and proactive cyber-hardening methodologies.</p>' },
    
    { search: '<strong>Architettura di sicurezza (18% del peso d\'esame)</strong>', replace: '<strong>Security architecture (18% of exam weight)</strong>' },
    { search: '<p>Standard Zero Trust, modelli cloud aziendali, crittografia avanzata e strategie di Disaster Recovery resilienti.</p>', replace: '<p>Zero Trust principles, enterprise cloud models, advanced encryption, and resilient Disaster Recovery strategies.</p>' },
    
    { search: '<strong>Operazioni di sicurezza (28% del peso d\'esame)</strong>', replace: '<strong>Security operations (28% of exam weight)</strong>' },
    { search: '<p>Gestione continuativa degli asset, monitoraggio di rete, Incident Response di emergenza e audit sui log applicativi.</p>', replace: '<p>Ongoing asset management, network monitoring, emergency Incident Response, and application log audits.</p>' },
    
    { search: '<strong>Governance, rischio e conformità (20% del peso d\'esame)</strong>', replace: '<strong>Governance, risk, and compliance (20% of exam weight)</strong>' },
    { search: '<p>Quadro legislativo della privacy (GDPR, PCI-DSS, HIPAA), risk assessment continuo e monitoraggio contrattuale dei fornitori.</p>', replace: '<p>Privacy regulatory frameworks (GDPR, PCI-DSS, HIPAA), continuous risk assessment, and vendor contract monitoring.</p>' },

    // Tips and Actions
    { search: 'Come sfruttare gli strumenti integrati', replace: 'How to utilize the integrated tools' },
    { search: '<strong>Usa la Checklist dei Capitoli per guidare lo studio</strong>', replace: '<strong>Use the Chapters Checklist to direct your study</strong>' },
    { search: '<p>Visita il tab "Capitoli & Progressi" per visualizzare tutte le schede dei domini. Studia i dettagli e spunta i capitoli contrassegnandoli come completati: i tuoi progressi complessivi e dei singoli domini verranno calcolati e salvati in tempo reale.</p>', replace: '<p>Visit the "Chapters & Progress" tab to view all domain sections. Study the details and check off chapters as completed: your overall and domain-specific progress will be calculated and saved in real time.</p>' },
    { search: '<strong>Esegui i Quiz sul Simulatore Interattivo</strong>', replace: '<strong>Take Quizzes on the Interactive Simulator</strong>' },
    { search: '<p>Accedi a quiz approfonditi per ciascun capitolo d\'esame o visita il tab <strong>"Quiz"</strong> dal menù principale per simulare quesiti reali con risposte ragionate e feedback immediato.</p>', replace: '<p>Access in-depth quizzes for each exam chapter or visit the <strong>"Quiz"</strong> tab from the main menu to simulate real questions with reasoned answers and immediate feedback.</p>' },
    { search: '<strong>Risolvi l\'ostacolo degli Acronimi con il Glossario</strong>', replace: '<strong>Overcome the Acronym Obstacle with the Glossary</strong>' },
    { search: '<p>Accedi ad una libreria formidabile dal tab <strong>"Glossario"</strong> del menù complessivo d\'applicazione. Utilizza la Modalità Studio "Flashcard" opzionale per nascondere le definizioni e allenare rapidamente la memoria visiva degli obiettivi.</p>', replace: '<p>Access an incredible library from the <strong>"Glossary"</strong> tab in the main application menu. Use the optional "Flashcards" Study Mode to hide definitions and rapidly train your objective memory.</p>' },
    { search: 'Inizia lo Studio (Sfoglia i Capitoli)', replace: 'Start Studying (Browse Chapters)' },
    { search: 'Simulatore d\'Esame (Quiz)', replace: 'Exam Simulator (Quizzes)' },
    { search: 'Dizionario &amp; Flashcard (Glossario)', replace: 'Dictionary &amp; Flashcards (Glossary)' },

    // Chapters Progress Panel
    { search: '<strong>Progressi di studio</strong>', replace: '<strong>Study progress</strong>' },
    { search: 'capitoli completati', replace: 'chapters completed' },
    { search: 'I progressi vengono salvati nel browser.', replace: 'Progress is saved automatically in your browser.' },
    { search: 'Azzera progressi', replace: 'Reset progress' },

    // Domains
    { search: 'Dominio 1 — Concetti generali di sicurezza', replace: 'Domain 1 — General Security Concepts' },
    { search: 'Dominio 2 — Minacce, vulnerabilità e mitigazioni', replace: 'Domain 2 — Threats, Vulnerabilities, and Mitigations' },
    { search: 'Dominio 3 — Architettura di sicurezza', replace: 'Domain 3 — Security Architecture' },
    { search: 'Dominio 4 — Operazioni di sicurezza', replace: 'Domain 4 — Security Operations' },
    { search: 'Dominio 5 — Governance, rischio e conformità', replace: 'Domain 5 — Governance, Risk, and Compliance' },
    
    // Domain summaries
    { search: '4 capitoli disponibili', replace: '4 chapters available' },
    { search: '5 capitoli disponibili', replace: '5 chapters available' },
    { search: '9 capitoli disponibili', replace: '9 chapters available' },
    { search: '6 capitoli disponibili', replace: '6 chapters available' },
    { search: 'domande', replace: 'questions' },
    { search: 'Completato', replace: 'Completed' },
    { search: 'Apri capitolo', replace: 'Open chapter' },

    // Chapter Titles replacements inside index list
    { search: 'OBJ 1.1 — Controlli di sicurezza', replace: 'OBJ 1.1 — Security controls' },
    { search: 'OBJ 1.2 — Concetti fondamentali', replace: 'OBJ 1.2 — Fundamental concepts' },
    { search: 'OBJ 1.3 — Change Management', replace: 'OBJ 1.3 — Change Management' },
    { search: 'OBJ 1.4 — Soluzioni crittografiche', replace: 'OBJ 1.4 — Cryptographical solutions' },
    
    { search: 'OBJ 2.1 — Threat Actors e Motivazioni', replace: 'OBJ 2.1 — Threat Actors and Motivations' },
    { search: 'OBJ 2.2 — Tipi di minacce e vettori', replace: 'OBJ 2.2 — Threat types and vectors' },
    { search: 'OBJ 2.3 — Tipi di vulnerabilità', replace: 'OBJ 2.3 — Vulnerability types' },
    { search: 'OBJ 2.4 — Indicatori di attività malevola', replace: 'OBJ 2.4 — Malicious activity indicators' },
    { search: 'OBJ 2.5 — Tecniche di mitigazione', replace: 'OBJ 2.5 — Mitigation techniques' },
    
    { search: 'OBJ 3.1 — Modelli architetturali', replace: 'OBJ 3.1 — Architectural models' },
    { search: 'OBJ 3.2 — Infrastruttura enterprise sicura', replace: 'OBJ 3.2 — Secure enterprise infrastructure' },
    { search: 'OBJ 3.3 — Proteggere i dati', replace: 'OBJ 3.3 — Protecting data' },
    { search: 'OBJ 3.4 — Resilienza e recovery', replace: 'OBJ 3.4 — Resilience and recovery' },
    
    { search: 'OBJ 4.1 — Sicurezza sulle risorse di calcolo', replace: 'OBJ 4.1 — Security on computing resources' },
    { search: 'OBJ 4.2 — Gestione degli asset (Hardware, software e dati)', replace: 'OBJ 4.2 — Asset management (Hardware, Software, and Data)' },
    { search: 'OBJ 4.3 — Gestione delle vulnerabilità (Vulnerability Management)', replace: 'OBJ 4.3 — Vulnerability Management' },
    { search: 'OBJ 4.4 — Allarmistica e monitoraggio di sicurezza (Alerting and Monitoring)', replace: 'OBJ 4.4 — Alerting and Monitoring' },
    { search: 'OBJ 4.5 — Configurare le capacità aziendali di sicurezza (Modify Enterprise Capabilities)', replace: 'OBJ 4.5 — Modify Enterprise Security Capabilities' },
    { search: 'OBJ 4.6 — Sicurezza delle identità e degli accessi (Identity and Access)', replace: 'OBJ 4.6 — Identity and Access Security' },
    { search: 'OBJ 4.7 — Automazione e orchestrazione (Automation and Orchestration)', replace: 'OBJ 4.7 — Automation and Orchestration' },
    { search: 'OBJ 4.8 — Attività di Incident Response (Incident Response Activities)', replace: 'OBJ 4.8 — Incident Response Activities' },
    { search: 'OBJ 4.9 — Fonti di dati per le investigazioni (Data Sources)', replace: 'OBJ 4.9 — Investigation Data Sources' },
    
    { search: 'OBJ 5.1 — Principi di Governance della sicurezza', replace: 'OBJ 5.1 — Security Governance principles' },
    { search: 'OBJ 5.2 — Gestione dei rischi aziendali (Risk Management)', replace: 'OBJ 5.2 — Enterprise Risk Management' },
    { search: 'OBJ 5.3 — Gestione di terze parti (Third-Party Security)', replace: 'OBJ 5.3 — Third-Party Security Management' },
    { search: 'OBJ 5.4 — Concetti di conformità e standard (Compliance and Standards)', replace: 'OBJ 5.4 — Compliance and Standards Concepts' },
    { search: 'OBJ 5.5 — Valutazioni di efficacia e audit di sicurezza', replace: 'OBJ 5.5 — Security Effectiveness Assessments and Audits' },
    { search: 'OBJ 5.6 — Cultura e consapevolezza della sicurezza (Security Awareness)', replace: 'OBJ 5.6 — Security Culture and Awareness' },
  ];

  replacements.forEach(({ search, replace }) => {
    content = content.split(search).join(replace);
  });

  content = content.replace(/href="chapters\/([^"]+)"/g, 'href="chapters/en_$1"');

  fs.writeFileSync(destPath, content, 'utf8');
  console.log('Saved index_en.html successfully programmatically!');
}

async function run() {
  try {
    // 1. Programmatic index translation
    translateIndexProgrammatically();
    console.log('INDEX TRANSLATION COMPLETED.');
  } catch (err) {
    console.error('An error occurred during translate execution:', err);
    process.exit(1);
  }
}

run();
