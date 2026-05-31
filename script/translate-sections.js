/* global process, __dirname, require, setTimeout */
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const logPath = path.join(__dirname, '../debug-trans.log');
function appendLog(msg) {
  const line = `[TRANS] [${new Date().toISOString()}] ${msg}\n`;
  try {
    fs.appendFileSync(logPath, line, 'utf8');
  } catch (e) {
    // ignore
  }
  console.log(msg);
}

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

// Highly reliable glossary mappings for static header and meta elements
const SC_REPLACEMENTS = [
  { search: 'html lang="it" data-lang="it"', replace: 'html lang="en" data-lang="en"' },
  { search: 'lang="it"', replace: 'lang="en"' },
  { search: 'data-lang="it"', replace: 'data-lang="en"' },
  
  // Navigation & Breadcrumbs
  { search: 'a href="../index.html"', replace: 'a href="../index_en.html"' },
  { search: 'a href="../quizzes.html"', replace: 'a href="../quizzes.html"' },
  { search: 'a href="../glossario.html"', replace: 'a href="../glossario.html"' },
  { search: 'a href="../checklist.html"', replace: 'a href="../checklist.html"' },
  { search: 'href="../index.html"', replace: 'href="../index_en.html"' },
  { search: '← Indice generale', replace: '← General Index' },
  { search: 'Indice generale', replace: 'General Index' },
  { search: 'Dominio 1 — Concetti generali di sicurezza', replace: 'Domain 1 — General Security Concepts' },
  { search: 'Dominio 2 — Minacce, vulnerabilità e mitigazioni', replace: 'Domain 2 — Threats, Vulnerabilities, and Mitigations' },
  { search: 'Dominio 3 — Architettura di sicurezza', replace: 'Domain 3 — Security Architecture' },
  { search: 'Dominio 4 — Operazioni di sicurezza', replace: 'Domain 4 — Security Operations' },
  { search: 'Dominio 5 — Governance, rischio e conformità', replace: 'Domain 5 — Governance, Risk, and Compliance' },
  
  // Metadata
  { search: '📖 Riferimento Manuale:', replace: '📖 Manual Reference:' },
  { search: 'Riferimento Manuale:', replace: 'Manual Reference:' },
  { search: 'Capitolo', replace: 'Chapter' },
  { search: 'Peso esame:', replace: 'Exam weight:' },
  { search: 'Obiettivo ufficiale (CompTIA):', replace: 'Official Objective (CompTIA):' },
  { search: 'Obiettivi coperti:', replace: 'Objectives covered:' },
  { search: 'Prerequisiti:', replace: 'Prerequisites:' },
  { search: 'Capitoli correlati:', replace: 'Related chapters:' },
  { search: 'domande', replace: 'questions' },
  { search: 'Nessuno', replace: 'None' },
  { search: 'Nessuna', replace: 'None' },
  { search: 'Quiz interattivo', replace: 'Interactive Quiz' },
];

// Helper to translate a single section HTML content using Gemini
async function translateSectionHTML(sectionHTML, sectionId, filename) {
  const prompt = `You are a professional security and technical translator specializing in the CompTIA Security+ SY0-701 certification.
Your task is to translate the following HTML section from Italian to English.

CRITICAL INSTRUCTIONS:
1. Retain and preserve EXACTLY all HTML tags, structure, classes, IDs, styles, attributes, and href attributes. Do not modify, omit, or reorganize any HTML structure.
2. Translate all visible Italian text content (headings, class attributes/tooltips only if they contain user-facing Italian text, table text, paragraphs, lists, card text, questions, options, explanation text) into professional, accurate English.
3. Translate cybersecurity terms accurately according to official English CompTIA materials:
   - "Controlli di sicurezza" -> "Security controls"
   - "Minacce, vulnerabilità e mitigazioni" -> "Threats, vulnerabilities, and mitigations"
   - "Riservatezza, Integrità, Disponibilità" -> "Confidentiality, Integrity, Availability"
   - "Non ripudio" -> "Non-repudiation"
   - "Tecnicamente" / "Fisicamente" -> "Technical" / "Physical"
   - "Esempio pratico" -> "Practical Example"
   - "Seleziona un'opzione" -> "Select an option"
   - "Invia risposta" -> "Submit answer"
   - "Spiegazione:" -> "Explanation:"
   - "Risposta corretta:" -> "Correct Answer:"
   - "Esempio multi-asse:" -> "Multi-axis example:"
   - "Clicca per girare" -> "Click to flip"
4. Leave any existing English technical terminology (e.g., "Two-Axis Model", "Zero Trust", "EDR", "CCTV") unchanged or formatted with proper caps.
5. The output must be raw translated HTML of the section ONLY. Do NOT wrap the code in markdown formatting code fences like \`\`\`html or \`\`\`. Start directly with the translated HTML itself.

HTML section to translate (Section ID: "${sectionId}", From chapter: "${filename}"):
${sectionHTML}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let result = (response.text || '').trim();
  if (result.startsWith('```html')) {
    result = result.slice(7);
  } else if (result.startsWith('```')) {
    result = result.slice(3);
  }
  if (result.endsWith('```')) {
    result = result.slice(0, -3);
  }

  return result.trim();
}

