# Piano di studio SY0-701 — 18 maggio · 5 giugno 2026

Piano costruito sui capitoli canonici del repository (CH1–CH18), sui 672 quiz distribuiti su 28 obiettivi ufficiali e sul blueprint SY0-701.

- **Inizio:** lunedì 18 maggio 2026
- **Fine:** venerdì 5 giugno 2026
- **Giorni feriali inclusi:** 15 (lun–ven; sabato e domenica esclusi)
- **Struttura:** 13 giorni di studio + 1 consolidamento + 1 simulazione finale

---

## Mappa obiettivi ufficiali SY0-701 → capitoli del repository

| Dominio | Peso | Obj | Titolo ufficiale | Capitolo/i | Quiz |
|---------|------|-----|-----------------|-----------|------|
| D1 — General Security Concepts | 12% | 1.1 | Security controls | CH1 | 27 |
| | | 1.2 | Fundamental security concepts | CH1 | 14 |
| | | 1.3 | Change management implications | CH1 | 12 |
| | | 1.4 | Cryptographic solutions | CH7 | 43 |
| D2 — Threats, Vulnerabilities & Mitigations | 22% | 2.1 | Threat actors e motivazioni | CH2 | 12 |
| | | 2.2 | Threat vectors e attack surfaces | CH2, CH4 | 34 |
| | | 2.3 | Tipi di vulnerabilità | CH3, CH6 | 34 |
| | | 2.4 | Indicatori di attività malevola | CH3, CH4 | 23 |
| | | 2.5 | Tecniche di mitigazione enterprise | CH3 | 6 |
| D3 — Security Architecture | 18% | 3.1 | Modelli architetturali (cloud + rete) | CH10, CH12 | 33 |
| | | 3.2 | Principi di sicurezza enterprise | CH12 | 26 |
| | | 3.3 | Protezione dei dati | CH18 | 30 |
| | | 3.4 | Resilienza e recovery | CH9 | 29 |
| D4 — Security Operations | 28% | 4.1 | Tecniche sicurezza sulle risorse | CH6, CH11, CH13 | 36 |
| | | 4.2 | Asset management | CH11 | 16 |
| | | 4.3 | Vulnerability management | CH5 | 38 |
| | | 4.4 | Security alerting e monitoring | CH14 | 18 |
| | | 4.5 | Enterprise capabilities enhancement | CH12 | 32 |
| | | 4.6 | Identity and access management | CH8 | 38 |
| | | 4.7 | Automazione e orchestrazione | CH14 | 7 |
| | | 4.8 | Incident response | CH14, CH15 | 21 |
| | | 4.9 | Data sources per investigazione | CH14, CH15 | 19 |
| D5 — Security Program Management | 20% | 5.1 | Security governance | CH1 (intro), CH16 | 28 |
| | | 5.2 | Risk management | CH17 | 24 |
| | | 5.3 | Third-party risk assessment | CH16 | 20 |
| | | 5.4 | Security compliance | CH16 | 18 |
| | | 5.5 | Audit e assessment | CH16 | 19 |
| | | 5.6 | Security awareness | CH17 | 15 |

> **Obiettivi ad alta densità di quiz** (priorità in caso di errori): 1.4 (43) · 4.3 (38) · 4.6 (38) · 2.2 (34) · 2.3 (34) · 4.5 (32) · 3.3 (30) · 3.4 (29)

---

## Piano giorno per giorno

---

### Giorno 1 — Lunedì 18/05/2026 | CH1 · Dominio 1 parte 1: Fondamenti e Governance

**Obiettivi:** 1.1 · 1.2 · 1.3 + introduzione 5.1
**Quiz disponibili:** 1.1 (27) · 1.2 (14) · 1.3 (12) = **53 domande**

**Studio:**
- [ ] Categorie e tipi di controllo: preventivo / detective / correttivo × tecnico / manageriale / operativo — matrice categoria × tipo
- [ ] CIA triad (Confidentiality, Integrity, Availability), non-repudiation, AAA (Authentication, Authorization, Accounting)
- [ ] Gap analysis, Zero Trust model (never trust, always verify; microsegmentation; identity-centric)
- [ ] Change management: approval board, testing, rollback plan, documentazione e version control
- [ ] Gerarchia documentale: policy → standard → procedure → guideline (esempi pratici per ciascun livello)
- [ ] Introduzione governance (5.1): ruoli CISO/board, security committee, framework (NIST CSF, ISO 27001)

