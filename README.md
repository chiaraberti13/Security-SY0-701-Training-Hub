# 🛡️ CompTIA Security+ (SY0-701) — Interactive Study Guide & Exam Resource Hub

Welcome to the **CompTIA Security+ (SY0-701) Interactive Study Guide** repository. This is an advanced, fully localized study platform designed to thoroughly cover official exam objectives, track learning milestones, and facilitate interactive domain-by-domain exam practice.

---

# 🇬🇧 English Version

## 🚀 Key Features

### 1. 📖 Structured Exam Objectives & Chapters
The application is structured precisely around the official CompTIA exam domains. Each chapter includes:
* Deep technical breakdowns, secure architecture diagrams, and real-world system engineering scenarios.
* Direct emphasis on mapping theoretical vulnerabilities to practical security controls and mitigations.

### 2. 📝 Simulated Exam Engine
An interactive testing engine with multi-format practice questions crafted in the signature CompTIA exam style:
* **Immediate Rationale**: Feedback is backed by extensive explanations to reinforce learning on both correct and incorrect selections.
* **Fully Responsive**: Designed for comfortable usage on all screen sizes, ensuring clear typography and large tap targets.

### 3. 🔍 Technical Security Glossary (`glossario.html`)
An advanced reference index indexing primary terms and acronyms expected for the CompTIA Security+ (SY0-701) exam. It houses rich definitions and investigation rules for indicators like:
* **Process Injection, Process Hollowing & Process Doppelgänger**
* **Indicators of Compromise (IoC)**
* **Impossible travel detection**
* **Account lockouts & Concurrent session monitoring**
* **Resource consumption & Resource inaccessibility triage**
* **Out-of-cycle logging & Missing logs investigation**

### 4. 📈 Local Client Persistence (`localStorage`)
Track progress offline. The application saves candidate checklist markings and simulated question attempts in the browser's persistent sandbox (`localStorage`), preventing data loss across reboots.

---

## ⚙️ Checklist Cloud Synchronization Setup
The interactive self-assessment checklist (`checklist.html`) supports persistent backup and remote synchronization across devices via an external JSON storage service. To configure this, you must edit the empty credentials in `checklist.html`.

### How to Configure:
1. Open the file `checklist.html` and locate the configuration block around line 1005:
   ```javascript
   // ══════════════════════════════════════════════════════
   //  CONFIGURAZIONE JSONBIN — inserisci i tuoi dati qui
   // ══════════════════════════════════════════════════════
   const JSONBIN_API_KEY = '';   // Paste your API Key here
   const JSONBIN_BIN_ID  = '';   // Paste your Bin ID here
   // ══════════════════════════════════════════════════════
   ```