// Chapter-specific English title dictionary to replace bilingual titles
const ENGLISH_CHAPTER_TITLES = {
  "obj1_1_security_controls": "Security Controls",
  "obj1_2_fundamental_concepts": "Fundamental Security Concepts",
  "obj1_3_change_management": "Change Management & Baselines",
  "obj1_4_cryptography": "Cryptographic Solutions",
  "obj2_1_threat_actors": "Threat Actors and Motivations",
  "obj2_2_threat_vectors": "Threat Types and Vectors",
  "obj2_3_vulnerabilities": "Vulnerability Types",
  "obj2_4_malicious_activity": "Indicators of Malicious Activity",
  "obj2_5_mitigation": "Mitigation Techniques",
  "obj3_1_architecture": "Architectural Models",
  "obj3_2_infrastructure": "Secure Enterprise Infrastructure",
  "obj3_3_data_protection": "Data Protection",
  "obj3_4_resilience": "Resilience and Recovery",
  "obj4_1_computing_resources": "Computing Resources Security",
  "obj4_2_asset_management": "Asset Management",
  "obj4_3_vulnerability_management": "Vulnerability Management",
  "obj4_4_alerting_monitoring": "Alerting and Security Monitoring",
  "obj4_5_incident_response": "Enterprise Security Capabilities",
  "obj4_6_identity_access": "Identity and Access Management",
  "obj4_7_automation_orchestration": "Automation and Orchestration",
  "obj4_8_incident_response": "Incident Response Activities",
  "obj4_9_data_sources": "Investigation Data Sources",
  "obj5_1_governance": "Governance Principles",
  "obj5_2_risk_management": "Enterprise Risk Management",
  "obj5_3_third_party": "Third-Party Security",
  "obj5_4_security_compliance": "Compliance and Standards",
  "obj5_5_audits_assessments": "Security Audits and Assessments",
  "obj5_6_security_awareness": "Security Culture and Awareness"
};