**Pratica:**
- [ ] Quiz 1.1 — tutti i 27 scenari
- [ ] Quiz 1.2 — tutti i 14 scenari
- [ ] Quiz 1.3 — tutti i 12 scenari
- [ ] Aprire il log cumulativo errori e annotare: obiettivo · risposta data · perché era sbagliata

**Focus esame:** saper scegliere categoria + tipo di controllo corretto dato un requisito; riconoscere Zero Trust vs modello perimetrale; non confondere policy con procedura.

---

### Giorno 2 — Martedì 19/05/2026 | CH7 · Dominio 1 parte 2: Crittografia e PKI

**Obiettivi:** 1.4
**Quiz disponibili:** 1.4 = **43 domande** (set più numeroso in assoluto — sessione timed)

**Studio:**
- [ ] Crittografia simmetrica (AES-128/256, 3DES) vs asimmetrica (RSA, ECC, Diffie-Hellman): caratteristiche, performance, casi d'uso
- [ ] Hashing: MD5 e SHA-1 (deprecated/broken), SHA-256, SHA-3 — uso per integrità, non per confidenzialità
- [ ] Salting e key stretching: bcrypt, PBKDF2, Argon2 — protezione contro rainbow table e brute force
- [ ] Firme digitali: private key firma → public key verifica; non-repudiation; cifratura ibrida (simmetrica + asimmetrica)
- [ ] PKI: Root CA → Intermediate CA → certificato end-entity; RA; CSR; chain of trust; certificate pinning
- [ ] Revoca: CRL (Certificate Revocation List) vs OCSP (Online Certificate Status Protocol) — differenze operative
- [ ] Key escrow, key rotation, forward secrecy (Perfect Forward Secrecy), TLS handshake ad alto livello
- [ ] Regola di selezione: integrità → hash · confidenzialità → cifratura · autenticità + non-repudiation → firma digitale

**Pratica:**
- [ ] Quiz 1.4 — tutti i 43 scenari in sessione unica a tempo (target: <60 min)
- [ ] Revisione immediata degli errori con motivazione
- [ ] Tabella personale: algoritmo → scopo → forza → note deprecazione

**Focus esame:** selezionare l'algoritmo/controllo corretto dato il requisito; non confondere CA con RA; scegliere CRL vs OCSP in base al contesto; capire quando si usa ECC vs RSA.

---

### Giorno 3 — Mercoledì 20/05/2026 | CH2 + CH4 · Dominio 2 parte 1: Threat Landscape e Social Engineering

**Obiettivi:** 2.1 · 2.2 (completo)
**Quiz disponibili:** 2.1 (12) · 2.2 (34) = **46 domande**

**Studio CH2 — Threat Landscape:**
- [ ] Threat actors: nation-state, insider (intenzionale vs accidentale), hacktivist, criminal organizzato, script kiddie, competitor — attributi (sophistication, resources, intent)
- [ ] Motivazioni: financial, espionage, ideological, disruption, revenge, war, competition
- [ ] Vettori d'attacco non-umani: email/message-based, image/file-based, USB/removable media, software vulnerabile, open service ports, default credentials, supply chain

**Studio CH4 — Social Engineering e Password Attacks:**
- [ ] Vettori umani (obj 2.2): phishing, spear phishing (target specifico), whaling (C-level), vishing (voce), smishing (SMS), pharming (DNS redirect)
- [ ] Impersonation, pretexting, watering hole, typosquatting, brand impersonation, BEC (Business Email Compromise)
- [ ] Misinformation vs disinformation; principi psicologici: authority, urgency, scarcity, social proof, familiarity, intimidation
- [ ] Password attacks (obj 2.4 parziale): brute force, dictionary, password spraying, credential stuffing, rainbow table

**Pratica:**
- [ ] Quiz 2.1 (12) + Quiz 2.2 (34) = 46 domande
- [ ] Mappa mentale: tipo attacco → vettore → prima contromisura

