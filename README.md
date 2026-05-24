![CompTIA Security+ Cyberpunk Banner](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=450&q=80)

# 🛡️ CompTIA Security+ (SY0-701) — Interactive Study Guide / Guida di Studio Interattiva

Welcome to the **CompTIA Security+ (SY0-701) Interactive Study Guide** repository. This is a rich, modern, and fully localized study environment designed to thoroughly cover official exam objectives and facilitate active, step-by-step learning.

---

# 🇬🇧 English Version

## 🎨 Design & Mood Concept: Cyberpunk Security Grid
The user experience is guided by a sleek aesthetic inspired by tactical security interfaces (Cyberpunk Security Operations Center), featuring:
* **Dark Tones & Neon Accents**: Anthracite gray, deep midnight blue, electric cyan, and high-visibility violet reduce eye strain during long study blocks.
* **Fluid & Responsive Layout**: Responsive info cards, subtle interactive hover effects, and a streamlined navigation dock for easy access.
* **Progress Tracking**: Clear status badges and progress indicators showing study completion.

---

## 🚀 Key Features

### 1. 📖 Structured Exam Objectives & Chapters
The application is structured around the five official CompTIA exam domains. Each chapter includes:
* Deep technical explanations, ASCII network/structural diagrams, and real-world cybersecurity scenarios.
* A dual focus on theory, actual cyber attacks, and concrete mitigation steps.

### 2. 📝 Interactive Simulated Exam Quizzes
Each chapter embeds an interactive quiz engine with multiple-choice questions formulated in the signature CompTIA exam style:
* **Instant Feedbacks**: Instant evaluation highlighting correct/incorrect choices accompanied by extremely thorough technical explanations (*rationale*).
* **Fully Responsive**: Touch targets optimized for both desktop cursors and mobile devices (at least 44px) with modern fluid animations.

### 3. 🔍 Advanced Technical Glossary (`glossario.html`)
An interactive, searchable reference database containing all key acronyms and vocabulary expected for the SY0-701 exam, with deep investigative details and actionable security mitigations for critical indicators including:
* **Process Injection, Process Hollowing & Process Doppelgänger**
* **Indicators of Compromise (IoC)**
* **Impossible travel**
* **Account lockouts & Concurrent session usage**
* **Resource consumption & Resource inaccessibility**
* **Out-of-cycle logging & Missing logs**

### 4. 📈 Local Client Synchronization (`localStorage`)
Never lose your study progress. The application automatically and silently synchronizes your reading completion states and quiz answers directly inside the client's local storage (`localStorage`), allowing you to resume your learning exactly where you left off.

---

## 🛠️ Project Architecture

```bash
├── chapters/               # Rich study chapters for each exam domain (HTML files)
├── style/
│   └── style.css           # Central stylesheet with Cyberpunk theme variables
├── index.html              # Main dashboard with overall progress and module access
├── quizzes.html            # Core integrated quiz simulator hub
├── glossario.html          # Interactive searchable dictionary of security terms
├── checklist.html          # Dynamic self-assessment checklist of SY0-701 goals
├── quiz_database.xml       # Structured XML database hosting mock exam items
├── server.js               # Lightweight Node.js server for local hosting
└── package.json            # Application dependencies and script definitions
```

---

## 🧑‍💻 Running the Application Locally

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Install Dependencies**: Install the tiny set of dependencies by running:
   ```bash
   npm install
   ```
3. **Boot the App**: Launch the built-in development server:
   ```bash
   npm start
   ```
4. **Access UI**: Open your web browser and navigate to `http://localhost:3000` to begin your cybersecurity training course.

---

### 📄 License & Terms of Use
**License for Free Use and Distribution**
- This application and its full learning contents (study guides, manuals, and questions) are provided **free of charge** solely for educational and training purposes.
- Free use, study, and redistribution of the application are fully permitted.
- **Prohibition of Modifications**: Changing, modifying, altering, or creating derivative works based on the source code or study material of this application is strictly forbidden without express prior authorization.

---

# 🇮🇹 Versione Italiana