2. Navigate to [jsonbin.io](https://jsonbin.io/) and create a free account.
3. Extract your **API Key** from the JSONBin developer dashboard, and paste it inside the single quotes of `JSONBIN_API_KEY`.
4. Create a new **Private Bin** (can be initialized with an empty array `[]` or any basic object). Copy the resulting **Bin ID** and paste it inside the single quotes of `JSONBIN_BIN_ID`.
5. Save the file. Upon reload, your checklist achievements will automatically sync securely to the cloud.

---

## 🛠️ Project Architecture

```bash
├── chapters/               # Study manuals and syllabus guides (HTML)
├── style/
│   └── style.css           # Global stylesheet with central design token variables
├── index.html              # Core application entrypoint and overall study tracker dashboard
├── quizzes.html            # Core integrated simulated testing hub
├── glossario.html          # Searchable dictionary of technical threat and mitigation terms
├── checklist.html          # Interactive self-assessment checklist with JSONBin integration features
├── quiz_database.xml       # Structured database storing practice exam items
├── server.js               # Lightweight Node.js server for host execution
└── package.json            # Application dependencies and execution scripts
```

---

## 🧑‍💻 Running the Application Locally

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies**: Retrieve required modules:
   ```bash
   npm install
   ```
3. **Start the Application**: Execute the local runtime server:
   ```bash
   npm start
   ```
4. **Access UI**: Open your web browser and navigate to `http://localhost:3000` to begin your training course.

---

### 📄 License & Terms of Use
**License for Free Use and Distribution**
- This application and its full learning contents (study guides, manuals, and questions) are provided **free of charge** solely for educational and training purposes.
- Free use, study, and redistribution of the application are fully permitted.
- **Prohibition of Modifications**: Changing, modifying, altering, or creating derivative works based on the source code or study material of this application is strictly forbidden without express prior authorization.

---

# 🇮🇹 Versione Italiana

## 🚀 Caratteristiche Principali

### 1. 📖 Capitoli e Domini d'Esame Strutturati
L'applicazione è suddivisa secondo i domini ufficiali d'esame CompTIA. Ciascun capitolo include:
* Spiegazioni approfondite, diagrammi tecnici d'architettura ed esempi di vulnerabilità sul campo.
* Forte enfasi tecnica sulla mappatura tra falle logico-sistemiche e rispettive contromisure pratiche.

### 2. 📝 Simulatore d'Esame Interattivo
Un motore di quiz interattivo mirato all'esercitazione progressiva:
* **Analisi Logica delle Risposte**: Spiegazioni dettagliate per ciascuna opzione (*rationale*) per comprendere le ragioni dietro le risposte corrette ed errate.
* **Layout Ottimizzato**: Strutturato per essere leggibile su schermi desktop e mobile, garantendo un'interfaccia usabile in mobilità.

### 3. 🔍 Glossario Tecnico Avanzato (`glossario.html`)
Un compendio alfabetico integrato progettato per riassumere sigle e vocabolario d'esame. Include dettagli di forensics e mitigazioni per indicatori tra cui:
* **Process Injection, Process Hollowing e Process Doppelgänger**
* **Indicatori di Compromissione (IoC)**
* **Identificazione di Impossible travel**
* **Blocco degli account (Account lockouts) e Monitoraggio di sessioni concorrenti**
* **Gestione di Resource consumption e Resource inaccessibility**
* **Logging fuori ciclo (Out-of-cycle logging) e Log mancanti (Missing logs)**

### 4. 📈 Salvataggio Locale Persistente (`localStorage`)
Nessuna perdita di progresso: lo stato di completamento dei moduli studiati e i punteggi dei quiz superati vengono depositati nel `localStorage` del browser, consentendo di riprendere le sessioni di studio.

---

## ⚙️ Configurazione per la Sincronizzazione Remota della Checklist
La checklist di studio (`checklist.html`) supporta il salvataggio in cloud e la sincronizzazione dello stato dei progressi tra dispositivi differenti. Per attivare questo modulo, è necessario inserire i parametri personali di JSONBin all'interno del codice sorgente di `checklist.html`.

### Passaggi per la Configurazione:
1. Apri il file `checklist.html` e individua il blocco di configurazione intorno alla riga 1005:
   ```javascript
   // ══════════════════════════════════════════════════════
   //  CONFIGURAZIONE JSONBIN — inserisci i tuoi dati qui
   // ══════════════════════════════════════════════════════
   const JSONBIN_API_KEY = '';   // Incolla qui la tua API Key
   const JSONBIN_BIN_ID  = '';   // Incolla qui il tuo Bin ID
   // ══════════════════════════════════════════════════════
   ```
2. Accedi al portale [jsonbin.io](https://jsonbin.io/) e crea un account gratuito.
3. Ottieni la tua **API Key** dalla dashboard sviluppatore del servizio e incollala all'interno dei singoli apici della variabile `JSONBIN_API_KEY`.
4. Crea un nuovo **Bin privato** sul portale (può essere inizializzato con un semplice array vuoto `[]` o un oggetto a piacimento). Copia il relativo **Bin ID** ottenuto e incollalo nei singoli apici di `JSONBIN_BIN_ID`.
5. Salva il file. Ricaricando l'applicazione, la checklist invierà e riceverà lo stato d'avanzamento dal tuo archivio sicuro online.

---

## 🛠️ Architettura e File del Progetto

```bash
├── chapters/               # Manuali tecnici descrittivi per ciascun dominio d'esame (HTML)
├── style/
│   └── style.css           # CSS globale contenente i fogli di stile dell'applicazione
├── index.html              # Home page principale e dashboard complessiva di tracciamento dello studio
├── quizzes.html            # Hub dei quiz d'esame simulati e interattivi
├── glossario.html          # Dizionario dei termini, investigazioni e relative contromisure
├── checklist.html          # Checklist di autovalutazione degli obiettivi con sistema JSONBin
├── quiz_database.xml       # Database XML contenente i blocchi delle domande d'esame
├── server.js               # Server Node.js minimale per l'hosting locale
└── package.json            # Dipendenze Node e comandi di esecuzione
```

---

## 🧑‍💻 Come Eseguire l'Applicazione in Locale

1. **Requisiti**: Assicurati di aver installato [Node.js](https://nodejs.org/) sul tuo elaboratore.
2. **Installazione**: Installa la suite di moduli richiesta avviando:
   ```bash
   npm install
   ```
3. **Avvio**: Avvia il server locale di sviluppo:
   ```bash
   npm start
   ```
4. **Accesso**: Digita nel browser `http://localhost:3000` per accedere all'ambiente di studio.

---

### 📄 Licenza e Termini d'Uso
**Licenza di Libera Diffusione e Uso**
- Questa applicazione e i suoi contenuti (manuali e domande) sono forniti **gratuitamente** per scopi educativi.
- È consentito l'uso e la distribuzione gratuita dell'applicazione.
- **Divieto di Modifica**: È severamente vietato modificare, alterare o creare opere derivate dal codice sorgente o dai contenuti di questa applicazione senza esplicita autorizzazione.

---

© Chiara Berti 13 - 2026

*“Stay safe, harden your endpoints, and clear your exam on the first attempt!”* 🛡️