**Focus esame:** distinguere spear phishing da whaling; credential stuffing da password spraying; identificare il threat actor dal profilo descritto; riconoscere il principio psicologico usato in un attacco.

---

### Giorno 4 — Giovedì 21/05/2026 | CH3 · Dominio 2 parte 2: Vulnerabilità, Indicatori e Mitigazioni

**Obiettivi:** 2.3 · 2.4 · 2.5
**Quiz disponibili:** 2.3 (34) · 2.4 (23) · 2.5 (6) = **63 domande**

**Studio:**
- [ ] Tipi di vulnerabilità (2.3): zero-day, misconfiguration, weak/default credentials, unpatched software, legacy/unsupported systems, supply chain compromise, memory injection
- [ ] Malware families e indicatori specifici (2.4): ransomware (file encryption, ransom note), trojan (backdoor, C2), worm (auto-replica, network saturation), rootkit (kernel-level stealth), spyware/keylogger (data exfiltration), fileless malware (in-memory, no disk artifact), botnet (C2 beacon)
- [ ] Altri indicatori di attività malevola: C2 traffic, unusual outbound ports, DNS anomalies, lateral movement (pass-the-hash, pass-the-ticket), privilege escalation, unexpected scheduled tasks, log tampering
- [ ] Mitigazioni enterprise (2.5): network segmentation, patch management, EDR/XDR, allow/deny listing, quarantine, encryption at rest, honeypot/honeynet, deception technology

**Pratica:**
- [ ] Quiz 2.3 (34) + 2.4 (23) + 2.5 (6) = 63 domande
- [ ] Tabella: malware → indicatore caratteristico → mitigazione primaria
- [ ] Aggiornare log errori cumulativo

**Focus esame:** riconoscere il tipo di malware dall'indicatore descritto; scegliere la mitigazione proporzionata al rischio; differenziare rootkit da fileless malware per comportamento.

---

### Giorno 5 — Venerdì 22/05/2026 | CH5 + CH6 · Vulnerability Management e Application Security

**Obiettivi:** 4.3 · 4.1 (application security) · 2.3 (web vulnerabilities, parziale)
**Quiz disponibili:** 4.3 (38) = **38 domande** (+ 4.1 parziale nei quiz endpoint)

**Studio CH5 — Vulnerability Management (obj 4.3):**
- [ ] Lifecycle: identify → assess → prioritize → remediate → validate — responsabilità per fase
- [ ] Scan types: credentialed vs non-credentialed, active vs passive, agent-based vs agentless — differenze nei risultati
- [ ] CVSS v3 base score: Attack Vector (AV), Attack Complexity (AC), Privileges Required (PR), User Interaction (UI), Scope (S), C/I/A impact — lettura e interpretazione pratica
- [ ] CVE, NVD, vendor advisories come fonti; prioritizzazione risk-based vs CVSS-only
- [ ] False positive vs false negative: implicazioni operative per ciascuno
- [ ] Penetration testing fasi: planning/scoping, recon (OSINT), exploitation, post-exploitation, reporting; autorizzazione scritta obbligatoria
- [ ] Bug bounty e responsible disclosure; system/process audit vs pen test vs vulnerability scan

**Studio CH6 — Application Security (obj 4.1 + 2.3 parziale):**
- [ ] Secure SDLC: design → code → test → deploy → monitor — security by design vs bolt-on
- [ ] OWASP Top 10 essenziali: SQL injection, broken authentication, IDOR, XSS (stored/reflected), SSRF, security misconfiguration, insecure deserialization
- [ ] Difese applicative: input validation, output encoding, parameterized queries, WAF (Web Application Firewall)
- [ ] SAST (Static Application Security Testing) vs DAST (Dynamic) — quando usare ciascuno
- [ ] Code signing, software composition analysis (SCA), dependency scanning

**Pratica:**
- [ ] Quiz 4.3 (38) — sessione timed con revisione errori
- [ ] Esercizio: dato un CVSS score, calcolare priorità di remediation

**Focus esame:** differenza tra scan credentialed e non; leggere un CVSS e tradurlo in priorità; distinguere SAST da DAST; identificare la vulnerabilità OWASP dal codice o dal caso descritto.

---

### Giorno 6 — Lunedì 25/05/2026 | CH18 + CH9 · Dominio 3 parte 1: Data Protection e Resilienza