## 🎨 Design & Mood Concept: Cyberpunk Security Grid
L'esperienza d'uso è guidata da un'estetica ispirata alle interfacce operative di sicurezza (Cyberpunk Security Operations Center), caratterizzata da:
* **Tonalità Scure e Contrasti Neon**: Grigio antracite, blu notte profondo, ciano elettrico e violetto ad alta visibilità che riducono l'affaticamento visivo durante le lunghe sessioni di studio.
* **Layout Fluido e Dinamico**: Card informative reattive, effetti di hover micro-animati e menu di scelta rapida ad accesso facilitato.
* **Tracciamento Visivo dei Progressi**: Indicatori progressivi e barre di avanzamento dinamiche sincronizzate con lo stato dello studio effettuato.

---

## 🚀 Caratteristiche Principali del Progetto

### 1. 📖 Capitoli e Domini d'Esame Strutturati
L'applicazione è suddivisa secondo la classificazione ufficiale dei domini d'esame CompTIA (Dominio 1, 2, 3, 4, 5). Ciascun capitolo include:
* Spiegazioni approfondite, diagrammi tecnici testuali ed esempi reali sul campo per ogni concetto di sicurezza.
* Approccio pratico focalizzato sia sui concetti teorici fondamentali che sugli attacchi sferrati e le rispettive contromisure.

### 2. 📝 Quiz Interattivi d'Esame
Ciascun capitolo integra un motore di simulazione dei quiz d'esame con domande a risposta multipla formulate nello stile ufficiale CompTIA:
* **Feedback immediato**: Visualizzazione istantanea delle risposte corrette ed errate accompagnata da una spiegazione razionale (*rationale*) approfondita.
* **Adattabilità Desktop e Mobile**: Esperienza touch target ottimizzata (comandi di almeno 44px) ed elementi grafici fluidi.

### 3. 🔍 Glossario Tecnico Avanzato (`glossario.html`)
Un compendio alfabetico esaustivo e interattivo contenente tutte le sigle e i termini per l'esame SY0-701. Include definizioni ricche di dettagli investigativi e mitigazioni pratiche per indicatori critici di compromissione, tra cui:
* **Process Injection, Process Hollowing & Process Doppelgänger**
* **Indicators of Compromise (IoC)**
* **Impossible travel**
* **Account lockouts & Concurrent session usage**
* **Resource consumption & Resource inaccessibility**
* **Out-of-cycle logging & Missing logs**

### 4. 📈 Persistenza Locale & Sincronizzazione (`localStorage`)
Non lasciarti preoccupare dalla chiusura della scheda o del browser: l'app salva automaticamente lo stato di avanzamento dei capitoli studiati e delle risposte dei quiz nel `localStorage` del client ordinatamente, garantendo la ripresa dello studio esattamente da dove era stato interrotto.

---

## 🛠️ Architettura e Struttura Directory

```bash
├── chapters/               # Raccolta dei capitoli per ogni dominio d'esame (HTML)
├── style/
│   └── style.css           # Fogli di stile centralizzati con variabili di colore Cyberpunk
├── index.html              # Portale principale con cruscotto complessivo e avanzamento
├── quizzes.html            # Hub centrale dei quiz interattivi
├── glossario.html          # Dizionario interattivo ricercabile
├── checklist.html          # Lista di autoscorritura dei requisiti d'esame (SY0-701)
├── quiz_database.xml       # Archivio strutturato delle domande del simulatore quiz
├── server.js               # Server Node.js elementare per l'ambiente di runtime
└── package.json            # Configurazione delle dipendenze del progetto
```

---

## 🧑‍💻 Come Eseguire l'Applicazione in Locale

1. **Requisiti**: Assicurati di avere installato [Node.js](https://nodejs.org/) sul computer.
2. **Installazione**: Installa le dipendenze dichiarate avviando:
   ```bash
   npm install
   ```
3. **Avvio**: Esegui il server di sviluppo integrato:
   ```bash
   npm start
   ```
4. **Accesso**: Apri il browser all'indirizzo `http://localhost:3000` per iniziare il tuo addestramento di sicurezza informatica.

---

### 📄 Licenza e Termini d'Uso
**Licenza di Libera Diffusione e Uso**
- Questa applicazione e i suoi contenuti (manuali e domande) sono forniti **gratuitamente** per scopi educativi.
- È consentito l'uso e la distribuzione gratuita dell'applicazione.
- **Divieto di Modifica**: È severamente vietato modificare, alterare o creare opere derivate dal codice sorgente o dai contenuti di questa applicazione senza esplicita autorizzazione.

---

© Chiara Berti 13 - 2026

*“Stay safe, harden your endpoints, and clear your exam on the first attempt!”* 🛡️