async function translateChapter(srcPath, destPath, fileBase) {
  appendLog(`Starting translation of chapter "${fileBase}"...`);
  let content = fs.readFileSync(srcPath, 'utf8');

  // 1. Locate the <main ...> and </main> sections
  const mainStartIndex = content.indexOf('<main');
  const mainEndIndex = content.indexOf('</main>');

  if (mainStartIndex === -1 || mainEndIndex === -1) {
    console.warn(`[WARN] Could not find main blocks in ${fileBase}. Doing general translation.`);
    // Fallback: create empty but correct relative paths
    return;
  }

  // Segment HTML
  let headerScaffold = content.substring(0, mainStartIndex);
  let mainContent = content.substring(mainStartIndex, mainEndIndex + 7);
  let footerScaffold = content.substring(mainEndIndex + 7);

  // 2. Translate Header Scaffold programmatically (100% style preservation)
  SC_REPLACEMENTS.forEach(({ search, replace }) => {
    headerScaffold = headerScaffold.split(search).join(replace);
  });

  // Specifically clean up titles and subtitles
  const cleanTitle = ENGLISH_CHAPTER_TITLES[fileBase] || "Security Chapter";
  headerScaffold = headerScaffold.replace(/<title>([\s\S]+?)<\/title>/gi, `<title>OBJ — ${cleanTitle} · Security+ SY0-701</title>`);
  headerScaffold = headerScaffold.replace(/<h1>OBJ ([0-9.]+)( — | - )([\s\S]+?)<\/h1>/gi, `<h1>OBJ $1 — ${cleanTitle}</h1>`);
  
  // Clean up TOC labels in headerScaffold sidebar
  headerScaffold = headerScaffold
    .replace('Obiettivo ', 'Objective ')
    .replace('Sicurezza fisica', 'Physical Security')
    .replace('Quiz interattivo', 'Interactive Quiz')
    .replace('Verifica', 'Verify');

  // 3. Translate Footer Scaffold programmatically
  SC_REPLACEMENTS.forEach(({ search, replace }) => {
    footerScaffold = footerScaffold.split(search).join(replace);
  });

  // 4. Translate main contents block
  // We can locate each section by looking for <section id="..."
  const sections = mainContent.split(/(?=<section\b)/);
  let translatedSections = [];

  // The first item of sections array (e.g. sections[0]) might contain the `<main ...>` tag itself
  let mainTag = sections[0];
  // Replace attributes in the main tag
  mainTag = mainTag.replace('id="contenuto-principale"', 'id="contenuto-principale"');
  translatedSections.push(mainTag);

  for (let i = 1; i < sections.length; i++) {
    const rawSection = sections[i];
    
    // Check if it's actually a section
    if (!rawSection.trim().startsWith('<section')) {
      translatedSections.push(rawSection);
      continue;
    }

    // Extract section ID
    const idMatch = /id="([^"]+)"/.exec(rawSection);
    const sectionId = idMatch ? idMatch[1] : `section-${i}`;

    appendLog(`  Translating section "${sectionId}" for "${fileBase}"...`);
    
    try {
      let translated = await translateSectionHTML(rawSection, sectionId, fileBase);
      
      // Post-process the translated section to fix relative paths inside it
      SC_REPLACEMENTS.forEach(({ search, replace }) => {
        translated = translated.split(search).join(replace);
      });

      translatedSections.push(translated);
    } catch (err) {
      console.error(`      Error translating section "${sectionId}":`, err.message);
      console.log('      Cooling down for 10 seconds before retry...');
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      try {
        let translated = await translateSectionHTML(rawSection, sectionId, fileBase);
        SC_REPLACEMENTS.forEach(({ search, replace }) => {
          translated = translated.split(search).join(replace);
        });
        translatedSections.push(translated);
      } catch (retryErr) {
        console.error(`      Retry failed for section "${sectionId}" (${retryErr.message}). Using Italian fallback.`);
        let fallback = rawSection;
        SC_REPLACEMENTS.forEach(({ search, replace }) => {
          fallback = fallback.split(search).join(replace);
        });
        translatedSections.push(fallback);
      }
    }

    // Sleep 1 second between section calls to prevent immediate rate limit pressure
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  const completeMain = translatedSections.join('');
  let combinedHTML = headerScaffold + completeMain + footerScaffold;

  // Let's do a final check on combinedHTML for any remaining local root references
  combinedHTML = combinedHTML
    .replace('href="../index.html"', 'href="../index_en.html"')
    .replace('href="../quizzes.html"', 'href="../quizzes.html"')
    .replace('href="../glossario.html"', 'href="../glossario.html"')
    .replace('href="../checklist.html"', 'href="../checklist.html"');

  fs.writeFileSync(destPath, combinedHTML, 'utf8');
  appendLog(`Successfully saved fully English translated and styled: chapters/en_${fileBase}.html`);
}

async function run() {
  appendLog('STARTING HIGH-FIDELITY SECTION-BY-SECTION CHAPTER TRANSLATION ENGINE...');
  const files = fs.readdirSync(CHAPTERS_DIR);
  const htmlChapters = files.filter(f => f.endsWith('.html') && f.startsWith('obj')).sort();

  appendLog(`Found ${htmlChapters.length} chapter files for translating.`);

  for (const file of htmlChapters) {
    const fileBase = file.replace('.html', '');
    const srcPath = path.join(CHAPTERS_DIR, file);
    const destPath = path.join(CHAPTERS_DIR, `en_${file}`);

    // If already translated properly (and is a full valid file, size > 25KB), skip it!
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      if (stats.size > 10000) {
        // Let's also verify that it contains the stylesheet
        const fileContent = fs.readFileSync(destPath, 'utf8');
        if (fileContent.includes('../style/style.css')) {
          appendLog(`[SKIP] Already fully English translated and styled: ${file}`);
          continue;
        }
      }
    }

    appendLog(`[CHAPTER PROGRESS] Beginning Chapter: ${file}`);

    await translateChapter(srcPath, destPath, fileBase);

    appendLog(`[CHAPTER SAVED SUCCESSFULLY] chapters/en_${file}`);

    // Break 5 seconds between chapters to keep API RPM stable
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  appendLog('ALL CHAPTER TRANSLATIONS PROCESSED SUCCESSFULLY.');
}

run().catch(err => {
  const logPath = path.join(__dirname, '../debug-trans.log');
  fs.appendFileSync(logPath, `[FATAL CHAPTER RUN ERROR] ${err.message}\n${err.stack}\n`, 'utf8');
});