**Obiettivi:** 3.3 · 3.4
**Quiz disponibili:** 3.3 (30) · 3.4 (29) = **59 domande**

**Studio CH18 — Data Protection (obj 3.3):**
- [ ] Classificazioni dati: public, internal, confidential, restricted/secret/top secret — chi decide e chi è responsabile
- [ ] Stati dei dati: at rest (cifratura disco/volume) · in transit (TLS, VPN, IPsec) · in use (trusted execution environment, memory encryption) — controllo corretto per ciascuno
- [ ] Tecniche di protezione: encryption, tokenization (sostituzione con token non sensibile), masking, anonymization (irreversibile), pseudonymization (reversibile con chiave)
- [ ] DLP (Data Loss Prevention): endpoint DLP, network DLP, cloud DLP — scenari di applicazione
- [ ] Data sovereignty e geolocation restrictions; retention policy e legal hold; secure disposal (shredding fisico, degaussing, crypto-erase per SSD)

**Studio CH9 — Resilienza e Recovery (obj 3.4):**
- [ ] Alta disponibilità: clustering attivo/attivo vs attivo/passivo, load balancing, NIC teaming, RAID (livelli 1/5/6/10), power redundancy (UPS, generatori)
- [ ] Siti DR: hot site (fully operational, highest cost) · warm site (partial infra) · cold site (space only) · cloud-based (on-demand)
- [ ] Metriche: RTO (quanto tempo per ripristinare), RPO (massima perdita dati accettabile), MTTR (tempo medio riparazione), MTBF (tempo medio tra guasti)
- [ ] Backup strategies: full / incremental (solo modifiche dall'ultimo backup) / differential (modifiche dall'ultimo full) — confronto RPO/costo
- [ ] Platform diversity, multi-cloud resilience; test dei piani: tabletop exercise, simulation, parallel test, full interruption test

**Pratica:**
- [ ] Quiz 3.3 (30) + Quiz 3.4 (29) = 59 domande
- [ ] Flashcard: RTO / RPO / MTTR / MTBF con definizione precisa + esempio

**Focus esame:** scegliere la tecnica di protezione dati corretta per stato del dato; calcolare l'impatto di RPO in uno scenario DR; distinguere tokenization da masking da anonymization; sito DR corretto in base a budget e RTO.

---

### Giorno 7 — Martedì 26/05/2026 | CH10 · Dominio 3 parte 2: Cloud e Virtualizzazione

**Obiettivi:** 3.1 (cloud models)
**Quiz disponibili:** 3.1 (33) = **33 domande**

**Studio:**
- [ ] Modelli di servizio e shared responsibility matrix:
  - IaaS: cliente gestisce OS, middleware, app, dati — provider gestisce infrastruttura fisica
  - PaaS: cliente gestisce app e dati — provider gestisce OS e runtime
  - SaaS: cliente gestisce solo dati e accessi — provider gestisce tutto il resto
- [ ] Deployment models: public (multi-tenant), private (single-tenant), hybrid, community cloud — casi d'uso e rischi per ciascuno
- [ ] Containerization (Docker/Kubernetes): isolamento namespace, image security (scanning, base image minimale), pod network policy, secrets management
- [ ] Microservices: API gateway security, service mesh, dependency risk, single point of failure ridotto
- [ ] Serverless computing: attack surface ridotta, IAM per funzione (least privilege), cold start, third-party libraries risk
- [ ] Infrastructure as Code (IaC): template scanning (SAST per IaC), drift detection, immutable infrastructure, version control per configurazioni
- [ ] Virtualizzazione: hypervisor Type 1 (bare-metal) vs Type 2 (hosted); VM escape; snapshot security; VM sprawl

**Pratica:**
- [ ] Quiz 3.1 (33) — focus cloud scenarios
- [ ] Matrice shared responsibility compilata per IaaS/PaaS/SaaS (chi è responsabile di cosa)

**Focus esame:** applicare la shared responsibility matrix a scenari concreti; identificare rischi specifici di container (image pull da registry non verificato, privilege escalation in container); IaC drift detection.

---

### Giorno 8 — Mercoledì 27/05/2026 | CH12 · Dominio 3+4: Network Architecture e Enterprise Security

**Obiettivi:** 3.1 (network architecture) · 3.2 · 4.5
**Quiz disponibili:** 3.2 (26) · 4.5 (32) = **58 domande**

**Studio:**
- [ ] Modelli architetturali (3.1 rete): on-premises vs cloud vs hybrid; edge computing e fog computing; SCADA/ICS — air-gap e zone industriali
- [ ] Segmentazione di rete: VLAN (isolamento L2), DMZ (zona demilitarizzata per servizi esposti), screened subnet, microsegmentazione (east-west traffic), air-gap (isolamento fisico completo)
- [ ] Principi enterprise (3.2): Zero Trust architecture (verify explicitly, use least privilege, assume breach), implicit deny, NAC (Network Access Control), jump server/bastion host
- [ ] Enterprise capabilities (4.5): firewall (stateful vs NGFW), IDS vs IPS (detection vs prevention), proxy/forward proxy/reverse proxy, VPN site-to-site vs remote access (split tunnel vs full tunnel)
- [ ] IPsec: AH (Authentication Header — integrità, no encryption) vs ESP (Encapsulating Security Payload — integrità + encryption); tunnel mode vs transport mode
- [ ] SD-WAN security implications; DNS security (DNSSEC, DNS sinkhole); email security (SPF, DKIM, DMARC)

**Pratica:**
- [ ] Quiz 3.2 (26) + Quiz 4.5 (32) = 58 domande
- [ ] Schema traffico: Internet → firewall → DMZ → IPS → LAN interna con controlli per ciascun punto

**Focus esame:** IDS vs IPS (inline vs out-of-band); tunnel vs transport mode IPsec; scegliere il controllo architetturale corretto (firewall/proxy/IPS/NAC) per il requisito dato; Zero Trust vs perimeter model.

---

### Giorno 9 — Giovedì 28/05/2026 | CH8 · Dominio 4: Identity e Access Management

**Obiettivi:** 4.6
**Quiz disponibili:** 4.6 = **38 domande** (capitolo denso — sessione timed)

**Studio:**
- [ ] Identity lifecycle: joiner (provisioning) / mover (modifica ruolo e permessi) / leaver (deprovisioning, disabilitazione immediata) — account review periodico
- [ ] Identity proofing e attestation; orphaned accounts e account dormanti — rischi
- [ ] Authentication factors: something you know / have / are + location + behavior; MFA pitfalls: SIM swap, MFA fatigue/prompt bombing, MITM su OTP
- [ ] Modelli di autorizzazione:
  - RBAC (Role-Based): permessi per ruolo — scalabile in grandi org
  - ABAC (Attribute-Based): permessi per attributo contestuale (ora, device, location) — flessibile
  - MAC (Mandatory Access Control): classificazione sistema-driven — ambienti governativi
  - DAC (Discretionary): owner-driven — meno sicuro
- [ ] Least privilege e separation of duties; need-to-know; privileged access review
- [ ] Federation e SSO:
  - SAML 2.0: XML-based, IdP/SP, autenticazione + autorizzazione enterprise
  - OAuth2: delegazione accesso a risorse (autorizzazione, non autenticazione)
  - OpenID Connect (OIDC): strato di autenticazione su OAuth2 — token ID
- [ ] PAM/PIM: privileged account management, just-in-time (JIT) access, session recording, credential vault
- [ ] Password policy: length > complexity; password manager; passphrase
- [ ] Conditional access e Zero Trust identity-centric: device compliance, risk score, location

**Pratica:**
- [ ] Quiz 4.6 (38) — sessione timed, revisione immediata errori
- [ ] Tabella comparativa: SAML vs OAuth2 vs OIDC — scopo / attori / flusso / token

**Focus esame:** distinguere SAML da OAuth2 da OIDC per scopo (non solo nome); scegliere RBAC vs ABAC vs MAC per scenario; MFA pitfalls; JIT access.

---

### Giorno 10 — Venerdì 29/05/2026 | CH11 + CH13 · Dominio 4: Endpoint, Asset Management e Wireless/Mobile

**Obiettivi:** 4.1 (endpoint + wireless) · 4.2
**Quiz disponibili:** 4.1 (36) · 4.2 (16) = **52 domande**

**Studio CH11 — Endpoint e Asset Management (obj 4.1 + 4.2):**
- [ ] Secure baseline: CIS Benchmarks, DISA STIG — establish (definire), deploy (distribuire), maintain (monitorare drift)
- [ ] Hardening workstation/server: disabilitare servizi non necessari, rimuovere credenziali default, host-based firewall, EDR agent, patch automatico
- [ ] Hardening dispositivi specializzati:
  - Embedded/RTOS: firmware aggiornato, interfacce di debug disabilitate
  - ICS/SCADA: air-gap o zona separata, monitoring anomalie OT
  - IoT: network segmentation, cambio credenziali default, disable Telnet
- [ ] MDM/UEM: enrollment, policy enforcement (PIN, encryption, app allowlist), remote wipe; modelli: BYOD / COPE (Corporate Owned, Personally Enabled) / CYOD / corporate-only
- [ ] Asset management (4.2): inventario (hardware + software), classificazione, ownership, lifecycle completo (acquisition → deployment → maintenance → disposal); EOL e EOSL tracking

**Studio CH13 — Wireless e Mobile (obj 4.1):**
- [ ] Standard wireless: WPA2-Personal (PSK) vs WPA2-Enterprise (802.1X + RADIUS) vs WPA3 (SAE, Forward Secrecy) — differenze e quando usare ciascuno
- [ ] WPS vulnerabilità (PIN brute force) — disabilitare sempre; Evil twin e rogue AP; captive portal risks; disassociation/deauth attacks (DoS wireless)
- [ ] Bluetooth: bluejacking (invio messaggi), bluesnarfing (accesso dati), bluebugging (controllo remoto); NFC attacks (eavesdropping, relay)
- [ ] Site survey e heat mapping per coverage e interference analysis

**Pratica:**
- [ ] Quiz 4.1 (36) + Quiz 4.2 (16) = 52 domande
- [ ] Tabella: tipo dispositivo → rischio principale → hardening specifico → controllo di rete

**Focus esame:** WPA2-Enterprise vs WPA2-Personal (RADIUS vs PSK); BYOD policy con MDM; bluejacking vs bluesnarfing; COPE vs BYOD responsabilità.

---

### Giorno 11 — Lunedì 01/06/2026 | CH14 · Dominio 4: Incident Response, Monitoring e Automazione

**Obiettivi:** 4.4 · 4.7 · 4.8 · 4.9
**Quiz disponibili:** 4.4 (18) · 4.7 (7) · 4.8 (21) · 4.9 (19) = **65 domande**

**Studio:**
- [ ] IR lifecycle NIST SP 800-61: Preparation → Detection/Analysis → Containment → Eradication → Recovery → Post-Incident Activity (Lessons Learned) — azioni specifiche per fase
- [ ] Containment strategies: short-term (isolare host) vs long-term (rebuild); eradication (rimozione causa root) vs recovery (ripristino servizi) — ordine obbligatorio
- [ ] Playbook vs runbook; escalation path: SOC analyst → SOC lead → CISO → management → legal/HR/PR
- [ ] SIEM (Security Information and Event Management): log aggregation, correlation rules, alert triage, baseline vs anomaly detection, tuning per ridurre falsi positivi
- [ ] SOAR (Security Orchestration, Automation and Response): automazione playbook, integrazione ticketing (ServiceNow, Jira), vantaggi (velocità) vs rischi (automazione errata)
- [ ] Monitoring tools: NetFlow/IPFIX (traffic analysis), syslog (log centralization), file integrity monitoring (FIM), EDR telemetry, vulnerability scanner scheduling
- [ ] Data sources investigativi (4.9): SIEM alert logs, packet captures (Wireshark/tcpdump), memory dumps, disk images, DNS query logs, authentication/authorization logs, NetFlow, email headers
- [ ] Automazione e orchestrazione (4.7): API integration, scripted response, benefits of automation for IR velocity

**Pratica:**
- [ ] Quiz 4.4 (18) + 4.7 (7) + 4.8 (21) + 4.9 (19) = 65 domande
- [ ] Esercizio timeline: dato un incidente descritto, ordinare le fasi IR e identificare la prima azione corretta per ogni fase

**Focus esame:** prima azione in Detection vs Containment vs Eradication; non saltare fasi; SIEM vs SOAR (monitoring vs automazione); data source corretto per tipo di investigazione.

---

### Giorno 12 — Martedì 02/06/2026 | CH15 + CH16 · Digital Forensics e Governance/Compliance

**Obiettivi:** 4.8 (digital forensics) · 4.9 (approfondimento) · 5.1 · 5.3 · 5.4 · 5.5
**Quiz disponibili:** 5.1 (28) · 5.3 (20) · 5.4 (18) · 5.5 (19) = **85 domande** (sessione lunga — priorità agli errori)

**Studio CH15 — Digital Forensics (obj 4.8 + 4.9):**
- [ ] Legal hold: preservazione immediata delle evidenze al momento di un'indagine; chain of custody: documentazione di chi accede alle evidenze e quando
- [ ] Ordine di volatilità (RFC 3227): RAM e registri CPU → swap/pagefile → running processes → network connections → disk (non volatile) → logs → archivi remoti
- [ ] Acquisizione: disk imaging (dd, FTK Imager) con hash MD5/SHA-256 pre e post; write blocker fisico o software; live forensics vs dead forensics
- [ ] Analisi: timeline analysis, file carving (recupero file cancellati), steganography detection, log correlation, memory forensics (Volatility)

**Studio CH16 — Governance e Compliance (obj 5.1 + 5.3 + 5.4 + 5.5):**
- [ ] Governance (5.1): policy hierarchy, ruoli (board, CISO, data owner, data custodian, data steward), framework NIST CSF (Identify/Protect/Detect/Respond/Recover) e ISO 27001
- [ ] Third-party risk (5.3): vendor due diligence, SLA (Service Level Agreement) e SLO, right-to-audit clause, questionnaire di sicurezza, supply chain risk (SBOM, software bill of materials)
- [ ] Compliance (5.4): regulatory (HIPAA — healthcare, PCI-DSS — cardholder data, GDPR — personal data EU, SOX — financial reporting) vs framework-based — conseguenze del non-rispetto
- [ ] Audit e assessment (5.5): internal audit vs external audit vs third-party assessment; evidence types (interviews, documentation, observation, testing); gap assessment vs compliance audit vs pen test — scopi diversi

**Pratica:**
- [ ] Quiz 5.1 (28) + 5.3 (20) + 5.4 (18) + 5.5 (19) = 85 domande (distribuire in 2–3 sessioni con pausa)
- [ ] Aggiornare log errori cumulativo per dominio 5

**Focus esame:** ordine di volatilità in forensics; right-to-audit in contratti terze parti; distinguere HIPAA da PCI-DSS da GDPR per ambito; gap assessment vs compliance audit vs pen test.

---

### Giorno 13 — Mercoledì 03/06/2026 | CH17 · Dominio 5: Risk Management e Security Awareness

**Obiettivi:** 5.2 · 5.6
**Quiz disponibili:** 5.2 (24) · 5.6 (15) = **39 domande**

**Studio:**
- [ ] Risk management framework: identify → assess → analyze (qualitative vs quantitative) → treat → monitor — output di ciascuna fase
- [ ] Risk treatment options:
  - Avoid: eliminare l'attività che genera il rischio
  - Transfer: assicurazione o contratto (residual risk trasferito)
  - Mitigate: implementare controlli per ridurre probabilità o impatto
  - Accept: documentare e tenere monitorato (risk appetite)
- [ ] Calcolo quantitativo: Asset Value (AV) × Exposure Factor (EF) = Single Loss Expectancy (SLE) → SLE × Annual Rate of Occurrence (ARO) = Annual Loss Expectancy (ALE) — confrontare ALE con costo del controllo
- [ ] Qualitative risk: matrice probabilità × impatto (High/Medium/Low); risk register con risk owner e piano di trattamento
- [ ] Risk appetite vs risk tolerance; residual risk vs inherent risk
- [ ] BIA (Business Impact Analysis): identificare asset critici, determinare RTO/RPO, valutare impatto finanziario/operativo/reputazionale
- [ ] Security awareness (5.6): phishing simulations, training modulare per ruolo, cultura della sicurezza, metriche efficacia (click rate su phishing simulato, completion rate training), insider threat awareness

**Pratica:**
- [ ] Quiz 5.2 (24) + 5.6 (15) = 39 domande
- [ ] Esercizio calcolo: dato scenario con AV, EF, ARO → calcolare SLE e ALE → confrontare con costo del controllo proposto → decisione

**Focus esame:** calcolo ALE; scegliere il risk treatment corretto per scenario; distinguere risk appetite da tolerance; BIA come prerequisito del DR plan.

---

### Giorno 14 — Giovedì 04/06/2026 | Consolidamento completo

**Struttura della giornata:**
- [ ] Aprire il log cumulativo errori: classificare tutti gli errori per dominio e obiettivo
- [ ] Identificare i top 3 obiettivi con più errori → ripasso mirato: rilettura sezione capitolo + flashcard
- [ ] Flash review sintetico per dominio: 5 punti chiave irrinunciabili per ciascuno dei 5 domini
- [ ] Mini simulazione mista a tempo: 30 domande mixed (focus su obiettivi deboli identificati)
- [ ] Revisione tabelle critiche:
  - Algoritmi crittografici: AES / RSA / ECC / SHA-2 / bcrypt
  - Ordine di volatilità forensics
  - Fasi IR (NIST) con prima azione per fase
  - Metriche resilienza: RTO / RPO / MTTR / MTBF
  - Modelli di accesso: RBAC / ABAC / MAC / DAC
  - Calcolo ALE: formula e interpretazione
  - Shared responsibility matrix IaaS/PaaS/SaaS
  - Compliance framework: HIPAA / PCI-DSS / GDPR / SOX — ambito

**Output atteso:** lista finale di punti deboli residui da ripassare la mattina del giorno 15 prima della simulazione.

---

### Giorno 15 — Venerdì 05/06/2026 | Simulazione finale e piano pre-esame

**Mattina (prima della simulazione):**
- [ ] Lettura rapida lista punti deboli residui (max 30 minuti)
- [ ] Nessuna nuova lettura — solo consolidamento

**Simulazione:**
- [ ] Simulazione completa timed: 90 domande in 90 minuti, no interruzioni, modalità esame reale
- [ ] Strategia PBQ (Performance-Based Questions): aprire i PBQ all'inizio per stimare difficoltà, completarli se veloci, flaggarli e tornare se complessi
- [ ] Flag e revisione: flaggare domande incerte, completare tutte le domande rimanenti, revisione finale solo delle flaggate

**Debrief strutturato:**
- [ ] Errori per dominio: calcolare % errori per ciascuno dei 5 domini
- [ ] Causa dell'errore per ciascun sbaglio: mancata conoscenza / distrazione / trappola / concetto confuso con altro simile
- [ ] Confronto con pesi ufficiali esame: se D4 (28%) mostra >30% errori → priorità nelle ultime ore

**Piano pre-esame (da fissare per il giorno dell'esame):**
- Gestione tempo: ~1 minuto per domanda — non bloccarsi su una domanda
- Strategia PBQ: leggere tutti i PBQ nei primi 5 minuti, stimare peso e complessità
- Ordine risposta: domande normali → PBQ → revisione flaggate
- Se due risposte sembrano corrette: scegliere quella più conservativa, più difensiva, o che applica least privilege

---

## Note di progettazione

- [x] Crittografia/PKI posizionata correttamente in **Dominio 1** (obj 1.4, CH7) — non Domain 3
- [x] IAM posizionata correttamente in **Dominio 4** (obj 4.6, CH8) — non Domain 3
- [x] CH6 (Application Security) incluso nel piano al giorno 5 — mancante nella versione precedente
- [x] Argomenti con più quiz concentrati in giorni dedicati: 1.4 (43 q, giorno 2), 4.6 (38 q, giorno 9), 4.3 (38 q, giorno 5)
- [x] Argomenti complessi distribuiti su 2 giorni: Dominio 3 architettura (giorni 6–8), Dominio 4 operations (giorni 9–11), Dominio 5 (giorni 12–13)
- [x] Log cumulativo errori: strumento attivo da giorno 1 — aggiornare dopo ogni sessione quiz
- [x] Obiettivi con pochi quiz (2.5: 6, 4.7: 7, 2.1: 12) completati nel giorno stesso senza sessione dedicata
