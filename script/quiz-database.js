window.quizDatabase = [
  {
    "id": "SCREEN_027",
    "source": "TL",
    "text": "Which of the following security controls is most likely being used when a critical legacy server is segmented into a private network?",
    "opts": [
      {
        "id": "A",
        "t": "Deterrent",
        "c": false
      },
      {
        "id": "B",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "C",
        "t": "Compensating",
        "c": false
      },
      {
        "id": "D",
        "t": "Preventive",
        "c": true
      }
    ],
    "expl": "La segmentazione impedisce l'accesso non autorizzato prima che avvenga → Preventive. Se il contesto specifica impossibilità di patching, la risposta diventa Compensating.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_057",
    "source": "TL",
    "text": "What does the \"A\" in the CIA triad stand for?",
    "opts": [
      {
        "id": "A",
        "t": "Address",
        "c": false
      },
      {
        "id": "B",
        "t": "Availability",
        "c": true
      },
      {
        "id": "C",
        "t": "Attack",
        "c": false
      },
      {
        "id": "D",
        "t": "Accessibility",
        "c": false
      }
    ],
    "expl": "CIA = Confidentiality · Integrity · Availability. La A garantisce che sistemi e dati siano accessibili quando necessario.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_067",
    "source": "TL",
    "text": "Task: Which of the following are correct Mobile Device Security controls? (Select all that apply)",
    "opts": [
      {
        "id": "A",
        "t": "GPS Tracking",
        "c": true
      },
      {
        "id": "B",
        "t": "Remote wipe",
        "c": true
      },
      {
        "id": "C",
        "t": "Device Encryption",
        "c": true
      },
      {
        "id": "D",
        "t": "Strong Passwords",
        "c": true
      }
    ],
    "expl": "Tutte e quattro sono controlli validi: GPS Tracking (Detective), Remote wipe (Corrective), Device Encryption (Preventive), Strong Passwords (Preventive).",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_190",
    "text": "Which of the following tools can assist with detecting an employee who has accidentally emailed a file containing a customer's PII?",
    "opts": [
      {
        "id": "A",
        "t": "SCAP",
        "c": false
      },
      {
        "id": "B",
        "t": "NetFlow",
        "c": false
      },
      {
        "id": "C",
        "t": "Antivirus",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP",
        "c": true
      }
    ],
    "expl": "DLP (Data Loss Prevention) monitora e blocca la trasmissione non autorizzata di dati sensibili → Technical Detective + Preventive. SCAP = compliance scanning. NetFlow = analisi traffico.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_211",
    "text": "Security controls in a data center are being reviewed to ensure data is properly protected and that human life considerations are included. Which of the following best describes how the controls should be set up?",
    "opts": [
      {
        "id": "A",
        "t": "Remote access points should fail closed.",
        "c": false
      },
      {
        "id": "B",
        "t": "Logging controls should fail open.",
        "c": false
      },
      {
        "id": "C",
        "t": "Safety controls should fail open.",
        "c": true
      },
      {
        "id": "D",
        "t": "Logical security controls should fail closed.",
        "c": false
      }
    ],
    "expl": "Controlli di sicurezza fisica per la vita umana devono \"fail open\": in emergenza le porte si sbloccano per l'evacuazione. I controlli informatici: fail closed.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_228",
    "text": "An organization disabled unneeded services and placed a firewall in front of a business-critical legacy system. Which of the following best describes the actions taken by the organization?",
    "opts": [
      {
        "id": "A",
        "t": "Exception",
        "c": false
      },
      {
        "id": "B",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk transfer",
        "c": false
      },
      {
        "id": "D",
        "t": "Compensating controls",
        "c": true
      }
    ],
    "expl": "Il sistema è legacy (non modificabile direttamente). Le misure alternative al controllo primario → Compensating controls.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_232",
    "text": "A security administrator is deploying a DLP solution to prevent the exfiltration of sensitive customer data. Which of the following should the administrator do first?",
    "opts": [
      {
        "id": "A",
        "t": "Block access to cloud storage websites.",
        "c": false
      },
      {
        "id": "B",
        "t": "Create a rule to block outgoing email attachments.",
        "c": false
      },
      {
        "id": "C",
        "t": "Apply classifications to the data.",
        "c": true
      },
      {
        "id": "D",
        "t": "Remove all user permissions from shares on the file server.",
        "c": false
      }
    ],
    "expl": "Senza classificazione il DLP non sa cosa proteggere. Primo passo obbligato: identificare e classificare i dati sensibili.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_239",
    "text": "Which of the following would be the best ways to ensure only authorized personnel can access a secure facility? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Fencing",
        "c": false
      },
      {
        "id": "B",
        "t": "Video surveillance",
        "c": false
      },
      {
        "id": "C",
        "t": "Badge access",
        "c": true
      },
      {
        "id": "D",
        "t": "Access control vestibule",
        "c": true
      },
      {
        "id": "E",
        "t": "Sign-in sheet",
        "c": false
      },
      {
        "id": "F",
        "t": "Sensor",
        "c": false
      }
    ],
    "expl": "Badge access e access control vestibule (mantrap) sono Physical Preventive: verificano l'identità e controllano l'accesso individuale.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_248",
    "text": "After a recent ransomware attack on a company's system, an administrator reviewed the log files. Which of the following control types did the administrator use?",
    "opts": [
      {
        "id": "A",
        "t": "Compensating",
        "c": false
      },
      {
        "id": "B",
        "t": "Detective",
        "c": true
      },
      {
        "id": "C",
        "t": "Preventive",
        "c": false
      },
      {
        "id": "D",
        "t": "Corrective",
        "c": false
      }
    ],
    "expl": "Analizzare i log dopo un attacco rileva informazioni su un evento già avvenuto → Detective.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_275",
    "text": "Visitors to a secured facility are required to check in with a photo ID and enter the facility through an access control vestibule. Which of the following best describes this form of security control?",
    "opts": [
      {
        "id": "A",
        "t": "Physical",
        "c": true
      },
      {
        "id": "B",
        "t": "Managerial",
        "c": false
      },
      {
        "id": "C",
        "t": "Technical",
        "c": false
      },
      {
        "id": "D",
        "t": "Operational",
        "c": false
      }
    ],
    "expl": "L'access control vestibule è un oggetto fisico → categoria Physical. La domanda chiede la categoria, non il tipo.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_277",
    "text": "Which of the following is the best way to secure an on-site data center against intrusion from an insider?",
    "opts": [
      {
        "id": "A",
        "t": "Bollards",
        "c": false
      },
      {
        "id": "B",
        "t": "Access badge",
        "c": true
      },
      {
        "id": "C",
        "t": "Motion sensor",
        "c": false
      },
      {
        "id": "D",
        "t": "Video surveillance",
        "c": false
      }
    ],
    "expl": "Bollards fermano veicoli. Motion sensor e video surveillance = Detective. L'access badge verifica identità → Physical Preventive + Detective.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_314",
    "text": "Which of the following security controls is most likely being used when a critical legacy server is segmented into a private network? [Context: cannot be patched]",
    "opts": [
      {
        "id": "A",
        "t": "Deterrent",
        "c": false
      },
      {
        "id": "B",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "C",
        "t": "Compensating",
        "c": true
      },
      {
        "id": "D",
        "t": "Preventive",
        "c": false
      }
    ],
    "expl": "Il sistema legacy non può ricevere patch: il controllo primario non è praticabile. La segmentazione è alternativa → Compensating. Stesso scenario di  ma wording diverso.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_323",
    "text": "A systems administrator notices that one of the systems critical for processing customer transactions is running an end-of-life operating system. Which of the following techniques would increase enterprise security?",
    "opts": [
      {
        "id": "A",
        "t": "Installing HIDS on the system",
        "c": false
      },
      {
        "id": "B",
        "t": "Placing the system in an isolated VLAN",
        "c": true
      },
      {
        "id": "C",
        "t": "Decommissioning the system",
        "c": false
      },
      {
        "id": "D",
        "t": "Encrypting the system's hard drive",
        "c": false
      }
    ],
    "expl": "Sistema end-of-life critico: non può essere dismesso. Isolarlo in VLAN riduce la superficie di attacco → Compensating control.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_341",
    "text": "To improve the security at a data center, a security administrator implements a CCTV system and posts several signs about the possibility of being filmed. Which of the following best describe these types of controls? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Preventive",
        "c": false
      },
      {
        "id": "B",
        "t": "Deterrent",
        "c": true
      },
      {
        "id": "C",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "D",
        "t": "Directive",
        "c": false
      },
      {
        "id": "E",
        "t": "Compensating",
        "c": false
      },
      {
        "id": "F",
        "t": "Detective",
        "c": true
      }
    ],
    "expl": "I cartelli scoraggiano → Deterrent. Le registrazioni CCTV identificano chi ha agito → Detective.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_366",
    "source": "TL",
    "text": "A network team segmented a critical, end-of-life server to a VLAN that can only be reached by specific devices but cannot be reached by the perimeter network. Which of the following best describe the controls the team implemented? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Managerial",
        "c": false
      },
      {
        "id": "B",
        "t": "Physical",
        "c": false
      },
      {
        "id": "C",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "D",
        "t": "Detective",
        "c": false
      },
      {
        "id": "E",
        "t": "Compensating",
        "c": true
      },
      {
        "id": "F",
        "t": "Technical",
        "c": true
      },
      {
        "id": "G",
        "t": "Deterrent",
        "c": false
      }
    ],
    "expl": "La VLAN è tecnologia di rete → Technical. Il server è end-of-life, il patching non è praticabile → Compensating.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_383",
    "text": "Which of the following is considered a preventive control?",
    "opts": [
      {
        "id": "A",
        "t": "Configuration auditing",
        "c": false
      },
      {
        "id": "B",
        "t": "Log correlation",
        "c": false
      },
      {
        "id": "C",
        "t": "Incident alerts",
        "c": false
      },
      {
        "id": "D",
        "t": "Segregation of duties",
        "c": true
      }
    ],
    "expl": "Auditing, log correlation e alerts = Detective. La segregation of duties impedisce frodi → Operational Preventive.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_410",
    "text": "Which of the following physical controls can be used to both detect and deter? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Lighting",
        "c": true
      },
      {
        "id": "B",
        "t": "Fencing",
        "c": false
      },
      {
        "id": "C",
        "t": "Signage",
        "c": false
      },
      {
        "id": "D",
        "t": "Sensor",
        "c": true
      },
      {
        "id": "E",
        "t": "Bollard",
        "c": false
      },
      {
        "id": "F",
        "t": "Lock",
        "c": false
      }
    ],
    "expl": "Lighting: riduce anonimato (Deterrent) + migliora visibilità telecamere (Detective). Sensor: rileva movimento (Detective) + scoraggia (Deterrent).",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_438",
    "text": "Which of the following control types is AUP an example of?",
    "opts": [
      {
        "id": "A",
        "t": "Physical",
        "c": false
      },
      {
        "id": "B",
        "t": "Managerial",
        "c": true
      },
      {
        "id": "C",
        "t": "Technical",
        "c": false
      },
      {
        "id": "D",
        "t": "Operational",
        "c": false
      }
    ],
    "expl": "L'AUP è un documento di governance → Managerial (categoria). Per tipo è Directive. Non è software né attività quotidiana.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_466",
    "text": "A company installed cameras and added signs to alert visitors that they are being recorded. Which of the following controls did the company implement? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Directive",
        "c": false
      },
      {
        "id": "B",
        "t": "Deterrent",
        "c": true
      },
      {
        "id": "C",
        "t": "Preventive",
        "c": false
      },
      {
        "id": "D",
        "t": "Detective",
        "c": true
      },
      {
        "id": "E",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "F",
        "t": "Technical",
        "c": false
      }
    ],
    "expl": "I cartelli scoraggiano → Deterrent. Le telecamere registrano → Detective. La domanda chiede il tipo → Technical è la categoria, non il tipo.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_476",
    "text": "Which of the following is a preventive physical security control?",
    "opts": [
      {
        "id": "A",
        "t": "Video surveillance system",
        "c": false
      },
      {
        "id": "B",
        "t": "Bollards",
        "c": true
      },
      {
        "id": "C",
        "t": "Alarm system",
        "c": false
      },
      {
        "id": "D",
        "t": "Motion sensors",
        "c": false
      }
    ],
    "expl": "Video surveillance = Deterrent + Detective. Alarm e motion sensors = Detective. I bollards bloccano fisicamente i veicoli → Physical Preventive.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_511",
    "text": "A malicious insider from the marketing team alters records and transfers company funds to a personal account. Which of the following methods would be the best way to secure company records in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Permission restrictions",
        "c": true
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "C",
        "t": "Input validation",
        "c": false
      },
      {
        "id": "D",
        "t": "Access control list",
        "c": false
      }
    ],
    "expl": "Le permission restrictions limitano chi può accedere e modificare i record → Preventive. Hashing verifica integrità ma non impedisce modifiche da chi è autorizzato.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_543",
    "text": "Which of the following is a compensating control for providing user access to a high-risk website?",
    "opts": [
      {
        "id": "A",
        "t": "Enabling threat prevention features on the firewall",
        "c": true
      },
      {
        "id": "B",
        "t": "Configuring a SIEM tool to capture all web traffic",
        "c": false
      },
      {
        "id": "C",
        "t": "Setting firewall rules to allow traffic from any port to that destination",
        "c": false
      },
      {
        "id": "D",
        "t": "Blocking that website on the endpoint protection software",
        "c": false
      }
    ],
    "expl": "L'utente deve accedere al sito (business need): bloccare non è praticabile. Abilitare threat prevention mitiga il rischio → Compensating. B (SIEM) è Detective.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_554",
    "text": "An organization needs to determine how many employees are accessing the building each day in order to configure the proper access controls. Which of the following control types best meets this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "Detective",
        "c": true
      },
      {
        "id": "B",
        "t": "Preventive",
        "c": false
      },
      {
        "id": "C",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "D",
        "t": "Directive",
        "c": false
      }
    ],
    "expl": "L'obiettivo è raccogliere dati (chi entra e quando) → Detective. Un badge system con log di accesso soddisfa il requisito.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_606",
    "text": "An alert references attacks associated with a zero-day exploit. An analyst places a bastion host in the network to reduce the risk of the exploit. Which of the following types of controls is the analyst implementing?",
    "opts": [
      {
        "id": "A",
        "t": "Compensating",
        "c": true
      },
      {
        "id": "B",
        "t": "Detective",
        "c": false
      },
      {
        "id": "C",
        "t": "Operational",
        "c": false
      },
      {
        "id": "D",
        "t": "Physical",
        "c": false
      }
    ],
    "expl": "Per un zero-day non esiste ancora patch: il controllo primario non è disponibile. Il bastion host è alternativa temporanea → Compensating. C (Operational) è la categoria, non il tipo.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_639",
    "text": "Which of the following are the best security controls for controlling on-premises access? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Swipe card",
        "c": true
      },
      {
        "id": "B",
        "t": "Picture ID",
        "c": false
      },
      {
        "id": "C",
        "t": "Phone authentication application",
        "c": false
      },
      {
        "id": "D",
        "t": "Biometric scanner",
        "c": true
      },
      {
        "id": "E",
        "t": "Camera",
        "c": false
      },
      {
        "id": "F",
        "t": "Memorable question",
        "c": false
      }
    ],
    "expl": "Swipe card e biometric scanner sono Physical Preventive: verificano l'identità in modo affidabile e automatico. Camera = Detective.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_644",
    "text": "To which of the following security categories does an EDR solution belong?",
    "opts": [
      {
        "id": "A",
        "t": "Physical",
        "c": false
      },
      {
        "id": "B",
        "t": "Operational",
        "c": false
      },
      {
        "id": "C",
        "t": "Managerial",
        "c": false
      },
      {
        "id": "D",
        "t": "Technical",
        "c": true
      }
    ],
    "expl": "EDR è software installato sull'endpoint che opera automaticamente → Technical. Per tipo è Detective (rileva) e Corrective (isola l'host).",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_646",
    "text": "An organization has a new regulatory requirement to implement corrective controls on a financial system. Which of the following is the most likely reason for the new requirement?",
    "opts": [
      {
        "id": "A",
        "t": "To defend against insider threats altering banking details",
        "c": false
      },
      {
        "id": "B",
        "t": "To ensure that errors are not passed to other systems",
        "c": true
      },
      {
        "id": "C",
        "t": "To allow for business insurance to be purchased",
        "c": false
      },
      {
        "id": "D",
        "t": "To prevent unauthorized changes to financial data",
        "c": false
      }
    ],
    "expl": "I controlli correttivi minimizzano le conseguenze di errori già avvenuti. Evitare la propagazione degli errori = funzione tipica del Corrective. A e D sono scopi Preventive.",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_068",
    "text": "Task: Which of the following are correct Server in Data Center Security controls? (Select all that apply)",
    "opts": [
      {
        "id": "A",
        "t": "FM-200",
        "c": true
      },
      {
        "id": "B",
        "t": "Biometrics",
        "c": true
      },
      {
        "id": "C",
        "t": "Proximity Badges",
        "c": true
      },
      {
        "id": "D",
        "t": "Mantrap",
        "c": true
      }
    ],
    "expl": "FM-200 = Physical Corrective (spegne incendi). Biometrics + Proximity Badges + Mantrap = Physical Preventive (controllano l'accesso fisico).",
    "domain": 1,
    "objective": "1.1"
  },
  {
    "id": "SCREEN_095",
    "source": "TL",
    "text": "Which of the following security concepts is accomplished when granting access after an individual has logged into a computer network?",
    "opts": [
      {
        "id": "A",
        "t": "Authorization",
        "c": true
      },
      {
        "id": "B",
        "t": "Identification",
        "c": false
      },
      {
        "id": "C",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "D",
        "t": "Authentication",
        "c": false
      }
    ],
    "expl": "Il login verifica l'identità (Authentication). Ciò che avviene dopo — decidere cosa l'utente può fare — è Authorization. Le due fasi sono sequenziali e distinte.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_108",
    "source": "TL",
    "text": "You have been tasked with conducting a security assessment of hosts on an IP subnet. When configuring the vulnerability scan, you enter valid credentials. A colleague suggests the scan results are useless since the credentials were known. Which IT security concept validates the scan results?",
    "opts": [
      {
        "id": "A",
        "t": "Zero trust",
        "c": true
      },
      {
        "id": "B",
        "t": "Principle of least privilege",
        "c": false
      },
      {
        "id": "C",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "D",
        "t": "Zero-day",
        "c": false
      }
    ],
    "expl": "Zero Trust assume che ogni sistema debba essere verificato e testato, anche dall'interno. Usare credenziali valide per una scansione autenticata è coerente con il paradigma: \"verificare sempre\", indipendentemente dalla posizione o dall'identità.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_114",
    "text": "A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. The company prefers to use domain credentials to access new SaaS applications. Which of the following methods would allow this functionality?",
    "opts": [
      {
        "id": "A",
        "t": "SSO",
        "c": true
      },
      {
        "id": "B",
        "t": "LEAP",
        "c": false
      },
      {
        "id": "C",
        "t": "MFA",
        "c": false
      },
      {
        "id": "D",
        "t": "PEAP",
        "c": false
      }
    ],
    "expl": "SSO (Single Sign-On) permette di usare un'unica autenticazione (le credenziali di dominio) per accedere a più applicazioni SaaS. MFA aumenta la sicurezza dell'accesso ma non riduce il numero di credenziali. LEAP e PEAP sono protocolli EAP per reti Wi-Fi.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_131",
    "text": "A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. The company prefers to use domain credentials to access new SaaS applications. Which of the following methods would allow this functionality?",
    "opts": [
      {
        "id": "A",
        "t": "SSO",
        "c": true
      },
      {
        "id": "B",
        "t": "LEAP",
        "c": false
      },
      {
        "id": "C",
        "t": "MFA",
        "c": false
      },
      {
        "id": "D",
        "t": "PEAP",
        "c": false
      }
    ],
    "expl": "Stessa domanda di . SSO federated (es. SAML con Active Directory) è esattamente il pattern descritto: le credenziali di dominio vengono usate come identity provider per i SaaS applicativi.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_144",
    "text": "An analyst is evaluating the implementation of Zero Trust principles within the data plane. Which of the following would be most relevant for the analyst to evaluate?",
    "opts": [
      {
        "id": "A",
        "t": "Secured zones",
        "c": false
      },
      {
        "id": "B",
        "t": "Subject role",
        "c": true
      },
      {
        "id": "C",
        "t": "Adaptive identity",
        "c": false
      },
      {
        "id": "D",
        "t": "Threat scope reduction",
        "c": false
      }
    ],
    "expl": "Il Data Plane include Subject/System, Policy Enforcement Point e il concetto di Implicit Trust Zones. \"Subject role\" si riferisce al componente Subject nel Data Plane. Adaptive identity e Threat scope reduction appartengono al Control Plane.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_280",
    "text": "A network administrator is working on a project to deploy a load balancer in the company's cloud environment. Which of the following fundamental security requirements does this project fulfill?",
    "opts": [
      {
        "id": "A",
        "t": "Privacy",
        "c": false
      },
      {
        "id": "B",
        "t": "Integrity",
        "c": false
      },
      {
        "id": "C",
        "t": "Confidentiality",
        "c": false
      },
      {
        "id": "D",
        "t": "Availability",
        "c": true
      }
    ],
    "expl": "Un load balancer distribuisce il traffico su più server, eliminando il single point of failure. Questo protegge la Availability: i servizi rimangono accessibili anche se un server cade. Non cifra dati (non Confidentiality) né verifica l'integrità.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_309",
    "text": "Client files can only be accessed by employees who need to know the information and have specified roles in the company. Which of the following best describes this security concept?",
    "opts": [
      {
        "id": "A",
        "t": "Availability",
        "c": false
      },
      {
        "id": "B",
        "t": "Confidentiality",
        "c": true
      },
      {
        "id": "C",
        "t": "Integrity",
        "c": false
      },
      {
        "id": "D",
        "t": "Non-repudiation",
        "c": false
      }
    ],
    "expl": "\"Need to know\" + \"ruoli specifici\" = accesso limitato alle sole persone autorizzate → Confidentiality. Il principio need-to-know è una delle implementazioni classiche della riservatezza.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_338",
    "text": "A healthcare organization wants to provide a web application that allows individuals to digitally report health emergencies. Which of the following is the most important consideration during development?",
    "opts": [
      {
        "id": "A",
        "t": "Scalability",
        "c": false
      },
      {
        "id": "B",
        "t": "Availability",
        "c": true
      },
      {
        "id": "C",
        "t": "Cost",
        "c": false
      },
      {
        "id": "D",
        "t": "Ease of deployment",
        "c": false
      }
    ],
    "expl": "Un'applicazione per segnalare emergenze sanitarie che va offline può costare vite umane. La Availability è il requisito prioritario assoluto: il sistema deve funzionare sempre, soprattutto nelle emergenze.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_470",
    "text": "Which of the following security concepts is being followed when implementing a product that offers protection against DDoS attacks?",
    "opts": [
      {
        "id": "A",
        "t": "Availability",
        "c": true
      },
      {
        "id": "B",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "C",
        "t": "Integrity",
        "c": false
      },
      {
        "id": "D",
        "t": "Confidentiality",
        "c": false
      }
    ],
    "expl": "Un attacco DDoS mira a rendere un servizio irraggiungibile → viola la Availability. Difendersi da DDoS significa proteggere la Availability. Il prodotto (CDN, anti-DDoS) garantisce che il servizio rimanga accessibile anche sotto attacco.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_493",
    "text": "Which of the following data states applies to data that is being actively processed by a database server?",
    "opts": [
      {
        "id": "A",
        "t": "In use",
        "c": true
      },
      {
        "id": "B",
        "t": "At rest",
        "c": false
      },
      {
        "id": "C",
        "t": "In transit",
        "c": false
      },
      {
        "id": "D",
        "t": "Being hashed",
        "c": false
      }
    ],
    "expl": "\"Actively processed\" = il dato è in memoria RAM, letto e manipolato dal processore del database → stato In use. At rest = sul disco. In transit = sulla rete. \"Being hashed\" non è uno stato standard del ciclo di vita del dato.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_500",
    "text": "Which of the following is the primary purpose of a service that tracks log-ins and time spent using the service?",
    "opts": [
      {
        "id": "A",
        "t": "Availability",
        "c": false
      },
      {
        "id": "B",
        "t": "Accounting",
        "c": true
      },
      {
        "id": "C",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "D",
        "t": "Authorization",
        "c": false
      }
    ],
    "expl": "Tracciare login e tempo di utilizzo è esattamente la funzione di Accounting nel framework AAA: registra chi ha fatto cosa e per quanto tempo. Non è Authentication (verifica identità) né Authorization (decide i permessi).",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_524",
    "text": "Which of the following would most likely be deployed to obtain and analyze attacker activity and techniques?",
    "opts": [
      {
        "id": "A",
        "t": "Firewall",
        "c": false
      },
      {
        "id": "B",
        "t": "IDS",
        "c": false
      },
      {
        "id": "C",
        "t": "Honeypot",
        "c": true
      },
      {
        "id": "D",
        "t": "Layer 3 switch",
        "c": false
      }
    ],
    "expl": "Un honeypot è progettato esattamente per questo: attirare gli attaccanti, registrare ogni loro azione e fornire intelligence sulle tecniche usate. IDS rileva le intrusioni ma non le \"studia\" in un ambiente controllato.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_587",
    "text": "A company discovers suspicious transactions that were entered into the company's database and attached to a user account that was created as a trap for malicious activity. Which of the following is the user account an example of?",
    "opts": [
      {
        "id": "A",
        "t": "Honeytoken",
        "c": true
      },
      {
        "id": "B",
        "t": "Honeynet",
        "c": false
      },
      {
        "id": "C",
        "t": "Honeypot",
        "c": false
      },
      {
        "id": "D",
        "t": "Honeyfile",
        "c": false
      }
    ],
    "expl": "Un account utente creato appositamente come trappola (esca) in un database → Honeytoken. Honeypot = sistema/server fittizio. Honeyfile = file esca. Honeynet = rete di honeypot. La chiave è \"account creato come trap\" → trappola a livello di credenziale/record.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_609",
    "text": "A security administrator is implementing encryption on all hard drives in an organization. Which of the following security concepts is the administrator applying?",
    "opts": [
      {
        "id": "A",
        "t": "Integrity",
        "c": false
      },
      {
        "id": "B",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "C",
        "t": "Zero Trust",
        "c": false
      },
      {
        "id": "D",
        "t": "Confidentiality",
        "c": true
      }
    ],
    "expl": "La cifratura del disco (full-disk encryption) protegge i dati at rest garantendo che solo chi ha la chiave possa leggerli → Confidentiality. Non verifica l'identità (non Authentication) né impedisce la modifica in modo verificabile (non Integrity).",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_630",
    "text": "Which of the following security concepts is accomplished when granting access after an individual has logged into a computer network?",
    "opts": [
      {
        "id": "A",
        "t": "Authorization",
        "c": true
      },
      {
        "id": "B",
        "t": "Identification",
        "c": false
      },
      {
        "id": "C",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "D",
        "t": "Authentication",
        "c": false
      }
    ],
    "expl": "\"Granting access after logging in\" = la fase post-autenticazione in cui si decidono i permessi → Authorization. Il login stesso è Authentication.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_686",
    "text": "An organization designs an inbound firewall with a fail-open configuration while implementing a website. Which of the following would the organization consider to be the highest priority?",
    "opts": [
      {
        "id": "A",
        "t": "Confidentiality",
        "c": false
      },
      {
        "id": "B",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "C",
        "t": "Availability",
        "c": true
      },
      {
        "id": "D",
        "t": "Integrity",
        "c": false
      }
    ],
    "expl": "Fail-open significa che in caso di guasto il firewall consente tutto il traffico, privilegiando la continuità del servizio sulla sicurezza. La priorità dichiarata è la Availability: il sito deve essere raggiungibile anche se il firewall ha un problema.",
    "domain": 1,
    "objective": "1.2"
  },
  {
    "id": "SCREEN_013",
    "source": "TL",
    "text": "A technician needs to apply a high-priority patch to a production system. Which of the following steps should be taken first?",
    "opts": [
      {
        "id": "A",
        "t": "Air gap the system",
        "c": false
      },
      {
        "id": "B",
        "t": "Move the system to a different network segment",
        "c": false
      },
      {
        "id": "C",
        "t": "Create a change control request",
        "c": true
      },
      {
        "id": "D",
        "t": "Apply the patch to the system",
        "c": false
      }
    ],
    "expl": "Anche per una patch ad alta priorità, il primo passo obbligatorio è creare una change control request. Il processo di change management viene prima dell'azione tecnica, anche in caso di urgenza.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_017",
    "source": "TL",
    "text": "Which of the following describes effective change management procedures?",
    "opts": [
      {
        "id": "A",
        "t": "Approving the change after a successful deployment",
        "c": false
      },
      {
        "id": "B",
        "t": "Having a backout plan when a patch fails",
        "c": true
      },
      {
        "id": "C",
        "t": "Using a spreadsheet for tracking changes",
        "c": false
      },
      {
        "id": "D",
        "t": "Using an automatic change control bypass for security updates",
        "c": false
      }
    ],
    "expl": "Un backout plan è il requisito fondamentale di un change management efficace: garantisce che il sistema possa essere ripristinato allo stato precedente se la modifica fallisce. Approvare dopo il deployment è troppo tardi. Il bypass automatico elimina il controllo. Il foglio di calcolo non è una soluzione scalabile.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_088",
    "source": "TL",
    "text": "Which of the following should a security administrator adhere to when setting up a new set of firewall rules?",
    "opts": [
      {
        "id": "A",
        "t": "Disaster recovery plan",
        "c": false
      },
      {
        "id": "B",
        "t": "Incident response procedure",
        "c": false
      },
      {
        "id": "C",
        "t": "Business continuity plan",
        "c": false
      },
      {
        "id": "D",
        "t": "Change management procedure",
        "c": true
      }
    ],
    "expl": "Configurare nuove regole del firewall è una modifica a un sistema di produzione critico → deve seguire la change management procedure. Il DR plan si attiva dopo un disastro. L'IR procedure si attiva dopo un incidente. Il BCP garantisce la continuità operativa in scenari di crisi.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_156",
    "text": "Which of the following should a security administrator adhere to when setting up a new set of firewall rules?",
    "opts": [
      {
        "id": "A",
        "t": "Disaster recovery plan",
        "c": false
      },
      {
        "id": "B",
        "t": "Incident response procedure",
        "c": false
      },
      {
        "id": "C",
        "t": "Business continuity plan",
        "c": false
      },
      {
        "id": "D",
        "t": "Change management procedure",
        "c": true
      }
    ],
    "expl": "Qualsiasi modifica alla configurazione di sicurezza — incluse le regole firewall — deve seguire la change management procedure per garantire approvazione, test, documentazione e possibilità di rollback.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_169",
    "text": "A technician needs to apply a high-priority patch to a production system. Which of the following steps should be taken first?",
    "opts": [
      {
        "id": "A",
        "t": "Air gap the system",
        "c": false
      },
      {
        "id": "B",
        "t": "Move the system to a different network segment",
        "c": false
      },
      {
        "id": "C",
        "t": "Create a change control request",
        "c": true
      },
      {
        "id": "D",
        "t": "Apply the patch to the system",
        "c": false
      }
    ],
    "expl": "La sequenza corretta è: (1) change control request → (2) approvazione → (3) test in non-production → (4) implementazione in production con backout plan pronto. L'urgenza non giustifica il bypass del processo.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_175",
    "text": "While troubleshooting a firewall configuration, a technician determines that a \"deny any\" policy should be added to the bottom of the ACL. The technician updates the policy, but the new policy causes several company servers to become unreachable. Which of the following actions would prevent this issue?",
    "opts": [
      {
        "id": "A",
        "t": "Documenting the new policy in a change request and submitting the request to change management",
        "c": false
      },
      {
        "id": "B",
        "t": "Testing the policy in a non-production environment before enabling the policy in the production network",
        "c": true
      },
      {
        "id": "C",
        "t": "Disabling any intrusion prevention signatures on the \"deny any\" policy prior to enabling the new policy",
        "c": false
      },
      {
        "id": "D",
        "t": "Including an \"allow any\" policy above the \"deny any\" policy",
        "c": false
      }
    ],
    "expl": "Il test in ambiente non-production avrebbe rivelato che la regola \"deny any\" bloccava i server interni non esplicitamente permessi. La documentazione (opzione A) è necessaria ma non avrebbe prevenuto il problema tecnico: il test sì. Disabilitare IPS o aggiungere \"allow any\" sono soluzioni tecnicamente errate o controproducenti.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_260",
    "text": "Which of the following best practices gives administrators a set period to perform changes to an operational system to ensure availability and minimize business impacts?",
    "opts": [
      {
        "id": "A",
        "t": "Impact analysis",
        "c": false
      },
      {
        "id": "B",
        "t": "Scheduled downtime",
        "c": true
      },
      {
        "id": "C",
        "t": "Backout plan",
        "c": false
      },
      {
        "id": "D",
        "t": "Change management boards",
        "c": false
      }
    ],
    "expl": "Uno \"scheduled downtime\" è il periodo pre-definito in cui il sistema è reso temporaneamente non disponibile per permettere le modifiche. Garantisce disponibilità minimizzando l'impatto sul business concentrando l'indisponibilità in orari di bassa attività.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_292",
    "text": "A systems administrator would like to deploy a change to a production system. Which of the following must the administrator submit to demonstrate that the system can be restored to a working state in the event of a performance issue?",
    "opts": [
      {
        "id": "A",
        "t": "Backout plan",
        "c": true
      },
      {
        "id": "B",
        "t": "Impact analysis",
        "c": false
      },
      {
        "id": "C",
        "t": "Test procedure",
        "c": false
      },
      {
        "id": "D",
        "t": "Approval procedure",
        "c": false
      }
    ],
    "expl": "Il backout plan è il documento che descrive come ripristinare il sistema allo stato funzionante precedente in caso di problemi. È il requisito specifico per dimostrare che esiste un piano di recupero — diverso dall'impact analysis (che valuta i rischi) o dal test procedure (che descrive i test).",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_297",
    "text": "Which of the following describes effective change management procedures?",
    "opts": [
      {
        "id": "A",
        "t": "Approving the change after a successful deployment",
        "c": false
      },
      {
        "id": "B",
        "t": "Having a backout plan when a patch fails",
        "c": true
      },
      {
        "id": "C",
        "t": "Using a spreadsheet for tracking changes",
        "c": false
      },
      {
        "id": "D",
        "t": "Using an automatic change control bypass for security updates",
        "c": false
      }
    ],
    "expl": "Il backout plan è il requisito fondamentale di qualsiasi change management efficace. Approvare dopo il deployment è tardivo e non preventivo. Il bypass automatico elimina la supervisione. Il foglio di calcolo non è un sistema di change management formale.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_356",
    "text": "After creating a contract for IT contractors, the human resources department changed several clauses. The contract has gone through three revisions. Which of the following processes should the human resources department follow to track revisions?",
    "opts": [
      {
        "id": "A",
        "t": "Version validation",
        "c": false
      },
      {
        "id": "B",
        "t": "Version changes",
        "c": false
      },
      {
        "id": "C",
        "t": "Version updates",
        "c": false
      },
      {
        "id": "D",
        "t": "Version control",
        "c": true
      }
    ],
    "expl": "Il version control è il processo formale per tracciare le revisioni di documenti nel tempo: chi ha modificato cosa, quando, e qual era il contenuto precedente. Si applica a contratti, policy, configurazioni e codice — non solo al software. Le altre opzioni non sono terminologia standard di change management.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_416",
    "text": "During an annual review of the system design, an engineer identified a few issues with the currently released design. Which of the following should be performed next according to best practices?",
    "opts": [
      {
        "id": "A",
        "t": "Risk management process",
        "c": false
      },
      {
        "id": "B",
        "t": "Product design process",
        "c": false
      },
      {
        "id": "C",
        "t": "Design review process",
        "c": false
      },
      {
        "id": "D",
        "t": "Change control process",
        "c": true
      }
    ],
    "expl": "Identificare problemi in un design già rilasciato e volerli correggere costituisce una modifica a un sistema esistente → deve seguire il change control process. Il risk management avviene prima (identifica i rischi, non gestisce le modifiche). Il design review process avviene prima del rilascio, non dopo.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_437",
    "text": "Which of the following topics would most likely be included within an organization's SDLC?",
    "opts": [
      {
        "id": "A",
        "t": "Service-level agreements",
        "c": false
      },
      {
        "id": "B",
        "t": "Information security policy",
        "c": false
      },
      {
        "id": "C",
        "t": "Penetration testing methodology",
        "c": false
      },
      {
        "id": "D",
        "t": "Branch protection requirements",
        "c": true
      }
    ],
    "expl": "Le branch protection requirements sono un controllo direttamente integrato nel ciclo di sviluppo software (SDLC): impediscono modifiche non approvate ai branch critici del repository, applicando change management al processo di sviluppo. SLA, policy di sicurezza e pentest methodology sono argomenti correlati ma non specifici dell'SDLC.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_445",
    "text": "Which of the following would a systems administrator follow when upgrading the firmware of an organization's router?",
    "opts": [
      {
        "id": "A",
        "t": "Software development life cycle",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk tolerance",
        "c": false
      },
      {
        "id": "C",
        "t": "Certificate signing request",
        "c": false
      },
      {
        "id": "D",
        "t": "Maintenance window",
        "c": true
      }
    ],
    "expl": "L'aggiornamento del firmware di un router di produzione è una modifica critica che richiede il riavvio del dispositivo → deve essere eseguita durante una maintenance window per minimizzare l'impatto sul business. L'SDLC è per lo sviluppo software. La risk tolerance è un concetto strategico. Il CSR è per i certificati TLS.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_621",
    "text": "Which of the following steps should be taken before mitigating a vulnerability in a production server?",
    "opts": [
      {
        "id": "A",
        "t": "Escalate the issue to the SDLC team",
        "c": false
      },
      {
        "id": "B",
        "t": "Use the IR plan to evaluate the changes",
        "c": false
      },
      {
        "id": "C",
        "t": "Perform a risk assessment to classify the vulnerability",
        "c": false
      },
      {
        "id": "D",
        "t": "Refer to the change management policy",
        "c": true
      }
    ],
    "expl": "Prima di applicare qualsiasi mitigazione a un server di produzione — anche per una vulnerabilità nota — si deve seguire la change management policy. Il risk assessment potrebbe essere già stato fatto (la vulnerabilità è identificata). L'IR plan si attiva per gli incidenti in corso, non per le patch pianificate. L'SDLC team non è responsabile delle patch di produzione.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_674",
    "text": "Prior to implementing a design change, the change must go through multiple steps to ensure that it does not cause any security issues. Which of the following is most likely to be one of those steps?",
    "opts": [
      {
        "id": "A",
        "t": "Board review",
        "c": false
      },
      {
        "id": "B",
        "t": "Service restart",
        "c": false
      },
      {
        "id": "C",
        "t": "Backout planning",
        "c": true
      },
      {
        "id": "D",
        "t": "Maintenance",
        "c": false
      }
    ],
    "expl": "Il backout planning è un passo obbligatorio nel processo di change management prima di implementare qualsiasi modifica: garantisce che esista una procedura per tornare allo stato precedente se la modifica causa problemi. Il \"board review\" non è terminologia standard. Il service restart avviene durante, non prima. La maintenance avviene dopo.",
    "domain": 1,
    "objective": "1.3"
  },
  {
    "id": "SCREEN_007",
    "text": "Which of the following is used to add extra complexity before using a one way data transformation algorithm?",
    "opts": [
      {
        "id": "A",
        "t": "Salting",
        "c": true
      },
      {
        "id": "B",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Key stretching",
        "c": false
      },
      {
        "id": "D",
        "t": "Steganography",
        "c": false
      }
    ],
    "expl": "Il salting (inserimento di un valore casuale prima dell'hashing) aumenta la complessità delle password per sventare attacchi precomputati quali rainbow table o dizionari di hash.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_026",
    "text": "A company wants to ensure that the software it develops will not be tampered with after the final version is completed. Which of the following should the company most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": true
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "D",
        "t": "Baselines",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_033",
    "text": "During a penetration test, a flaw in the internal PKI was exploited to gain domain administrator rights using specially crafted certificates. Which of the following remediation tasks should be completed as part of the cleanup phase?",
    "opts": [
      {
        "id": "A",
        "t": "Changing passwords",
        "c": false
      },
      {
        "id": "B",
        "t": "Updating the CRL",
        "c": true
      },
      {
        "id": "C",
        "t": "Implementing SOAR",
        "c": false
      },
      {
        "id": "D",
        "t": "Patching the CA",
        "c": false
      }
    ],
    "expl": "La CRL (Certificate Revocation List) è una lista firmata dalla CA che contiene i numeri di serie dei certificati revocati primariamente rispetto alla scadenza naturale. Richiede download periodici da parte del client.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_048",
    "text": "You have been tasked with planning a solution where cryptographic key generation and web application cryptographic operations are centralized on the network. What should you implement?",
    "opts": [
      {
        "id": "A",
        "t": "HSM",
        "c": true
      },
      {
        "id": "B",
        "t": "TPM",
        "c": false
      },
      {
        "id": "C",
        "t": "Certificate authority",
        "c": false
      },
      {
        "id": "D",
        "t": "Blockchain",
        "c": false
      }
    ],
    "expl": "L'HSM (Hardware Security Module) è un dispositivo crittografico fisico centralizzato a livello di rete usato per gestire, proteggere ed eseguire operazioni crittografiche ad alte prestazioni.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_051",
    "text": "What are two major causes of weak encryption?",
    "opts": [
      {
        "id": "A",
        "t": "Storing public keys in the cloud and using TLS 1.3",
        "c": false
      },
      {
        "id": "B",
        "t": "Developing your own, proprietary algorithm and using weak cipher suites",
        "c": true
      },
      {
        "id": "C",
        "t": "Using encryption over wireless networks and using quantum computers",
        "c": false
      },
      {
        "id": "D",
        "t": "Using 256-bit keys and rotating keys frequently",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: Developing your own, proprietary algorithm and using weak cipher suites. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_065",
    "text": "When information is converted to an unreadable state using cryptography, in what form is the information?",
    "opts": [
      {
        "id": "A",
        "t": "Plaintext",
        "c": false
      },
      {
        "id": "B",
        "t": "Ciphertext",
        "c": true
      },
      {
        "id": "C",
        "t": "Message digest",
        "c": false
      },
      {
        "id": "D",
        "t": "Hash",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: Ciphertext. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_100",
    "text": "Which of the following are characteristics of hashing? (Select three choices)",
    "opts": [
      {
        "id": "A",
        "t": "Hashing can be used to protect data integrity.",
        "c": true
      },
      {
        "id": "B",
        "t": "Hashes are cryptographic representations of plaintext.",
        "c": true
      },
      {
        "id": "C",
        "t": "Hashes are decrypted using the same algorithm and key that encrypted them.",
        "c": false
      },
      {
        "id": "D",
        "t": "Hashes produce fixed-length digests for variable-length text.",
        "c": true
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_105",
    "text": "Which of the following DES/AES encryption modes is considered the weakest?",
    "opts": [
      {
        "id": "A",
        "t": "OFB",
        "c": false
      },
      {
        "id": "B",
        "t": "ECB",
        "c": true
      },
      {
        "id": "C",
        "t": "CTR",
        "c": false
      },
      {
        "id": "D",
        "t": "CBC",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: ECB. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_111",
    "text": "Which of the following is used to add extra complexity before using a one-way data transformation algorithm?",
    "opts": [
      {
        "id": "A",
        "t": "Key stretching",
        "c": false
      },
      {
        "id": "B",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Steganography",
        "c": false
      },
      {
        "id": "D",
        "t": "Salting",
        "c": true
      }
    ],
    "expl": "Il salting (inserimento di un valore casuale prima dell'hashing) aumenta la complessità delle password per sventare attacchi precomputati quali rainbow table o dizionari di hash.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_128",
    "text": "Which of the following is used to add extra complexity before using a one-way data transformation algorithm?",
    "opts": [
      {
        "id": "A",
        "t": "Key stretching",
        "c": false
      },
      {
        "id": "B",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Steganography",
        "c": false
      },
      {
        "id": "D",
        "t": "Salting",
        "c": true
      }
    ],
    "expl": "Il salting (inserimento di un valore casuale prima dell'hashing) aumenta la complessità delle password per sventare attacchi precomputati quali rainbow table o dizionari di hash.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_152",
    "text": "A security administrator would like to protect data on employees’ laptops. Which of the following encryption techniques should the security administrator use?",
    "opts": [
      {
        "id": "A",
        "t": "Partition",
        "c": false
      },
      {
        "id": "B",
        "t": "Asymmetric",
        "c": false
      },
      {
        "id": "C",
        "t": "Full disk",
        "c": true
      },
      {
        "id": "D",
        "t": "Database",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: Full disk. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_182",
    "text": "A software development manager wants to ensure the authenticity of the code created by the company. Which of the following options is the most appropriate?",
    "opts": [
      {
        "id": "A",
        "t": "Testing input validation on the user input fields",
        "c": false
      },
      {
        "id": "B",
        "t": "Performing code signing on company-developed software",
        "c": true
      },
      {
        "id": "C",
        "t": "Performing static code analysis on the software",
        "c": false
      },
      {
        "id": "D",
        "t": "Ensuring secure cookies are use",
        "c": false
      }
    ],
    "expl": "La firma digitale fornisce autenticità dell'origine, integrità dei dati e non-ripudio. Si ottiene cifrando l'hash del documento con la chiave privata del mittente. Chiunque può verificarla usando la chiave pubblica del mittente.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_188",
    "text": "Which of the following allows for the attribution of messages to individuals?",
    "opts": [
      {
        "id": "A",
        "t": "Adaptive identity",
        "c": false
      },
      {
        "id": "B",
        "t": "Non-repudiation",
        "c": true
      },
      {
        "id": "C",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "D",
        "t": "Access logs",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: Non-repudiation. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_208",
    "text": "A security engineer is implementing FDE for all laptops in an organization. Which of the following are the most important for the engineer to consider as part of the planning process? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Key escrow",
        "c": true
      },
      {
        "id": "B",
        "t": "TPM presence",
        "c": true
      },
      {
        "id": "C",
        "t": "Digital signatures",
        "c": false
      },
      {
        "id": "D",
        "t": "Data tokenization",
        "c": false
      },
      {
        "id": "E",
        "t": "Public key management",
        "c": false
      },
      {
        "id": "F",
        "t": "Certificate authority linking",
        "c": false
      }
    ],
    "expl": "Il Key Escrow è un processo di governance per cui le chiavi private aziendali vengono custodite in maniera sicura presso una terza parte fidata o un dipartimento interno, permettendone il recupero autorizzato in caso di emergenza o perdita dell'amministratore.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_222",
    "text": "Which of the following is used to validate a certificate when it is presented to a user?",
    "opts": [
      {
        "id": "A",
        "t": "OCSP",
        "c": true
      },
      {
        "id": "B",
        "t": "CSR",
        "c": false
      },
      {
        "id": "C",
        "t": "CA",
        "c": false
      },
      {
        "id": "D",
        "t": "CRC",
        "c": false
      }
    ],
    "expl": "L'OCSP (Online Certificate Status Protocol) esegue una query in tempo reale direttamente alla CA per controllare se un singolo certificato è valido o revocato, evitando di dover scaricare e analizzare l'intera lista CRL (che può essere imponente e obsoleta).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_272",
    "text": "Which of the following describes the process of concealing code or text inside a graphical image?",
    "opts": [
      {
        "id": "A",
        "t": "Symmetric encryption",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "C",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "D",
        "t": "Steganography",
        "c": true
      }
    ],
    "expl": "La steganografia consiste nel nascondere un messaggio o dati segreti all'interno di un altro file non sospetto (come un'immagine PNG, una traccia audio o un video), modificandone i bit meno significativi.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_283",
    "text": "In order to strengthen a password and prevent a hacker from cracking it, a random string of 36 characters was added to the password. Which of the following best describes this technique?",
    "opts": [
      {
        "id": "A",
        "t": "Key stretching",
        "c": false
      },
      {
        "id": "B",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "C",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "D",
        "t": "Salting",
        "c": true
      }
    ],
    "expl": "Il salting (inserimento di un valore casuale prima dell'hashing) aumenta la complessità delle password per sventare attacchi precomputati quali rainbow table o dizionari di hash.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_289",
    "text": "A systems administrator uses a key to encrypt a message being sent to a peer in a different branch office. The peer then uses the same key to decrypt the message. Which of the following describes this example?",
    "opts": [
      {
        "id": "A",
        "t": "Symmetric",
        "c": true
      },
      {
        "id": "B",
        "t": "Asymmetric",
        "c": false
      },
      {
        "id": "C",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "D",
        "t": "Salting",
        "c": false
      }
    ],
    "expl": "La risposta corretta è A: Symmetric. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_301",
    "text": "A software developer released a new application and is distributing application files via the developer's website. Which of the following should the developer post on the website to allow users to verify the integrity of the downloaded files?",
    "opts": [
      {
        "id": "A",
        "t": "Hashes",
        "c": true
      },
      {
        "id": "B",
        "t": "Certificates",
        "c": false
      },
      {
        "id": "C",
        "t": "Algorithms",
        "c": false
      },
      {
        "id": "D",
        "t": "Salting",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_302",
    "text": "An organization wants to limit potential impact to its log-in database in the event of a breach. Which of the following options is the security team most likely to recommend?",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": true
      },
      {
        "id": "C",
        "t": "Obfuscation",
        "c": false
      },
      {
        "id": "D",
        "t": "Segmentation",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_322",
    "text": "A company wants to verify that the software the company is deploying came from the vendor the company purchased the software from. Which of the following is the best way for the company to confirm this information?",
    "opts": [
      {
        "id": "A",
        "t": "Validate the code signature.",
        "c": true
      },
      {
        "id": "B",
        "t": "Execute the code in a sandbox.",
        "c": false
      },
      {
        "id": "C",
        "t": "Search the executable for ASCII strings.",
        "c": false
      },
      {
        "id": "D",
        "t": "Generate a hash of the files.",
        "c": false
      }
    ],
    "expl": "La firma digitale fornisce autenticità dell'origine, integrità dei dati e non-ripudio. Si ottiene cifrando l'hash del documento con la chiave privata del mittente. Chiunque può verificarla usando la chiave pubblica del mittente.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_362",
    "text": "A company wants to ensure that the software it develops will not be tampered with after the final version is completed. Which of the following should the company most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Hashing",
        "c": true
      },
      {
        "id": "B",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "C",
        "t": "Baselines",
        "c": false
      },
      {
        "id": "D",
        "t": "Tokenization",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_376",
    "text": "Which of the following most likely describes why a security engineer would configure all outbound emails to use S/MIME digital signatures?",
    "opts": [
      {
        "id": "A",
        "t": "To meet compliance standards",
        "c": false
      },
      {
        "id": "B",
        "t": "To increase delivery rates",
        "c": false
      },
      {
        "id": "C",
        "t": "To block phishing attacks",
        "c": false
      },
      {
        "id": "D",
        "t": "To ensure non-repudiation",
        "c": true
      }
    ],
    "expl": "La firma digitale fornisce autenticità dell'origine, integrità dei dati e non-ripudio. Si ottiene cifrando l'hash del documento con la chiave privata del mittente. Chiunque può verificarla usando la chiave pubblica del mittente.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_378",
    "text": "Which of the following considerations is the most important regarding cryptography used in an IoT device?",
    "opts": [
      {
        "id": "A",
        "t": "Resource constraints",
        "c": true
      },
      {
        "id": "B",
        "t": "Available bandwidth",
        "c": false
      },
      {
        "id": "C",
        "t": "The use of block ciphers",
        "c": false
      },
      {
        "id": "D",
        "t": "The compatibility of the TLS version",
        "c": false
      }
    ],
    "expl": "La risposta corretta è A: Resource constraints. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_394",
    "text": "An administrator is installing an LDAP browser tool in order to view objects in the corporate LDAP directory. Secure connections to the LDAP server are required. When the browser connects to the server, certificate errors are being displayed, and then the connection is terminated. Which of the following is the most likely solution?",
    "opts": [
      {
        "id": "A",
        "t": "The administrator should allow SAN certificates in the browser configuration.",
        "c": false
      },
      {
        "id": "B",
        "t": "The administrator needs to install the server certificate into the local truststore.",
        "c": true
      },
      {
        "id": "C",
        "t": "The administrator should request that the secure LDAP port be opened to the server.",
        "c": false
      },
      {
        "id": "D",
        "t": "The administrator needs to increase the TLS version on the organization's RA.",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: The administrator needs to install the server certificate into the local truststore.. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_398",
    "text": "A security administrator is working to find a cost-effective solution to implement certificates for a large number of domains and subdomains owned by the company. Which of the following types of certificates should the administrator implement?",
    "opts": [
      {
        "id": "A",
        "t": "Wildcard",
        "c": true
      },
      {
        "id": "B",
        "t": "Client certificate",
        "c": false
      },
      {
        "id": "C",
        "t": "Self-signed",
        "c": false
      },
      {
        "id": "D",
        "t": "Code signing",
        "c": false
      }
    ],
    "expl": "I certificati Wildcard (es. *.example.com) permettono di proteggere il dominio root e qualsiasi sottodominio di primo livello diretto con un singolo certificato, semplificando notevolmente il ciclo di gestione delle chiavi.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_412",
    "text": "The author of a software package is concerned about bad actors repackaging and inserting malware into the software. The software download is hosted on a website, and the author exclusively controls the website's contents. Which of the following techniques would best ensure the software's integrity?",
    "opts": [
      {
        "id": "A",
        "t": "Input validation",
        "c": false
      },
      {
        "id": "B",
        "t": "Code signing",
        "c": true
      },
      {
        "id": "C",
        "t": "Secure cookies",
        "c": false
      },
      {
        "id": "D",
        "t": "Fuzzing",
        "c": false
      }
    ],
    "expl": "La firma digitale fornisce autenticità dell'origine, integrità dei dati e non-ripudio. Si ottiene cifrando l'hash del documento con la chiave privata del mittente. Chiunque può verificarla usando la chiave pubblica del mittente.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_442",
    "text": "Which of the following would be the most appropriate way to protect data in transit?",
    "opts": [
      {
        "id": "A",
        "t": "SHA-256",
        "c": false
      },
      {
        "id": "B",
        "t": "SSL3.0",
        "c": false
      },
      {
        "id": "C",
        "t": "TLS 1.3",
        "c": true
      },
      {
        "id": "D",
        "t": "AES-256",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: TLS 1.3. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_453",
    "text": "A database administrator is updating the company’s SQL database, which stores credit card information for pending purchases. Which of the following is the best method to secure the data against a potential breach?",
    "opts": [
      {
        "id": "A",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "B",
        "t": "Obfuscation",
        "c": false
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": true
      },
      {
        "id": "D",
        "t": "Masking",
        "c": false
      }
    ],
    "expl": "La tokenizzazione sostituisce il dato sensibile reale (es. PAN della carta di credito) con un valore privo di valore intrinseco (un token), mappato su un database centralizzato ad alta sicurezza, riducendo l'esposizione di compliance (es. PCI-DSS).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_463",
    "text": "Which of the following cryptographic solutions protects data at rest?",
    "opts": [
      {
        "id": "A",
        "t": "Digital signatures",
        "c": false
      },
      {
        "id": "B",
        "t": "Full disk encryption",
        "c": true
      },
      {
        "id": "C",
        "t": "Private key",
        "c": false
      },
      {
        "id": "D",
        "t": "Steganography",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: Full disk encryption. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_467",
    "text": "Which of the following is the best way to securely store an encryption key for a data set in a manner that allows multiple entities to access the key when needed?",
    "opts": [
      {
        "id": "A",
        "t": "Public key infrastructure",
        "c": false
      },
      {
        "id": "B",
        "t": "Open public ledger",
        "c": false
      },
      {
        "id": "C",
        "t": "Public key encryption",
        "c": false
      },
      {
        "id": "D",
        "t": "Key escrow",
        "c": true
      }
    ],
    "expl": "Il Key Escrow è un processo di governance per cui le chiavi private aziendali vengono custodite in maniera sicura presso una terza parte fidata o un dipartimento interno, permettendone il recupero autorizzato in caso di emergenza o perdita dell'amministratore.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_468",
    "text": "For which of the following reasons would a systems administrator leverage a 3DES hash from an installer file that is posted on a vendor’s website?",
    "opts": [
      {
        "id": "A",
        "t": "To test the integrity of the file",
        "c": true
      },
      {
        "id": "B",
        "t": "To validate the authenticity of the file",
        "c": false
      },
      {
        "id": "C",
        "t": "To activate the license for the file",
        "c": false
      },
      {
        "id": "D",
        "t": "To calculate the checksum of the file",
        "c": false
      }
    ],
    "expl": "La risposta corretta è A: To test the integrity of the file. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_484",
    "text": "An administrator is installing an SSL certificate on a new system. During testing, errors indicate that the certificate is not trusted. The administrator has verified with the issuing CA and has validated the private key. Which of the following should the administrator check for next?",
    "opts": [
      {
        "id": "A",
        "t": "If the wildcard certificate is configured",
        "c": false
      },
      {
        "id": "B",
        "t": "If the certificate signing request is valid",
        "c": false
      },
      {
        "id": "C",
        "t": "If the root certificate is installed",
        "c": true
      },
      {
        "id": "D",
        "t": "If the public key is configured",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: If the root certificate is installed. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_488",
    "text": "An accountant is transferring information to a bank over FTP. Which of the following mitigations should the accountant use to protect the confidentiality of the data?",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "B",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Encryption",
        "c": true
      },
      {
        "id": "D",
        "t": "Obfuscation",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: Encryption. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_505",
    "text": "Which of the following cryptographic methods is preferred for securing communications with limited computing resources?",
    "opts": [
      {
        "id": "A",
        "t": "Hashing algorithm",
        "c": false
      },
      {
        "id": "B",
        "t": "Public key infrastructure",
        "c": false
      },
      {
        "id": "C",
        "t": "Symmetric encryption",
        "c": true
      },
      {
        "id": "D",
        "t": "Elliptic curve cryptography",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: Symmetric encryption. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_523",
    "text": "When trying to access an internal website, an employee reports that a prompt displays, stating that the site is insecure. Which of the following certificate types is the site most likely using?",
    "opts": [
      {
        "id": "A",
        "t": "Wildcard",
        "c": false
      },
      {
        "id": "B",
        "t": "Root of trust",
        "c": false
      },
      {
        "id": "C",
        "t": "Third-party",
        "c": false
      },
      {
        "id": "D",
        "t": "Self-signed",
        "c": true
      }
    ],
    "expl": "La firma digitale fornisce autenticità dell'origine, integrità dei dati e non-ripudio. Si ottiene cifrando l'hash del documento con la chiave privata del mittente. Chiunque può verificarla usando la chiave pubblica del mittente.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_526",
    "text": "The private key for a website was stolen, and a new certificate has been issued. Which of the following needs to be updated next?",
    "opts": [
      {
        "id": "A",
        "t": "SCEP",
        "c": false
      },
      {
        "id": "B",
        "t": "CRL",
        "c": true
      },
      {
        "id": "C",
        "t": "OCSP",
        "c": false
      },
      {
        "id": "D",
        "t": "CSR",
        "c": false
      }
    ],
    "expl": "La CRL (Certificate Revocation List) è una lista firmata dalla CA che contiene i numeri di serie dei certificati revocati primariamente rispetto alla scadenza naturale. Richiede download periodici da parte del client.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_560",
    "text": "Which of the following types of vulnerabilities is primarily caused by improper use and management of cryptographic certificates?",
    "opts": [
      {
        "id": "A",
        "t": "Misconfiguration",
        "c": false
      },
      {
        "id": "B",
        "t": "Resource reuse",
        "c": false
      },
      {
        "id": "C",
        "t": "Insecure key storage",
        "c": true
      },
      {
        "id": "D",
        "t": "Weak cipher suites",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: Insecure key storage. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_564",
    "text": "Which of the following should be used to ensure an attacker is unable to read the contents of a mobile device's drive if the device is lost?",
    "opts": [
      {
        "id": "A",
        "t": "TPM",
        "c": false
      },
      {
        "id": "B",
        "t": "ECC",
        "c": false
      },
      {
        "id": "C",
        "t": "FDE",
        "c": true
      },
      {
        "id": "D",
        "t": "HSM",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: FDE. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_600",
    "text": "A company is using a legacy FTP server to transfer financial data to a third party. The legacy system does not support SFTP, so a compensating control is needed to protect the sensitive, financial data in transit. Which of the following would be the most appropriate for the company to use?",
    "opts": [
      {
        "id": "A",
        "t": "Telnet connection",
        "c": false
      },
      {
        "id": "B",
        "t": "SSH tunneling",
        "c": true
      },
      {
        "id": "C",
        "t": "Patch installation",
        "c": false
      },
      {
        "id": "D",
        "t": "Full disk encryption",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: SSH tunneling. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_620",
    "text": "Which of the following cryptographic solutions is used to hide the fact that communication is occurring?",
    "opts": [
      {
        "id": "A",
        "t": "Steganography",
        "c": true
      },
      {
        "id": "B",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "D",
        "t": "Private key",
        "c": false
      }
    ],
    "expl": "La steganografia consiste nel nascondere un messaggio o dati segreti all'interno di un altro file non sospetto (come un'immagine PNG, una traccia audio o un video), modificandone i bit meno significativi.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_624",
    "text": "A security administrator is addressing an issue with a legacy system that communicates data using an unencrypted protocol to transfer sensitive data to a third party. No software updates that use an encrypted protocol are available, so a compensating control is needed. Which of the following are the most appropriate for the administrator to suggest? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "B",
        "t": "Cryptographic downgrade",
        "c": false
      },
      {
        "id": "C",
        "t": "SSH tunneling",
        "c": true
      },
      {
        "id": "D",
        "t": "Segmentation",
        "c": true
      },
      {
        "id": "E",
        "t": "Patch installation",
        "c": false
      },
      {
        "id": "F",
        "t": "Data masking",
        "c": false
      }
    ],
    "expl": "La risposta corretta è C: SSH tunneling. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_648",
    "text": "Which of the following describes the difference between encryption and hashing?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption protects data in transit, while hashing protects data at rest.",
        "c": false
      },
      {
        "id": "B",
        "t": "Encryption replaces cleartext with ciphertext, while hashing calculates a checksum.",
        "c": true
      },
      {
        "id": "C",
        "t": "Encryption ensures data integrity, while hashing ensures data confidentiality.",
        "c": false
      },
      {
        "id": "D",
        "t": "Encryption uses a public-key exchange, while hashing uses a private key.",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_658",
    "text": "A certificate authority needs to post information about expired certificates. Which of the following would accomplish this task?",
    "opts": [
      {
        "id": "A",
        "t": "TPM",
        "c": false
      },
      {
        "id": "B",
        "t": "CRL",
        "c": true
      },
      {
        "id": "C",
        "t": "PKI",
        "c": false
      },
      {
        "id": "D",
        "t": "CSR",
        "c": false
      }
    ],
    "expl": "La CRL (Certificate Revocation List) è una lista firmata dalla CA che contiene i numeri di serie dei certificati revocati primariamente rispetto alla scadenza naturale. Richiede download periodici da parte del client.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_667",
    "text": "An administrator must replace an expired SSL certificate. Which of the following does the administrator need to create the new SSL certificate?",
    "opts": [
      {
        "id": "A",
        "t": "CSR",
        "c": true
      },
      {
        "id": "B",
        "t": "OCSP",
        "c": false
      },
      {
        "id": "C",
        "t": "Key",
        "c": false
      },
      {
        "id": "D",
        "t": "CRL",
        "c": false
      }
    ],
    "expl": "La risposta corretta è A: CSR. Questa soluzione indirizza l'obiettivo d'esame 1.4 del Security+ riguardante i principi, i protocolli e l'implementazione delle moderne infrastrutture e soluzioni crittografiche (PKI, algoritmi e hardware).",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_687",
    "text": "An engineer needs to ensure that a script has not been modified before it is launched. Which of the following best provides this functionality?",
    "opts": [
      {
        "id": "A",
        "t": "Masking",
        "c": false
      },
      {
        "id": "B",
        "t": "Obfuscation",
        "c": false
      },
      {
        "id": "C",
        "t": "Hashing",
        "c": true
      },
      {
        "id": "D",
        "t": "Encryption",
        "c": false
      }
    ],
    "expl": "L'hashing genera un'impronta digitale fissa (checksum) monodirezionale a partire da dati a dimensione variabile. Serve unicamente a verificare l'integrità dei dati: qualsiasi minima modifica del dato altera macroscopicamente l'hash calcolato.",
    "domain": 1,
    "objective": "1.4"
  },
  {
    "id": "SCREEN_015",
    "source": "TL",
    "text": "Which of the following threat actors is the most likely to be motivated by profit?",
    "opts": [
      {
        "id": "A",
        "t": "Hacktivist",
        "c": false
      },
      {
        "id": "B",
        "t": "Insider threat",
        "c": false
      },
      {
        "id": "C",
        "t": "Organized crime",
        "c": true
      },
      {
        "id": "D",
        "t": "Shadow IT",
        "c": false
      }
    ],
    "expl": "Il crimine organizzato (organized crime) è motivato principalmente dal profitto finanziario. Opera come un'azienda criminale professionale: ransomware, frodi, furto di credenziali. L'hacktivist è motivato da convinzioni politiche; l'insider threat da vendetta o opportunismo; lo Shadow IT non è un attore ostile.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_086",
    "source": "TL",
    "text": "A department is not using the company VPN when accessing various company-related services and systems. Which of the following scenarios describes this activity?",
    "opts": [
      {
        "id": "A",
        "t": "Espionage",
        "c": false
      },
      {
        "id": "B",
        "t": "Data exfiltration",
        "c": false
      },
      {
        "id": "C",
        "t": "Nation-state attack",
        "c": false
      },
      {
        "id": "D",
        "t": "Shadow IT",
        "c": true
      }
    ],
    "expl": "Lo Shadow IT descrive l'uso di tecnologie o pratiche non approvate dall'IT aziendale senza intenti malevoli. Non usare la VPN aziendale è un esempio classico: il reparto non sta attaccando, sta semplicemente aggirando inconsapevolmente i controlli di sicurezza.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_110",
    "text": "Which of the following threat actors is the most likely to be hired by a foreign government to attack critical systems located in other countries?",
    "opts": [
      {
        "id": "A",
        "t": "Hacktivist",
        "c": false
      },
      {
        "id": "B",
        "t": "Whistleblower",
        "c": false
      },
      {
        "id": "C",
        "t": "Organized crime",
        "c": true
      },
      {
        "id": "D",
        "t": "Unskilled attacker",
        "c": false
      }
    ],
    "expl": "Il crimine organizzato può essere ingaggiato come mercenario da governi stranieri per attaccare infrastrutture critiche. Non sono \"nation-state\" perché non sono agenti governativi diretti, ma gruppi criminali pagati. Il focus è sulla natura mercenaria (\"hired\") piuttosto che sull'identità statale.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_127",
    "text": "Which of the following threat actors is the most likely to be hired by a foreign government to attack critical systems located in other countries?",
    "opts": [
      {
        "id": "A",
        "t": "Hacktivist",
        "c": false
      },
      {
        "id": "B",
        "t": "Whistleblower",
        "c": false
      },
      {
        "id": "C",
        "t": "Organized crime",
        "c": true
      },
      {
        "id": "D",
        "t": "Unskilled attacker",
        "c": false
      }
    ],
    "expl": "Il crimine organizzato agisce come mercenario: ha le capacità tecniche e la struttura organizzativa per attacchi sofisticati, e opera per chiunque paghi. Il whistleblower espone illeciti, non attacca sistemi.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_158",
    "text": "Which of the following threat actors is the most likely to use large financial resources to attack critical systems located in other countries?",
    "opts": [
      {
        "id": "A",
        "t": "Insider",
        "c": false
      },
      {
        "id": "B",
        "t": "Unskilled attacker",
        "c": false
      },
      {
        "id": "C",
        "t": "Nation-state",
        "c": true
      },
      {
        "id": "D",
        "t": "Hacktivist",
        "c": false
      }
    ],
    "expl": "Le \"large financial resources\" per attaccare infrastrutture critiche di altri paesi è la firma dei nation-state actor: hanno budget governativo praticamente illimitato e obiettivi strategici nazionali. Organized crime ha risorse significative ma non \"large\" in senso governativo, e non attacca infrastrutture critiche per obiettivi strategici.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_187",
    "text": "An administrator was notified that a user logged in remotely after hours and copied large amounts of data to a personal device. Which of the following best describes the user's activity?",
    "opts": [
      {
        "id": "A",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "B",
        "t": "Phishing campaign",
        "c": false
      },
      {
        "id": "C",
        "t": "External audit",
        "c": false
      },
      {
        "id": "D",
        "t": "Insider threat",
        "c": true
      }
    ],
    "expl": "Un utente con credenziali legittime che accede dopo l'orario lavorativo e copia dati su un dispositivo personale → Insider threat. Ha accesso autorizzato ai sistemi (non è un attaccante esterno) ma lo usa per scopi non autorizzati. Non è penetration testing (non autorizzato), né audit (non documentato).",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_235",
    "text": "A Chief Information Security Officer (CISO) wants to explicitly raise awareness about the increase of ransomware-as-a-service in a report to the management team. Which of the following best describes the threat actor in the CISO's report?",
    "opts": [
      {
        "id": "A",
        "t": "Insider threat",
        "c": false
      },
      {
        "id": "B",
        "t": "Hacktivist",
        "c": false
      },
      {
        "id": "C",
        "t": "Nation-state",
        "c": false
      },
      {
        "id": "D",
        "t": "Organized crime",
        "c": true
      }
    ],
    "expl": "Il Ransomware-as-a-Service (RaaS) è il modello di business del crimine organizzato: sviluppano il ransomware, lo \"affittano\" agli affiliati e dividono i profitti. È una struttura professionale motivata dal guadagno finanziario, caratteristica dell'organized crime.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_286",
    "text": "Which of the following threat actors is the most likely to be motivated by profit?",
    "opts": [
      {
        "id": "A",
        "t": "Hacktivist",
        "c": false
      },
      {
        "id": "B",
        "t": "Insider threat",
        "c": false
      },
      {
        "id": "C",
        "t": "Organized crime",
        "c": true
      },
      {
        "id": "D",
        "t": "Shadow IT",
        "c": false
      }
    ],
    "expl": "Il profitto finanziario è la motivazione primaria e caratterizzante dell'organized crime. Shadow IT non è un attore ostile. Hacktivist è motivato da ideologia. Insider threat può essere motivato da vendetta o denaro, ma non è la risposta primaria per \"motivated by profit\".",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_440",
    "text": "A company's online shopping website became unusable shortly after midnight on January 30, 2023. When a security analyst reviewed the database server, the analyst noticed the following code used for backing up data: IF DATE() = \"01/30/2023\" THEN BEGIN DROP DATABASE WebShopOnline; END. Which of the following should the analyst do next?",
    "opts": [
      {
        "id": "A",
        "t": "Check for recently terminated DBAs.",
        "c": true
      },
      {
        "id": "B",
        "t": "Review WAF logs for evidence of command injection.",
        "c": false
      },
      {
        "id": "C",
        "t": "Scan the database server for malware.",
        "c": false
      },
      {
        "id": "D",
        "t": "Search the web server for ransomware notes.",
        "c": false
      }
    ],
    "expl": "Il codice è una time bomb deliberata inserita nel processo di backup. Non è malware (non c'è payload malevolo da scansionare), non è SQL injection (non viene dal traffico web), non è ransomware. È sabotaggio da insider: un DBA con accesso privilegiato ha inserito il codice malevolo. Prima azione: verificare i DBA recentemente licenziati.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_444",
    "text": "Which of the following threat actors is the most likely to seek financial gain through the use of ransomware attacks?",
    "opts": [
      {
        "id": "A",
        "t": "Organized crime",
        "c": true
      },
      {
        "id": "B",
        "t": "Insider threat",
        "c": false
      },
      {
        "id": "C",
        "t": "Nation-state",
        "c": false
      },
      {
        "id": "D",
        "t": "Hacktivists",
        "c": false
      }
    ],
    "expl": "Gli attacchi ransomware per guadagno finanziario sono la firma dell'organized crime. I nation-state usano il ransomware più raramente e per scopi disruptivi, non principalmente finanziari. Gli hacktivist usano DDoS e defacement, non ransomware per profitto.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_539",
    "text": "Which of the following threat actors would most likely deface the website of a high-profile music group?",
    "opts": [
      {
        "id": "A",
        "t": "Unskilled attacker",
        "c": true
      },
      {
        "id": "B",
        "t": "Organized crime",
        "c": false
      },
      {
        "id": "C",
        "t": "Nation-state",
        "c": false
      },
      {
        "id": "D",
        "t": "Insider threat",
        "c": false
      }
    ],
    "expl": "Il defacement di un sito di un gruppo musicale famoso è un bersaglio ad alta visibilità ma senza valore strategico o finanziario. È tipico dell'unskilled attacker (script kiddie) che vuole notorietà, dimostrare le proprie capacità, o semplicemente causare disruption senza obiettivi sofisticati.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_569",
    "text": "A government official receives a blank envelope containing photos and a note instructing the official to wire a large sum of money by midnight to prevent the photos from being leaked on the internet. Which of the following best describes the threat actor's intent?",
    "opts": [
      {
        "id": "A",
        "t": "Organized crime",
        "c": false
      },
      {
        "id": "B",
        "t": "Philosophical beliefs",
        "c": false
      },
      {
        "id": "C",
        "t": "Espionage",
        "c": false
      },
      {
        "id": "D",
        "t": "Blackmail",
        "c": true
      }
    ],
    "expl": "L'uso di informazioni compromettenti (foto) come leva per estorcere denaro è la definizione di blackmail. La domanda chiede l'intent (motivazione), non il threat actor. Blackmail non è espionage (che raccoglie informazioni senza interagire con la vittima) né organized crime (che è un attore, non un'intent). L'organized crime può usare il blackmail, ma l'intent specifico è blackmail.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_579",
    "text": "Which of the following actors attacking an organization is the most likely to be motivated by personal beliefs?",
    "opts": [
      {
        "id": "A",
        "t": "Nation-state",
        "c": false
      },
      {
        "id": "B",
        "t": "Organized crime",
        "c": false
      },
      {
        "id": "C",
        "t": "Hacktivist",
        "c": true
      },
      {
        "id": "D",
        "t": "Insider threat",
        "c": false
      }
    ],
    "expl": "Le \"personal beliefs\" (convinzioni personali) sono la motivazione caratterizzante dell'hacktivist: agisce per promuovere o difendere una causa politica, sociale o ideologica. Nation-state agisce per obiettivi statali; organized crime per profitto; insider threat per vendetta o guadagno.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_691",
    "source": "TL",
    "text": "While a school district is performing state testing, a security analyst notices all internet services are unavailable. The analyst discovers that ARP poisoning is occurring on the network and then terminates access for the host. Which of the following is most likely responsible for this malicious activity?",
    "opts": [
      {
        "id": "A",
        "t": "Unskilled attacker",
        "c": false
      },
      {
        "id": "B",
        "t": "Shadow IT",
        "c": false
      },
      {
        "id": "C",
        "t": "Insider threat",
        "c": true
      },
      {
        "id": "D",
        "t": "Nation-state",
        "c": false
      }
    ],
    "expl": "L'ARP poisoning richiede accesso alla rete locale (LAN). In un distretto scolastico durante i test di stato, l'attaccante è fisicamente sulla rete interna: probabile studente o dipendente con accesso. Nation-state non prenderebbe di mira un test scolastico. Shadow IT non è malevolo. Unskilled attacker tipicamente opera dall'esterno.",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_726",
    "text": "Which of the following would most likely be a hacktivist's motive?",
    "opts": [
      {
        "id": "A",
        "t": "Financial gain",
        "c": false
      },
      {
        "id": "B",
        "t": "Espionage",
        "c": false
      },
      {
        "id": "C",
        "t": "Philosophical beliefs",
        "c": true
      },
      {
        "id": "D",
        "t": "Revenge",
        "c": false
      }
    ],
    "expl": "Il motive caratterizzante dell'hacktivist è le convinzioni filosofiche/politiche (philosophical beliefs): agisce per promuovere una causa ideologica, non per profitto (organized crime), spionaggio (nation-state) o vendetta (insider threat).",
    "domain": 2,
    "objective": "2.1"
  },
  {
    "id": "SCREEN_021",
    "text": "Quale tipo di attacco comporta l'intercettazione e l'alterazione della comunicazione tra due parti che credono di comunicare direttamente tra loro?",
    "opts": [
      {
        "id": "A",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "B",
        "t": "Man-in-the-Middle (On-path)",
        "c": true
      },
      {
        "id": "C",
        "t": "Denial of Service (DoS)",
        "c": false
      },
      {
        "id": "D",
        "t": "SQL Injection",
        "c": false
      }
    ],
    "expl": "L'attacco Man-in-the-Middle (noto anche come On-path attack nei moderni standard SY0-701) prevede che l'attaccante si posizioni tra mittente e destinatario per intercettare e, se lo desidera, alterare il traffico di nascosto. Il phishing è una tecnica di social engineering; il DoS nega l'accesso; la SQLi colpisce i database applicativi.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_047",
    "text": "Hai ricevuto un'e-mail non richiesta da un sito web che ti chiede di fare clic su un pulsante per reimpostare la password. Cosa dovresti fare in questa situazione?",
    "opts": [
      {
        "id": "A",
        "t": "Se il logo dell'azienda nel messaggio è valido, fai clic sul pulsante.",
        "c": false
      },
      {
        "id": "B",
        "t": "Visita direttamente il portale del fornitore e, se necessario, aggiorna la password da lì.",
        "c": true
      },
      {
        "id": "C",
        "t": "In nessun caso e in nessuna circostanza fare mai clic su collegamenti in un'e-mail.",
        "c": false
      },
      {
        "id": "D",
        "t": "Assicurati che l'antivirus sia aggiornato, quindi fai clic sul pulsante.",
        "c": false
      }
    ],
    "expl": "La regola d'oro contro l'ingegneria sociale è l'autenticazione fuori banda (out-of-band): non bisogna mai cliccare sui link inviati via email non richiesta. Invece, si digita manualmente l'indirizzo ufficiale del portale nel browser per verificare se ci sono effettivi avvisi o necessità di cambio password.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_070",
    "text": "Un amministratore di sistema teme che gli utenti stiano accedendo alle e-mail aziendali attraverso un sito duplicato/clone non gestito dall'azienda. Quale modalità è usata in questo scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Impersonation (Impersonificazione)",
        "c": false
      },
      {
        "id": "B",
        "t": "Replication (Replica)",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing (sotto forma di cloni o portali spoofing)",
        "c": true
      },
      {
        "id": "D",
        "t": "Smishing",
        "c": false
      }
    ],
    "expl": "L'utilizzo di un sito web duplicato/falso per indurre gli utenti a inserire le proprie credenziali email è una tattica classica di phishing (in particolare, credential harvesting). L'impersonificazione descrive l'assunzione del ruolo di un'altra persona; la replica è un concetto di backup o database; lo smishing usa messaggi SMS.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_073",
    "text": "Il sito web di un'azienda è www.company.com. Gli attaccanti hanno registrato il dominio www.c0mpany.com. Quale tipo di attacco descrive questa situazione?",
    "opts": [
      {
        "id": "A",
        "t": "On-path",
        "c": false
      },
      {
        "id": "B",
        "t": "Watering-hole",
        "c": false
      },
      {
        "id": "C",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "D",
        "t": "Typosquatting (URL Hijacking)",
        "c": true
      }
    ],
    "expl": "Il Typosquatting (noto anche come URL hijacking) consiste nel registrare domini simili a quelli legittimi sfruttando errori di battitura comuni degli utenti (come sostituire la lettera 'o' con il numero '0'). Consente di deviare il traffico degli utenti distratti su siti clone malevoli.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_112",
    "text": "Un dipendente fa clic su un link in un'e-mail proveniente da un sito di pagamenti che gli chiede di aggiornare le informazioni di contatto. Inserisce le credenziali ma riceve un errore 'pagina non trovata'. Quale tipo di ingegneria sociale è avvenuto?",
    "opts": [
      {
        "id": "A",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "B",
        "t": "Pretexting",
        "c": false
      },
      {
        "id": "C",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "D",
        "t": "Phishing",
        "c": true
      }
    ],
    "expl": "Questo scenario descrive una campagna di Phishing tramite email fraudolenta, mirata a rubare le credenziali dell'utente (credential harvesting) inducendolo a cliccare su un collegamento malevolo e digitarle su un sito clone.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_115",
    "text": "Quale dei seguenti scenari descrive correttamente un possibile attacco di tipo Business Email Compromise (BEC)?",
    "opts": [
      {
        "id": "A",
        "t": "An employee receives a gift card request in an email that has an executive's name in the display field of the email.",
        "c": false
      },
      {
        "id": "B",
        "t": "Employees who open an email attachment receive messages demanding payment in order to access files.",
        "c": false
      },
      {
        "id": "C",
        "t": "A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account.",
        "c": true
      },
      {
        "id": "D",
        "t": "An employee receives an email with a link to a phishing site that is designed to look like the company's email portal.",
        "c": false
      }
    ],
    "expl": "Il Business Email Compromise (BEC) è un attacco di social engineering in cui l'attaccante impersona via email una figura apicale (es. CEO) o un partner/fornitore consolidato per truffare l'azienda, ad esempio convincendo il reparto contabilità a deviare fondi o bonifici bancari verso conti controllati dai criminali.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_119",
    "text": "Un dipendente riceve un SMS che sembra inviato dal dipartimento paghe che richiede la verifica delle credenziali d'accesso. Quali tecniche di social engineering vengono tentate? (Scegli due)",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Impersonation (Impersonificazione)",
        "c": true
      },
      {
        "id": "D",
        "t": "Vishing",
        "c": false
      },
      {
        "id": "E",
        "t": "Smishing",
        "c": true
      },
      {
        "id": "F",
        "t": "Misinformation",
        "c": false
      }
    ],
    "expl": "La richiesta tramite SMS classifica l'attacco come Smishing (SMS Phishing). Dal momento che l'attaccante simula di essere il reparto paghe interno della stessa azienda, sta attuando una tecnica di Impersonation (Impersonificazione).",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_120",
    "text": "Quale dei seguenti scenari descrive un attacco di Business Email Compromise (BEC)? (Alternativa d'esame)",
    "opts": [
      {
        "id": "A",
        "t": "An employee receives a gift card request in an email that has an executive's name in the display field of the email.",
        "c": false
      },
      {
        "id": "B",
        "t": "Employees who open an email attachment receive messages demanding payment in order to access files.",
        "c": false
      },
      {
        "id": "C",
        "t": "A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account.",
        "c": true
      },
      {
        "id": "D",
        "t": "An employee receives an email with a link to a phishing site that is designed to look like the company's email portal.",
        "c": false
      }
    ],
    "expl": "Il BEC si realizza frequentemente falsificando e-mail e fatture di fornitori esistenti per dirottare pagamenti. È una truffa di tipo finanziario altamente sofisticata che mira a ingannare i dipendenti addetti ai pagamenti.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_124",
    "text": "Un dipendente riceve un SMS che sembra del reparto payroll e chiede la verifica immediata delle credenziali. Quali tecniche vengono tentate? (Scegli due - Variante)",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Impersonation",
        "c": true
      },
      {
        "id": "D",
        "t": "Vishing",
        "c": false
      },
      {
        "id": "E",
        "t": "Smishing",
        "c": true
      },
      {
        "id": "F",
        "t": "Misinformation",
        "c": false
      }
    ],
    "expl": "La minaccia viaggia via SMS (Smishing) e l'attaccante si spaccia per un'entità legittima aziendale interna (Impersonation).",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_129",
    "text": "Un impiegato clicca su un collegamento in una mail che simula un portale di pagamenti commerciali ed inserisce le proprie credenziali. Riceve un errore 404. Di che attacco si tratta?",
    "opts": [
      {
        "id": "A",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "B",
        "t": "Pretexting",
        "c": false
      },
      {
        "id": "C",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "D",
        "t": "Phishing",
        "c": true
      }
    ],
    "expl": "Una mail fittizia che induce l'utente a inserire credenziali su un sito falso è un classico attacco di phishing con credential harvesting.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_132",
    "text": "Quale dei seguenti scenari illustra un Business Email Compromise (BEC)? (Terza variante d'esame)",
    "opts": [
      {
        "id": "A",
        "t": "An employee receives a gift card request in an email that has an executive's name in the display field of the email.",
        "c": false
      },
      {
        "id": "B",
        "t": "Employees who open an email attachment receive messages demanding payment in order to access files.",
        "c": false
      },
      {
        "id": "C",
        "t": "A service desk employee receives an email from the HR director asking for log-in credentials to a cloud administrator account.",
        "c": true
      },
      {
        "id": "D",
        "t": "An employee receives an email with a link to a phishing site that is designed to look like the company's email portal.",
        "c": false
      }
    ],
    "expl": "Anche in questo caso, il BEC viene implementato registrando un dominio fittizio simile a quello di un partner fidato per ingannare chi esegue i pagamenti (ad esempio per aggiornare le 'wiring instructions' di un bonifico bancario).",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_136",
    "text": "Un dipendente riceve un SMS che sembra inviato dall'amministrazione per verificare i propri dati lavorativi sotto la minaccia di sospensione della paga. Quali due tecniche d'ingegneria sociale sono usate?",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Impersonation",
        "c": true
      },
      {
        "id": "D",
        "t": "Vishing",
        "c": false
      },
      {
        "id": "E",
        "t": "Smishing",
        "c": true
      },
      {
        "id": "F",
        "t": "Misinformation",
        "c": false
      }
    ],
    "expl": "La ricezione del messaggio via SMS indica l'uso dello Smishing. L'impersonificazione consiste nel fingersi il dipartimento paghe/HR (Impersonation). L'urgenza emotiva è usata come leva.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_241",
    "text": "Qual è il vettore di fuga dei dati (data loss path) più comune per una rete isolata fisicamente da internet (air-gapped network)?",
    "opts": [
      {
        "id": "A",
        "t": "Bastion host",
        "c": false
      },
      {
        "id": "B",
        "t": "Unsecured Bluetooth",
        "c": false
      },
      {
        "id": "C",
        "t": "Unpatched OS",
        "c": false
      },
      {
        "id": "D",
        "t": "Removable devices",
        "c": true
      }
    ],
    "expl": "I sistemi 'air-gapped' non possiedono alcun collegamento fisico o logico a reti esterne o internet. Di conseguenza, l'unico modo per introdurre malware o estrarre dati è l'interazione umana o fisica tramite supporti di memoria rimovibili (Removable media come chiavette USB), come avvenne storicamente per l'attacco Stuxnet.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_242",
    "text": "Un malware si diffonde all'interno della rete aziendale dopo che un dipendente ha visitato un blog d'approfondimento tecnico del proprio settore industriale che era stato precedentemente compromesso dagli hacker. Quale tipo di attacco descrive questo scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Impersonation",
        "c": false
      },
      {
        "id": "B",
        "t": "Disinformation",
        "c": false
      },
      {
        "id": "C",
        "t": "Watering-hole",
        "c": true
      },
      {
        "id": "D",
        "t": "Smishing",
        "c": false
      }
    ],
    "expl": "Un attacco Watering-hole avviene quando il cybercriminale compromette un sito web specifico di terze parti (ad esempio un portale specializzato del settore, un blog di nicchia) visitato regolarmente dai dipendenti dell'azienda bersaglio. Quando il dipendente visita il 'laghetto' (watering hole), il sito infetta la vittima tramite vettori come i drive-by downloads.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_273",
    "text": "Un dipendente riceve un SMS da un numero sconosciuto in cui il mittente sostiene di essere il CEO dell'azienda e ordina l'acquisto urgente di diverse carte regalo (gift card). Che tipo di attacco descrive questa situazione?",
    "opts": [
      {
        "id": "A",
        "t": "Vishing",
        "c": false
      },
      {
        "id": "B",
        "t": "Smishing",
        "c": true
      },
      {
        "id": "C",
        "t": "Pretexting",
        "c": false
      },
      {
        "id": "D",
        "t": "Phishing",
        "c": false
      }
    ],
    "expl": "Gli attacchi via SMS che tentano di indurre i dipendenti a eseguire operazioni (come acquistare gift card) impersonando dirigenti d'azienda sono una forma di Smishing. Se la comunicazione fosse avvenuta a voce si parlerebbe di vishing; via e-mail generica phishing; e-mail mirata spear phishing.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_311",
    "text": "Un neoassunto accede alla posta elettronica per la prima volta e trova un messaggio delle risorse umane relativo all'onboarding. Passa il cursore del mouse sopra i link contenuti nell'e-mail e si accorge che non indirizzano al dominio aziendale fido. Quale vettore di attacco della minaccia viene utilizzato?",
    "opts": [
      {
        "id": "A",
        "t": "Business email",
        "c": false
      },
      {
        "id": "B",
        "t": "Social engineering",
        "c": true
      },
      {
        "id": "C",
        "t": "Unsecured network",
        "c": false
      },
      {
        "id": "D",
        "t": "Default credentials",
        "c": false
      }
    ],
    "expl": "L'e-mail è il vettore di attacco principale utilizzato in questo scenario. Il phishing viaggia quasi universalmente attraverso la posta elettronica ordinaria (Email vector) per distribuire collegamenti malevoli.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_321",
    "text": "Un manager riceve un'e-mail contenente un collegamento per ricevere un rimborso fiscale aziendale. Passando il mouse sopra il collegamento, il manager nota che l'URL punta a un indirizzo internet palesemente fraudolento e non ufficiale. Quale pratica di sicurezza ha aiutato il manager a identificare il tentativo di attacco?",
    "opts": [
      {
        "id": "A",
        "t": "End user training",
        "c": true
      },
      {
        "id": "B",
        "t": "Policy review",
        "c": false
      },
      {
        "id": "C",
        "t": "URL scanning",
        "c": false
      },
      {
        "id": "D",
        "t": "Plain text email",
        "c": false
      }
    ],
    "expl": "L'azione manuale di far scorrere il cursore sulla parte attiva del testo del link senza farci clic ('hovering') consente al client di posta o al browser di mostrare la destinazione finale reale dell'URL nel bordo inferiore della finestra, rivelando immediatamente l'inganno.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_325",
    "text": "Un amministratore di rete nota che il dipartimento di Ricerca e Sviluppo non si collega tramite la VPN aziendale quando effettua l'accesso a vari servizi interni ed archivi commerciali basati sul cloud. Come viene definita questa attività?",
    "opts": [
      {
        "id": "A",
        "t": "Espionage",
        "c": false
      },
      {
        "id": "B",
        "t": "Data exfiltration",
        "c": false
      },
      {
        "id": "C",
        "t": "Attacco Nation-state",
        "c": false
      },
      {
        "id": "D",
        "t": "Shadow IT",
        "c": true
      }
    ],
    "expl": "Lo Shadow IT descrive l'utilizzo di soluzioni informatiche, hardware, software o reti esterne non sanzionate, non monitorate o non approvate formalmente dall'ufficio IT dell'organizzazione. In questo caso, ignorare i sistemi VPN ufficiali aggira i controlli, esponendo i dati a rischi.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_326",
    "text": "Il dipartimento marketing ha configurato e impostato in autonomia un software esterno di project management sul cloud, memorizzando dettagli di sviluppo senza darne comunicazione all'Ufficio Sicurezza IT. Quale termine definisce questo scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Shadow IT",
        "c": true
      },
      {
        "id": "B",
        "t": "Insider threat malevolo",
        "c": false
      },
      {
        "id": "C",
        "t": "Data exfiltration",
        "c": false
      },
      {
        "id": "D",
        "t": "Service disruption",
        "c": false
      }
    ],
    "expl": "Anche in questo caso, l'adozione e gestione autonoma di software o SaaS (come un'applicazione di project management cloud) da parte di un settore aziendale senza alcuna notifica o approvazione dell'IT Security rappresenta un classico esempio di Shadow IT.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_330",
    "text": "Quale vettore di minaccia viene utilizzato più frequentemente da insider threat malevoli quando tentano l'esfiltrazione fraudolenta di dati aziendali riservati?",
    "opts": [
      {
        "id": "A",
        "t": "Unidentified removable devices",
        "c": true
      },
      {
        "id": "B",
        "t": "Default network device credentials",
        "c": false
      },
      {
        "id": "C",
        "t": "Spear phishing emails",
        "c": false
      },
      {
        "id": "D",
        "t": "Impersonation of business units through typosquatting",
        "c": false
      }
    ],
    "expl": "Gli insider threat possiedono l'accesso autorizzato fisico o di rete ai sistemi interni. Per estrarre grandi quantità di file confidenziali aggirando i monitoraggi di posta e i firewall di rete, il vettore preferito è la copia discreta su supporti rimovibili fisici (Removable media come hard disk esterni o chiavette USB) inseriti direttamente nella postazione di lavoro.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_343",
    "text": "Un truffatore, spacciandosi telefonicamente per il CEO dell'azienda, telefona a un impiegato ordinandogli di acquistare con fondi aziendali svariate gift card fisiche per un regalo aziendale urgente. Quale tecnica specifica sta utilizzando?",
    "opts": [
      {
        "id": "A",
        "t": "Smishing",
        "c": false
      },
      {
        "id": "B",
        "t": "Disinformation",
        "c": false
      },
      {
        "id": "C",
        "t": "Impersonating",
        "c": true
      },
      {
        "id": "D",
        "t": "Whaling",
        "c": false
      }
    ],
    "expl": "La combinazione di truffa basata su ingegneria sociale condotta per via telefonica vocale ('posing as the CEO calls...') costituisce l'attacco di Vishing (Voice Phishing). L'attaccante usa tono autorevole per manipolare la vittima.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_364",
    "text": "Un utente in attesa di un volo all'aeroporto decide di connettersi utilizzando la rete Wi-Fi pubblica e gratuita. Ignora un avviso di sicurezza del browser relativo a un certificato non attendibile e porta a termine sul sito della linea aerea l'acquisto di un biglietto con carta di credito. Al suo arrivo, riscontra transazioni finanziarie fraudolente sulla carta. Quale attacco ha subito più probabilmente?",
    "opts": [
      {
        "id": "A",
        "t": "Replay attack",
        "c": false
      },
      {
        "id": "B",
        "t": "Memory leak",
        "c": false
      },
      {
        "id": "C",
        "t": "Buffer overflow attack",
        "c": false
      },
      {
        "id": "D",
        "t": "On-path attack",
        "c": true
      }
    ],
    "expl": "Incurante dell'avviso di sicurezza, l'utente ha stabilito una sessione transitando per un Rogue Access Point controllato da un attaccante On-path (Man-in-the-Middle). L'attaccante ha potuto visualizzare il traffico cifrato in transito abusando dell'impiego di un certificato self-signed fittizio che l'utente ha incautamente accettato, rubando i dettagli della carta di credito.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_377",
    "text": "Durante una recente riunione sulla sicurezza informatica aziendale, il team di sensibilizzazione ha ricordato le buone norme di igiene informatica anche per le isole di stampa e i centri fotocopie aziendali. Quale tecnica d'attacco riguarda direttamente questi centri di stampa?",
    "opts": [
      {
        "id": "A",
        "t": "Whaling",
        "c": false
      },
      {
        "id": "B",
        "t": "Credential harvesting",
        "c": false
      },
      {
        "id": "C",
        "t": "Prepending",
        "c": false
      },
      {
        "id": "D",
        "t": "Dumpster diving (estrazione di documenti cartacei abbandonati)",
        "c": true
      }
    ],
    "expl": "I centri di stampa condivisi sono bersagli primari per il Dumpster diving o la sottrazione di dati poichè i dipendenti lasciano spesso documenti riservati stampati incustoditi nei raccoglitori o cestini di carta adiacenti alle stampanti. Inoltre, i dischi rigidi interni delle stampanti industriali non formattate possono essere un bersaglio di furto fisico di informazioni.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_396",
    "text": "Un'indagine di cyber-incident rivela che sui server è stato installato codice estraneo sfruttando le credenziali legittime dell'amministratore. Nel verbale, l'amministratore dichiara di aver effettuato frequenti accessi remoti al server tramite il protocollo Telnet. Quale tipo di attacco è avvenuto?",
    "opts": [
      {
        "id": "A",
        "t": "A spraying attack was used to determine which credentials to use.",
        "c": false
      },
      {
        "id": "B",
        "t": "A packet capture tool was used to steal the password.",
        "c": true
      },
      {
        "id": "C",
        "t": "A remote-access Trojan was used to install the malware.",
        "c": false
      },
      {
        "id": "D",
        "t": "A dictionary attack was used to log in as the server administrator.",
        "c": false
      }
    ],
    "expl": "Il protocollo Telnet (porta TCP 23) trasmette tutte le comunicazioni, comprese username e password di amministrazione, in chiaro (non crittografate). Un utente malevolo in grado di intercettare il traffico (sniffing) sulla rete interna ha potuto agevolmente estrarre le credenziali dell'amministratore senza dover ricorrere ad attacchi aggressivi.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_404",
    "text": "Quale termine descrive meglio una campagna mirata di ingegneria sociale trasmessa elettronicamente e indirizzata in modo esclusivo a figure executive di massimo spicco (come un Amministratore Delegato o un CFO)?",
    "opts": [
      {
        "id": "A",
        "t": "Whaling (Caccia alla balena)",
        "c": true
      },
      {
        "id": "B",
        "t": "Spear phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Impersonation",
        "c": false
      },
      {
        "id": "D",
        "t": "Identity fraud",
        "c": false
      }
    ],
    "expl": "Il Whaling è una forma specifica e altamente mirata di spear phishing che prende di mira esclusivamente le 'balene' aziendali (executive d'alto rango come CEO, CFO, dirigenti senior o alti funzionari governativi). Lo spear phishing è mirato a individui specifici in generale; il whaling riguarda strettamente le figure di vertice.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_420",
    "text": "Un analista analizza i log del server DNS aziendale e nota una riga anomala: 'named: qry_type: AXFR | zone int.comptia.org'. Quale tipo di attività descrive questa anomalia?",
    "opts": [
      {
        "id": "A",
        "t": "Determining the organization's ISP-assigned address space",
        "c": false
      },
      {
        "id": "B",
        "t": "Bypassing the organization's DNS sinkholing",
        "c": false
      },
      {
        "id": "C",
        "t": "Footprinting the internal network",
        "c": true
      },
      {
        "id": "D",
        "t": "Attempting to achieve initial access to the DNS server",
        "c": false
      },
      {
        "id": "E",
        "t": "Exfiltrating data from fshare.int.complia.org",
        "c": false
      }
    ],
    "expl": "La richiesta di tipo AXFR indica una transazione di trasferimento di zona DNS (DNS Zone Transfer). Gli attaccanti usano questa richiesta per scaricare l'intero database di record DNS di una determinata zona, mappando in un unico colpo tutti gli host, i server e gli indirizzi IP interni. Per motivi di sicurezza si consente il trasferimento unicamente a server DNS secondari fidati.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_490",
    "text": "Quale tra le seguenti tecniche viene impiegata più tipicamente dagli attaccanti per effettuare campagne di Credential Harvesting (raccolta massiva di password)?",
    "opts": [
      {
        "id": "A",
        "t": "Social engineering",
        "c": true
      },
      {
        "id": "B",
        "t": "Supply chain compromise",
        "c": false
      },
      {
        "id": "C",
        "t": "Third-party software",
        "c": false
      },
      {
        "id": "D",
        "t": "Rainbow table",
        "c": false
      }
    ],
    "expl": "La clonazione di portali web famosi o legittimi (es. false pagine di login di Microsoft 365, Google, banche online) inviate tramite link di phishing è lo strumento d'elezione per il Credential Harvesting: l'utente crede di trovarsi sul vero sito e digita le sue credenziali, inviandole direttamente all'attaccante.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_517",
    "text": "Un penetration tester autorizzato riesce a superare i tornelli d'ingresso principali dell'ufficio accodandosi fisicamente e rapidamente a un gruppo di dipendenti che stavano timbrando il badge, senza averne uno proprio. Di che attacco si tratta?",
    "opts": [
      {
        "id": "A",
        "t": "Tailgating (noto anche come Piggybacking)",
        "c": true
      },
      {
        "id": "B",
        "t": "Shoulder surfing",
        "c": false
      },
      {
        "id": "C",
        "t": "RFID cloning",
        "c": false
      },
      {
        "id": "D",
        "t": "Forgery",
        "c": false
      }
    ],
    "expl": "Il Tailgating (accodamento físico) o Piggybacking si verifica quando un soggetto non autorizzato segue fisicamente un utente autorizzato attraverso una porta o barriera protetta (es. tornello o cancello ad apertura temporizzata) sfruttando la sua scia per bypassare il controllo badge.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_521",
    "text": "Un cliente di una multinazionale viene contattato telefonicamente da un individuo che sostiene di lavorare nel settore antifrode aziendale per raccogliere dati finanziari. Il cliente legge sul display del telefono che l'ID del chiamante corrisponde perfettamente al centralino ufficiale dell'azienda. Quale tecnica d'attacco descrive lo scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "B",
        "t": "Whaling",
        "c": false
      },
      {
        "id": "C",
        "t": "Smishing",
        "c": false
      },
      {
        "id": "D",
        "t": "Vishing con Caller ID spoofing",
        "c": true
      }
    ],
    "expl": "L'attacco si concretizza tramite chiamata vocale fittizia (Vishing) supportata dalla manipolazione del protocollo VoIP per mostrare sul display del destinatario il vero numero dell'istituzione (Caller ID spoofing). Questo contribuisce a vincere la diffidenza del bersaglio.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_562",
    "text": "La postazione di un utente si blocca improvvisamente mostrando una schermata di riscatto per decriptare tutti i dati. Pochi minuti prima l'utente aveva fatto clic per visionare un file curriculum ricevuto via chat, navigato sul sito aziendale e installato aggiornamenti software di sistema. Qual è il vettore più probabile del malware?",
    "opts": [
      {
        "id": "A",
        "t": "Spear-phishing attachment",
        "c": true
      },
      {
        "id": "B",
        "t": "Watering hole",
        "c": false
      },
      {
        "id": "C",
        "t": "Infected website",
        "c": false
      },
      {
        "id": "D",
        "t": "Typosquatting",
        "c": false
      }
    ],
    "expl": "Il ransomware si è diffuso tramite il classico vettore di allegato infetto mascherato da curriculum ('opened a resume they received in a message'). Una volta aperto l'allegato, il codice malevolo embedded ha crittografato il disco. Le altre azioni descritte (aggiornamenti ufficiali, sito web aziendale) non costituiscono vettori di infezione in questo contesto.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_570",
    "text": "Qual è la migliore ragione tecnica dal punto di vista della sicurezza aziendale per procedere alla chiusura e disabilitazione sistematica di tutte le porte di servizio di rete non strettamente necessarie?",
    "opts": [
      {
        "id": "A",
        "t": "To mitigate risks associated with unencrypted traffic",
        "c": false
      },
      {
        "id": "B",
        "t": "To eliminate false positives from a vulnerability scan",
        "c": false
      },
      {
        "id": "C",
        "t": "To reduce a system's attack surface",
        "c": true
      },
      {
        "id": "D",
        "t": "To improve a system's resource utilization",
        "c": false
      }
    ],
    "expl": "Disabilitare software ed estensioni superflue e sbarrare le porte TCP/UDP non indispensabili è la base del System Hardening: riduce significativamente la superficie di attacco complessiva dell'host informatico, impedendo ad attori terzi di cercare ed abusare di difetti del software in ascolto.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_589",
    "text": "Il reparto contabilità di un'azienda riceve un'e-mail urgente proveniente apparentemente dal dominio internet della propria banca aziendale, che ordina l'esecuzione immediata di un ingente trasferimento fondi tramite bonifico ad un nuovo conto per evitare il blocco operativo. Quale attacco descrive questo evento?",
    "opts": [
      {
        "id": "A",
        "t": "Business email compromise",
        "c": true
      },
      {
        "id": "B",
        "t": "Vishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Spear phishing",
        "c": false
      },
      {
        "id": "D",
        "t": "Impersonation",
        "c": false
      }
    ],
    "expl": "L'attacco descrive un Business Email Compromise (BEC), in cui i truffatori impersonano o manipolano account e domini di intermediari finanziari o partner aziendali di assoluto rilievo, inviando comunicazioni email con carattere di massima urgenza per deviare transazioni contabili importanti su conti fittizi.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_592",
    "text": "Un analista di sicurezza informatica esamina con costanza gli annunci e le offerte di lavoro pubblicate dall'azienda all'esterno per assicurarsi che non trapelino involontariamente dettagli tecnici sensibili protetti. Quale informazione teme possa essere trapelata?",
    "opts": [
      {
        "id": "A",
        "t": "Office addresses",
        "c": false
      },
      {
        "id": "B",
        "t": "Software versions",
        "c": true
      },
      {
        "id": "C",
        "t": "List of board members",
        "c": false
      },
      {
        "id": "D",
        "t": "Government identification numbers",
        "c": false
      }
    ],
    "expl": "Gli attaccanti compiono una fase preliminare di OSINT (Open Source Intelligence), leggendo le offerte di lavoro dell'IT alla ricerca di elenchi specifici di tecnologie installate (es. 'cercasi esperto con esperienza su firewall Fortinet versione X e database Exchange 2016'). Questa disclosure di infrastruttura interna consente di mirare con precisione gli exploit.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_626",
    "text": "La registrazione, ad opera di criminali, del dominio www.c0mpany.com per agganciare le vittime destinate a far visita al portale ufficiale www.company.com costituisce quale tecnica d'attacco?",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting (URL Hijacking)",
        "c": true
      },
      {
        "id": "B",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "C",
        "t": "On-path",
        "c": false
      },
      {
        "id": "D",
        "t": "Watering-hole",
        "c": false
      }
    ],
    "expl": "Registrare varianti con semplici refusi di scrittura di indirizzi famosi è denominato Typosquatting.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_627",
    "text": "Alternativa d'esame: quali dei seguenti attacchi descrive l'acquisto e pubblicazione del dominio finto www.c0mpany.com per emulare il sito www.company.com?",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": true
      },
      {
        "id": "B",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "C",
        "t": "On-path",
        "c": false
      },
      {
        "id": "D",
        "t": "Watering-hole",
        "c": false
      }
    ],
    "expl": "Il typosquatting costituisce un'efficace esca passiva d'ingegneria sociale legata ad errori di digitazione.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_632",
    "text": "Un ingegnere teme che gli impiegati digitino le password in un portale fittizio simile ma non autorizzato dall'amministrazione. Quale attacco si realizza?",
    "opts": [
      {
        "id": "A",
        "t": "Impersonation",
        "c": true
      },
      {
        "id": "B",
        "t": "Replication",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "D",
        "t": "Smishing",
        "c": false
      }
    ],
    "expl": "Portali duplicati inviati per truffare le credenziali descrivono attività di phishing (di credential harvesting).",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_668",
    "text": "Un amministratore riceve l'SMS 'Sono il CEO, resetta subito la password del mio profilo causa emergenza lavorativa'. Quale vettore di attacco della minaccia viene utilizzato nel caso descritto?",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Smishing (SMS)",
        "c": true
      },
      {
        "id": "C",
        "t": "Pretexting",
        "c": false
      },
      {
        "id": "D",
        "t": "Impersonation",
        "c": false
      }
    ],
    "expl": "L'attacco viene veicolato via SMS (Smishing). In termini di vettori di attacco di ingegneria sociale, l'SMS è un canale in rapida crescita per bypassare le tradizionali protezioni del perimetro email aziendale.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_689",
    "text": "Un appaltatore esterno riceve il compito di aprire ed ispezionare visivamente tutti i circuiti e la componentistica delle schede madri di tutti i nuovi server industriali acquistati dall'azienda per verificare segni di manomissione o saldature anomale prima dell'installazione nei rack. Quale minaccia si vuole mitigare?",
    "opts": [
      {
        "id": "A",
        "t": "Embedded rootkit",
        "c": false
      },
      {
        "id": "B",
        "t": "Supply chain",
        "c": true
      },
      {
        "id": "C",
        "t": "Firmware failure",
        "c": false
      },
      {
        "id": "D",
        "t": "RFID keylogger",
        "c": false
      }
    ],
    "expl": "Nel contesto dei rischi legati alla Supply Chain (catena di fornitura), gli avversari sofisticati (come i nation-state) possono intercettare i componenti hardware durante la produzione o il trasporto per inserire microchip malevoli o firmware modificati (hardware implants). L'ispezione visiva approfondita mira a rilevare queste alterazioni fisiche.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_692",
    "text": "Un utente deve seguire un corso su https://comptiatraining.com. Digitando a mano l'URL, capita su una pagina notevolmente diversa con inviti a software antivirus fraudolenti. Quale spiegazione motivata risponde a questa anomalia?",
    "opts": [
      {
        "id": "A",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "B",
        "t": "Pretexting",
        "c": false
      },
      {
        "id": "C",
        "t": "Typosquatting",
        "c": true
      },
      {
        "id": "D",
        "t": "Vishing",
        "c": false
      }
    ],
    "expl": "Poiché il percorso è digitato manualmente dall'utente, la ragione più probabile per cui visualizza un portale palesemente strano e non correlato è un errore di digitazione (refuso o typo), che lo ha portato su un dominio simile registrato da attaccanti per scopi di typosquatting / malware distribution.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_696",
    "text": "La ricezione da parte del personale di help desk di una chiamata abusiva da parte di un utente che sostiene sonoramente di essere l'AD aziendale per forzare il ripristino istantaneo di password d'accesso descrive quale attività?",
    "opts": [
      {
        "id": "A",
        "t": "Vishing",
        "c": true
      },
      {
        "id": "B",
        "t": "Hacktivism",
        "c": false
      },
      {
        "id": "C",
        "t": "Blackmail",
        "c": false
      },
      {
        "id": "D",
        "t": "Misinformation",
        "c": false
      }
    ],
    "expl": "Fingersi un dirigente d'azienda di alto livello (CEO/AD) in una conversazione vocale per manipolare l'operatore dell'help desk a resettare una password d'accesso è una tecnica classica di Impersonation.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_731",
    "text": "Un dipendente riceve un SMS da un mittente sconosciuto che sostiene di essere l'Amministratore Delegato e, facendo leva su un'urgente chiusura commerciale, ordina l'acquisto immediato di diverse gift card. Di quale attacco si tratta?",
    "opts": [
      {
        "id": "A",
        "t": "Watering-hole",
        "c": false
      },
      {
        "id": "B",
        "t": "Disinformation",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "D",
        "t": "Impersonation",
        "c": true
      }
    ],
    "expl": "L'attacco è condotto tramite messaggio di testo SMS (Smishing) combinando la tecnica di impersonificazione del CEO per truffare finanziariamente il dipendente tramite l'acquisto indotto di gift card.",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_732",
    "text": "Un'e-mail palesemente sospetta proveniente dalla vera casella istituzionale violata dell'Amministratore Delegato ordina al dipartimento HR l'immediato invio di dati salariali del personale ed il contestuale cambio di numero telefonico per contatti amministrativi. Quale tipo di attacco descrive la situazione?",
    "opts": [
      {
        "id": "A",
        "t": "Business email compromise",
        "c": true
      },
      {
        "id": "B",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Brand impersonation",
        "c": false
      },
      {
        "id": "D",
        "t": "Pretexting",
        "c": false
      }
    ],
    "expl": "Lo scenario in cui l'account e-mail corporate ufficiale di un dirigente viene parzialmente o totalmente violato/compromesso per impartire istruzioni finanziarie anomale o deviare transazioni contabili e scopi esfiltrativi descrive l'essenza stessa del Business Email Compromise (BEC).",
    "domain": 2,
    "objective": "2.2"
  },
  {
    "id": "SCREEN_001",
    "source": "TL",
    "text": "A technician is installing a new cloud-based application for customer tracking and billing. Which of the following would be the most significant security concern associated with this installation?",
    "opts": [
      {
        "id": "A",
        "t": "Brand Impersonation",
        "c": false
      },
      {
        "id": "B",
        "t": "SMS Phishing",
        "c": false
      },
      {
        "id": "C",
        "t": "Piggybacking",
        "c": false
      },
      {
        "id": "D",
        "t": "SQL injection",
        "c": true
      }
    ],
    "expl": "Un'applicazione cloud per il tracking clienti e la fatturazione interagisce con un database. Il rischio più significativo è la SQL injection: se i campi di input non sono validati, un attaccante può manipolare le query per accedere o modificare dati sensibili dei clienti. Brand impersonation e SMS phishing sono vettori di social engineering, non vulnerabilità applicative.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_005",
    "source": "TL",
    "text": "An application does not perform any bounds checking when a user provides input. Which of the following exploits would be the most likely result of this issue?",
    "opts": [
      {
        "id": "A",
        "t": "Race condition",
        "c": false
      },
      {
        "id": "B",
        "t": "Zero-day",
        "c": false
      },
      {
        "id": "C",
        "t": "Buffer overflow",
        "c": true
      },
      {
        "id": "D",
        "t": "Open permission",
        "c": false
      }
    ],
    "expl": "La mancanza di bounds checking è esattamente la condizione che rende possibile un buffer overflow: l'input dell'utente può eccedere la dimensione del buffer allocato, sovrascrivendo memoria adiacente. Le race condition riguardano la tempistica degli eventi, non la dimensione dell'input.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_093",
    "source": "TL",
    "text": "A software company learns their product contains a vulnerability, and the security team suspects the issue was caused by a third-party dependency. What can the team consult to learn which dependencies are included in the product?",
    "opts": [
      {
        "id": "A",
        "t": "Continuous integration (CI)",
        "c": false
      },
      {
        "id": "B",
        "t": "The staging environment",
        "c": false
      },
      {
        "id": "C",
        "t": "The software bill of materials (SBOM)",
        "c": true
      },
      {
        "id": "D",
        "t": "The testing environment",
        "c": false
      }
    ],
    "expl": "Lo SBOM (Software Bill of Materials) è un inventario completo di tutti i componenti, librerie e dipendenze di terze parti incluse in un prodotto software. Permette di identificare rapidamente se una dipendenza vulnerabile è presente. CI, staging e testing environment non documentano le dipendenze.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_142",
    "text": "Which of the following vulnerabilities is associated with installing software outside of a manufacturer's approved software repository?",
    "opts": [
      {
        "id": "A",
        "t": "Jailbreaking",
        "c": false
      },
      {
        "id": "B",
        "t": "Memory injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Resource reuse",
        "c": false
      },
      {
        "id": "D",
        "t": "Side loading",
        "c": true
      }
    ],
    "expl": "Il side loading è l'installazione di applicazioni attraverso canali non ufficiali, al di fuori dell'app store approvato dal produttore. Il jailbreaking modifica il sistema operativo per rimuovere le restrizioni — è un passaggio diverso che spesso precede il side loading ma non è la stessa cosa.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_159",
    "text": "Which of the following enables the use of an input field to run commands that can view or manipulate data?",
    "opts": [
      {
        "id": "A",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "B",
        "t": "Side loading",
        "c": false
      },
      {
        "id": "C",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "D",
        "t": "SQL injection",
        "c": true
      }
    ],
    "expl": "La SQL injection usa i campi di input per inserire comandi SQL che possono visualizzare o modificare dati nel database. La XSS usa i campi di input per iniettare script nel browser del client, non per manipolare dati del database.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_167",
    "text": "A security team is reviewing the findings in a report that was delivered after a third party performed a penetration test. One of the findings indicated that a web application form field is vulnerable to cross-site scripting. Which of the following application security techniques should the security analyst recommend the developer implement to prevent this vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "Secure cookies",
        "c": false
      },
      {
        "id": "B",
        "t": "Version control",
        "c": false
      },
      {
        "id": "C",
        "t": "Input validation",
        "c": true
      },
      {
        "id": "D",
        "t": "Code signing",
        "c": false
      }
    ],
    "expl": "La mitigazione primaria per la XSS è l'input validation (e l'output encoding): se l'applicazione verifica e sanitizza l'input prima di includerlo nella risposta HTML, gli script malevoli non possono essere iniettati. Secure cookies proteggono i cookie ma non prevengono la XSS. Code signing verifica l'origine del software.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_174",
    "text": "Which of the following is a hardware-specific vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "Firmware version",
        "c": true
      },
      {
        "id": "B",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "C",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "D",
        "t": "Cross-site scripting",
        "c": false
      }
    ],
    "expl": "Il firmware è il software embedded nell'hardware (BIOS, firmware router, firmware IoT). Una versione di firmware vulnerabile è una vulnerabilità hardware-specific: è legata a quel componente hardware specifico. Buffer overflow, SQLi e XSS sono vulnerabilità del codice software, applicabili a molte piattaforme diverse.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_200",
    "text": "Which of the following is a primary security concern for a company setting up a BYOD program?",
    "opts": [
      {
        "id": "A",
        "t": "End of life",
        "c": false
      },
      {
        "id": "B",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "C",
        "t": "VM escape",
        "c": false
      },
      {
        "id": "D",
        "t": "Jailbreaking",
        "c": true
      }
    ],
    "expl": "In un programma BYOD, il rischio primario è il jailbreaking: un dispositivo mobile jailbroken ha rimosso le restrizioni di sicurezza del produttore, bypassando sandboxing, MDM e altri controlli. I dati aziendali su un dispositivo jailbroken sono potenzialmente esposti.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_219",
    "text": "A technician is opening ports on a firewall for a new system being deployed and supported by a SaaS provider. Which of the following is a risk in the new system?",
    "opts": [
      {
        "id": "A",
        "t": "Default credentials",
        "c": false
      },
      {
        "id": "B",
        "t": "Non-segmented network",
        "c": false
      },
      {
        "id": "C",
        "t": "Supply chain vendor",
        "c": true
      },
      {
        "id": "D",
        "t": "Vulnerable software",
        "c": false
      }
    ],
    "expl": "Quando si apre un sistema a un provider SaaS (terza parte), il rischio principale è la supply chain: il fornitore di servizi ha accesso ai sistemi o ai dati dell'organizzazione. Se il provider è compromesso, lo sono anche i sistemi del cliente. Le credenziali predefinite sono un rischio di misconfiguration, non supply chain.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_221",
    "text": "Which of the following involves an attempt to take advantage of database misconfigurations?",
    "opts": [
      {
        "id": "A",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "B",
        "t": "SQL injection",
        "c": true
      },
      {
        "id": "C",
        "t": "VM escape",
        "c": false
      },
      {
        "id": "D",
        "t": "Memory injection",
        "c": false
      }
    ],
    "expl": "La SQL injection sfrutta le misconfigurations del database (input non validato, query costruite per concatenazione) per manipolare le query SQL. Il buffer overflow sfrutta la mancanza di bounds checking, non le configurazioni del database.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_223",
    "text": "One of a company's vendors sent an analyst a security bulletin that recommends a BIOS update. Which of the following vulnerability types is being addressed by the patch?",
    "opts": [
      {
        "id": "A",
        "t": "Virtualization",
        "c": false
      },
      {
        "id": "B",
        "t": "Firmware",
        "c": true
      },
      {
        "id": "C",
        "t": "Application",
        "c": false
      },
      {
        "id": "D",
        "t": "Operating system",
        "c": false
      }
    ],
    "expl": "Il BIOS è firmware: il software embedded nella scheda madre che gestisce l'avvio del sistema. Un aggiornamento BIOS affronta vulnerabilità di tipo firmware. Non è una vulnerabilità applicativa né del sistema operativo — viene eseguito prima del boot dell'OS.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_238",
    "text": "A company is adding a clause to its AUP that states employees are not allowed to modify the operating system on mobile devices. Which of the following vulnerabilities is the organization addressing?",
    "opts": [
      {
        "id": "A",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "B",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "C",
        "t": "Jailbreaking",
        "c": true
      },
      {
        "id": "D",
        "t": "Side loading",
        "c": false
      }
    ],
    "expl": "\"Modify the operating system on mobile devices\" è la definizione del jailbreaking/rooting: modificare l'OS per rimuovere le restrizioni del produttore. Il side loading installa app non ufficiali senza modificare l'OS. La policy AUP indirizza specificamente il jailbreaking.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_270",
    "text": "Which of the following vulnerabilities is exploited when an attacker overwrites a register with a malicious address?",
    "opts": [
      {
        "id": "A",
        "t": "VM escape",
        "c": false
      },
      {
        "id": "B",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Buffer overflow",
        "c": true
      },
      {
        "id": "D",
        "t": "Race condition",
        "c": false
      }
    ],
    "expl": "Sovrascrivere un registro del processore con un indirizzo malevolo è la tecnica di sfruttamento classica del buffer overflow: l'attaccante fa traboccare il buffer per sovrascrivere il return address (o un instruction pointer) con l'indirizzo del suo shellcode.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_334",
    "text": "A security analyst is investigating an application server and discovers that software on the server is behaving abnormally. The software normally runs batch jobs locally and does not generate traffic, but the process is now generating outbound traffic over random high ports. Which of the following vulnerabilities has likely been exploited in this software?",
    "opts": [
      {
        "id": "A",
        "t": "Memory injection",
        "c": true
      },
      {
        "id": "B",
        "t": "Race condition",
        "c": false
      },
      {
        "id": "C",
        "t": "Side loading",
        "c": false
      },
      {
        "id": "D",
        "t": "SQL injection",
        "c": false
      }
    ],
    "expl": "Il software legittimo è stato compromesso e ora esegue codice malevolo aggiuntivo — il processo originale (batch job locale) ora genera traffico outbound, tipico di una reverse shell o di un C2. Memory injection: codice malevolo iniettato nel processo legittimo in esecuzione, che continua a sembrare legittimo al sistema operativo mentre esegue funzionalità malevole.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_388",
    "text": "Which of the following is a common source of unintentional corporate credential leakage in cloud environments?",
    "opts": [
      {
        "id": "A",
        "t": "Code repositories",
        "c": true
      },
      {
        "id": "B",
        "t": "Dark web",
        "c": false
      },
      {
        "id": "C",
        "t": "Threat feeds",
        "c": false
      },
      {
        "id": "D",
        "t": "State actors",
        "c": false
      },
      {
        "id": "E",
        "t": "Vulnerability databases",
        "c": false
      }
    ],
    "expl": "I code repository (Git, GitHub, GitLab) sono la fonte più comune di credential leakage involontario: gli sviluppatori committono accidentalmente API key, connection string, token di accesso e password nel codice. Questi repository possono essere pubblici o accessibili a molte persone.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_395",
    "text": "Which of the following is the most important security concern when using legacy systems to provide production service?",
    "opts": [
      {
        "id": "A",
        "t": "Instability",
        "c": false
      },
      {
        "id": "B",
        "t": "Lack of vendor support",
        "c": true
      },
      {
        "id": "C",
        "t": "Loss of availability",
        "c": false
      },
      {
        "id": "D",
        "t": "Use of insecure protocols",
        "c": false
      }
    ],
    "expl": "Il rischio principale dei sistemi legacy in produzione è la mancanza di supporto del vendor: il vendor non rilascia più patch di sicurezza, lasciando le vulnerabilità scoperte permanentemente aperte. L'instabilità e l'uso di protocolli non sicuri sono conseguenze, non la causa principale.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_413",
    "text": "A third-party vendor is moving a particular application to the end-of-life stage at the end of the current year. Which of the following is the most critical risk if the company chooses to continue running the application?",
    "opts": [
      {
        "id": "A",
        "t": "Lack of security updates",
        "c": true
      },
      {
        "id": "B",
        "t": "Lack of new features",
        "c": false
      },
      {
        "id": "C",
        "t": "Lack of support",
        "c": false
      },
      {
        "id": "D",
        "t": "Lack of source code access",
        "c": false
      }
    ],
    "expl": "Il rischio critico dell'EOL è la mancanza di aggiornamenti di sicurezza: qualsiasi vulnerabilità scoperta dopo la data EOL non verrà mai corretta. La mancanza di nuove funzionalità è un problema di business, non di sicurezza. La mancanza di supporto tecnico è correlata ma non è il rischio più critico.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_419",
    "text": "Which of the following is the best resource to consult for information on the most common application exploitation methods?",
    "opts": [
      {
        "id": "A",
        "t": "OWASP",
        "c": true
      },
      {
        "id": "B",
        "t": "STIX",
        "c": false
      },
      {
        "id": "C",
        "t": "OVAL",
        "c": false
      },
      {
        "id": "D",
        "t": "Threat intelligence feed",
        "c": false
      },
      {
        "id": "E",
        "t": "Common Vulnerabilities and Exposures",
        "c": false
      }
    ],
    "expl": "OWASP (Open Web Application Security Project) è la risorsa di riferimento per le vulnerabilità e le tecniche di sfruttamento delle applicazioni web (OWASP Top 10). STIX è un formato per la condivisione di threat intelligence; OVAL è per la descrizione di vulnerabilità di sistema; CVE cataloga le vulnerabilità individuali.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_428",
    "text": "A malicious update was distributed to a common software platform and disabled services at many organizations. Which of the following best describes this type of vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "DDoS attack",
        "c": false
      },
      {
        "id": "B",
        "t": "Rogue employee",
        "c": false
      },
      {
        "id": "C",
        "t": "Insider threat",
        "c": false
      },
      {
        "id": "D",
        "t": "Supply chain",
        "c": true
      }
    ],
    "expl": "Un aggiornamento malevolo distribuito attraverso i canali ufficiali del vendor a molte organizzazioni è un supply chain attack: l'attaccante ha compromesso il meccanismo di distribuzione del software del vendor (il componente della supply chain) per raggiungere i clienti finali tramite un vettore considerato fidato.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_429",
    "text": "A company web server is initiating outbound traffic to a low-reputation, public IP on non-standard port. The web server is used to present an unauthenticated page to clients who upload images to the company. An analyst notices a suspicious process running on the server that was not created by the company development team. Which of the following is the most likely explanation for this security incident?",
    "opts": [
      {
        "id": "A",
        "t": "A web shell has been deployed to the server through the page.",
        "c": true
      },
      {
        "id": "B",
        "t": "A vulnerability has been exploited to deploy a worm to the server.",
        "c": false
      },
      {
        "id": "C",
        "t": "Malicious insiders are using the server to mine cryptocurrency.",
        "c": false
      },
      {
        "id": "D",
        "t": "Attackers have deployed a rootkit Trojan to the server over an exposed RDP port.",
        "c": false
      }
    ],
    "expl": "Il web server accetta upload di immagini non autenticati: un attaccante ha caricato un web shell (un'applicazione web malevola che fornisce accesso remoto) mascherato da immagine. Il web shell genera il processo non autorizzato e il traffico outbound verso il C2. Non è un worm (che si propaga autonomamente) né un rootkit via RDP (non menzionto nel scenario).",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_475",
    "text": "Which of the following attacks exploits a potential vulnerability as a result of using weak cryptographic algorithms?",
    "opts": [
      {
        "id": "A",
        "t": "Password cracking",
        "c": true
      },
      {
        "id": "B",
        "t": "On-path",
        "c": false
      },
      {
        "id": "C",
        "t": "Digital signing",
        "c": false
      },
      {
        "id": "D",
        "t": "Side-channel",
        "c": false
      }
    ],
    "expl": "Se le password sono hashate con algoritmi deboli (MD5, SHA-1 non salted), un attaccante con le hash può usare GPU e rainbow table per trovare le password originali rapidamente. È una vulnerabilità crittografica sfruttata tramite password cracking. On-path è un attacco di rete; side-channel sfrutta informazioni fisiche (timing, consumo energetico).",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_496",
    "text": "While reviewing logs, a security administrator identifies the following code: &lt;script&gt;function (send_info)&lt;/script&gt;. Which of the following best describes the vulnerability being exploited?",
    "opts": [
      {
        "id": "A",
        "t": "XSS",
        "c": true
      },
      {
        "id": "B",
        "t": "SQLi",
        "c": false
      },
      {
        "id": "C",
        "t": "DDoS",
        "c": false
      },
      {
        "id": "D",
        "t": "CSRF",
        "c": false
      }
    ],
    "expl": "Il tag &lt;script&gt; con una funzione JavaScript nei log indica un tentativo di Cross-Site Scripting (XSS): un attaccante ha iniettato JavaScript in un campo di input o URL. SQLi userebbe comandi SQL (SELECT, INSERT, DROP), non JavaScript. DDoS è un attacco di rete.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_510",
    "text": "Which of the following allows an exploit to go undetected by the operating system?",
    "opts": [
      {
        "id": "A",
        "t": "Firmware vulnerabilities",
        "c": false
      },
      {
        "id": "B",
        "t": "Side loading",
        "c": false
      },
      {
        "id": "C",
        "t": "Memory injection",
        "c": true
      },
      {
        "id": "D",
        "t": "Encrypted payloads",
        "c": false
      }
    ],
    "expl": "La memory injection esegue il codice malevolo all'interno di un processo legittimo già in esecuzione, senza creare file su disco. I tool di sicurezza OS-based che cercano processi sospetti o file malevoli non lo rilevano perché il processo sembra legittimo e non c'è traccia su disco.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_531",
    "text": "During a SQL update of a database, a temporary field that was created was replaced by an attacker in order to allow access to the system. Which of the following best describes this type of vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "Race condition",
        "c": false
      },
      {
        "id": "B",
        "t": "Memory injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Malicious update",
        "c": true
      },
      {
        "id": "D",
        "t": "Side loading",
        "c": false
      }
    ],
    "expl": "Un campo temporaneo creato durante un aggiornamento SQL e poi sostituito da un attaccante descrive un malicious update: l'attaccante ha modificato il contenuto dell'aggiornamento legittimo. La race condition (TOC/TOU) è la tecnica usata, ma la classificazione della vulnerabilità è malicious update.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_538",
    "text": "Which of the following can be used to compromise a system that is running an RTOS?",
    "opts": [
      {
        "id": "A",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "B",
        "t": "Memory injection",
        "c": true
      },
      {
        "id": "C",
        "t": "Replay attack",
        "c": false
      },
      {
        "id": "D",
        "t": "Ransomware",
        "c": false
      }
    ],
    "expl": "Un RTOS (Real-Time Operating System) è un sistema operativo per dispositivi embedded con risorse limitate. Non ha filesystem tradizionale e non supporta software convenzionale. La memory injection permette di inserire codice malevolo direttamente nella memoria del sistema durante l'esecuzione, senza passare dal filesystem.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_545",
    "text": "A security administrator observed the following in a web server log while investigating an incident: \"GET ../../../../etc/passwd\" Which of the following attacks did the security administrator most likely see?",
    "opts": [
      {
        "id": "A",
        "t": "Privilege escalation",
        "c": false
      },
      {
        "id": "B",
        "t": "Credential replay",
        "c": false
      },
      {
        "id": "C",
        "t": "Brute force",
        "c": false
      },
      {
        "id": "D",
        "t": "Directory traversal",
        "c": true
      }
    ],
    "expl": "La sequenza ../../../../etc/passwd è il pattern canonico del directory traversal (path traversal): l'attaccante usa sequenze ../ per risalire dalla web root fino alla root del filesystem e accedere al file /etc/passwd del sistema Unix/Linux. Ogni ../ sale di un livello nella gerarchia.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_549",
    "text": "An attacker submits a request containing unexpected characters in an attempt to gain unauthorized access to information within the underlying systems. Which of the following best describes this attack?",
    "opts": [
      {
        "id": "A",
        "t": "Side loading",
        "c": false
      },
      {
        "id": "B",
        "t": "Target of evaluation",
        "c": false
      },
      {
        "id": "C",
        "t": "Resource reuse",
        "c": false
      },
      {
        "id": "D",
        "t": "SQL injection",
        "c": true
      }
    ],
    "expl": "\"Unexpected characters\" in una richiesta per accedere a \"underlying systems\" (il database sottostante) → SQL injection. I caratteri speciali come apostrofo, trattino doppio, virgola e punto e virgola sono usati per modificare la struttura delle query SQL.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_574",
    "text": "Which of the following is a possible consequence of a VM escape?",
    "opts": [
      {
        "id": "A",
        "t": "Malicious instructions can be inserted into memory and give the attacker elevated permissions.",
        "c": false
      },
      {
        "id": "B",
        "t": "An attacker can access the hypervisor and compromise other VMs.",
        "c": true
      },
      {
        "id": "C",
        "t": "Unencrypted data can be read by a user who is in a separate environment.",
        "c": false
      },
      {
        "id": "D",
        "t": "Users can install software that is not on the manufacturer's approved list.",
        "c": false
      }
    ],
    "expl": "Il VM escape permette all'attaccante di uscire dall'isolamento della VM e accedere all'hypervisor — il layer che gestisce tutte le VM. Dall'hypervisor, può compromettere tutte le altre VM sullo stesso host fisico. A descrive memory injection; C descrive resource reuse parzialmente; D descrive side loading.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_576",
    "text": "Which of the following is a type of vulnerability that involves inserting scripts into web-based applications in order to take control of the client's web browser?",
    "opts": [
      {
        "id": "A",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "B",
        "t": "Cross-site scripting",
        "c": true
      },
      {
        "id": "C",
        "t": "Zero-day exploit",
        "c": false
      },
      {
        "id": "D",
        "t": "On-path attack",
        "c": false
      }
    ],
    "expl": "La Cross-site scripting (XSS) inietta script in applicazioni web per controllare il browser del client: il browser della vittima esegue il codice malevolo credendo provenga dal sito legittimo. La SQLi manipola il database, non il browser del client.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_584",
    "text": "A malicious actor is trying to access sensitive financial information from a company's database by intercepting and reusing log-in credentials. Which of the following attacks is the malicious actor attempting?",
    "opts": [
      {
        "id": "A",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "B",
        "t": "On-path",
        "c": true
      },
      {
        "id": "C",
        "t": "Brute-force",
        "c": false
      },
      {
        "id": "D",
        "t": "Password spraying",
        "c": false
      }
    ],
    "expl": "Intercettare e riutilizzare credenziali di login è un attacco on-path (man-in-the-middle) con credential replay: l'attaccante si posiziona tra client e server, cattura le credenziali in transito, e le riusa. Non è brute-force (non indovina le password) né SQLi (non manipola il database direttamente).",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_608",
    "text": "Which of the following is an example of memory injection?",
    "opts": [
      {
        "id": "A",
        "t": "Two processes access the same variable, allowing one to cause a privilege escalation.",
        "c": false
      },
      {
        "id": "B",
        "t": "A process receives an unexpected amount of data, which causes malicious code to be executed.",
        "c": false
      },
      {
        "id": "C",
        "t": "Malicious code is copied to the allocated space of an already running process.",
        "c": true
      },
      {
        "id": "D",
        "t": "An executable is overwritten on the disk, and malicious code runs the next time it is executed.",
        "c": false
      }
    ],
    "expl": "Memory injection: codice malevolo copiato nello spazio di memoria allocato di un processo già in esecuzione (C). A descrive una race condition con privilege escalation. B descrive un buffer overflow (dati inaspettati che causano esecuzione di codice). D descrive la modifica di un eseguibile su disco — non è injection in memoria, il malware è sul disco.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_618",
    "text": "Which of the following is a type of vulnerability that refers to the unauthorized installation of applications on a device through means other than the official application store?",
    "opts": [
      {
        "id": "A",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "B",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "C",
        "t": "Jailbreaking",
        "c": false
      },
      {
        "id": "D",
        "t": "Side loading",
        "c": true
      }
    ],
    "expl": "Il side loading è l'installazione non autorizzata di applicazioni attraverso canali diversi dall'app store ufficiale. Il jailbreaking rimuove le restrizioni dell'OS — è spesso un prerequisito per il side loading su iOS, ma non è la stessa cosa.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_645",
    "text": "A company relies on open-source software libraries to build the software used by its customers. Which of the following vulnerability types would be the most difficult to remediate due to the company's reliance on open-source libraries?",
    "opts": [
      {
        "id": "A",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "B",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "D",
        "t": "Zero-day",
        "c": true
      }
    ],
    "expl": "Le librerie open-source non sono sotto il controllo dell'organizzazione. Per buffer overflow, SQLi e XSS nel proprio codice, l'organizzazione può applicare fix direttamente. Per una zero-day in una libreria open-source, deve aspettare che il maintainer della libreria rilasci la patch — non può rimediare autonomamente.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_665",
    "text": "Which of the following is a reason environmental variables are a concern when reviewing potential system vulnerabilities?",
    "opts": [
      {
        "id": "A",
        "t": "The contents of environmental variables could affect the scope and impact of an exploited vulnerability.",
        "c": true
      },
      {
        "id": "B",
        "t": "In-memory environmental variable values can be overwritten and used by attackers to insert malicious code.",
        "c": false
      },
      {
        "id": "C",
        "t": "Environmental variables define cryptographic standards for the system and could create vulnerabilities if deprecated algorithms are used.",
        "c": false
      },
      {
        "id": "D",
        "t": "Environmental variables will determine when updates are run and could mitigate the likelihood of vulnerability exploitation.",
        "c": false
      }
    ],
    "expl": "Le variabili d'ambiente influenzano il comportamento del sistema: debug=true può esporre stack trace dettagliati, una variabile con permessi eccessivi può amplificare l'impatto di una vulnerability già presente. Non sono la causa della vulnerability, ma ne amplificano la portata (scope e impact).",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_720",
    "text": "Which of the following is a type of vulnerability that may result from outdated algorithms or keys?",
    "opts": [
      {
        "id": "A",
        "t": "Hash collision",
        "c": false
      },
      {
        "id": "B",
        "t": "Cryptographic",
        "c": true
      },
      {
        "id": "C",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "D",
        "t": "Input validation",
        "c": false
      }
    ],
    "expl": "Algoritmi crittografici obsoleti (MD5, SHA-1, RC4, DES) o chiavi di lunghezza insufficiente creano vulnerabilità di tipo crittografico (cryptographic). Hash collision è un attacco specifico, non un tipo di vulnerabilità generale. Buffer overflow e input validation sono categorie diverse.",
    "domain": 2,
    "objective": "2.3"
  },
  {
    "id": "SCREEN_003",
    "source": "TL",
    "text": "A company has found malware in their lab which can move between systems without clicking any links. Which of the following would best describe this malware?",
    "opts": [
      {
        "id": "A",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "B",
        "t": "Sideloading",
        "c": false
      },
      {
        "id": "C",
        "t": "Worm",
        "c": true
      },
      {
        "id": "D",
        "t": "VM escape",
        "c": false
      }
    ],
    "expl": "La caratteristica distintiva del worm è la propagazione autonoma senza intervento umano: \"move between systems without clicking any links\" è esattamente la definizione di worm. SQL injection è un attacco web. Sideloading è installazione di app non ufficiali. VM escape riguarda la virtualizzazione.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_010",
    "source": "TL",
    "text": "A security analyst is reviewing the following logs: [10:00:00 AM] Login rejected - username administrator - password Spring2023; [10:00:01 AM] Login rejected - username jsmith - password Spring2023; [10:00:01 AM] Login rejected - username guest - password Spring2023; [10:00:02 AM] Login rejected - username cpolk - password Spring2023; [10:00:03 AM] Login rejected - username fmartin - password Spring2023. Which of the following attacks is most likely occurring?",
    "opts": [
      {
        "id": "A",
        "t": "Password spraying",
        "c": true
      },
      {
        "id": "B",
        "t": "Account forgery",
        "c": false
      },
      {
        "id": "C",
        "t": "Pass-the-hash",
        "c": false
      },
      {
        "id": "D",
        "t": "Brute-force",
        "c": false
      }
    ],
    "expl": "Pattern diagnostico: stessa password (\"Spring2023\") testata su account diversi in rapida successione. Questo è password spraying: 1 password × N account, progettato per evitare il lockout. Il brute-force userebbe password diverse sullo stesso account.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_012",
    "source": "TL",
    "text": "A systems administrator receives the following alert from a file integrity monitoring tool: The hash of the cmd.exe file has changed. The systems administrator checks the OS logs and notices that no patches were applied in the last two months. Which of the following most likely occurred?",
    "opts": [
      {
        "id": "A",
        "t": "The end user changed the file permissions.",
        "c": false
      },
      {
        "id": "B",
        "t": "A cryptographic collision was detected.",
        "c": false
      },
      {
        "id": "C",
        "t": "A snapshot of the file system was taken.",
        "c": false
      },
      {
        "id": "D",
        "t": "A rootkit was deployed.",
        "c": true
      }
    ],
    "expl": "cmd.exe è un file di sistema critico. L'hash è cambiato senza patch recenti che lo giustifichino. Un rootkit modifica file di sistema critici per nascondersi o per persistere. Una collisione crittografica reale è estremamente improbabile. Una snapshot non modifica il file, ne crea una copia.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_039",
    "source": "TL",
    "text": "Which technique is employed when executing a distributed denial-of-service (DDoS) attack?",
    "opts": [
      {
        "id": "A",
        "t": "Spoofing",
        "c": true
      },
      {
        "id": "B",
        "t": "Spraying",
        "c": false
      },
      {
        "id": "C",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "D",
        "t": "Hashing",
        "c": false
      }
    ],
    "expl": "Il DDoS utilizza lo spoofing dell'IP sorgente: l'attaccante falsifica gli IP di origine per nascondere la fonte reale dell'attacco e per il reflected DDoS (dove i server intermediari rispondono all'IP spoofato della vittima, amplificando il traffico verso di essa).",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_109",
    "source": "TL",
    "text": "Which of the following is generally a script planted by a disgruntled employee or other malicious actor that is set to execute at a certain time?",
    "opts": [
      {
        "id": "A",
        "t": "Trojan horse",
        "c": false
      },
      {
        "id": "B",
        "t": "Logic bomb",
        "c": true
      },
      {
        "id": "C",
        "t": "Adware",
        "c": false
      },
      {
        "id": "D",
        "t": "Virus",
        "c": false
      }
    ],
    "expl": "Una logic bomb è codice dormiente che si attiva a una condizione specifica (tipicamente una data/ora). È tipicamente piantata da insider malevoli (dipendenti scontenti). Il Trojan si maschera da software legittimo ma non è necessariamente time-triggered. Il virus si replica infettando altri file.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_143",
    "text": "A security analyst is reviewing the following logs: [10:00:00 AM] Login rejected - username administrator - password Spring2023; [10:00:01 AM] Login rejected - username jsmith - password Spring2023; [10:00:01 AM] Login rejected - username guest - password Spring2023; [10:00:02 AM] Login rejected - username cpolk - password Spring2023; [10:00:03 AM] Login rejected - username fmartin - password Spring2023. Which of the following attacks is most likely occurring?",
    "opts": [
      {
        "id": "A",
        "t": "Password spraying",
        "c": true
      },
      {
        "id": "B",
        "t": "Account forgery",
        "c": false
      },
      {
        "id": "C",
        "t": "Pass-the-hash",
        "c": false
      },
      {
        "id": "D",
        "t": "Brute-force",
        "c": false
      }
    ],
    "expl": "Il pattern è identico: stessa password su molti account diversi in rapida successione. Password spraying. Il brute-force prova molte password sullo stesso account.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_164",
    "text": "A systems administrator receives the following alert from a file integrity monitoring tool: The hash of the cmd.exe file has changed. The systems administrator checks the OS logs and notices that no patches were applied in the last two months. Which of the following most likely occurred?",
    "opts": [
      {
        "id": "A",
        "t": "The end user changed the file permissions.",
        "c": false
      },
      {
        "id": "B",
        "t": "A cryptographic collision was detected.",
        "c": false
      },
      {
        "id": "C",
        "t": "A snapshot of the file system was taken.",
        "c": false
      },
      {
        "id": "D",
        "t": "A rootkit was deployed.",
        "c": true
      }
    ],
    "expl": "Hash di file di sistema cambiato senza patch recenti = rootkit. Il rootkit modifica i file critici del sistema operativo per nascondersi e persistere.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_198",
    "text": "A security analyst reviews domain activity logs and notices the following: UserID jsmith, password authentication: succeeded, MFA: failed (invalid code) repeated multiple times. Which of the following is the best explanation for what the security analyst has discovered?",
    "opts": [
      {
        "id": "A",
        "t": "The user jsmith's account has been locked out.",
        "c": false
      },
      {
        "id": "B",
        "t": "A keylogger is installed on jsmith's workstation.",
        "c": false
      },
      {
        "id": "C",
        "t": "An attacker is attempting to brute force jsmith's account.",
        "c": true
      },
      {
        "id": "D",
        "t": "Ransomware has been deployed in the domain.",
        "c": false
      }
    ],
    "expl": "La password è corretta (autenticazione password: succeeded) ma il codice MFA fallisce ripetutamente. L'attaccante ha rubato la password ma non ha accesso al secondo fattore e tenta di indovinarlo (brute-force sul MFA). Il keylogger avrebbe catturato anche il MFA se fosse state TOTP digitato.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_218",
    "text": "A security analyst receives alerts about an internal system sending a large amount of unusual DNS queries to systems on the internet over short periods of time during non-business hours. Which of the following is most likely occurring?",
    "opts": [
      {
        "id": "A",
        "t": "A worm is propagating across the network.",
        "c": false
      },
      {
        "id": "B",
        "t": "Data is being exfiltrated.",
        "c": true
      },
      {
        "id": "C",
        "t": "A logic bomb is deleting data.",
        "c": false
      },
      {
        "id": "D",
        "t": "Ransomware is encrypting files.",
        "c": false
      }
    ],
    "expl": "Volume elevato di query DNS non usuali verso internet durante orari non lavorativi è il pattern del DNS tunneling: i dati vengono codificati nei sottodomini delle query DNS per esfiltrare informazioni attraverso un canale (DNS) che i firewall di solito non bloccano.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_264",
    "text": "A company's end users are reporting that they are unable to reach external websites. After reviewing the performance data for the DNS servers, the analyst discovers that the CPU, disk, and memory usage are minimal, but the network interface is flooded with inbound traffic. Network logs show only a small number of DNS queries sent to this server. Which of the following best describes what the security analyst is seeing?",
    "opts": [
      {
        "id": "A",
        "t": "Concurrent session usage",
        "c": false
      },
      {
        "id": "B",
        "t": "Secure DNS cryptographic downgrade",
        "c": false
      },
      {
        "id": "C",
        "t": "On-path resource consumption",
        "c": false
      },
      {
        "id": "D",
        "t": "Reflected denial of service",
        "c": true
      }
    ],
    "expl": "Il server DNS ha CPU/memoria minimi (non sta elaborando molto) ma la rete è inondata di traffico in ingresso e ha inviato poche query. Questo è un reflected DoS: l'attaccante ha spoofato l'IP del DNS come sorgente di richieste, e molti server internet ora inviano risposte a questo DNS (che non le ha richieste).",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_285",
    "text": "A company is experiencing a web services outage on the public network. The services are up and available but inaccessible. The network logs show a sudden increase in network traffic that is causing the outage. Which of the following attacks is the organization experiencing?",
    "opts": [
      {
        "id": "A",
        "t": "ARP poisoning",
        "c": false
      },
      {
        "id": "B",
        "t": "Brute force",
        "c": false
      },
      {
        "id": "C",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "D",
        "t": "DDoS",
        "c": true
      }
    ],
    "expl": "Il servizio è operativo (\"up and available\") ma inaccessibile a causa di un improvviso aumento del traffico di rete. Questa è la firma di un DDoS: il servizio funziona tecnicamente, ma è travolto dal volume di traffico malevolo che impedisce agli utenti legittimi di accedervi.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_303",
    "text": "An administrator finds that all user workstations and servers are displaying a message that is associated with files containing an extension of .ryk. Which of the following types of infections is present on the systems?",
    "opts": [
      {
        "id": "A",
        "t": "Virus",
        "c": false
      },
      {
        "id": "B",
        "t": "Trojan",
        "c": false
      },
      {
        "id": "C",
        "t": "Spyware",
        "c": false
      },
      {
        "id": "D",
        "t": "Ransomware",
        "c": true
      }
    ],
    "expl": "I file con estensione .ryk (Ryuk ransomware) e un messaggio associato sono gli indicatori classici del ransomware: i file sono stati cifrati e l'attaccante mostra le istruzioni per il riscatto. .ryk è la firma specifica della famiglia di ransomware Ryuk.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_304",
    "text": "A systems administrator is advised that an external web server is not functioning properly. The administrator reviews the following firewall logs containing traffic going to the web server: many source IPs all sending SYN packets to the same destination (100.50.20.7:443) at the same timestamp. Which of the following attacks is likely occurring?",
    "opts": [
      {
        "id": "A",
        "t": "DDoS",
        "c": true
      },
      {
        "id": "B",
        "t": "Directory traversal",
        "c": false
      },
      {
        "id": "C",
        "t": "Brute-force",
        "c": false
      },
      {
        "id": "D",
        "t": "HTTPS downgrade",
        "c": false
      }
    ],
    "expl": "Molti IP sorgente diversi che inviano SYN a una sola destinazione nello stesso momento: questo è un SYN flood DDoS. Il server esaurisce le risorse mantenendo aperte connessioni TCP half-open in attesa degli ACK che non arriveranno. Directory traversal appare nei log come richieste GET con ../.. .",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_372",
    "text": "A user downloaded software from an online forum. After the user installed the software, the security team observed external network traffic connecting to the user's computer on an uncommon port. Which of the following is the most likely explanation of this unauthorized connection?",
    "opts": [
      {
        "id": "A",
        "t": "The software had a hidden keylogger.",
        "c": false
      },
      {
        "id": "B",
        "t": "The software was ransomware.",
        "c": false
      },
      {
        "id": "C",
        "t": "The user's computer had a fileless virus.",
        "c": false
      },
      {
        "id": "D",
        "t": "The software contained a backdoor.",
        "c": true
      }
    ],
    "expl": "Software scaricato da forum non ufficiale che genera connessioni in entrata su porte non standard: classico Trojan con backdoor integrata. La backdoor apre una porta per permettere all'attaccante di connettersi da remoto. Un keylogger genererebbe traffico in uscita, non in entrata.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_384",
    "text": "A systems administrator notices that a testing system is down. The servers are online and accessible from any device on the server network. Test01 (10.25.1.3) received 654,123,168 bytes. Test02 (10.25.1.4) received 651,321,685 bytes. Other servers received normal traffic. Which of the following is the most likely cause of the outage?",
    "opts": [
      {
        "id": "A",
        "t": "Denial of service",
        "c": true
      },
      {
        "id": "B",
        "t": "ARP poisoning",
        "c": false
      },
      {
        "id": "C",
        "t": "Jamming",
        "c": false
      },
      {
        "id": "D",
        "t": "Kerberoasting",
        "c": false
      }
    ],
    "expl": "Test01 e Test02 hanno ricevuto 650+ milioni di byte di traffico mentre gli altri server ricevono volumi normali. Questa anomalia estrema di traffico in ricezione che causa il down dei soli test server è un attacco Denial of Service: i sistemi sono travolti dal volume di traffico ricevuto.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_400",
    "text": "A security analyst is reviewing a PCAP and notices traffic between an internal server and an external host that includes IPv6 encapsulated in IPv4 (proto 41) on non-standard port 13788. Sensitive data was found to have been leaked. Which of the following was most likely used to exfiltrate the data?",
    "opts": [
      {
        "id": "A",
        "t": "Encapsulation",
        "c": true
      },
      {
        "id": "B",
        "t": "MAC address spoofing",
        "c": false
      },
      {
        "id": "C",
        "t": "Steganography",
        "c": false
      },
      {
        "id": "D",
        "t": "Broken encryption",
        "c": false
      },
      {
        "id": "E",
        "t": "Sniffing via on-path position",
        "c": false
      }
    ],
    "expl": "Il traffico usa proto 41 (IPv6-in-IPv4 encapsulation) su una porta non standard (13788). I dati vengono nascosti dentro pacchetti IPv6 incapsulati in IPv4 per eludere i controlli di sicurezza che non ispezionano il payload. L'encapsulation come tecnica di esfiltrazione è l'indicatore diagnostico.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_418",
    "text": "An analyst finds the following in the command history on a compromised PC: PS> .\\mimikatz.exe \"sekurlsa::pth /user:localadmin /domain:corp-domain.com /ntlm:B4B9B02E1F29A3CF193EAB28C8D617D3F327\". Which of the following best describes how the attacker gained access to the hardened PC?",
    "opts": [
      {
        "id": "A",
        "t": "The attacker created fileless malware hosted by the banking platform.",
        "c": false
      },
      {
        "id": "B",
        "t": "The attacker performed a pass-the-hash attack using a shared support account.",
        "c": true
      },
      {
        "id": "C",
        "t": "The attacker utilized living-off-the-land binaries to evade EDR software.",
        "c": false
      },
      {
        "id": "D",
        "t": "The attacker socially engineered the accountant.",
        "c": false
      }
    ],
    "expl": "Il comando mimikatz sekurlsa::pth con /ntlm: è la firma del pass-the-hash: uso dell'hash NTLM dell'account localadmin per autenticarsi senza conoscere la password. L'account è condiviso (shared support account) il che spiega come l'hash è stato ottenuto da un altro PC.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_516",
    "text": "Attackers have redirected all outgoing database traffic to a server under their control. Which of the following MITRE ATT&CK techniques did the attacker most likely use to redirect database traffic?",
    "opts": [
      {
        "id": "A",
        "t": "Browser extension",
        "c": false
      },
      {
        "id": "B",
        "t": "Process injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Valid accounts",
        "c": true
      },
      {
        "id": "D",
        "t": "Escape to host",
        "c": false
      }
    ],
    "expl": "Usare \"valid accounts\" (account legittimi) è una tecnica MITRE ATT&CK: l'attaccante ha ottenuto credenziali valide per accedere al sistema di database e modificarne la configurazione per reindirizzare il traffico. Non è process injection (non è un attacco in memoria) né escape to host (virtualizzazione).",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_565",
    "text": "A security administrator noticed that DNS records (A and CNAME for @ and WWW) changed from 192.168.1.1 to 233.123.123.23 — an address not part of the company network. Which of the following was the company most likely experiencing?",
    "opts": [
      {
        "id": "A",
        "t": "DDoS attack",
        "c": false
      },
      {
        "id": "B",
        "t": "DNS poisoning",
        "c": true
      },
      {
        "id": "C",
        "t": "Ransomware compromise",
        "c": false
      },
      {
        "id": "D",
        "t": "Spyware infection",
        "c": false
      }
    ],
    "expl": "La modifica non autorizzata dei record DNS per puntare a un IP esterno sconosciuto è DNS poisoning (avvelenamento DNS): gli utenti che risolvono il dominio vengono reindirizzati verso un server controllato dall'attaccante invece di quello legittimo.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_586",
    "text": "VPN logs show that during non-working hours a user is accessing the company file server and information is being transferred to a suspicious IP address. Which of the following threats is most likely occurring?",
    "opts": [
      {
        "id": "A",
        "t": "Typosquatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Root or trust",
        "c": false
      },
      {
        "id": "C",
        "t": "Data exfiltration",
        "c": true
      },
      {
        "id": "D",
        "t": "Blackmail",
        "c": false
      }
    ],
    "expl": "Accesso durante orari non lavorativi (out-of-cycle logging) + trasferimento dati verso IP sospetto = indicatori classici di data exfiltration. Le credenziali VPN sono probabilmente state rubate. Il fatto che i dati vengano inviati a un IP esterno sospetto conferma l'esfiltrazione.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_662",
    "text": "A company's gate access logs show multiple entries from an employee's ID badge within a two-minute period. Which of the following is this an example of?",
    "opts": [
      {
        "id": "A",
        "t": "RFID cloning",
        "c": true
      },
      {
        "id": "B",
        "t": "Side-channel attack",
        "c": false
      },
      {
        "id": "C",
        "t": "Shoulder surfing",
        "c": false
      },
      {
        "id": "D",
        "t": "Tailgating",
        "c": false
      }
    ],
    "expl": "Più accessi dallo stesso badge in 2 minuti sullo stesso varco: il badge è stato clonato e qualcuno lo sta usando contemporaneamente all'utente legittimo. Il tailgating non usa il badge: una persona segue fisicamente un'altra. Lo shoulder surfing osserva informazioni visualizzate.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_690",
    "source": "TL",
    "text": "Which of the following could potentially be introduced at the time of side loading?",
    "opts": [
      {
        "id": "A",
        "t": "User impersonation",
        "c": false
      },
      {
        "id": "B",
        "t": "Rootkit",
        "c": true
      },
      {
        "id": "C",
        "t": "On-path attack",
        "c": false
      },
      {
        "id": "D",
        "t": "Buffer overflow",
        "c": false
      }
    ],
    "expl": "Il side loading installa app da fonti non ufficiali senza controllo di sicurezza. Un'app scaricata da un forum underground può contenere un rootkit: il malware si installa con privilegi elevati, modifica il sistema per nascondersi e per la persistenza.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_713",
    "text": "A security team receives reports about high latency and complete network unavailability throughout most of the office building. Flow logs from the campus switches show high traffic on TCP 445. Which of the following is most likely the root cause of this incident?",
    "opts": [
      {
        "id": "A",
        "t": "Buffer overflow",
        "c": false
      },
      {
        "id": "B",
        "t": "NTP amplification attack",
        "c": false
      },
      {
        "id": "C",
        "t": "Worm",
        "c": true
      },
      {
        "id": "D",
        "t": "DoS attack",
        "c": false
      }
    ],
    "expl": "Alto traffico su TCP 445 (SMB) con latenza elevata in tutto l'edificio senza causa esterna: pattern classico di un worm che si propaga autonomamente sulla rete locale usando SMB. WannaCry e NotPetya usavano esattamente questo vettore. Un DoS avrebbe traffico inbound esterno.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_715",
    "text": "When used with an access control vestibule which of the following would provide the best prevention against tailgating?",
    "opts": [
      {
        "id": "A",
        "t": "PIN",
        "c": false
      },
      {
        "id": "B",
        "t": "Access card",
        "c": false
      },
      {
        "id": "C",
        "t": "Security guard",
        "c": true
      },
      {
        "id": "D",
        "t": "CCTV",
        "c": false
      }
    ],
    "expl": "Il tailgating è una persona che segue fisicamente un'altra attraverso un varco di accesso. Solo una guardia di sicurezza può rilevare e fermare fisicamente il tailgating in un mantrap. PIN e access card verificano l'identità ma non impediscono che una seconda persona entri insieme. La CCTV rileva ma non previene.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_727",
    "text": "During a recent log review, an analyst discovers evidence of successful injection attacks. Which of the following will best address this issue?",
    "opts": [
      {
        "id": "A",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "B",
        "t": "Secure cookies",
        "c": false
      },
      {
        "id": "C",
        "t": "Static code analysis",
        "c": false
      },
      {
        "id": "D",
        "t": "Input validation",
        "c": true
      }
    ],
    "expl": "La mitigazione primaria e universale per tutti gli attacchi di injection (SQL, command, LDAP, XSS) è l'input validation: verificare e sanitizzare ogni input prima che venga elaborato o incluso in query/output. Static code analysis può rilevarli durante lo sviluppo ma non li previene in produzione.",
    "domain": 2,
    "objective": "2.4"
  },
  {
    "id": "SCREEN_006",
    "source": "TL",
    "text": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "WAF",
        "c": true
      },
      {
        "id": "B",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "C",
        "t": "TLS",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Un WAF (Web Application Firewall) opera a livello 7 e ispeziona il contenuto delle richieste HTTP. Può rilevare e bloccare parametri con caratteristiche anomale (lunghezza eccessiva, caratteri non attesi) tipici di un buffer overflow su applicazione web. Il NGFW vede solo traffico HTTPS legittimo verso la porta 443 e non ispeziona il payload applicativo. TLS cifra ma non filtra il contenuto malevolo.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_117",
    "text": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": true
      },
      {
        "id": "C",
        "t": "TLS",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Il WAF è la risposta corretta per attacchi alle applicazioni web. Analizza il payload HTTP a livello applicativo (L7) rilevando pattern di attacco come buffer overflow, SQLi e XSS. Il NGFW lavora a livello di rete e non capisce la semantica delle richieste HTTP.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_122",
    "text": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": true
      },
      {
        "id": "C",
        "t": "TLS",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Stessa domanda, stessa risposta: WAF per attacchi alle web application. La ripetizione nell'esame indica l'importanza di questo concetto. Memorizza: web application attack → WAF, non NGFW.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_125",
    "text": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": true
      },
      {
        "id": "C",
        "t": "TLS",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Quarta occorrenza dello stesso scenario. Il WAF è la risposta universale per attacchi alle applicazioni web esposti su internet. TLS protegge la confidenzialità in transito ma non filtra contenuti malevoli.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_134",
    "text": "An organization's internet-facing website was compromised when an attacker exploited a buffer overflow. Which of the following should the organization deploy to best protect against similar attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": true
      },
      {
        "id": "C",
        "t": "TLS",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Quinta occorrenza. CompTIA vuole assicurarsi che tu conosca WAF vs NGFW. WAF = web application layer 7. NGFW = network layer 3-4. Per attacchi a web app la risposta è sempre WAF.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_251",
    "text": "A newly identified network access vulnerability has been found in the OS of legacy IoT devices. Which of the following would best mitigate this vulnerability quickly?",
    "opts": [
      {
        "id": "A",
        "t": "Insurance",
        "c": false
      },
      {
        "id": "B",
        "t": "Patching",
        "c": false
      },
      {
        "id": "C",
        "t": "Segmentation",
        "c": true
      },
      {
        "id": "D",
        "t": "Replacement",
        "c": false
      }
    ],
    "expl": "I dispositivi IoT legacy non possono ricevere patch (EOL) e la sostituzione non è rapida. La segmentazione isola i dispositivi vulnerabili in un segmento di rete separato limitando l'esposizione senza richiedere modifiche ai dispositivi. È la soluzione più rapida e praticabile. L'assicurazione gestisce il rischio finanziario, non tecnico.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_269",
    "text": "Which of the following would be the best way to handle a critical business application that is running on a legacy server?",
    "opts": [
      {
        "id": "A",
        "t": "Segmentation",
        "c": true
      },
      {
        "id": "B",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Hardening",
        "c": false
      },
      {
        "id": "D",
        "t": "Decommissioning",
        "c": false
      }
    ],
    "expl": "L'applicazione è critica (non può essere dismessa) e gira su server legacy (difficile da hardenire). La segmentazione è la risposta: mantiene la funzionalità operativa isolando il sistema in un segmento di rete con accesso controllato. L'isolamento completo impedirebbe l'accesso agli utenti che ne hanno bisogno. Il decommissioning non è possibile se l'applicazione è critica.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_391",
    "text": "A security administrator is hardening corporate systems and applying appropriate mitigations by consulting a real-world knowledge base for adversary behavior. Which of the following would be best for the administrator to reference?",
    "opts": [
      {
        "id": "A",
        "t": "MITRE ATT&CK",
        "c": true
      },
      {
        "id": "B",
        "t": "CSIRT",
        "c": false
      },
      {
        "id": "C",
        "t": "CVSS",
        "c": false
      },
      {
        "id": "D",
        "t": "SOAR",
        "c": false
      }
    ],
    "expl": "MITRE ATT&CK è una knowledge base pubblica e sistematica del comportamento reale degli avversari: tattiche, tecniche e procedure osservate in attacchi reali. È la risorsa di riferimento per chi vuole mappare le proprie difese rispetto a comportamenti reali degli attaccanti. CSIRT è un team di risposta agli incidenti. CVSS è un sistema di scoring delle vulnerabilità. SOAR è una piattaforma di automazione della risposta.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_529",
    "text": "An organization's web servers host an online ordering system vulnerable to malicious JavaScript injection, which could allow attackers to access customer payment information. Which of the following mitigation strategies would be most effective? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Regularly updating server software and patches",
        "c": true
      },
      {
        "id": "B",
        "t": "Implementing strong password policies",
        "c": false
      },
      {
        "id": "C",
        "t": "Encrypting sensitive data at rest and in transit",
        "c": false
      },
      {
        "id": "D",
        "t": "Utilizing a web-application firewall",
        "c": true
      },
      {
        "id": "E",
        "t": "Performing regular vulnerability scans",
        "c": false
      },
      {
        "id": "F",
        "t": "Removing payment information from the servers",
        "c": false
      }
    ],
    "expl": "Due risposte: (A) Patching regolare del server riduce le vulnerabilità note sfruttabili. (D) WAF filtra le richieste con JavaScript injection a livello 7. La cifratura (C) protegge i dati ma non previene l'injection. Le policy password (B) non sono rilevanti per XSS. La vulnerability scanning (E) è Detective, non Preventive.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_572",
    "text": "A malicious actor conducted a brute-force attack on a company's web servers and eventually gained access to the company's customer information database. Which of the following is the most effective way to prevent similar attacks?",
    "opts": [
      {
        "id": "A",
        "t": "Regular patching of servers",
        "c": false
      },
      {
        "id": "B",
        "t": "Web application firewalls",
        "c": false
      },
      {
        "id": "C",
        "t": "Multifactor authentication",
        "c": true
      },
      {
        "id": "D",
        "t": "Enabling encryption of customer data",
        "c": false
      }
    ],
    "expl": "Il brute-force indovina le credenziali (password). L'MFA aggiunge un secondo fattore che l'attaccante non possiede: anche con la password corretta, non può accedere senza il secondo fattore. Il patching e il WAF non impediscono il brute-force delle credenziali. La cifratura protegge i dati ma non impedisce l'accesso con credenziali valide.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_663",
    "text": "Which of the following most accurately describes the order in which a security engineer should implement secure baselines?",
    "opts": [
      {
        "id": "A",
        "t": "Deploy, maintain, establish",
        "c": false
      },
      {
        "id": "B",
        "t": "Establish, maintain, deploy",
        "c": false
      },
      {
        "id": "C",
        "t": "Establish, deploy, maintain",
        "c": true
      },
      {
        "id": "D",
        "t": "Deploy, establish, maintain",
        "c": false
      }
    ],
    "expl": "L'ordine corretto è Establish → Deploy → Maintain. Prima si definisce la baseline sicura (establish: documentare le configurazioni minime di sicurezza). Poi la si implementa su tutti i sistemi (deploy: Group Policy, Ansible, script). Poi la si mantiene nel tempo (maintain: monitorare il drift, aggiornare la baseline, rieseguire il deployment). Non si può mantenere ciò che non è stato prima definito e implementato.",
    "domain": 2,
    "objective": "2.5"
  },
  {
    "id": "SCREEN_002",
    "source": "TL",
    "text": "A system administrator is installing a zero-day patch on the company's hypervisors. Which of the following attacks would the administrator be most likely preventing?",
    "opts": [
      {
        "id": "A",
        "t": "Escaping",
        "c": true
      },
      {
        "id": "B",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "C",
        "t": "Sideloading",
        "c": false
      },
      {
        "id": "D",
        "t": "Cross-site scripting",
        "c": false
      }
    ],
    "expl": "Una patch sull'hypervisor previene il VM escape (escaping): la vulnerabilità che permette a un attaccante all'interno di una VM di uscire dall'isolamento e accedere all'hypervisor o ad altre VM. SQL injection è un attacco web. Sideloading riguarda i dispositivi mobili. XSS è un attacco web.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_034",
    "source": "TL",
    "text": "Which of the following is the biggest risk involved in cloud computing?",
    "opts": [
      {
        "id": "A",
        "t": "Lack of control",
        "c": true
      },
      {
        "id": "B",
        "t": "Lack of availability",
        "c": false
      },
      {
        "id": "C",
        "t": "Lack of accountability",
        "c": false
      },
      {
        "id": "D",
        "t": "Lack of responsibility",
        "c": false
      }
    ],
    "expl": "Il rischio principale del cloud è la perdita di controllo sull'infrastruttura sottostante: il cliente non può accedere fisicamente ai server, non può controllare direttamente chi accede all'hardware, e dipende dal provider per la sicurezza dell'infrastruttura. I cloud provider offrono SLA elevati (non mancanza di disponibilità) e contratti chiari (accountability e responsabilità definite).",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_052",
    "source": "TL",
    "text": "Which type of cloud service is usually operated by a third-party provider that sells or rents \"pieces\" of the cloud to different entities?",
    "opts": [
      {
        "id": "A",
        "t": "External",
        "c": false
      },
      {
        "id": "B",
        "t": "Community",
        "c": false
      },
      {
        "id": "C",
        "t": "Public",
        "c": true
      },
      {
        "id": "D",
        "t": "Private",
        "c": false
      }
    ],
    "expl": "Il cloud pubblico è gestito da un provider terzo che affitta porzioni dell'infrastruttura a molte entità diverse (multi-tenant). Il cloud privato è dedicato a una singola organizzazione. Il community cloud è condiviso tra organizzazioni con requisiti simili.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_062",
    "source": "TL",
    "text": "Your company plans on opening three new branch offices. Devices on each network must securely connect to all other branch networks with least network latency. The solution must include web filtering and firewall rule capabilities. Each branch has a secured connection into a public cloud provider. Which solution should you implement?",
    "opts": [
      {
        "id": "A",
        "t": "SASE",
        "c": true
      },
      {
        "id": "B",
        "t": "SD-WAN",
        "c": false
      },
      {
        "id": "C",
        "t": "Cloud-based reverse proxying",
        "c": false
      },
      {
        "id": "D",
        "t": "Site-to-site VPN",
        "c": false
      }
    ],
    "expl": "SASE combina SD-WAN (connettività ottimizzata) con funzionalità di sicurezza integrate (web filtering, firewall, ZTNA). È progettato per ambienti distribuiti con cloud connectivity già in posto. SD-WAN ottimizza solo il routing, non include web filtering e firewall integrati. Site-to-site VPN non scala bene con molte sedi e non include web filtering.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_092",
    "source": "TL",
    "text": "Which of the following roles, according to the shared responsibility model, is responsible for securing the company's database in an IaaS model?",
    "opts": [
      {
        "id": "A",
        "t": "Client",
        "c": true
      },
      {
        "id": "B",
        "t": "Third-party vendor",
        "c": false
      },
      {
        "id": "C",
        "t": "Cloud provider",
        "c": false
      },
      {
        "id": "D",
        "t": "DBA",
        "c": false
      }
    ],
    "expl": "In IaaS, il cliente è responsabile di tutto ciò che gira sopra la virtualizzazione: OS, middleware, applicazioni e dati (incluso il database). Il cloud provider gestisce hardware, rete e virtualizzazione. Il DBA è un ruolo interno al cliente, non un'entità separata nel modello di responsabilità.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_099",
    "source": "TL",
    "text": "How can attack path simulation help an organization choose the right preventative security controls for their cloud environment?",
    "opts": [
      {
        "id": "A",
        "t": "Determining whether the organization's cloud has the expected security posture",
        "c": false
      },
      {
        "id": "B",
        "t": "Protecting resources by creating threats to cloud services",
        "c": false
      },
      {
        "id": "C",
        "t": "Helping the organization identify where they could be attacked",
        "c": true
      },
      {
        "id": "D",
        "t": "Resolving vulnerabilities in web applications",
        "c": false
      }
    ],
    "expl": "L'attack path simulation simula come un attaccante potrebbe muoversi attraverso l'ambiente cloud per raggiungere asset critici. Il suo valore principale è identificare dove si possono essere attaccati (vulnerabilità di percorso), permettendo di scegliere i controlli preventivi più efficaci per bloccare quei percorsi.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_165",
    "text": "Which of the following roles, according to the shared responsibility model, is responsible for securing the company's database in an IaaS model?",
    "opts": [
      {
        "id": "A",
        "t": "Client",
        "c": true
      },
      {
        "id": "B",
        "t": "Third-party vendor",
        "c": false
      },
      {
        "id": "C",
        "t": "Cloud provider",
        "c": false
      },
      {
        "id": "D",
        "t": "DBA",
        "c": false
      }
    ],
    "expl": "In IaaS il cliente è sempre responsabile del database: il provider gestisce solo infrastruttura, rete e hypervisor.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_173",
    "text": "A company's legal department drafted sensitive documents in a SaaS application and wants to ensure the documents cannot be accessed by individuals in high-risk countries. Which of the following is the most effective way to limit this access?",
    "opts": [
      {
        "id": "A",
        "t": "Data masking",
        "c": false
      },
      {
        "id": "B",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "C",
        "t": "Geolocation policy",
        "c": true
      },
      {
        "id": "D",
        "t": "Data sovereignty regulation",
        "c": false
      }
    ],
    "expl": "Una geolocation policy blocca l'accesso al SaaS da specifiche posizioni geografiche (paesi ad alto rischio). Il data masking mostrerebbe dati fittizi ma non impedirebbe l'accesso. La cifratura non impedisce l'accesso agli utenti autenticati. La data sovereignty è una normativa, non un controllo tecnico che il cliente può applicare direttamente.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_196",
    "text": "A systems administrator is looking for a low-cost application-hosting solution that is cloud-based. Which of the following meets these requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Serverless framework",
        "c": true
      },
      {
        "id": "B",
        "t": "Type 1 hypervisor",
        "c": false
      },
      {
        "id": "C",
        "t": "SD-WAN",
        "c": false
      },
      {
        "id": "D",
        "t": "SDN",
        "c": false
      }
    ],
    "expl": "Il serverless framework è cloud-based e ha un costo molto basso (pay-per-execution, nessun server idle da pagare, nessuna infrastruttura da gestire). Un hypervisor di tipo 1 è on-premises. SD-WAN e SDN sono per la gestione della rete, non per l'hosting di applicazioni.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_212",
    "text": "Which of the following would be best suited for constantly changing environments?",
    "opts": [
      {
        "id": "A",
        "t": "RTOS",
        "c": false
      },
      {
        "id": "B",
        "t": "Containers",
        "c": true
      },
      {
        "id": "C",
        "t": "Embedded systems",
        "c": false
      },
      {
        "id": "D",
        "t": "SCADA",
        "c": false
      }
    ],
    "expl": "I container sono ideali per ambienti in costante evoluzione: si avviano e si fermano in secondi, sono immutabili (ogni deploy è identico), e supportano orchestrazione automatica (Kubernetes). RTOS e embedded sono sistemi fissi e specializzati. SCADA è per controllo industriale, non ambienti variabili.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_243",
    "text": "An organization is struggling with scaling issues on its VPN concentrator and internet circuit due to remote work. The organization wants a solution to reduce VPN and internet traffic while still providing encrypted access to the data center and monitoring of remote employee internet traffic. Which of the following will help?",
    "opts": [
      {
        "id": "A",
        "t": "Deploying a SASE solution to remote employees",
        "c": true
      },
      {
        "id": "B",
        "t": "Building a load-balanced VPN solution with redundant internet",
        "c": false
      },
      {
        "id": "C",
        "t": "Purchasing a low-cost SD-WAN solution for VPN traffic",
        "c": false
      },
      {
        "id": "D",
        "t": "Using a cloud provider to create additional VPN concentrators",
        "c": false
      }
    ],
    "expl": "SASE risolve il problema del VPN concentrator sovraccarico: gestisce il traffico nel cloud localmente (near-user) invece di farlo transitare tutto attraverso un concentrator centrale. Include tunneling cifrato verso il data center E monitoring del traffico internet dei dipendenti. SD-WAN senza componenti di sicurezza non include il monitoring internet. Aggiungere VPN concentrators non risolve il problema alla radice.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_293",
    "text": "A company is redesigning its infrastructure and wants to reduce the number of physical servers in use. Which of the following architectures is best suited for this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Serverless",
        "c": false
      },
      {
        "id": "B",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Virtualization",
        "c": true
      },
      {
        "id": "D",
        "t": "Microservices",
        "c": false
      }
    ],
    "expl": "La virtualizzazione consolida più workload su meno server fisici tramite hypervisor. Ogni server fisico può ospitare multiple VM, riducendo direttamente il numero di server fisici necessari. Serverless elimina la gestione dei server ma non riduce i server fisici dell'organizzazione. Microservices è un'architettura software, non una tecnologia di riduzione hardware.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_320",
    "text": "A security team is setting up a new environment for hosting the organization's on-premises software application as a cloud-based service. Which of the following should the team ensure is in place to follow security best practices?",
    "opts": [
      {
        "id": "A",
        "t": "Virtualization and isolation of resources",
        "c": true
      },
      {
        "id": "B",
        "t": "Network segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Data encryption",
        "c": false
      },
      {
        "id": "D",
        "t": "Strong authentication policies",
        "c": false
      }
    ],
    "expl": "Per un ambiente cloud-based che ospita un'applicazione di produzione, la best practice fondamentale è la virtualizzazione e l'isolamento delle risorse: ogni tenant o applicazione deve essere isolata dalle altre tramite hypervisor e network isolation. Previene che un'applicazione compromessa acceda alle risorse di un'altra.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_329",
    "text": "Which of the following security measures is required when using a cloud-based platform for IoT management?",
    "opts": [
      {
        "id": "A",
        "t": "Encrypted connection",
        "c": true
      },
      {
        "id": "B",
        "t": "Federated identity",
        "c": false
      },
      {
        "id": "C",
        "t": "Firewall",
        "c": false
      },
      {
        "id": "D",
        "t": "Single sign-on",
        "c": false
      }
    ],
    "expl": "Per la gestione IoT su cloud, la connessione cifrata è il requisito fondamentale: i dispositivi IoT trasmettono dati verso il cloud attraverso reti potenzialmente non sicure. Senza cifratura, i dati dei sensori e i comandi di controllo sono intercettabili. L'identità federata e SSO sono rilevanti per gli utenti umani, non per i dispositivi IoT.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_373",
    "text": "A utility company needs a platform for virtual machines with 50% memory baseline, storage scalability, and single circuit failure resilience. Which best meets all requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Connecting dual PDUs to redundant power supplies",
        "c": false
      },
      {
        "id": "B",
        "t": "Transitioning the platform to an IaaS provider",
        "c": true
      },
      {
        "id": "C",
        "t": "Configuring network load balancing for multiple paths",
        "c": false
      },
      {
        "id": "D",
        "t": "Deploying multiple large NAS devices for each host",
        "c": false
      }
    ],
    "expl": "IaaS offre: storage scalabile (aggiunta di storage on-demand), resilienza ai guasti di circuito (multi-AZ, ridondanza geografica gestita dal provider), e capacità di soddisfare il baseline di utilizzo. Dual PDU risolve solo i guasti di alimentazione. Load balancing è per la rete, non per lo storage e la resilienza generale. NAS locali non offrono la scalabilità richiesta.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_392",
    "text": "An architect has a request to increase the speed of data transfer using JSON requests externally. Currently, the organization uses SFTP. Which of the following will most likely meet the requirements?",
    "opts": [
      {
        "id": "A",
        "t": "A website-hosted solution",
        "c": false
      },
      {
        "id": "B",
        "t": "Cloud shared storage",
        "c": false
      },
      {
        "id": "C",
        "t": "A secure email solution",
        "c": false
      },
      {
        "id": "D",
        "t": "Microservices using API",
        "c": true
      }
    ],
    "expl": "I microservizi con API RESTful sono progettati per trasferire dati strutturati (JSON) ad alta velocità tra sistemi. SFTP è file-based e non nativo per JSON. Email e storage condiviso hanno latenza elevata e non sono ottimizzati per trasferimento dati programmatico ad alta frequenza.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_401",
    "text": "A company wants to reduce the time and expense associated with code deployment. Which of the following technologies should the company utilize?",
    "opts": [
      {
        "id": "A",
        "t": "Serverless architecture",
        "c": true
      },
      {
        "id": "B",
        "t": "Thin clients",
        "c": false
      },
      {
        "id": "C",
        "t": "Private cloud",
        "c": false
      },
      {
        "id": "D",
        "t": "Virtual machines",
        "c": false
      }
    ],
    "expl": "L'architettura serverless riduce tempo e costi di deployment: non si deve gestire l'infrastruttura (provisioning, configurazione, patching dei server), si deploya solo il codice della funzione. Il cloud provider si occupa di tutto il resto automaticamente. VM e cloud privato richiedono comunque la gestione dell'infrastruttura.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_447",
    "text": "SIMULATION: A security analyst is creating a network diagram for a customer-facing payment application hosted by a third-party cloud provider. Which architecture best represents a secure, redundant web application?",
    "opts": [
      {
        "id": "A",
        "t": "Internet Gateway → WAF → Load Balancer (public subnet); two app instances (private subnet); DB (private subnet).",
        "c": true
      },
      {
        "id": "B",
        "t": "Internet Gateway → Database in public subnet → single app instance in private subnet; no load balancer.",
        "c": false
      },
      {
        "id": "C",
        "t": "Internet Gateway → App instance in public subnet → database in public subnet; WAF only on internal traffic.",
        "c": false
      },
      {
        "id": "D",
        "t": "Internet Gateway → Load balancer in private subnet → two databases in public subnet; no WAF.",
        "c": false
      }
    ],
    "expl": "Schema corretto: WAF davanti a tutto (filtra attacchi web), Load Balancer in subnet pubblica (gestisce il traffico e garantisce HA), istanze applicazione in private subnet (non esposte direttamente), database in private subnet (mai esposto a internet). Il DB in subnet pubblica (B, C) è un grave errore di sicurezza.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_452",
    "text": "A systems administrator is concerned about vulnerabilities within cloud computing instances. Which of the following is most important to consider when architecting a cloud computing environment?",
    "opts": [
      {
        "id": "A",
        "t": "SQL injection",
        "c": false
      },
      {
        "id": "B",
        "t": "TOC/TOU",
        "c": false
      },
      {
        "id": "C",
        "t": "VM escape",
        "c": true
      },
      {
        "id": "D",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "E",
        "t": "Password spraying",
        "c": false
      }
    ],
    "expl": "Il VM escape è la vulnerabilità più critica specifica agli ambienti cloud virtualizzati: permette a un tenant malevolo di uscire dall'isolamento della VM e accedere all'hypervisor o ad altre VM sullo stesso host fisico, violando l'isolamento multi-tenant. SQL injection è un attacco web, non specifico del cloud.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_456",
    "text": "An organization is looking to optimize its environment and reduce the number of patches necessary for operating systems. Which of the following will best help to achieve this objective?",
    "opts": [
      {
        "id": "A",
        "t": "Microservices",
        "c": false
      },
      {
        "id": "B",
        "t": "Virtualization",
        "c": false
      },
      {
        "id": "C",
        "t": "Real-time operating system",
        "c": false
      },
      {
        "id": "D",
        "t": "Containers",
        "c": true
      }
    ],
    "expl": "I container impacchettano l'applicazione con tutte le sue dipendenze: non si patchano le dipendenze nel container separatamente — si ricostruisce il container con la versione aggiornata. L'OS host richiede meno patch perché molte dipendenze applicative sono dentro i container. La virtualizzazione non riduce le patch dell'OS.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_461",
    "text": "An organization plans to expand internationally and needs to keep data at the new location secure. The organization wants to use the most secure architecture model possible. Which of the following models offers the highest level of security?",
    "opts": [
      {
        "id": "A",
        "t": "Cloud-based",
        "c": false
      },
      {
        "id": "B",
        "t": "Peer-to-peer",
        "c": false
      },
      {
        "id": "C",
        "t": "On-premises",
        "c": true
      },
      {
        "id": "D",
        "t": "Hybrid",
        "c": false
      }
    ],
    "expl": "L'architettura on-premises offre il massimo livello di controllo: l'organizzazione gestisce direttamente tutta l'infrastruttura fisica, nessun terzo ha accesso all'hardware, e le policy di sicurezza possono essere applicate senza vincoli contrattuali con provider esterni. Il cloud riduce il controllo cedendo la gestione dell'infrastruttura al provider.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_469",
    "text": "A company is redesigning its infrastructure and wants to reduce the number of physical servers in use. Which of the following architectures is best suited for this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "B",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Virtualization",
        "c": true
      },
      {
        "id": "D",
        "t": "Redundancy",
        "c": false
      }
    ],
    "expl": "La virtualizzazione consolida più workload su meno hardware fisico. L'isolamento e la segmentazione gestiscono i confini di sicurezza ma non riducono il numero di server fisici. La ridondanza aumenta i server per garantire disponibilità.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_494",
    "text": "Which of the following architectures is most suitable to provide redundancy for critical business processes?",
    "opts": [
      {
        "id": "A",
        "t": "Network-enabled",
        "c": false
      },
      {
        "id": "B",
        "t": "Server-side",
        "c": false
      },
      {
        "id": "C",
        "t": "Cloud-native",
        "c": true
      },
      {
        "id": "D",
        "t": "Multitenant",
        "c": false
      }
    ],
    "expl": "Un'architettura cloud-native sfrutta nativamente la ridondanza geografica (multi-AZ, multi-region), il failover automatico e il load balancing gestito dal provider cloud, fornendo alta disponibilità per processi di business critici senza dover gestire l'infrastruttura ridondante internamente.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_506",
    "text": "A network administrator wants to ensure that network traffic is highly secure while in transit. Which of the following best describes the actions the administrator should take?",
    "opts": [
      {
        "id": "A",
        "t": "Ensure NAC is enforced on all segments and firewalls have updated policies.",
        "c": false
      },
      {
        "id": "B",
        "t": "Ensure only TLS and other encrypted protocols are used, and only permit authorized traffic via secure protocols.",
        "c": true
      },
      {
        "id": "C",
        "t": "Configure the perimeter IPS to block inbound HTTPS directory traversal traffic.",
        "c": false
      },
      {
        "id": "D",
        "t": "Ensure EDR monitors for unauthorized applications.",
        "c": false
      }
    ],
    "expl": "Per garantire la sicurezza del traffico in transito, la risposta è l'uso esclusivo di protocolli cifrati (TLS per web/app, SSH per amministrazione, SFTP per file transfer) e il blocco del traffico non cifrato (Telnet, HTTP, FTP). NAC e EDR sono controlli di accesso, non specifici per la protezione del traffico in transito.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_508",
    "text": "An enterprise security team needs a new security architecture for a fully remote workforce. The solution should be highly redundant and enable users to connect to a VPN with an integrated, software-based firewall. Which of the following solutions meets these requirements?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "SIEM",
        "c": false
      },
      {
        "id": "C",
        "t": "SASE",
        "c": true
      },
      {
        "id": "D",
        "t": "CASB",
        "c": false
      }
    ],
    "expl": "SASE soddisfa tutti i requisiti: è cloud-native (alta ridondanza), include connettività VPN (ZTNA), e integra funzionalità di firewall software-based (FWaaS). È progettato specificamente per workforce completamente remota. IPS è un singolo strumento di sicurezza, non un'architettura completa. CASB è per il controllo SaaS, non un'architettura di accesso.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_513",
    "text": "A systems administrator successfully configures VPN access to a cloud environment. Which of the following capabilities should the administrator use to best facilitate remote administration?",
    "opts": [
      {
        "id": "A",
        "t": "A jump host in the shared services security zone",
        "c": true
      },
      {
        "id": "B",
        "t": "An SSH server within the corporate LAN",
        "c": false
      },
      {
        "id": "C",
        "t": "A reverse proxy on the firewall",
        "c": false
      },
      {
        "id": "D",
        "t": "An MDM solution with conditional access",
        "c": false
      }
    ],
    "expl": "Un jump host (bastion host) nella shared services security zone è il modo standard per amministrare in sicurezza sistemi in zone protette del cloud: gli amministratori si autenticano al jump host, da lì accedono ai sistemi interni, e tutte le sessioni vengono registrate. Un SSH server nella LAN non è nella posizione corretta per l'accesso cloud.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_557",
    "text": "A security consultant is working with a client that wants to physically isolate its secure systems. Which of the following best describes this architecture?",
    "opts": [
      {
        "id": "A",
        "t": "SDN",
        "c": false
      },
      {
        "id": "B",
        "t": "Air gapped",
        "c": true
      },
      {
        "id": "C",
        "t": "Containerized",
        "c": false
      },
      {
        "id": "D",
        "t": "Highly available",
        "c": false
      }
    ],
    "expl": "L'air gap è l'isolamento fisico completo: il sistema non è connesso ad alcuna rete esterna. È il massimo livello di isolamento fisico possibile. SDN è software-defined networking (virtualizzazione della rete). Containerized è isolamento software. Highly available è ridondanza per la disponibilità.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_558",
    "text": "A company is migrating to cloud-based services. The company's IT department has limited resources for migration and ongoing support. Which of the following best meets the company's needs?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": false
      },
      {
        "id": "C",
        "t": "SASE",
        "c": true
      },
      {
        "id": "D",
        "t": "IAM",
        "c": false
      }
    ],
    "expl": "SASE è ideale per aziende che migrano al cloud con risorse IT limitate: converge le funzionalità di rete e sicurezza in un unico servizio gestito, riducendo drasticamente la complessità operativa. Non si deve gestire separatamente VPN, firewall, web filtering, CASB: tutto è nel servizio SASE.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_561",
    "text": "Which of the following best describe the benefits of a microservices architecture when compared to a monolithic architecture? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Easier debugging of the system",
        "c": false
      },
      {
        "id": "B",
        "t": "Reduced cost of ownership",
        "c": false
      },
      {
        "id": "C",
        "t": "Improved scalability",
        "c": true
      },
      {
        "id": "D",
        "t": "Increased compartmentalization",
        "c": true
      },
      {
        "id": "E",
        "t": "Stronger authentication",
        "c": false
      },
      {
        "id": "F",
        "t": "Reduced complexity",
        "c": false
      }
    ],
    "expl": "I microservizi offrono: scalabilità migliorata (ogni servizio scala indipendentemente in base al carico) e compartimentazione aumentata (un servizio compromesso non compromette l'intera applicazione). Il debugging è PIÙ difficile (non più facile) con microservizi distribuiti. La complessità è MAGGIORE, non minore.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_568",
    "text": "A company that has a large IT operation is looking to better control, standardize, and lower the time required to build new servers. Which of the following architectures will best achieve the company's objectives?",
    "opts": [
      {
        "id": "A",
        "t": "IoT",
        "c": false
      },
      {
        "id": "B",
        "t": "IaC",
        "c": true
      },
      {
        "id": "C",
        "t": "IaaS",
        "c": false
      },
      {
        "id": "D",
        "t": "ICS",
        "c": false
      }
    ],
    "expl": "IaC (Infrastructure as Code) permette di definire la configurazione dei server come codice riutilizzabile: lo stesso template deploya server identici in minuti, standardizzando la configurazione ed eliminando i processi manuali. IaaS è il modello cloud (dove IaC può essere applicato), non è la risposta alla standardizzazione del processo.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_572",
    "text": "Which of the following should a systems administrator use to decrease the company's hardware attack surface?",
    "opts": [
      {
        "id": "A",
        "t": "Replication",
        "c": false
      },
      {
        "id": "B",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Centralization",
        "c": false
      },
      {
        "id": "D",
        "t": "Virtualization",
        "c": true
      }
    ],
    "expl": "La virtualizzazione riduce il numero di server fisici consolidando più workload su meno hardware. Meno server fisici = superficie di attacco hardware ridotta: meno dispositivi da hardenire, da monitorare, da proteggere fisicamente. La replica aumenta il numero di server. L'isolamento separa i sistemi ma non riduce l'hardware.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_594",
    "text": "Which of the following is most likely a security concern when installing and using low-cost IoT devices in infrastructure environments?",
    "opts": [
      {
        "id": "A",
        "t": "Country of origin",
        "c": false
      },
      {
        "id": "B",
        "t": "Device responsiveness",
        "c": false
      },
      {
        "id": "C",
        "t": "Ease of deployment",
        "c": false
      },
      {
        "id": "D",
        "t": "Storage of data",
        "c": true
      }
    ],
    "expl": "I dispositivi IoT a basso costo spesso memorizzano dati localmente senza cifratura: credenziali, dati di configurazione, dati raccolti dai sensori. Questo è il problema di sicurezza principale. Il paese di origine può essere una concern politica ma non è la più critica tecnicamente. La responsività e la facilità di deployment sono requisiti funzionali, non di sicurezza.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_598",
    "text": "Which of the following should a systems administrator use to decrease the company's hardware attack surface?",
    "opts": [
      {
        "id": "A",
        "t": "Replication",
        "c": false
      },
      {
        "id": "B",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Centralization",
        "c": false
      },
      {
        "id": "D",
        "t": "Virtualization",
        "c": true
      }
    ],
    "expl": "La virtualizzazione riduce il numero di server fisici (e quindi la superficie di attacco hardware) consolidando i workload su meno hardware fisico.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_611",
    "text": "A customer has a contract with a CSP and wants to identify which controls should be implemented in the IaaS enclave. Which of the following is most likely to contain this information?",
    "opts": [
      {
        "id": "A",
        "t": "Statement of work",
        "c": false
      },
      {
        "id": "B",
        "t": "Responsibility matrix",
        "c": true
      },
      {
        "id": "C",
        "t": "Service-level agreement",
        "c": false
      },
      {
        "id": "D",
        "t": "Master service agreement",
        "c": false
      }
    ],
    "expl": "La responsibility matrix documenta esattamente la divisione delle responsabilità di sicurezza tra il cliente e il cloud provider per ogni componente del servizio IaaS. È il documento di riferimento per capire quali controlli implementare. Il SLA definisce la disponibilità del servizio. Il MSA è il contratto quadro.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_673",
    "text": "An organization wants to deploy software in a container environment to increase security. Which of the following would limit the organization's ability to achieve this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Regulatory compliance",
        "c": false
      },
      {
        "id": "B",
        "t": "Patch availability",
        "c": false
      },
      {
        "id": "C",
        "t": "Kernel version",
        "c": false
      },
      {
        "id": "D",
        "t": "Monolithic code",
        "c": true
      }
    ],
    "expl": "Il codice monolitico non può essere containerizzato direttamente: un'applicazione monolitica è un singolo blocco indivisibile, mentre i container funzionano meglio con architetture a microservizi debolmente accoppiati. Per containerizzare un monolite bisogna prima refactorizzarlo. Regulatory compliance, patch availability e kernel version possono essere considerazioni, ma non limitano strutturalmente la containerizzazione come fa il codice monolitico.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_682",
    "text": "In which of the following will unencrypted network traffic most likely be found?",
    "opts": [
      {
        "id": "A",
        "t": "SDN",
        "c": false
      },
      {
        "id": "B",
        "t": "IoT",
        "c": true
      },
      {
        "id": "C",
        "t": "VPN",
        "c": false
      },
      {
        "id": "D",
        "t": "SCADA",
        "c": false
      }
    ],
    "expl": "I dispositivi IoT a basso costo spesso trasmettono dati senza cifratura per semplicità di implementazione e risparmio di risorse computazionali. SDN gestisce la rete ma non implica traffico non cifrato. VPN è cifrato per definizione. SCADA usa protocolli proprietari spesso non documentati ma non necessariamente privi di cifratura a livello moderno.",
    "domain": 3,
    "objective": "3.1"
  },
  {
    "id": "SCREEN_020",
    "source": "TL",
    "text": "What is the primary purpose of implementing a DMZ (Demilitarized Zone) in a network architecture?",
    "opts": [
      {
        "id": "A",
        "t": "To provide a secure area for sensitive internal resources",
        "c": false
      },
      {
        "id": "B",
        "t": "To isolate and add an additional layer of security between the internal network and external network",
        "c": true
      },
      {
        "id": "C",
        "t": "To enhance the performance of the internal network by offloading traffic",
        "c": false
      },
      {
        "id": "D",
        "t": "To store backup data securely",
        "c": false
      }
    ],
    "expl": "La DMZ crea una zona tampone tra internet e la rete interna. Ospita servizi pubblici (web, mail, DNS) proteggendo la rete interna: anche se un server DMZ viene compromesso, l'attaccante non accede direttamente alla rete interna.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_037",
    "source": "TL",
    "text": "Which of these items are considered \"unsecure\" protocols? (Select three choices).",
    "opts": [
      {
        "id": "A",
        "t": "Telnet",
        "c": true
      },
      {
        "id": "B",
        "t": "SSH",
        "c": false
      },
      {
        "id": "C",
        "t": "HTTP",
        "c": true
      },
      {
        "id": "D",
        "t": "FTP",
        "c": true
      }
    ],
    "expl": "Telnet, HTTP e FTP trasmettono dati (incluse credenziali) in chiaro, senza cifratura. SSH è sicuro (sostituisce Telnet). HTTPS è sicuro. SFTP/FTPS sostituiscono FTP.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_040",
    "source": "TL",
    "text": "Your monitoring system uses Telnet with credentials in a flat file. What are some reasons you would mandate switching to SSH? (Select two choices)",
    "opts": [
      {
        "id": "A",
        "t": "Uses asymmetric keys for authentication",
        "c": true
      },
      {
        "id": "B",
        "t": "Allows access to superuser commands",
        "c": false
      },
      {
        "id": "C",
        "t": "Does not require the use of pre-shared keys",
        "c": false
      },
      {
        "id": "D",
        "t": "Uses an encrypted connection",
        "c": true
      }
    ],
    "expl": "SSH vs Telnet: (A) usa chiavi asimmetriche per l'autenticazione (più sicuro delle credenziali in chiaro) e (D) cifra tutta la connessione. Anche Telnet permette comandi superuser (B non è specifico di SSH). SSH può usare pre-shared key (C è falso).",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_043",
    "source": "TL",
    "text": "Your web application developers request affinity scheduling from the load balancers. Why does a web application benefit from affinity scheduling?",
    "opts": [
      {
        "id": "A",
        "t": "Affinity scheduling can allow a user to stay logged in to a session instead of opening a new session each time they are sent to a new server host.",
        "c": true
      },
      {
        "id": "B",
        "t": "Affinity scheduling allows the load balancer to move traffic to the closest server, reducing overall latency.",
        "c": false
      },
      {
        "id": "C",
        "t": "Affinity scheduling reduces the total number of connections by offloading TLS operations.",
        "c": false
      },
      {
        "id": "D",
        "t": "Affinity scheduling helps web servers know the source of the traffic.",
        "c": false
      }
    ],
    "expl": "L'affinity scheduling (sticky session) garantisce che le richieste di uno stesso utente vadano sempre allo stesso server backend. Critico per app stateful: senza affinity, ogni richiesta potrebbe andare a un server diverso che non ha la sessione, causando logout.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_050",
    "source": "TL",
    "text": "For security purposes, how are network hosts typically separated? (Select two choices).",
    "opts": [
      {
        "id": "A",
        "t": "Functionally",
        "c": false
      },
      {
        "id": "B",
        "t": "Logically",
        "c": true
      },
      {
        "id": "C",
        "t": "Geographically",
        "c": false
      },
      {
        "id": "D",
        "t": "Physically",
        "c": true
      }
    ],
    "expl": "Gli host di rete vengono separati logicamente (VLAN, subnet, zone) e fisicamente (reti fisicamente separate, switch dedicati). La separazione funzionale e geografica non sono i criteri primari di sicurezza.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_061",
    "source": "TL",
    "text": "Which of the following is a software or hardware appliance responsible for balancing user requests and network traffic among several different physical or virtualized hosts?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancer",
        "c": true
      },
      {
        "id": "B",
        "t": "Guest operating system",
        "c": false
      },
      {
        "id": "C",
        "t": "Host operating system",
        "c": false
      },
      {
        "id": "D",
        "t": "Hypervisor",
        "c": false
      }
    ],
    "expl": "Il load balancer distribuisce il traffico tra più server. L'hypervisor gestisce le VM su un singolo host fisico ma non bilancia il traffico di rete tra host diversi.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_076",
    "source": "TL",
    "text": "Which of the following would be the best way to handle a critical business application that is running on a legacy server?",
    "opts": [
      {
        "id": "A",
        "t": "Segmentation",
        "c": true
      },
      {
        "id": "B",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Hardening",
        "c": false
      },
      {
        "id": "D",
        "t": "Decommissioning",
        "c": false
      }
    ],
    "expl": "Un'applicazione critica su server legacy: non può essere dismessa né facilmente hardenita. La segmentazione la mantiene operativa isolandola in un segmento con accesso controllato. L'isolamento totale impedirebbe l'accesso agli utenti legittimi.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_094",
    "source": "TL",
    "text": "A growing organization adds multiple virtual servers to improve performance. Which of the following solutions is the organization most likely to employ to further increase performance and availability?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancer",
        "c": true
      },
      {
        "id": "B",
        "t": "Jump server",
        "c": false
      },
      {
        "id": "C",
        "t": "Proxy server",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Con più server virtuali, il load balancer è il passo successivo: distribuisce il traffico, garantisce HA con failover automatico, permette scalabilità orizzontale.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_116",
    "text": "A company prevented direct access from the database administrators' workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    "opts": [
      {
        "id": "A",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "B",
        "t": "RADIUS",
        "c": false
      },
      {
        "id": "C",
        "t": "HSM",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancer",
        "c": false
      }
    ],
    "expl": "Il jump server è il punto di accesso intermedio per amministrare sistemi in zone protette: il DBA si connette al jump server, poi da lì ai DB server. RADIUS è per AAA. HSM gestisce chiavi crittografiche.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_121",
    "text": "A company prevented direct access from the database administrators' workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    "opts": [
      {
        "id": "A",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "B",
        "t": "RADIUS",
        "c": false
      },
      {
        "id": "C",
        "t": "HSM",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancer",
        "c": false
      }
    ],
    "expl": "Jump server = punto di accesso controllato per zone di rete separate e protette.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_133",
    "text": "A company prevented direct access from the database administrators' workstations to the network segment that contains database servers. Which of the following should a database administrator use to access the database servers?",
    "opts": [
      {
        "id": "A",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "B",
        "t": "RADIUS",
        "c": false
      },
      {
        "id": "C",
        "t": "HSM",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancer",
        "c": false
      }
    ],
    "expl": "Terza occorrenza. CompTIA enfatizza: accesso amministrativo a zona separata → jump server.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_145",
    "text": "An engineer needs to find a solution that creates an added layer of security by preventing unauthorized access to internal company resources. Which of the following would be the best solution?",
    "opts": [
      {
        "id": "A",
        "t": "RDP server",
        "c": false
      },
      {
        "id": "B",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "C",
        "t": "Proxy server",
        "c": false
      },
      {
        "id": "D",
        "t": "Hypervisor",
        "c": false
      }
    ],
    "expl": "Il jump server crea un layer aggiuntivo di sicurezza: centralizza l'accesso, applica autenticazione forte, registra tutte le sessioni. Un RDP server esposto è un rischio.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_148",
    "text": "A company needs to provide administrative access to internal resources while minimizing the traffic allowed through the security boundary. Which of the following methods is most secure?",
    "opts": [
      {
        "id": "A",
        "t": "Implementing a bastion host",
        "c": true
      },
      {
        "id": "B",
        "t": "Deploying a perimeter network",
        "c": false
      },
      {
        "id": "C",
        "t": "Installing a WAF",
        "c": false
      },
      {
        "id": "D",
        "t": "Utilizing single sign-on",
        "c": false
      }
    ],
    "expl": "Un bastion host minimizza il traffico attraverso il security boundary: solo le connessioni al bastion sono consentite, poi il bastion accede internamente. Non servono regole per ogni admin verso ogni server.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_209",
    "text": "A security analyst discovers a host running a remote desktop that can be used to access the production network. Which of the following changes should the security analyst recommend?",
    "opts": [
      {
        "id": "A",
        "t": "Changing the remote desktop port to a non-standard number",
        "c": false
      },
      {
        "id": "B",
        "t": "Setting up a VPN and placing the jump server inside the firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "Using a proxy for web connections from the remote desktop server",
        "c": false
      },
      {
        "id": "D",
        "t": "Connecting the remote server to the domain and increasing the password length",
        "c": false
      }
    ],
    "expl": "RDP esposto su internet = grave rischio. Soluzione: VPN (canale cifrato + autenticazione) + jump server inside the firewall (accesso controllato alla produzione). Cambiare la porta è security through obscurity, non risolve il problema.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_220",
    "text": "A systems administrator is working on a solution with the following requirements: provide a secure zone, enforce a company-wide access control policy, and reduce the scope of threats. Which of the following is the systems administrator setting up?",
    "opts": [
      {
        "id": "A",
        "t": "Zero Trust",
        "c": true
      },
      {
        "id": "B",
        "t": "AAA",
        "c": false
      },
      {
        "id": "C",
        "t": "Non-repudiation",
        "c": false
      },
      {
        "id": "D",
        "t": "CIA",
        "c": false
      }
    ],
    "expl": "Zero Trust: zone sicure (nessuna implicitamente fidata) + policy di controllo accessi a livello aziendale + riduzione della superficie di attacco. AAA è solo autenticazione/autorizzazione. Non-repudiation è la prova di azioni. CIA sono principi dei dati.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_240",
    "text": "An organization would like to store customer data on a separate part of the network that is not accessible to users on the main corporate network. Which of the following should the administrator use?",
    "opts": [
      {
        "id": "A",
        "t": "Segmentation",
        "c": true
      },
      {
        "id": "B",
        "t": "Isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Patching",
        "c": false
      },
      {
        "id": "D",
        "t": "Encryption",
        "c": false
      }
    ],
    "expl": "La segmentazione crea un segmento separato accessibile solo alle applicazioni autorizzate. L'isolamento totale renderebbe i dati inaccessibili anche alle app legittime. Patching e cifratura non risolvono il problema dell'accesso non autorizzato alla rete.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_290",
    "text": "A visitor plugs a laptop into a network jack in the lobby and is able to connect to the company's network. Which of the following should be configured to best prevent this activity?",
    "opts": [
      {
        "id": "A",
        "t": "Port security",
        "c": true
      },
      {
        "id": "B",
        "t": "Web application firewall",
        "c": false
      },
      {
        "id": "C",
        "t": "Transport layer security",
        "c": false
      },
      {
        "id": "D",
        "t": "Virtual private network",
        "c": false
      }
    ],
    "expl": "La port security (o 802.1X) impedisce che dispositivi non autorizzati si connettano tramite porte fisiche libere. WAF protegge le app web. TLS cifra le comunicazioni. VPN è per l'accesso remoto.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_299",
    "text": "An enterprise needs to allow access between the internal networks of both parties for a secure file migration. The solution needs to ensure encryption is applied to ALL traffic traversing the networks. Which of the following should most likely be implemented?",
    "opts": [
      {
        "id": "A",
        "t": "EAP",
        "c": false
      },
      {
        "id": "B",
        "t": "IPSec",
        "c": true
      },
      {
        "id": "C",
        "t": "SD-WAN",
        "c": false
      },
      {
        "id": "D",
        "t": "TLS",
        "c": false
      }
    ],
    "expl": "IPSec cifra tutto il traffico IP a L3, incluso il routing. Ideale per connessioni site-to-site. EAP è per autenticazione. SD-WAN ottimizza il routing WAN. TLS protegge singole connessioni applicative, non tutto il traffico IP.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_352",
    "text": "A company is decommissioning physical servers and replacing them with an architecture that will reduce the number of individual operating systems. Which of the following strategies should the company use?",
    "opts": [
      {
        "id": "A",
        "t": "Microservices",
        "c": false
      },
      {
        "id": "B",
        "t": "Containerization",
        "c": true
      },
      {
        "id": "C",
        "t": "Virtualization",
        "c": false
      },
      {
        "id": "D",
        "t": "Infrastructure as code",
        "c": false
      }
    ],
    "expl": "La containerizzazione riduce il numero di OS: più container girano sullo stesso kernel host senza un OS separato per ciascuno. La virtualizzazione richiede un OS per ogni VM. IaC è per il provisioning.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_397",
    "text": "A user is requesting Telnet access to manage a remote development web server. Insecure protocols are not allowed. Which of the following should be configured to allow remote access?",
    "opts": [
      {
        "id": "A",
        "t": "HTTPS",
        "c": false
      },
      {
        "id": "B",
        "t": "SNMPv3",
        "c": false
      },
      {
        "id": "C",
        "t": "SSH",
        "c": true
      },
      {
        "id": "D",
        "t": "RDP",
        "c": false
      },
      {
        "id": "E",
        "t": "SMTP",
        "c": false
      }
    ],
    "expl": "SSH è la sostituzione sicura di Telnet per la gestione remota di server Linux/Unix. Cifra la connessione e usa chiavi asimmetriche. HTTPS è per app web. SNMPv3 per gestione rete. RDP per desktop remoto Windows.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_403",
    "text": "A security administrator needs to create firewall rules for the following protocols: RTP, SIP, H.323, and SRTP. Which of the following does this rule set support?",
    "opts": [
      {
        "id": "A",
        "t": "RTOS",
        "c": false
      },
      {
        "id": "B",
        "t": "VoIP",
        "c": true
      },
      {
        "id": "C",
        "t": "SoC",
        "c": false
      },
      {
        "id": "D",
        "t": "HVAC",
        "c": false
      }
    ],
    "expl": "RTP, SIP, H.323 e SRTP sono tutti protocolli VoIP (Voice over IP). RTOS è un sistema operativo real-time. SoC è un chip integrato. HVAC è la climatizzazione.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_555",
    "text": "An organization wants a secure solution for remote users handling sensitive PHI. Users need to access an internally developed corporate application. Which of the following best meet the requirements? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Local administrative password",
        "c": false
      },
      {
        "id": "B",
        "t": "Perimeter network",
        "c": false
      },
      {
        "id": "C",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "D",
        "t": "WAF",
        "c": false
      },
      {
        "id": "E",
        "t": "MFA",
        "c": true
      },
      {
        "id": "F",
        "t": "VPN",
        "c": true
      }
    ],
    "expl": "Per accesso remoto sicuro a dati PHI sensibili: VPN (canale cifrato) + MFA (autenticazione forte) + jump server (accesso controllato all'applicazione interna). WAF protegge le app web dagli attacchi, non gestisce l'accesso remoto.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_596",
    "text": "A security team is in the process of hardening the network against externally crafted malicious packets. Which of the following is the most secure method to protect the internal network?",
    "opts": [
      {
        "id": "A",
        "t": "Anti-malware solutions",
        "c": false
      },
      {
        "id": "B",
        "t": "Host-based firewalls",
        "c": false
      },
      {
        "id": "C",
        "t": "Intrusion prevention systems",
        "c": true
      },
      {
        "id": "D",
        "t": "Network access control",
        "c": false
      },
      {
        "id": "E",
        "t": "Network allow list",
        "c": false
      }
    ],
    "expl": "Un IPS inline blocca pacchetti malevoli a livello di rete prima che raggiungano qualsiasi host. Anti-malware agisce sull'endpoint dopo l'arrivo. Host-based firewall protegge il singolo host. NAC controlla l'autenticazione alla rete, non il contenuto dei pacchetti.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_597",
    "text": "Which of the following is the best way to prevent an unauthorized user from plugging a laptop into an employee's phone network port and then using tools to scan for database servers?",
    "opts": [
      {
        "id": "A",
        "t": "MAC filtering",
        "c": true
      },
      {
        "id": "B",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Certification",
        "c": false
      },
      {
        "id": "D",
        "t": "Isolation",
        "c": false
      }
    ],
    "expl": "Il MAC filtering blocca la connessione di dispositivi con MAC non pre-approvati sulla porta switch. La segmentazione limiterebbe cosa l'utente potrebbe fare dopo la connessione, ma non impedirebbe la connessione stessa.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_631",
    "text": "A growing organization adds multiple virtual servers to improve performance. Which of the following solutions is the organization most likely to employ to further increase performance and availability?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancer",
        "c": true
      },
      {
        "id": "B",
        "t": "Jump server",
        "c": false
      },
      {
        "id": "C",
        "t": "Proxy server",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN",
        "c": false
      }
    ],
    "expl": "Con più server virtuali, il load balancer distribuisce il traffico, garantisce HA e permette scalabilità orizzontale.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_642",
    "text": "An administrator is creating a secure method for a contractor to access a test environment. Which of the following would provide the contractor with the best access?",
    "opts": [
      {
        "id": "A",
        "t": "Application server",
        "c": false
      },
      {
        "id": "B",
        "t": "Jump server",
        "c": true
      },
      {
        "id": "C",
        "t": "RDP server",
        "c": false
      },
      {
        "id": "D",
        "t": "Proxy server",
        "c": false
      }
    ],
    "expl": "Il jump server fornisce accesso controllato e auditato all'ambiente di test per i contractor: autenticazione forte, sessioni registrate, senza esporre direttamente i server dell'ambiente.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_653",
    "text": "Which of the following is the best way to provide secure, remote access for employees while minimizing the exposure of a company's internal network?",
    "opts": [
      {
        "id": "A",
        "t": "VPN",
        "c": true
      },
      {
        "id": "B",
        "t": "LDAP",
        "c": false
      },
      {
        "id": "C",
        "t": "FTP",
        "c": false
      },
      {
        "id": "D",
        "t": "RADIUS",
        "c": false
      }
    ],
    "expl": "Una VPN cifra tutto il traffico tra il dispositivo remoto e la rete aziendale minimizzando l'esposizione. LDAP è per la directory. FTP è non sicuro. RADIUS è per autenticazione, non per l'accesso remoto diretto.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_676",
    "text": "Which of the following are the first steps an analyst should perform when developing a heat map? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Methodically walk around the office noting Wi-Fi signal strength.",
        "c": true
      },
      {
        "id": "B",
        "t": "Log in to each access point and check the settings.",
        "c": false
      },
      {
        "id": "C",
        "t": "Create or obtain a layout of the office.",
        "c": true
      },
      {
        "id": "D",
        "t": "Measure cable lengths between access points.",
        "c": false
      },
      {
        "id": "E",
        "t": "Review access logs to determine the most active devices.",
        "c": false
      },
      {
        "id": "F",
        "t": "Remove possible impediments to radio transmissions.",
        "c": false
      }
    ],
    "expl": "Per una heat map Wi-Fi: (C) ottenere/creare la pianta dell'ufficio (base cartografica) e (A) girare l'ufficio misurando la potenza del segnale (raccolta dati). Non si inizia dagli AP né si misurano i cavi.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_706",
    "text": "Multiple servers need to be segmented on different networks and reachable only from authorized internal systems. Which of the following would meet the requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Configure firewall rules to block external access to internal resources.",
        "c": false
      },
      {
        "id": "B",
        "t": "Set up a WAP to allow internal access from public networks.",
        "c": false
      },
      {
        "id": "C",
        "t": "Implement a new IPSec tunnel from internal resources.",
        "c": false
      },
      {
        "id": "D",
        "t": "Deploy an internal jump server to access resources.",
        "c": true
      }
    ],
    "expl": "Un jump server interno fornisce accesso controllato ai server segmentati solo ai sistemi autorizzati. Le regole firewall bloccano l'accesso esterno ma non controllano quali sistemi interni possono accedere. Il tunnel IPSec è per connessioni tra reti, non per il controllo degli accessi interni.",
    "domain": 3,
    "objective": "3.2"
  },
  {
    "id": "SCREEN_077",
    "source": "TL",
    "text": "An organization is leveraging a VPN between its headquarters and a branch location. Which of the following is the VPN protecting?",
    "opts": [
      {
        "id": "A",
        "t": "Data in use",
        "c": false
      },
      {
        "id": "B",
        "t": "Data in transit",
        "c": true
      },
      {
        "id": "C",
        "t": "Geographic restrictions",
        "c": false
      },
      {
        "id": "D",
        "t": "Data sovereignty",
        "c": false
      }
    ],
    "expl": "Una VPN crea un tunnel cifrato per il traffico di rete tra i due siti. Protegge i dati mentre si muovono attraverso la rete (in transit). Non protegge i dati at rest (sui dischi locali) né i dati in use (elaborati in memoria). Le geographic restrictions sono policy di accesso, non di cifratura del traffico.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_096",
    "source": "TL",
    "text": "A security administrator is addressing an issue with a legacy system that communicates data using an unencrypted protocol to transfer sensitive data to a third party. No software updates are available. Which of the following are the most appropriate compensating controls? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": true
      },
      {
        "id": "B",
        "t": "Cryptographic downgrade",
        "c": false
      },
      {
        "id": "C",
        "t": "SSH tunneling",
        "c": true
      },
      {
        "id": "D",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "E",
        "t": "Patch installation",
        "c": false
      },
      {
        "id": "F",
        "t": "Data masking",
        "c": false
      }
    ],
    "expl": "Due compensating controls: SSH tunneling crea un canale cifrato per proteggere i dati in transito anche con il protocollo non cifrato (es. FTP dentro SSH tunnel). Tokenization protegge i dati sensibili sostituendoli con token prima del trasferimento. Il cryptographic downgrade riduce la sicurezza. La patch non è disponibile. La segmentazione non cifra il canale.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_160",
    "text": "Employees in the research and development business unit receive extensive training to ensure they understand how to best protect company data. Which of the following is the type of data these employees are most likely to use in day-to-day work activities?",
    "opts": [
      {
        "id": "A",
        "t": "Encrypted",
        "c": false
      },
      {
        "id": "B",
        "t": "Intellectual property",
        "c": true
      },
      {
        "id": "C",
        "t": "Critical",
        "c": false
      },
      {
        "id": "D",
        "t": "Data in transit",
        "c": false
      }
    ],
    "expl": "I dipendenti R&D lavorano principalmente con la proprietà intellettuale dell'organizzazione: brevetti, design di prodotti, codice sorgente, ricerche. Non è \"encrypted\" (che descrive uno stato, non un tipo). \"Critical\" descrive l'impatto della perdita, non il tipo di dati. \"Data in transit\" descrive lo stato, non il tipo.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_178",
    "text": "A systems administrator works for a local hospital and needs to ensure patient data is protected and secure. Which of the following data classifications should be used to secure patient data?",
    "opts": [
      {
        "id": "A",
        "t": "Private",
        "c": false
      },
      {
        "id": "B",
        "t": "Critical",
        "c": false
      },
      {
        "id": "C",
        "t": "Sensitive",
        "c": true
      },
      {
        "id": "D",
        "t": "Public",
        "c": false
      }
    ],
    "expl": "\"Sensitive\" è la classificazione appropriata per i dati sanitari dei pazienti (PHI): include PII e PHI che richiedono protezione speciale per la privacy e la salute. \"Private\" si usa per dati personali generici senza implicazioni sanitarie. \"Critical\" indica i dati la cui perdita causa il maggior impatto operativo, non necessariamente dati sanitari.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_226",
    "text": "An organization is leveraging a VPN between its headquarters and a branch location. Which of the following is the VPN protecting?",
    "opts": [
      {
        "id": "A",
        "t": "Data in use",
        "c": false
      },
      {
        "id": "B",
        "t": "Data in transit",
        "c": true
      },
      {
        "id": "C",
        "t": "Geographic restrictions",
        "c": false
      },
      {
        "id": "D",
        "t": "Data sovereignty",
        "c": false
      }
    ],
    "expl": "La VPN protegge i dati in transito (in transit) cifrando il traffico di rete tra HQ e filiale.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_229",
    "text": "A security consultant needs secure, remote access to a client environment. Which of the following should the security consultant most likely use to gain access?",
    "opts": [
      {
        "id": "A",
        "t": "EAP",
        "c": false
      },
      {
        "id": "B",
        "t": "DHCP",
        "c": false
      },
      {
        "id": "C",
        "t": "IPSec",
        "c": true
      },
      {
        "id": "D",
        "t": "NAT",
        "c": false
      }
    ],
    "expl": "IPSec è il protocollo standard per VPN e accesso remoto sicuro: cifra tutto il traffico IP a livello di rete. EAP è un protocollo di autenticazione (usato dentro 802.1X). DHCP assegna indirizzi IP. NAT è per il routing, non per la sicurezza del canale di accesso.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_261",
    "text": "A company must ensure sensitive data at rest is rendered unreadable. Which of the following will the company most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "B",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "C",
        "t": "Encryption",
        "c": true
      },
      {
        "id": "D",
        "t": "Segmentation",
        "c": false
      }
    ],
    "expl": "La cifratura rende i dati at rest illeggibili a chiunque non abbia la chiave. L'hashing è a senso unico e non rende recuperabile il dato originale — non è adatto per proteggere generici dati at rest. La tokenization sostituisce il dato, non lo cifra. La segmentazione limita l'accesso ma non rende i dati illeggibili.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_263",
    "text": "A bank insists all of its vendors must prevent data loss on stolen laptops. Which of the following strategies is the bank requiring?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption at rest",
        "c": true
      },
      {
        "id": "B",
        "t": "Masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Data classification",
        "c": false
      },
      {
        "id": "D",
        "t": "Permission restrictions",
        "c": false
      }
    ],
    "expl": "Se un laptop viene rubato, la cifratura at rest (FDE) è l'unica misura che protegge i dati: senza la chiave di decifratura, i dati sul disco sono illeggibili. Il masking e le permission restrictions non proteggono se l'attaccante ha accesso fisico al disco. La classificazione è un prerequisito ma non la strategia di protezione.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_291",
    "text": "A security administrator is reissuing a former employee's laptop. Which of the following is the best combination of data handling activities for the administrator to perform? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Data retention",
        "c": false
      },
      {
        "id": "B",
        "t": "Certification",
        "c": true
      },
      {
        "id": "C",
        "t": "Destruction",
        "c": false
      },
      {
        "id": "D",
        "t": "Classification",
        "c": false
      },
      {
        "id": "E",
        "t": "Sanitization",
        "c": true
      },
      {
        "id": "F",
        "t": "Enumeration",
        "c": false
      }
    ],
    "expl": "Per riassegnare un laptop: Sanitization (bonifica sicura del disco per rimuovere i dati del precedente utente in modo che non siano recuperabili) + Certification (documentazione formale che la bonifica è avvenuta correttamente). Non Destruction (il laptop deve essere riutilizzato). Non Data retention (si conservano i dati, non si eliminano).",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_310",
    "text": "Which of the following describes the category of data that is most impacted when it is lost?",
    "opts": [
      {
        "id": "A",
        "t": "Confidential",
        "c": false
      },
      {
        "id": "B",
        "t": "Public",
        "c": false
      },
      {
        "id": "C",
        "t": "Private",
        "c": false
      },
      {
        "id": "D",
        "t": "Critical",
        "c": true
      }
    ],
    "expl": "\"Critical\" descrive i dati la cui perdita o indisponibilità causa il maggior impatto operativo sull'organizzazione. Non si riferisce alla sensibilità del contenuto, ma all'impatto della perdita: se perdi questi dati, l'organizzazione non può funzionare. \"Confidential\" riguarda la riservatezza del contenuto, non l'impatto della perdita.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_331",
    "text": "Which of the following methods to secure credit card data is best to use when a requirement is to see only the last four numbers on a credit card?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "C",
        "t": "Masking",
        "c": true
      },
      {
        "id": "D",
        "t": "Tokenization",
        "c": false
      }
    ],
    "expl": "Il masking è la tecnica che permette di mostrare solo una porzione del dato originale (le ultime 4 cifre) sostituendo il resto con caratteri neutri (es. **** **** **** 4321). L'encryption non mostrebbe le cifre originali. L'hashing produce un digest completamente diverso. La tokenization sostituisce l'intero numero con un token casuale.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_345",
    "text": "A recent penetration test identified that an attacker could flood the MAC address table of network switches. Which of the following would best mitigate this type of attack?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancer",
        "c": false
      },
      {
        "id": "B",
        "t": "Port security",
        "c": true
      },
      {
        "id": "C",
        "t": "IPS",
        "c": false
      },
      {
        "id": "D",
        "t": "NGFW",
        "c": false
      }
    ],
    "expl": "Il MAC address table flooding (CAM table overflow) è un attacco in cui si inviano molti frame con MAC sorgenti fittizi per riempire la CAM table dello switch, costringendolo a operare in modalità hub (broadcast di tutti i frame). La port security limita il numero di MAC address appresi per porta, prevenendo questo attacco.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_349",
    "text": "Employees located off-site must have access to company resources in order to complete their assigned tasks. These employees utilize a solution that allows remote access without interception concerns. Which of the following best describes this solution?",
    "opts": [
      {
        "id": "A",
        "t": "Proxy server",
        "c": false
      },
      {
        "id": "B",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "C",
        "t": "VPN",
        "c": true
      },
      {
        "id": "D",
        "t": "Security zone",
        "c": false
      }
    ],
    "expl": "Una VPN fornisce accesso remoto sicuro cifrando tutto il traffico tra il dispositivo remoto e la rete aziendale, eliminando le preoccupazioni di intercettazione. Il proxy server media il traffico web ma non crea un tunnel sicuro per tutte le comunicazioni. NGFW è un firewall, non una soluzione di accesso remoto.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_350",
    "text": "A company allows customers to upload PDF documents to its public e-commerce website. Which of the following would a security analyst most likely recommend?",
    "opts": [
      {
        "id": "A",
        "t": "Utilizing attack signatures in an IDS",
        "c": false
      },
      {
        "id": "B",
        "t": "Enabling malware detection through a UTM",
        "c": true
      },
      {
        "id": "C",
        "t": "Limiting the affected servers with a load balancer",
        "c": false
      },
      {
        "id": "D",
        "t": "Blocking command injections via a WAF",
        "c": false
      }
    ],
    "expl": "I file PDF caricati dai clienti possono contenere malware incorporato (JavaScript malevolo, exploit PDF). Un UTM con rilevamento malware è la soluzione più appropriata: scansiona i file caricati per malware prima che vengano memorizzati. Il WAF blocca attacchi web (SQLi, XSS) ma non scansiona i file caricati per malware.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_386",
    "text": "A security administrator is working to secure company data on corporate laptops in case the laptops are stolen. Which of the following solutions should the administrator consider?",
    "opts": [
      {
        "id": "A",
        "t": "Disk encryption",
        "c": true
      },
      {
        "id": "B",
        "t": "Data loss prevention",
        "c": false
      },
      {
        "id": "C",
        "t": "Operating system hardening",
        "c": false
      },
      {
        "id": "D",
        "t": "Boot security",
        "c": false
      }
    ],
    "expl": "La disk encryption (FDE) protegge tutti i dati sul laptop in caso di furto fisico: senza la chiave, i dati sul disco sono inaccessibili. DLP protegge dalla perdita di dati via rete o email, non dal furto fisico del dispositivo. OS hardening riduce le vulnerabilità software ma non protegge se il disco viene estratto.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_389",
    "text": "Which of the following is the best reason an organization should enforce a data classification policy to help protect its most sensitive information?",
    "opts": [
      {
        "id": "A",
        "t": "End users will be required to consider the classification of data that can be used in documents.",
        "c": false
      },
      {
        "id": "B",
        "t": "The policy will result in the creation of access levels for each level of classification.",
        "c": false
      },
      {
        "id": "C",
        "t": "The organization will have the ability to create security requirements based on classification levels.",
        "c": true
      },
      {
        "id": "D",
        "t": "Security analysts will be able to see the classification of data within a document before opening it.",
        "c": false
      }
    ],
    "expl": "Il valore principale della classificazione è permettere all'organizzazione di creare requisiti di sicurezza differenziati in base al livello di classificazione: i dati \"Restricted\" richiedono cifratura forte e accesso molto limitato, i dati \"Public\" non richiedono protezione speciale. La classificazione è il foundation su cui si costruisce tutta la policy di sicurezza dei dati.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_425",
    "text": "Which of the following is a common data removal option for companies that want to wipe sensitive data from hard drives in a repeatable manner but allow the hard drives to be reused?",
    "opts": [
      {
        "id": "A",
        "t": "Sanitization",
        "c": true
      },
      {
        "id": "B",
        "t": "Formatting",
        "c": false
      },
      {
        "id": "C",
        "t": "Degaussing",
        "c": false
      },
      {
        "id": "D",
        "t": "Defragmentation",
        "c": false
      }
    ],
    "expl": "La sanitizzazione è la bonifica sicura e ripetibile del disco (sovrascrittura con pattern) che permette il riutilizzo del supporto. Il formatting (formattazione) non rimuove veramente i dati — sono recuperabili con tool forensi. Il degaussing rende il disco inutilizzabile. La deframmentazione riorganizza i file, non li cancella.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_435",
    "text": "Which of the following is used to conceal credit card information in a database log file?",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "B",
        "t": "Masking",
        "c": true
      },
      {
        "id": "C",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "D",
        "t": "Obfuscation",
        "c": false
      }
    ],
    "expl": "Il masking nasconde (sostituisce con caratteri neutri) i dati sensibili nei log file: i numeri di carta vengono mostrati come **** **** **** 4321. La tokenization sostituisce il dato con un token nel sistema transazionale, ma per i log il masking è la tecnica appropriata. L'hashing produrrebbe un digest incomprensibile e non utile per audit.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_473",
    "text": "A company is developing a critical system for the government and storing project information on a fileshare. Which of the following describes how this data will most likely be classified? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Private",
        "c": false
      },
      {
        "id": "B",
        "t": "Confidential",
        "c": true
      },
      {
        "id": "C",
        "t": "Public",
        "c": false
      },
      {
        "id": "D",
        "t": "Operational",
        "c": false
      },
      {
        "id": "E",
        "t": "Urgent",
        "c": false
      },
      {
        "id": "F",
        "t": "Restricted",
        "c": true
      }
    ],
    "expl": "Un sistema critico per il governo contiene informazioni sensibili che richiedono: Confidential (riservato, non per il pubblico) e Restricted (accesso molto limitato, solo chi ha need-to-know). Non \"Private\" (che è per dati personali di individui). Non \"Public\" (è ovviamente non pubblico). \"Operational\" e \"Urgent\" non sono classificazioni standard SY0-701.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_515",
    "text": "An audit reveals that cardholder database logs are exposing account numbers inappropriately. Which of the following mechanisms would help limit the impact of this error?",
    "opts": [
      {
        "id": "A",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "C",
        "t": "Journaling",
        "c": false
      },
      {
        "id": "D",
        "t": "Masking",
        "c": true
      }
    ],
    "expl": "Il masking applicato ai log del database sostituirebbe i numeri di carta completi con versioni parziali (es. **** **** **** 4321). La segmentazione limita l'accesso ai sistemi ma non modifica il contenuto dei log. L'hashing produrrebbe un digest illeggibile utile per integrità ma non per limitare l'esposizione nei log.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_542",
    "text": "Which of the following is the main consideration when a legacy system that is a critical part of a company's infrastructure cannot be replaced?",
    "opts": [
      {
        "id": "A",
        "t": "Resource provisioning",
        "c": false
      },
      {
        "id": "B",
        "t": "Cost",
        "c": false
      },
      {
        "id": "C",
        "t": "Single point of failure",
        "c": true
      },
      {
        "id": "D",
        "t": "Complexity",
        "c": false
      }
    ],
    "expl": "Un sistema legacy critico che non può essere sostituito introduce un single point of failure (singolo punto di guasto): se questo sistema va offline (per guasto, attacco ransomware, o qualsiasi problema), il business si ferma. La mancanza di ridondanza è la considerazione principale. Il costo è secondario rispetto al rischio operativo.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_563",
    "text": "A penetration tester finds an unused Ethernet port during an on-site penetration test. Upon plugging a device into the unused port, the penetration tester notices that the machine is assigned an IP address, allowing enumeration of the local network. Which of the following should an administrator implement?",
    "opts": [
      {
        "id": "A",
        "t": "Port security",
        "c": true
      },
      {
        "id": "B",
        "t": "Transport Layer Security",
        "c": false
      },
      {
        "id": "C",
        "t": "Proxy server",
        "c": false
      },
      {
        "id": "D",
        "t": "Security zones",
        "c": false
      }
    ],
    "expl": "La port security (o 802.1X) impedisce che dispositivi non autorizzati si connettano tramite porte fisiche libere: la porta deve essere autenticata prima di assegnare un indirizzo IP. TLS cifra le comunicazioni ma non impedisce la connessione. Il proxy server non controlla l'accesso fisico alla rete.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_617",
    "text": "Which of the following is an example of a data protection strategy that uses tokenization?",
    "opts": [
      {
        "id": "A",
        "t": "Encrypting databases containing sensitive data",
        "c": false
      },
      {
        "id": "B",
        "t": "Replacing sensitive data with surrogate values",
        "c": true
      },
      {
        "id": "C",
        "t": "Removing sensitive data from production systems",
        "c": false
      },
      {
        "id": "D",
        "t": "Hashing sensitive data in critical systems",
        "c": false
      }
    ],
    "expl": "La tokenization sostituisce i dati sensibili con \"valori surrogati\" (surrogate values) — token privi di relazione matematica con il dato originale. Solo il token vault conosce la mappatura. Non è cifratura (non c'è relazione matematica chiave-dato). Non rimuove i dati (li sostituisce). Non è hashing (il token è invertibile tramite vault).",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_678",
    "text": "An organization is preparing to export proprietary software to a customer. Which of the following would be the best way to prevent the loss of intellectual property?",
    "opts": [
      {
        "id": "A",
        "t": "Code signing",
        "c": false
      },
      {
        "id": "B",
        "t": "Obfuscation",
        "c": true
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "D",
        "t": "Blockchain",
        "c": false
      }
    ],
    "expl": "L'obfuscation del codice sorgente rende il software molto difficile da decompilare e analizzare, proteggendo la proprietà intellettuale dell'autore durante l'esportazione a clienti. Il code signing verifica l'origine e l'integrità, non protegge il codice dall'analisi. La tokenization è per dati, non per codice sorgente.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_698",
    "text": "An organization that handles sensitive information wants to protect the information by using a reversible technology. Which of the following best satisfies this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "Hardware security module",
        "c": false
      },
      {
        "id": "B",
        "t": "Hashing algorithm",
        "c": false
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": true
      },
      {
        "id": "D",
        "t": "Steganography",
        "c": false
      }
    ],
    "expl": "La tokenization è reversibile: il dato originale può essere recuperato tramite il token vault. L'hashing NON è reversibile (a senso unico). HSM gestisce le chiavi crittografiche, non è un metodo di protezione dei dati in sé. La steganografia nasconde i dati ma non li protegge in modo reversibile strutturato.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_700",
    "text": "A systems administrator needs to encrypt all data on employee laptops. Which of the following encryption levels should be implemented?",
    "opts": [
      {
        "id": "A",
        "t": "Volume",
        "c": false
      },
      {
        "id": "B",
        "t": "Partition",
        "c": false
      },
      {
        "id": "C",
        "t": "Full disk",
        "c": true
      },
      {
        "id": "D",
        "t": "File",
        "c": false
      }
    ],
    "expl": "Full disk encryption (FDE) cifra l'intero contenuto del disco, inclusi OS, file di sistema, e tutti i dati. È la soluzione completa per proteggere i laptop. La cifratura a livello di volume, partizione o file è più granulare ma lascia parti del disco non protette (es. i metadati del filesystem, i file temporanei del sistema operativo).",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_705",
    "text": "Which of the following best protects sensitive data in transit across a geographically dispersed infrastructure?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption",
        "c": true
      },
      {
        "id": "B",
        "t": "Masking",
        "c": false
      },
      {
        "id": "C",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "D",
        "t": "Obfuscation",
        "c": false
      }
    ],
    "expl": "La cifratura protegge i dati in transito su reti non fidate che attraversano infrastrutture geograficamente distribuite. TLS e VPN/IPSec sono le implementazioni specifiche. Masking e tokenization modificano il dato, non il canale di trasmissione. Obfuscation rende i dati difficili da capire ma non li protegge da intercettazioni.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_716",
    "text": "A security professional discovers a folder containing an employee's personal information on the enterprise's shared drive. Which of the following best describes the data type the security professional should use to identify organizational policies concerning the storage of employees' personal information?",
    "opts": [
      {
        "id": "A",
        "t": "Legal",
        "c": false
      },
      {
        "id": "B",
        "t": "Financial",
        "c": false
      },
      {
        "id": "C",
        "t": "Privacy",
        "c": true
      },
      {
        "id": "D",
        "t": "Intellectual property",
        "c": false
      }
    ],
    "expl": "Le informazioni personali dei dipendenti (nome, stipendio, indirizzo, dati HR) rientrano nella categoria \"Privacy\" dei dati. Le policy organizzative sulla privacy definiscono come tali dati devono essere gestiti, archiviati e protetti. Non \"Legal\" (che riguarda documenti legali/contratti), non \"IP\" (che riguarda brevetti/copyright).",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_719",
    "text": "Which of the following solutions would most likely be used in the financial industry to mask sensitive data?",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": true
      },
      {
        "id": "B",
        "t": "Hashing",
        "c": false
      },
      {
        "id": "C",
        "t": "Salting",
        "c": false
      },
      {
        "id": "D",
        "t": "Steganography",
        "c": false
      }
    ],
    "expl": "Il settore finanziario usa la tokenization per mascherare i dati delle carte di credito: sostituisce i numeri con token privi di valore crittografico, permettendo l'elaborazione delle transazioni senza conservare i dati reali delle carte. È lo standard PCI-DSS. L'hashing non è reversibile (non puoi recuperare il numero per completare una transazione).",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_723",
    "text": "Which of the following is a prerequisite for a DLP solution?",
    "opts": [
      {
        "id": "A",
        "t": "Data destruction",
        "c": false
      },
      {
        "id": "B",
        "t": "Data sanitization",
        "c": false
      },
      {
        "id": "C",
        "t": "Data classification",
        "c": true
      },
      {
        "id": "D",
        "t": "Data masking",
        "c": false
      }
    ],
    "expl": "La classificazione dei dati è il prerequisito fondamentale per un DLP: il sistema DLP deve sapere quali dati sono sensibili per proteggerli. Senza classificazione, il DLP non ha una baseline per determinare cosa bloccare. La sequenza corretta è: classificare i dati → poi implementare il DLP.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_724",
    "text": "A business provides long-term cold storage services to banks required to follow regulator-imposed data retention guidelines. Banks require that data is disposed of in a specific manner at the conclusion of the regulatory threshold. Which of the following aspects of data management is the most important to the bank in the destruction of this data?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "B",
        "t": "Classification",
        "c": false
      },
      {
        "id": "C",
        "t": "Certification",
        "c": true
      },
      {
        "id": "D",
        "t": "Procurement",
        "c": false
      }
    ],
    "expl": "La certification (certificazione) è la documentazione formale che prova che la distruzione dei dati è avvenuta correttamente secondo i requisiti normativi. Per le banche soggette a normative di data retention, la prova documentale della distruzione corretta è fondamentale per audit e conformità regolamentare. La cifratura protegge i dati, non documenta la loro distruzione.",
    "domain": 3,
    "objective": "3.3"
  },
  {
    "id": "SCREEN_008",
    "source": "TL",
    "text": "Which of the following is required for an organization to properly manage its restore process in the event of system failure?",
    "opts": [
      {
        "id": "A",
        "t": "IRP",
        "c": false
      },
      {
        "id": "B",
        "t": "DRP",
        "c": true
      },
      {
        "id": "C",
        "t": "RPO",
        "c": false
      },
      {
        "id": "D",
        "t": "SDLC",
        "c": false
      }
    ],
    "expl": "Il DRP (Disaster Recovery Plan) documenta le procedure per ripristinare i sistemi IT dopo un guasto o un disastro. IRP è per risposta agli incidenti cyber. RPO è una metrica (non un piano). SDLC è il ciclo di vita dello sviluppo software.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_031",
    "source": "TL",
    "text": "A technician is deploying a new security camera. Which of the following should the technician do?",
    "opts": [
      {
        "id": "A",
        "t": "Configure the correct VLAN.",
        "c": false
      },
      {
        "id": "B",
        "t": "Perform a vulnerability scan.",
        "c": false
      },
      {
        "id": "C",
        "t": "Disable unnecessary ports.",
        "c": false
      },
      {
        "id": "D",
        "t": "Conduct a site survey.",
        "c": true
      }
    ],
    "expl": "Prima di installare una telecamera di sicurezza, è fondamentale condurre un sopralluogo del sito (site survey): verificare la copertura ottimale, i punti ciechi, le condizioni di illuminazione, la connettività di rete disponibile. VLAN e porte si configurano dopo. Vulnerability scan si fa sui sistemi informatici, non su hardware fisico nuovo.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_066",
    "source": "TL",
    "text": "Which is not a specific type of recovery site?",
    "opts": [
      {
        "id": "A",
        "t": "Hot site",
        "c": false
      },
      {
        "id": "B",
        "t": "Geographic site",
        "c": true
      },
      {
        "id": "C",
        "t": "Cold site",
        "c": false
      },
      {
        "id": "D",
        "t": "Warm site",
        "c": false
      }
    ],
    "expl": "\"Geographic site\" non è un tipo standard di recovery site. I tre tipi standard sono: Hot site (completamente operativo), Warm site (hardware pronto, dati parziali), Cold site (solo infrastruttura fisica). La \"dispersione geografica\" è un principio di architettura, non un tipo di recovery site.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_081",
    "source": "TL",
    "text": "A company is concerned about weather events causing damage to the server room and downtime. Which of the following should the company consider?",
    "opts": [
      {
        "id": "A",
        "t": "Clustering servers",
        "c": false
      },
      {
        "id": "B",
        "t": "Geographic dispersion",
        "c": true
      },
      {
        "id": "C",
        "t": "Load balancers",
        "c": false
      },
      {
        "id": "D",
        "t": "Off-site backups",
        "c": false
      }
    ],
    "expl": "La dispersione geografica distribuisce l'infrastruttura IT in posizioni geograficamente distanti: un evento meteo localizzato (tornado, alluvione) non può distruggere simultaneamente tutti i siti. Il clustering gestisce la HA locale. I load balancer ottimizzano le performance. I backup off-site proteggono i dati ma non garantiscono la continuità operativa immediata.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_106",
    "source": "TL",
    "text": "Which of the following are used to back up files that have changed since the last full backup of a virtual machine? (Select two choices)",
    "opts": [
      {
        "id": "A",
        "t": "System state backup",
        "c": false
      },
      {
        "id": "B",
        "t": "Snapshot",
        "c": false
      },
      {
        "id": "C",
        "t": "Incremental backup",
        "c": true
      },
      {
        "id": "D",
        "t": "Differential backup",
        "c": true
      }
    ],
    "expl": "Entrambi i backup incrementale e differenziale salvano i file modificati dall'ultimo backup completo (in modi diversi). Incrementale: file modificati dall'ultimo backup di qualsiasi tipo. Differenziale: file modificati dall'ultimo backup completo. I system state backup e gli snapshot hanno altri scopi specifici.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_141",
    "text": "Which of the following is required for an organization to properly manage its restore process in the event of system failure?",
    "opts": [
      {
        "id": "A",
        "t": "IRP",
        "c": false
      },
      {
        "id": "B",
        "t": "DRP",
        "c": true
      },
      {
        "id": "C",
        "t": "RPO",
        "c": false
      },
      {
        "id": "D",
        "t": "SDLC",
        "c": false
      }
    ],
    "expl": "Il DRP è il piano che documenta come ripristinare i sistemi IT dopo un guasto. IRP è per incidenti cyber. RPO è una metrica temporale, non un piano operativo.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_168",
    "text": "Which of the following must be considered when designing a high-availability network? (Choose two).",
    "opts": [
      {
        "id": "A",
        "t": "Ease of recovery",
        "c": true
      },
      {
        "id": "B",
        "t": "Ability to patch",
        "c": false
      },
      {
        "id": "C",
        "t": "Physical isolation",
        "c": false
      },
      {
        "id": "D",
        "t": "Responsiveness",
        "c": true
      },
      {
        "id": "E",
        "t": "Attack surface",
        "c": false
      },
      {
        "id": "F",
        "t": "Extensible authentication",
        "c": false
      }
    ],
    "expl": "Progettare una rete HA richiede: Ease of recovery (quanto facilmente e velocemente ci si riprende da un guasto) e Responsiveness (quanto velocemente il sistema risponde agli utenti — latenza, throughput). Physical isolation, attack surface e extensible authentication sono considerazioni di sicurezza generali, non specifiche della HA.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_172",
    "text": "A company is developing a business continuity strategy and needs to determine how many staff members would be required to sustain the business in the case of a disruption. Which of the following best describes this step?",
    "opts": [
      {
        "id": "A",
        "t": "Capacity planning",
        "c": true
      },
      {
        "id": "B",
        "t": "Redundancy",
        "c": false
      },
      {
        "id": "C",
        "t": "Geographic dispersion",
        "c": false
      },
      {
        "id": "D",
        "t": "Tabletop exercise",
        "c": false
      }
    ],
    "expl": "Il capacity planning determina le risorse necessarie (incluso il personale) per sostenere le operazioni in scenari di disruzione. Determinare quanti dipendenti sono necessari per le funzioni essenziali è la dimensione \"People\" del capacity planning. La ridondanza riguarda i sistemi, non il personale.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_176",
    "text": "An organization is building a new backup data center with cost-benefit as the primary requirement and RTO and RPO values around two days. Which of the following types of sites is the best for this scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Real-time recovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Hot",
        "c": false
      },
      {
        "id": "C",
        "t": "Cold",
        "c": false
      },
      {
        "id": "D",
        "t": "Warm",
        "c": true
      }
    ],
    "expl": "Con RTO e RPO di circa 2 giorni e cost-benefit come requisito primario, il warm site è la scelta ottimale: offre hardware pronto (non i costi del hot site) con recovery in ore-giorni. Il hot site costa molto di più. Il cold site avrebbe RTO di settimane (troppo alto per 2 giorni). \"Real-time recovery\" non è un tipo standard.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_199",
    "text": "A company is concerned about weather events causing damage to the server room and downtime. Which of the following should the company consider?",
    "opts": [
      {
        "id": "A",
        "t": "Clustering servers",
        "c": false
      },
      {
        "id": "B",
        "t": "Geographic dispersion",
        "c": true
      },
      {
        "id": "C",
        "t": "Load balancers",
        "c": false
      },
      {
        "id": "D",
        "t": "Off-site backups",
        "c": false
      }
    ],
    "expl": "La dispersione geografica distribuisce l'IT su più sedi geograficamente distanti, proteggendo da eventi meteorologici localizzati che colpirebbero un'unica sede.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_250",
    "text": "Which of the following best ensures minimal downtime and data loss for organizations with critical computing equipment located in earthquake-prone areas?",
    "opts": [
      {
        "id": "A",
        "t": "Generators and UPS",
        "c": false
      },
      {
        "id": "B",
        "t": "Off-site replication",
        "c": true
      },
      {
        "id": "C",
        "t": "Redundant cold sites",
        "c": false
      },
      {
        "id": "D",
        "t": "High availability networking",
        "c": false
      }
    ],
    "expl": "La replica off-site (in un'area geograficamente distante e non soggetta agli stessi terremoti) garantisce sia il minimo downtime (si può fare failover immediatamente) che il minimo data loss (i dati sono continuamente replicati). Generatori e UPS proteggono dall'interruzione di corrente ma non dai danni fisici. Cold sites ridondanti hanno RTO e RPO elevati.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_255",
    "text": "A company is planning a disaster recovery site and needs to ensure that a single natural disaster would not result in the complete loss of regulated backup data. Which of the following should the company consider?",
    "opts": [
      {
        "id": "A",
        "t": "Geographic dispersion",
        "c": true
      },
      {
        "id": "B",
        "t": "Platform diversity",
        "c": false
      },
      {
        "id": "C",
        "t": "Hot site",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancing",
        "c": false
      }
    ],
    "expl": "La dispersione geografica è la soluzione: distribuire i backup in più sedi geograficamente distanti garantisce che un singolo disastro naturale (che è sempre geograficamente limitato) non possa eliminare tutti i dati contemporaneamente. Platform diversity è per la resilienza alle vulnerabilità software. Il hot site è un tipo di DR site, non una strategia per i backup.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_313",
    "text": "A company located in an area prone to hurricanes is developing a disaster recovery plan looking at site considerations that allow the company to immediately continue operations. Which of the following is the best type of site for this company?",
    "opts": [
      {
        "id": "A",
        "t": "Cold",
        "c": false
      },
      {
        "id": "B",
        "t": "Tertiary",
        "c": false
      },
      {
        "id": "C",
        "t": "Warm",
        "c": false
      },
      {
        "id": "D",
        "t": "Hot",
        "c": true
      }
    ],
    "expl": "\"Immediately continue operations\" richiede un hot site: è completamente operativo con sistemi sincronizzati, permettendo il failover in minuti. Il warm site richiederebbe ore-giorni. Il cold site richiederebbe settimane. \"Tertiary\" non è un tipo standard di recovery site.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_319",
    "text": "A business needs a recovery site but does not require immediate failover. The business also wants to reduce the workload required to recover from an outage. Which of the following recovery sites is the best option?",
    "opts": [
      {
        "id": "A",
        "t": "Hot",
        "c": false
      },
      {
        "id": "B",
        "t": "Cold",
        "c": false
      },
      {
        "id": "C",
        "t": "Warm",
        "c": true
      },
      {
        "id": "D",
        "t": "Geographically dispersed",
        "c": false
      }
    ],
    "expl": "Il warm site non richiede failover immediato (ha hardware pronto ma non sistemi sincronizzati in real-time) e riduce il workload di recovery rispetto al cold site (hardware già installato). Il hot site richiederebbe failover immediato (più costoso). Il cold site ha alto workload di recovery.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_328",
    "text": "Which of the following is classified as high availability in a cloud environment?",
    "opts": [
      {
        "id": "A",
        "t": "Access broker",
        "c": false
      },
      {
        "id": "B",
        "t": "Cloud HSM",
        "c": false
      },
      {
        "id": "C",
        "t": "WAF",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancer",
        "c": true
      }
    ],
    "expl": "Il load balancer distribuisce il traffico tra più istanze server, eliminando il single point of failure e garantendo HA: se un'istanza cade, il traffico viene automaticamente ridistribuito. HSM gestisce le chiavi crittografiche. WAF filtra il traffico web per sicurezza. Access broker gestisce l'accesso alle risorse.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_357",
    "source": "TL",
    "text": "The executive management team is mandating the company develop a disaster recovery plan. The cost must be kept to a minimum, and the money to fund additional internet connections is not available. Which of the following would be the best option?",
    "opts": [
      {
        "id": "A",
        "t": "Hot site",
        "c": false
      },
      {
        "id": "B",
        "t": "Cold site",
        "c": true
      },
      {
        "id": "C",
        "t": "Failover site",
        "c": false
      },
      {
        "id": "D",
        "t": "Warm site",
        "c": false
      }
    ],
    "expl": "Con costo minimo come vincolo principale e senza budget per connettività aggiuntiva, il cold site è l'unica opzione: fornisce solo spazio fisico, energia e connettività di base già esistente, senza i costi dell'hardware e della sincronizzazione continua richiesti da warm e hot site.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_365",
    "source": "TL",
    "text": "A network engineer deployed a redundant switch stack to increase system availability. However, the budget can only cover the cost of one ISP connection. Which of the following best describes the potential risk factor?",
    "opts": [
      {
        "id": "A",
        "t": "The equipment MTBF is unknown.",
        "c": false
      },
      {
        "id": "B",
        "t": "The ISP has no SLA.",
        "c": false
      },
      {
        "id": "C",
        "t": "An RPO has not been determined.",
        "c": false
      },
      {
        "id": "D",
        "t": "There is a single point of failure.",
        "c": true
      }
    ],
    "expl": "La ridondanza degli switch è ottima, ma l'unica connessione ISP rimane un single point of failure: se la connessione ISP cade, tutta la connettività internet è persa nonostante gli switch ridondanti. La ridondanza parziale non elimina tutti i rischi.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_382",
    "text": "A city municipality lost its primary data center when a tornado hit the facility. Which of the following should the city staff use immediately after the disaster to handle essential public services?",
    "opts": [
      {
        "id": "A",
        "t": "BCP",
        "c": false
      },
      {
        "id": "B",
        "t": "Communication plan",
        "c": false
      },
      {
        "id": "C",
        "t": "DRP",
        "c": true
      },
      {
        "id": "D",
        "t": "IRP",
        "c": false
      }
    ],
    "expl": "Un tornado che distrugge il data center è un disastro fisico che richiede l'attivazione del DRP (Disaster Recovery Plan) per ripristinare i sistemi IT essenziali. IRP è per risposta a incidenti cyber. Il BCP è più strategico e a lungo termine. Il communication plan è un componente, non il piano principale da attivare.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_411",
    "text": "A multinational bank hosts several servers running a business-critical application used by customers to access their account information. Which of the following should the bank use to ensure accessibility during peak usage times?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancer",
        "c": true
      },
      {
        "id": "B",
        "t": "Cloud backups",
        "c": false
      },
      {
        "id": "C",
        "t": "Geographic dispersal",
        "c": false
      },
      {
        "id": "D",
        "t": "Disk multipathing",
        "c": false
      }
    ],
    "expl": "Un load balancer distribuisce il traffico tra più server durante i picchi di utilizzo, garantendo che nessun singolo server sia sovraccarico e che il servizio rimanga accessibile. Cloud backups proteggono i dati ma non la disponibilità del servizio. Il disk multipathing è per la ridondanza dello storage, non per la distribuzione del carico applicativo.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_423",
    "text": "A systems administrator would like to create a point-in-time backup of a virtual machine. Which of the following should the administrator use?",
    "opts": [
      {
        "id": "A",
        "t": "Replication",
        "c": false
      },
      {
        "id": "B",
        "t": "Simulation",
        "c": false
      },
      {
        "id": "C",
        "t": "Snapshot",
        "c": true
      },
      {
        "id": "D",
        "t": "Containerization",
        "c": false
      }
    ],
    "expl": "Uno snapshot crea una fotografia istantanea dello stato esatto di una VM in un preciso momento, senza richiedere downtime. La replication sincronizza continuamente su un altro sistema. La simulation è un tipo di test DR. La containerization è un'architettura applicativa.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_441",
    "text": "Which of the following would be the best way to test resiliency in the event of a primary power failure?",
    "opts": [
      {
        "id": "A",
        "t": "Parallel processing",
        "c": false
      },
      {
        "id": "B",
        "t": "Tabletop exercise",
        "c": false
      },
      {
        "id": "C",
        "t": "Simulation testing",
        "c": false
      },
      {
        "id": "D",
        "t": "Production failover",
        "c": true
      }
    ],
    "expl": "Il production failover esegue effettivamente il trasferimento al backup di produzione, verificando che i sistemi passino all'alimentazione di backup in condizioni reali. Il tabletop exercise è solo una discussione verbale. La simulation non coinvolge i sistemi di produzione reali. Il parallel processing verifica la parità dei risultati tra due siti, non specificamente la resilienza al guasto elettrico.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_454",
    "text": "Which of the following is a benefit of vendor diversity?",
    "opts": [
      {
        "id": "A",
        "t": "Patch availability",
        "c": false
      },
      {
        "id": "B",
        "t": "Zero-day resiliency",
        "c": true
      },
      {
        "id": "C",
        "t": "Secure configuration guide applicability",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancing",
        "c": false
      }
    ],
    "expl": "La diversità dei vendor (platform diversity) aumenta la resilienza agli zero-day: se tutti i sistemi usano lo stesso OS/software e viene scoperta una zero-day, tutta l'infrastruttura è vulnerabile. Con piattaforme diverse, una zero-day colpisce solo una parte dell'infrastruttura. Patch availability dipende dal vendor specifico, non dalla sua diversità.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_465",
    "text": "Which of the following would enable a data center to remain operational through a multiday power outage?",
    "opts": [
      {
        "id": "A",
        "t": "Generator",
        "c": true
      },
      {
        "id": "B",
        "t": "Uninterruptible power supply",
        "c": false
      },
      {
        "id": "C",
        "t": "Replication",
        "c": false
      },
      {
        "id": "D",
        "t": "Parallel processing",
        "c": false
      }
    ],
    "expl": "Un generatore alimentato da carburante può sostenere le operazioni per giorni o settimane finché c'è carburante. Un UPS (Uninterruptible Power Supply) funziona a batteria per pochi minuti — non adatto per un outage di più giorni. Replication e parallel processing riguardano la disponibilità dei dati/sistemi, non l'alimentazione elettrica.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_509",
    "text": "Which of the following is the best way to validate the integrity and availability of a disaster recovery site?",
    "opts": [
      {
        "id": "A",
        "t": "Lead a simulated failover.",
        "c": true
      },
      {
        "id": "B",
        "t": "Conduct a tabletop exercise.",
        "c": false
      },
      {
        "id": "C",
        "t": "Periodically test the generators.",
        "c": false
      },
      {
        "id": "D",
        "t": "Develop requirements for database encryption.",
        "c": false
      }
    ],
    "expl": "Un failover simulato testa effettivamente i sistemi del DR site verificando che possano prendere il controllo delle operazioni, senza impattare la produzione. Il tabletop exercise è solo una discussione verbale, non verifica i sistemi reali. Testare i generatori verifica solo l'alimentazione, non la disponibilità dei sistemi IT. La cifratura del database non è correlata alla disponibilità del DR site.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_553",
    "text": "Which of the following would be the best solution to deploy a low-cost standby site that includes hardware and internet access?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery site",
        "c": false
      },
      {
        "id": "B",
        "t": "Cold site",
        "c": true
      },
      {
        "id": "C",
        "t": "Hot site",
        "c": false
      },
      {
        "id": "D",
        "t": "Warm site",
        "c": false
      }
    ],
    "expl": "Il cold site offre infrastruttura di base (spazio, energia, connettività internet) a basso costo, senza i costi dell'hardware già installato e della sincronizzazione continua. \"Recovery site\" non è un tipo specifico standard. Hot e warm site hanno costi significativamente più alti.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_573",
    "text": "Which of the following options will provide the lowest RTO and RPO for a database?",
    "opts": [
      {
        "id": "A",
        "t": "Snapshots",
        "c": false
      },
      {
        "id": "B",
        "t": "On-site backups",
        "c": false
      },
      {
        "id": "C",
        "t": "Journaling",
        "c": false
      },
      {
        "id": "D",
        "t": "Hot site",
        "c": true
      }
    ],
    "expl": "Un hot site con replica real-time del database offre il più basso RTO (il failover avviene in minuti) e il più basso RPO (i dati sono sincronizzati in real-time, quindi quasi zero data loss). Gli snapshot, i backup on-site e il journaling non offrono il livello di continuità di un hot site.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_582",
    "text": "A company wants to improve the availability of its application with a solution that requires minimal effort in the event a server needs to be replaced or added. Which of the following would be the best solution?",
    "opts": [
      {
        "id": "A",
        "t": "Load balancing",
        "c": true
      },
      {
        "id": "B",
        "t": "Fault tolerance",
        "c": false
      },
      {
        "id": "C",
        "t": "Proxy servers",
        "c": false
      },
      {
        "id": "D",
        "t": "Replication",
        "c": false
      }
    ],
    "expl": "Il load balancing permette di aggiungere o rimuovere server backend con minimo effort operativo: il load balancer gestisce automaticamente la distribuzione del traffico verso i server disponibili. La fault tolerance è un principio generale. I proxy server mediano il traffico. La replica sincronizza i dati ma non gestisce il bilanciamento del carico.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_710",
    "text": "A recent power outage halted operations at a company's only data center. Which of the following solutions would best prevent an event like this one in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Platform diversity",
        "c": false
      },
      {
        "id": "B",
        "t": "Generator",
        "c": true
      },
      {
        "id": "C",
        "t": "Snapshots",
        "c": false
      },
      {
        "id": "D",
        "t": "Load balancing",
        "c": false
      }
    ],
    "expl": "Un generatore diesel/gas fornisce alimentazione autonoma in caso di interruzione della corrente di rete, permettendo al data center di continuare a operare. Platform diversity riguarda la diversità tecnologica, non l'alimentazione. Snapshot e load balancing non proteggono dai guasti elettrici.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_717",
    "text": "A site reliability engineer is designing a recovery strategy that requires quick failover to an identical site if the primary facility goes down. Which of the following types of sites should the engineer consider?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery site",
        "c": false
      },
      {
        "id": "B",
        "t": "Hot site",
        "c": true
      },
      {
        "id": "C",
        "t": "Cold site",
        "c": false
      },
      {
        "id": "D",
        "t": "Warm site",
        "c": false
      }
    ],
    "expl": "\"Quick failover to an identical site\" = hot site: è l'unico tipo completamente operativo con sistemi identici al primario, sincronizzati in real-time o quasi. Il cold site richiederebbe settimane. Il warm site richiederebbe ore-giorni. \"Recovery site\" non è un tipo specifico standard.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_718",
    "text": "Which of the following would an organization most likely use to minimize the loss of data on a file server in the event data needs to be restored?",
    "opts": [
      {
        "id": "A",
        "t": "Snapshots",
        "c": true
      },
      {
        "id": "B",
        "t": "Journaling",
        "c": false
      },
      {
        "id": "C",
        "t": "Obfuscation",
        "c": false
      },
      {
        "id": "D",
        "t": "Tokenization",
        "c": false
      }
    ],
    "expl": "Gli snapshot creano copie point-in-time del file server a intervalli frequenti. In caso di perdita di dati, si ripristina dall'ultimo snapshot, minimizzando il data loss. Il journaling protegge dalla corruzione del filesystem ma non è un meccanismo di backup/recovery. Obfuscation e tokenization riguardano la protezione dei dati, non il recovery.",
    "domain": 3,
    "objective": "3.4"
  },
  {
    "id": "SCREEN_054",
    "text": "An application developer is using guardrails when creating a new web app. Which of the following would best describe this technique?",
    "opts": [
      {
        "id": "A",
        "t": "Require multiple factors during authentication",
        "c": false
      },
      {
        "id": "B",
        "t": "Show detailed information on startup splash screen",
        "c": false
      },
      {
        "id": "C",
        "t": "Log debug information during use",
        "c": false
      },
      {
        "id": "D",
        "t": "Automate input and output validation",
        "c": true
      }
    ],
    "expl": "I guardrail nello sviluppo software modernizzano la sicurezza automatizzando i controlli sistematici, inclusa la validazione logica dell'input dei form e dell'output emesso, riducendo l'insorgenza di bug o iniezioni malevole.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_078",
    "text": "An organization recently updated its security policy to include the following statement: Regular expressions are included in source code to remove special characters such as $, |, ;, &, `, and ? from variables set by forms in a web application. Which of the following best explains the security technique the organization adopted by making this addition to the policy?",
    "opts": [
      {
        "id": "A",
        "t": "Identify embedded keys",
        "c": false
      },
      {
        "id": "B",
        "t": "Code debugging",
        "c": false
      },
      {
        "id": "C",
        "t": "Input validation",
        "c": true
      },
      {
        "id": "D",
        "t": "Static code analysis",
        "c": false
      }
    ],
    "expl": "Filtrare caratteri di controllo speciali provenienti dai form utilizzando Regular Expression è un'implementazione classica di validazione dell'input (Input Validation) per impedire iniezioni e cross-site scripting.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_082",
    "text": "Which of the following practices would be best to prevent an insider from introducing malicious code into a company's development process?",
    "opts": [
      {
        "id": "A",
        "t": "Code scanning for vulnerabilities",
        "c": false
      },
      {
        "id": "B",
        "t": "Open-source component usage",
        "c": false
      },
      {
        "id": "C",
        "t": "Quality assurance testing",
        "c": false
      },
      {
        "id": "D",
        "t": "Peer review and approval",
        "c": true
      }
    ],
    "expl": "La peer review (verifica concettuale ed approvazione del codice da parte di colleghi) è la difesa più forte per evitare che uno sviluppatore interno compromesso (Insider Threat) introduca intenzionalmente backdoor impercettibili ad un antivirus o scanner automatico.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_084",
    "text": "A security team is reviewing the findings in a report that was delivered after a third party performed a penetration test. One of the findings indicated that a web application form field is vulnerable to cross-site scripting. Which of the following application security techniques should the security analyst recommend the developer implement to prevent this vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "Secure cookies",
        "c": false
      },
      {
        "id": "B",
        "t": "Version control",
        "c": false
      },
      {
        "id": "C",
        "t": "Input validation",
        "c": true
      },
      {
        "id": "D",
        "t": "Code signing",
        "c": false
      }
    ],
    "expl": "Per rimediare al Cross-Site Scripting (XSS) rilevato in un form, la tecnica corretta ed essenziale è applicare la sanificazione o validazione dell'input (Input Validation), ripulendo o codificando i caratteri speciali HTML immessi dall'utente.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_180",
    "text": "Which of the following would be the best way to block unknown programs from executing?",
    "opts": [
      {
        "id": "A",
        "t": "Access control list",
        "c": false
      },
      {
        "id": "B",
        "t": "Application allow list",
        "c": true
      },
      {
        "id": "C",
        "t": "Host-based firewall",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP solution",
        "c": false
      }
    ],
    "expl": "Una lista dei consentiti applicativa (Application Allow List) blocca l'esecuzione di qualunque programma o software ignoto o non espressamente approvato preventiva e programmaticamente.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_192",
    "text": "A security analyst and the management team are reviewing the organizational performance of a recent phishing campaign. The user click-through rate exceeded the acceptable risk threshold, and the management team wants to reduce the impact when a user clicks on a link in a phishing message. Which of the following should the analyst do?",
    "opts": [
      {
        "id": "A",
        "t": "Place posters around the office to raise awareness of common phishing activities.",
        "c": false
      },
      {
        "id": "B",
        "t": "Implement email security filters to prevent phishing emails from being delivered.",
        "c": false
      },
      {
        "id": "C",
        "t": "Update the EDR policies to block automatic execution of downloaded programs.",
        "c": true
      },
      {
        "id": "D",
        "t": "Create additional training for users to recognize the signs of phishing attempts.",
        "c": false
      }
    ],
    "expl": "Per ridurre l'impatto qualora l'utente clicchi su un link truffaldino, la risposta tecnica consiste nell'aggiornare le policy dell'EDR lato host per fermare e bloccare l'esecuzione o il caricamento di file eseguibili e programmi scaricati automaticamente dal browser o dalla mail.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_203",
    "text": "HOTSPOT - Select the appropriate attack and remediation from each drop-down list to label the corresponding attack with its remediation.",
    "opts": [
      {
        "id": "A",
        "t": "SYN packets from multiple sources (Web server): Botnet - Enable DDoS protection",
        "c": true
      },
      {
        "id": "B",
        "t": "Remote commands execution (User): RAT - Disable remote access services",
        "c": true
      },
      {
        "id": "C",
        "t": "SQL database compromise with well-known credentials (Database server): Worm - Patch vulnerable systems",
        "c": true
      },
      {
        "id": "D",
        "t": "Hardware monitors user input (Executive): Keylogger - Implement 2FA using push notification",
        "c": true
      },
      {
        "id": "E",
        "t": "Hidden access in internally developed application (Application): Backdoor - Conduct a code review",
        "c": true
      }
    ],
    "expl": "Questo riassume i binomi di attacco e mitigazione: i pacchetti SYN si mitigano con protezioni DDoS; comandi remoti RAT disabilitando accessi remoti non protetti; worm patchando software; keylogger imponendo autenticazioni a due fattori basate su push e non catturabili da tastiera; backdoor effettuando un meticoloso code review.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_225",
    "text": "Which of the following actions could a security engineer take to ensure workstations and servers are properly monitored for unauthorized changes and software?",
    "opts": [
      {
        "id": "A",
        "t": "Configure all systems to log scheduled tasks.",
        "c": false
      },
      {
        "id": "B",
        "t": "Collect and monitor all traffic exiting the network.",
        "c": false
      },
      {
        "id": "C",
        "t": "Block traffic based on known malicious signatures.",
        "c": false
      },
      {
        "id": "D",
        "t": "Install endpoint management software on all systems",
        "c": true
      }
    ],
    "expl": "La soluzione centralizzata per accertarsi che workstation e server siano controllati per rilevare variazioni software o attività non consentite consiste nell'installare agenti di Endpoint Management Software.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_237",
    "text": "Which of the following can best protect against an employee inadvertently installing malware on a company system?",
    "opts": [
      {
        "id": "A",
        "t": "Host-based firewall",
        "c": false
      },
      {
        "id": "B",
        "t": "System isolation",
        "c": false
      },
      {
        "id": "C",
        "t": "Least privilege",
        "c": false
      },
      {
        "id": "D",
        "t": "Application allow list",
        "c": true
      }
    ],
    "expl": "L'Application Allow List (Lista di programmi autorizzati) impedisce il caricamento all'utente o a script terzi di installare malware accidentalmente sul computer, bloccando preventivamente tutto il non esplicitamente censito.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_284",
    "text": "A technician is deploying a new security camera. Which of the following should the technician do?",
    "opts": [
      {
        "id": "A",
        "t": "Configure the correct VLAN.",
        "c": false
      },
      {
        "id": "B",
        "t": "Perform a vulnerability scan.",
        "c": false
      },
      {
        "id": "C",
        "t": "Disable unnecessary ports.",
        "c": false
      },
      {
        "id": "D",
        "t": "Conduct a site survey.",
        "c": true
      }
    ],
    "expl": "Per l'installazione di una telecamera si esegue preliminarmente un site survey sul campo per ottimizzare coperture d'antenna, prevenire bypass visivi ed ostacoli fisici.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_308",
    "text": "Which of the following is used to protect a computer from viruses, malware, and Trojans being installed and moving laterally across the network?",
    "opts": [
      {
        "id": "A",
        "t": "IDS",
        "c": false
      },
      {
        "id": "B",
        "t": "ACL",
        "c": false
      },
      {
        "id": "C",
        "t": "EDR",
        "c": true
      },
      {
        "id": "D",
        "t": "NAC",
        "c": false
      }
    ],
    "expl": "L'EDR (Endpoint Detection and Response) monitora processi sospetti, bloccando attivamente l'installazione e l'espansione laterale (lateral movement) di virus, trojan e ransomware sulle altre macchine.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_342",
    "text": "Which of the following examples would be best mitigated by input sanitization?",
    "opts": [
      {
        "id": "A",
        "t": "&lt;script&gt;alert(\"Warning!\");&lt;/script&gt;",
        "c": true
      },
      {
        "id": "B",
        "t": "nmap - 10.11.1.130",
        "c": false
      },
      {
        "id": "C",
        "t": "Email message: \"Click this link to get your free gift card.\"",
        "c": false
      },
      {
        "id": "D",
        "t": "Browser message: \"Your connection is not private.\"",
        "c": false
      }
    ],
    "expl": "La stringa &lt;script&gt;alert(...) rappresenta il classico frame inject d'attacco XSS. Lo si contrasta attivamente ripulendo (sanificandole) le stringhe in input.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_346",
    "text": "A user would like to install software and features that are not available with a smartphone's default software. Which of the following would allow the user to install unauthorized software and enable new features?",
    "opts": [
      {
        "id": "A",
        "t": "SQLi",
        "c": false
      },
      {
        "id": "B",
        "t": "Cross-site scripting",
        "c": false
      },
      {
        "id": "C",
        "t": "Jailbreaking",
        "c": true
      },
      {
        "id": "D",
        "t": "Side loading",
        "c": false
      }
    ],
    "expl": "Il Jailbreaking rimuove le restrizioni di root del firmware imposte dalla fabbrica, permettendo modifiche profonde e installazioni di software non approvati dai merchant store ufficiali.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_353",
    "text": "An administrator needs to perform server hardening before deployment. Which of the following steps should the administrator take? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Disable default accounts.",
        "c": true
      },
      {
        "id": "B",
        "t": "Add the server to the asset inventory.",
        "c": false
      },
      {
        "id": "C",
        "t": "Remove unnecessary services.",
        "c": true
      },
      {
        "id": "D",
        "t": "Document default passwords.",
        "c": false
      },
      {
        "id": "E",
        "t": "Send server logs to the SIEM.",
        "c": false
      },
      {
        "id": "F",
        "t": "Join the server to the corporate domain.",
        "c": false
      }
    ],
    "expl": "Il nucleo iniziale di indurimento server prima della messa in linea esige di eliminare account standard noti (default accounts) e spegnere servizi di diagnostica o non necessari.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_367",
    "text": "A threat actor was able to use a username and password to log in to a stolen company mobile device. Which of the following provides the best solution to increase mobile data security on all employees' company mobile devices?",
    "opts": [
      {
        "id": "A",
        "t": "Application management",
        "c": false
      },
      {
        "id": "B",
        "t": "Full disk encryption",
        "c": false
      },
      {
        "id": "C",
        "t": "Remote wipe",
        "c": true
      },
      {
        "id": "D",
        "t": "Containerization",
        "c": false
      }
    ],
    "expl": "Se un attaccante ha in mano le credenziali e il cellulare aziendale fisico, il sistema primario per tutelare i dati d'ufficio e resettare il device a distanza è ordinare un Remote Wipe.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_369",
    "text": "A software development team asked a security administrator to recommend techniques that should be used to reduce the chances of the software being reverse engineered. Which of the following should the security administrator recommend?",
    "opts": [
      {
        "id": "A",
        "t": "Digitally signing the software",
        "c": false
      },
      {
        "id": "B",
        "t": "Performing code obfuscation",
        "c": true
      },
      {
        "id": "C",
        "t": "Limiting the use of third-party libraries",
        "c": false
      },
      {
        "id": "D",
        "t": "Using compile flags",
        "c": false
      }
    ],
    "expl": "L'offuscamento (Obfuscation) rende difficile leggere ed interpretare il sorgente disassemblato del software, stroncando sul nascere i costi di reverse engineering del prodotto venduto.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_379",
    "text": "A coffee shop owner wants to restrict internet access to only paying customers by prompting them for a receipt number. Which of the following is the best method to use given this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "WPA3",
        "c": false
      },
      {
        "id": "B",
        "t": "Captive portal",
        "c": true
      },
      {
        "id": "C",
        "t": "PSK",
        "c": false
      },
      {
        "id": "D",
        "t": "IEEE 802.1X",
        "c": false
      }
    ],
    "expl": "Il Captive Portal cattura le prime transazioni del browser mostrando un form web per digitare credenziali o un scontrino (receipt number) prima di erogare la rete Wi-Fi.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_408",
    "text": "A newly implemented wireless network is designed so that visitors can connect to the wireless network for business activities. The legal department is concerned that visitors might connect to the network and perform illicit activities. Which of the following should the security team implement to address this concern?",
    "opts": [
      {
        "id": "A",
        "t": "Configure a RADIUS server to manage device authentication.",
        "c": false
      },
      {
        "id": "B",
        "t": "Use 802.1X on all devices connecting to wireless.",
        "c": false
      },
      {
        "id": "C",
        "t": "Add a guest captive portal requiring visitors to accept terms and conditions.",
        "c": true
      },
      {
        "id": "D",
        "t": "Allow for new devices to be connected via WPS.",
        "c": false
      }
    ],
    "expl": "Obbligare i visitatori ad assumersi le responsabilità legali accettando termini e condizioni descrive l'adozione di un guest captive portal all'allaccio.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_483",
    "text": "A security analyst is reviewing logs and discovers the following: 149.32.228.10 - - [28/Jan/2023:16:32:45] “GET / HTTP/1.0” User-Agent: ${/bin/sh/ id} 200 397. Which of the following should be used to best mitigate this type of attack?",
    "opts": [
      {
        "id": "A",
        "t": "Input sanitization",
        "c": true
      },
      {
        "id": "B",
        "t": "Secure cookies",
        "c": false
      },
      {
        "id": "C",
        "t": "Static code analysis",
        "c": false
      },
      {
        "id": "D",
        "t": "Sandboxing",
        "c": false
      }
    ],
    "expl": "La stringa ${/bin/sh/ id} passata in un header HTTP come lo User-Agent rappresenta un tentativo d'iniezione codice (Log4j / Remote Shell exploit). La sanificazione dell'input (Input Sanitization) ripulisce queste stringhe speciali d'esecuzione prima di elaborarle.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_495",
    "text": "After a security incident, a systems administrator asks the company to buy a NAC platform. Which of the following attack surfaces is the systems administrator trying to protect?",
    "opts": [
      {
        "id": "A",
        "t": "Bluetooth",
        "c": false
      },
      {
        "id": "B",
        "t": "Wired",
        "c": true
      },
      {
        "id": "C",
        "t": "NFC",
        "c": false
      },
      {
        "id": "D",
        "t": "SCADA",
        "c": false
      }
    ],
    "expl": "Il NAC impedisce attacchi abusivi operanti sulle porte fisiche cablate (Wired interface) disattivandone i link di rete in caso di anomalie di conformità dispositivo.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_497",
    "text": "An organization issued new laptops to all employees and wants to provide web filtering both in and out of the office without configuring additional access to the network. Which of the following types of web filtering should a systems administrator configure?",
    "opts": [
      {
        "id": "A",
        "t": "Agent-based",
        "c": true
      },
      {
        "id": "B",
        "t": "Centralized proxy",
        "c": false
      },
      {
        "id": "C",
        "t": "URL scanning",
        "c": false
      },
      {
        "id": "D",
        "t": "Content categorization",
        "c": false
      }
    ],
    "expl": "Un filtro web basato su agenti (Agent-based Web Filtering) risiede direttamente sul laptop, monitorando e controllando la navigazione anche quando i lavoratori si trovano fuori ufficio senza connettersi a proxy di backend dedicati.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_499",
    "text": "Which of the following provides the best protection against unwanted or insecure communications to and from a device?",
    "opts": [
      {
        "id": "A",
        "t": "System hardening",
        "c": false
      },
      {
        "id": "B",
        "t": "Host-based firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "Intrusion detection system",
        "c": false
      },
      {
        "id": "D",
        "t": "Anti-malware software",
        "c": false
      }
    ],
    "expl": "Un firewall residente sul host (Host-based Firewall) vigila, limita e assevera ogni flusso o traffico non gradito in transito bidirezionale da e verso la risorsa.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_501",
    "text": "An employee who was working remotely lost a mobile device containing company data. Which of the following provides the best solution to prevent future data loss?",
    "opts": [
      {
        "id": "A",
        "t": "MDM",
        "c": true
      },
      {
        "id": "B",
        "t": "DLP",
        "c": false
      },
      {
        "id": "C",
        "t": "FDE",
        "c": false
      },
      {
        "id": "D",
        "t": "EDR",
        "c": false
      }
    ],
    "expl": "Un software MDM gestisce globalmente i telefoni aziendali, offrendo comandi rapidi di geolocalizzazione, blocco e cifratura dati, preservando future violazioni da smarrimenti.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_503",
    "text": "A company plans to secure its systems by preventing users from sending sensitive data over corporate email and restricting access to potentially harmful websites. Which of the following features should the company set up? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "DLP software",
        "c": true
      },
      {
        "id": "B",
        "t": "DNS filtering",
        "c": true
      },
      {
        "id": "C",
        "t": "File integrity monitoring",
        "c": false
      },
      {
        "id": "D",
        "t": "Stateful firewall",
        "c": false
      },
      {
        "id": "E",
        "t": "Guardrails",
        "c": false
      },
      {
        "id": "F",
        "t": "Antivirus signatures",
        "c": false
      }
    ],
    "expl": "Il software DLP (Data Loss Prevention) arresta l'invio via email di dati sensibili all'esterno, mentre il filtro DNS (DNS Filtering) inibisce all'utente l'accesso iniziale a domini web classificati come pericolosi.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_544",
    "text": "An organization is implementing a COPE mobile device management policy. Which of the following should the organization include in the COPE policy? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Remote wiping of the device",
        "c": true
      },
      {
        "id": "B",
        "t": "Data encryption",
        "c": true
      },
      {
        "id": "C",
        "t": "Requiring passwords with eight characters",
        "c": false
      },
      {
        "id": "D",
        "t": "Data usage caps",
        "c": false
      },
      {
        "id": "E",
        "t": "Employee data ownership",
        "c": false
      },
      {
        "id": "F",
        "t": "Personal application store access",
        "c": false
      }
    ],
    "expl": "Poiché i cellulari in regime COPE sono proprietà aziendale erogata con permessi d'uso ludici, la policy deve sancire ed abilitare la cifratura locale dei dati (Data encryption) e la cancellazione gestita da remoto (Remote wiping).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_547",
    "text": "Which of the following should a security team do first before a new web server goes live?",
    "opts": [
      {
        "id": "A",
        "t": "Harden the virtual host.",
        "c": true
      },
      {
        "id": "B",
        "t": "Create WAF rules.",
        "c": false
      },
      {
        "id": "C",
        "t": "Enable network intrusion detection.",
        "c": false
      },
      {
        "id": "D",
        "t": "Apply patch management.",
        "c": false
      }
    ],
    "expl": "Mettere in sicurezza e applicare l'hardening sull'host virtuale (Harden the virtual host) su cui risiede il server web rappresenta l'azione primaria di difesa fondamentale prima della pubblicazione online.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_567",
    "text": "A company is concerned about theft of client data from decommissioned laptops. Which of the following is the most cost-effective method to decrease this risk?",
    "opts": [
      {
        "id": "A",
        "t": "Wiping",
        "c": true
      },
      {
        "id": "B",
        "t": "Recycling",
        "c": false
      },
      {
        "id": "C",
        "t": "Shredding",
        "c": false
      },
      {
        "id": "D",
        "t": "Deletion",
        "c": false
      }
    ],
    "expl": "La sovrascrittura sicura (Wiping / Sanitization) svuota e disinfetta magneticamente o elettronicamente il disco in modo ripetibile e ad alta efficienza di costi, permettendo il riuso del notebook.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_588",
    "text": "A network engineer is increasing the overall security of network devices and needs to harden the devices. Which of the following will best accomplish this task?",
    "opts": [
      {
        "id": "A",
        "t": "Configuring centralized logging",
        "c": false
      },
      {
        "id": "B",
        "t": "Generating local administrator accounts",
        "c": false
      },
      {
        "id": "C",
        "t": "Replacing Telnet with SSH",
        "c": true
      },
      {
        "id": "D",
        "t": "Enabling HTTP administration",
        "c": false
      }
    ],
    "expl": "L'indurimento protocollare consiste nel rimpiazzare comunicazioni vulnerabili in chiaro (Telnet, HTTP) con canali ad alta cifratura simmetrica/asimmetrica come SSH (porta 22).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_604",
    "text": "The management team reports that employees are missing features on company-provided tablets, which is causing productivity issues. The management team directs the IT team to resolve the issue within 48 hours. Which of the following would be the best solution for the IT team to leverage in this scenario?",
    "opts": [
      {
        "id": "A",
        "t": "EDR",
        "c": false
      },
      {
        "id": "B",
        "t": "COPE",
        "c": false
      },
      {
        "id": "C",
        "t": "MDM",
        "c": true
      },
      {
        "id": "D",
        "t": "FDE",
        "c": false
      }
    ],
    "expl": "Un server MDM permette di installare ed abilitare globalmente le applicazioni, feature e widget carenti sui tablet distribuiti dall'ufficio in pochi instanti.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_605",
    "text": "A company is implementing a policy to allow employees to use their personal equipment for work. However, the company wants to ensure that only company-approved applications can be installed. Which of the following addresses this concern?",
    "opts": [
      {
        "id": "A",
        "t": "MDM",
        "c": true
      },
      {
        "id": "B",
        "t": "Containerization",
        "c": false
      },
      {
        "id": "C",
        "t": "DLP",
        "c": false
      },
      {
        "id": "D",
        "t": "FIM",
        "c": false
      }
    ],
    "expl": "L'MDM permette di imporre un set di applicazioni consentite per l'ufficio ed arrestare il caricamento di programmi illegittimi sul dispositivo nel canale adoperato per scopi professionali.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_619",
    "text": "Which of the following types of identification methods can be performed on a deployed application during runtime?",
    "opts": [
      {
        "id": "A",
        "t": "Dynamic analysis",
        "c": true
      },
      {
        "id": "B",
        "t": "Code review",
        "c": false
      },
      {
        "id": "C",
        "t": "Package monitoring",
        "c": false
      },
      {
        "id": "D",
        "t": "Bug bounty",
        "c": false
      }
    ],
    "expl": "L'analisi dinamica (Dynamic analysis) monitora i comportamenti dell'applicazione, le eccezioni scatenate e i buffer caricati in modo reattivo mentre l'applicativo è in esecuzione (at runtime).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_622",
    "text": "A security engineer needs to quickly identify a signature from a known malicious file. Which of the following analysis methods would the security engineer most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Static",
        "c": true
      },
      {
        "id": "B",
        "t": "Sandbox",
        "c": false
      },
      {
        "id": "C",
        "t": "Network traffic",
        "c": false
      },
      {
        "id": "D",
        "t": "Package monitoring",
        "c": false
      }
    ],
    "expl": "Confrontare ed intercettare l'MD5 o la firma crittografica strutturata di un file infetto, senza caricarlo o eseguirlo, definisce l'analisi statica (Static analysis).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_654",
    "text": "A company wants to track modifications to the code that is used to build new virtual servers. Which of the following will the company most likely deploy?",
    "opts": [
      {
        "id": "A",
        "t": "Change management ticketing system",
        "c": false
      },
      {
        "id": "B",
        "t": "Behavioral analyzer",
        "c": false
      },
      {
        "id": "C",
        "t": "Collaboration platform",
        "c": false
      },
      {
        "id": "D",
        "t": "Version control tool",
        "c": true
      }
    ],
    "expl": "I template di Infrastructure as Code (IaC) impiegati per erogare host virtuali sono file testuali; lo strumento d'elezione per mapparne e tracciarne le modifiche è un tool di controllo di versione (Version control tool).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_660",
    "text": "A systems administrator creates a script that validates OS version, patch levels, and installed applications when users log in. Which of the following examples best describes the purpose of this script?",
    "opts": [
      {
        "id": "A",
        "t": "Resource scaling",
        "c": false
      },
      {
        "id": "B",
        "t": "Policy enumeration",
        "c": false
      },
      {
        "id": "C",
        "t": "Baseline enforcement",
        "c": true
      },
      {
        "id": "D",
        "t": "Guard rails implementation",
        "c": false
      }
    ],
    "expl": "Uno script che compara la compliancy software e OS al login costituisce l'applicazione attiva e l'imposizione dello standard (Baseline enforcement).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_681",
    "text": "Which of the following should be used to ensure a device is inaccessible to a network-connected resource?",
    "opts": [
      {
        "id": "A",
        "t": "Disablement of unused services",
        "c": false
      },
      {
        "id": "B",
        "t": "Web application firewall",
        "c": false
      },
      {
        "id": "C",
        "t": "Host isolation",
        "c": true
      },
      {
        "id": "D",
        "t": "Network-based IDS",
        "c": false
      }
    ],
    "expl": "Per arrestare d'urto la propagazione e l'interazione del computer infettato bloccandone l'accesso a qualsiasi target della LAN, si opera l'isolamento della macchina (Host isolation).",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_191",
    "text": "An organization recently updated its security policy to include the following statement: Regular expressions are included in source code to remove special characters such as $, |, :, &, `, and ? from variables set by forms in a web application. Which of the following best explains the security technique the organization adopted by making this addition to the policy?",
    "opts": [
      {
        "id": "A",
        "t": "Identify embedded keys",
        "c": false
      },
      {
        "id": "B",
        "t": "Code debugging",
        "c": false
      },
      {
        "id": "C",
        "t": "Input validation",
        "c": true
      },
      {
        "id": "D",
        "t": "Static code analysis",
        "c": false
      }
    ],
    "expl": "Filtrare caratteri speciali provenienti dai form web tramite Regular Expression rientra nella pratica di Input Validation per prevenire iniezioni o codice malevolo.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_236",
    "text": "Which of the following practices would be best to prevent an insider from introducing malicious code into a company's development process?",
    "opts": [
      {
        "id": "A",
        "t": "Code scanning for vulnerabilities",
        "c": false
      },
      {
        "id": "B",
        "t": "Open-source component usage",
        "c": false
      },
      {
        "id": "C",
        "t": "Quality assurance testing",
        "c": false
      },
      {
        "id": "D",
        "t": "Peer review and approval",
        "c": true
      }
    ],
    "expl": "La revisione tra pari e approvazione (Peer review and approval) è lo strumento d'elezione per scongiurare che un insider malevolo introduca codice compromesso.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_728",
    "text": "Which of the following is the first step to secure a newly deployed server?",
    "opts": [
      {
        "id": "A",
        "t": "Close unnecessary service ports.",
        "c": false
      },
      {
        "id": "B",
        "t": "Update the current version of the software.",
        "c": true
      },
      {
        "id": "C",
        "t": "Add the device to the ACL.",
        "c": false
      },
      {
        "id": "D",
        "t": "Upgrade the OS version.",
        "c": false
      }
    ],
    "expl": "Aggiornare il software alla versione corrente patchata e disinfettata (Update current version of software) definisce la prima priorità operativa quando una macchina viene esposta in rete.",
    "domain": 4,
    "objective": "4.1"
  },
  {
    "id": "SCREEN_004",
    "text": "A company owns a product which is no longer sold or supported by the manufacturer. Which of the following would best describe this product?",
    "opts": [
      {
        "id": "A",
        "t": "NDA",
        "c": false
      },
      {
        "id": "B",
        "t": "BYOD",
        "c": false
      },
      {
        "id": "C",
        "t": "APT",
        "c": false
      },
      {
        "id": "D",
        "t": "EOSL",
        "c": true
      },
      {
        "id": "E",
        "t": "SLA",
        "c": false
      }
    ],
    "expl": "Il termine EOSL (End of Service Life) descrive un prodotto (hardware o software) che il produttore non vende più e non supporta più in alcun modo, cessando la fornitura di patch di sicurezza.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_011",
    "text": "A company has begun labeling all laptops with asset inventory stickers and associating them with employee IDs. Which of the following security benefits do these actions provide? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "If a security incident occurs on the device, the correct employee can be notified.",
        "c": true
      },
      {
        "id": "B",
        "t": "The security team will be able to send user awareness training to the appropriate device.",
        "c": false
      },
      {
        "id": "C",
        "t": "Users can be mapped to their devices when configuring software MFA tokens.",
        "c": false
      },
      {
        "id": "D",
        "t": "User-based firewall policies can be correctly targeted to the appropriate laptops.",
        "c": false
      },
      {
        "id": "E",
        "t": "When conducting penetration testing, the security team will be able to target the desired laptops.",
        "c": false
      },
      {
        "id": "F",
        "t": "Company data can be accounted for when the employee leaves the organization.",
        "c": true
      }
    ],
    "expl": "Taggare i dispositivi fisici e associarli alle credenziali utente serve a velocizzare le notifiche in caso di incidenti informatici (A) e garantisce la rendicontazione (accounting) formale dello smaltimento di dati e recupero dei laptop all'atto di deprovisioning dei dipendenti (F).",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_038",
    "text": "Which of the following statements about EOSL items is true?",
    "opts": [
      {
        "id": "A",
        "t": "An EOSL item is no longer supported by the OEM.",
        "c": true
      },
      {
        "id": "B",
        "t": "An EOSL item has no maintenance options.",
        "c": false
      },
      {
        "id": "C",
        "t": "An EOSL item uses older hardware but current software.",
        "c": false
      },
      {
        "id": "D",
        "t": "An EOSL item is only sold to current customers.",
        "c": false
      }
    ],
    "expl": "Un articolo EOSL (End of Service Life) è giunto alla fine del ciclo di supporto da parte dell'OEM (Original Equipment Manufacturer) produttore originario, che non rilascerà alcuna patch aggiuntiva.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_075",
    "text": "A company is discarding a classified storage array and hires an outside vendor to complete the disposal. Which of the following should the company request from the vendor?",
    "opts": [
      {
        "id": "A",
        "t": "Certification",
        "c": true
      },
      {
        "id": "B",
        "t": "Inventory list",
        "c": false
      },
      {
        "id": "C",
        "t": "Classification",
        "c": false
      },
      {
        "id": "D",
        "t": "Proof of ownership",
        "c": false
      }
    ],
    "expl": "Per i supporti di memorizzazione contenenti informazioni classificate, è opportuno pretendere dal fornitore esterno un formale Certificato di Distruzione (Certification) che attesti legalmente la sanitizzazione e la fine dei dati.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_161",
    "text": "A company has begun labeling all laptops with asset inventory stickers and associating them with employee IDs. Which of the following security benefits do these actions provide? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "If a security incident occurs on the device, the correct employee can be notified.",
        "c": true
      },
      {
        "id": "B",
        "t": "The security team will be able to send user awareness training to the appropriate device.",
        "c": false
      },
      {
        "id": "C",
        "t": "Users can be mapped to their devices when configuring software MFA tokens.",
        "c": false
      },
      {
        "id": "D",
        "t": "User-based firewall policies can be correctly targeted to the appropriate laptops.",
        "c": false
      },
      {
        "id": "E",
        "t": "When conducting penetration testing, the security team will be able to target the desired laptops.",
        "c": false
      },
      {
        "id": "F",
        "t": "Company data can be accounted for when the employee leaves the organization.",
        "c": true
      }
    ],
    "expl": "La targhettizzazione degli asset e la mappatura con il dipendente consentono di rintracciare il proprietario della macchina post-breach e rendicontare il materiale e le informazioni della multinazionale quando l'impiegato finisce il rapporto di collaborazione.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_177",
    "text": "A company requires hard drives to be securely wiped before sending decommissioned systems to recycling. Which of the following best describes this policy?",
    "opts": [
      {
        "id": "A",
        "t": "Enumeration",
        "c": false
      },
      {
        "id": "B",
        "t": "Sanitization",
        "c": true
      },
      {
        "id": "C",
        "t": "Destruction",
        "c": false
      },
      {
        "id": "D",
        "t": "Inventory",
        "c": false
      }
    ],
    "expl": "La sanitizzazione (Sanitization) è il processo metodico con cui si sovrascrivono o smagnetizzano i dischi per bonificare e cancellare permanentemente i dati dai drive fisici usati prima che vadano al riciclo o riutilizzo.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_194",
    "text": "The management team notices that new accounts that are set up manually do not always have correct access or permissions. Which of the following automation techniques should a systems administrator use to streamline account creation?",
    "opts": [
      {
        "id": "A",
        "t": "Guard rail script",
        "c": false
      },
      {
        "id": "B",
        "t": "Ticketing workflow",
        "c": false
      },
      {
        "id": "C",
        "t": "Escalation script",
        "c": false
      },
      {
        "id": "D",
        "t": "User provisioning script",
        "c": true
      }
    ],
    "expl": "Uno script di provisioning utente automatizzato (User provisioning script) elimina lo scostamento causato dall'imprecisione dell'operatore manuale, applicando le policy corrette relative a permessi ed accessi.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_205",
    "text": "After a recent vulnerability scan, a security engineer needs to harden the routers within the corporate network. Which of the following is the most appropriate to disable?",
    "opts": [
      {
        "id": "A",
        "t": "Console access",
        "c": false
      },
      {
        "id": "B",
        "t": "Routing protocols",
        "c": false
      },
      {
        "id": "C",
        "t": "VLANs",
        "c": false
      },
      {
        "id": "D",
        "t": "Web-based administration",
        "c": true
      }
    ],
    "expl": "Disattivare l'amministrazione in locale o remota da interfaccia grafica web (Web-based administration) è una misura fondamentale di hardening per mitigare attacchi web-centrici contro i router della rete aziendale.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_215",
    "text": "A systems administrator is creating a script that would save time and prevent human error when performing account creation for a large number of end users. Which of the following would be a good use case for this task?",
    "opts": [
      {
        "id": "A",
        "t": "Off-the-shelf software",
        "c": false
      },
      {
        "id": "B",
        "t": "Orchestration",
        "c": true
      },
      {
        "id": "C",
        "t": "Baseline",
        "c": false
      },
      {
        "id": "D",
        "t": "Policy enforcement",
        "c": false
      }
    ],
    "expl": "L'orchestrazione (Orchestration) si occupa di sincronizzare e automatizzare una catena coordinata di azioni sequenziali e script volti alla distribuzione massiva di account e servizi riducendo a zero gli errori umani.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_230",
    "text": "Which of the following should a systems administrator use to ensure an easy deployment of resources within the cloud provider?",
    "opts": [
      {
        "id": "A",
        "t": "Software as a service",
        "c": false
      },
      {
        "id": "B",
        "t": "Infrastructure as code",
        "c": true
      },
      {
        "id": "C",
        "t": "Internet of Things",
        "c": false
      },
      {
        "id": "D",
        "t": "Software-defined networking",
        "c": false
      }
    ],
    "expl": "L'Infrastruttura come Codice (IaC) consente di programmare e ripetere la configurazione infrastrutturale del cloud istantaneamente e senza discretizzazioni manuali.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_246",
    "text": "Which of the following are cases in which an engineer should recommend the decommissioning of a network device? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "The device has been moved from a production environment to a test environment.",
        "c": false
      },
      {
        "id": "B",
        "t": "The device is configured to use cleartext passwords.",
        "c": false
      },
      {
        "id": "C",
        "t": "The device is moved to an isolated segment on the enterprise network.",
        "c": false
      },
      {
        "id": "D",
        "t": "The device is moved to a different location in the enterprise.",
        "c": false
      },
      {
        "id": "E",
        "t": "The device's encryption level cannot meet organizational standards.",
        "c": true
      },
      {
        "id": "F",
        "t": "The device is unable to receive authorized updates.",
        "c": true
      }
    ],
    "expl": "Un apparato di telecomunicazione va dismesso (decommissioned) quando i chip interni non tollerano più i livelli moderni di cifratura delle policy (E) o quando non può più accettare e applicare gli aggiornamenti patch del costruttore (F).",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_254",
    "text": "A company is discarding a classified storage array and hires an outside vendor to complete the disposal. Which of the following should the company request from the vendor?",
    "opts": [
      {
        "id": "A",
        "t": "Certification",
        "c": true
      },
      {
        "id": "B",
        "t": "Inventory list",
        "c": false
      },
      {
        "id": "C",
        "t": "Classification",
        "c": false
      },
      {
        "id": "D",
        "t": "Proof of ownership",
        "c": false
      }
    ],
    "expl": "Un Certificato di Distruzione ufficiale (Certification) provvede ad attestare programmaticamente l'avvenuto smantellamento logico e fisico delle memorie.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_258",
    "text": "A small business uses kiosks on the sales floor to display product information for customers. A security team discovers the kiosks use end-of-life operating systems. Which of the following is the security team most likely to document as a security implication of the current architecture?",
    "opts": [
      {
        "id": "A",
        "t": "Patch availability",
        "c": true
      },
      {
        "id": "B",
        "t": "Product software compatibility",
        "c": false
      },
      {
        "id": "C",
        "t": "Ease of recovery",
        "c": false
      },
      {
        "id": "D",
        "t": "Cost of replacement",
        "c": false
      }
    ],
    "expl": "La fine del supporto sui sistemi operativi compromette radicalmente la Disponibilità delle Patch (Patch Availability). Vulnerabilità scoperte in seguito ad essa persisteranno indefinitamente nell'ecosistema, facilitando l'esplorazione malevola.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_262",
    "text": "A legacy device is being decommissioned and is no longer receiving updates or patches. Which of the following describes this scenario?",
    "opts": [
      {
        "id": "A",
        "t": "End of business",
        "c": false
      },
      {
        "id": "B",
        "t": "End of testing",
        "c": false
      },
      {
        "id": "C",
        "t": "End of support",
        "c": false
      },
      {
        "id": "D",
        "t": "End of life",
        "c": true
      }
    ],
    "expl": "L'End of Life (EOL) o l'End of Support (EOS/EOSL) indicano la cessazione del tracciamento e dello sviluppo commerciale e delle patch di manutenzione di un apparato.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_424",
    "text": "A security administrator notices numerous unused, non-compliant desktops are connected to the network. Which of the following actions would the administrator most likely recommend to the management team?",
    "opts": [
      {
        "id": "A",
        "t": "Monitoring",
        "c": false
      },
      {
        "id": "B",
        "t": "Decommissioning",
        "c": true
      },
      {
        "id": "C",
        "t": "Patching",
        "c": false
      },
      {
        "id": "D",
        "t": "Isolating",
        "c": false
      }
    ],
    "expl": "Rinvenire in ufficio computer non tracciati scollegati da tempo ma connessi fisicamente costituisce un buco di sicurezza. L'amministrazione deve ordinarne la dismissione e formattazione formale (Decommissioning) per ridurre l'attack surface.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_657",
    "text": "Which of the following is prevented by proper data sanitization?",
    "opts": [
      {
        "id": "A",
        "t": "Hackers' ability to obtain data from used hard drives",
        "c": true
      },
      {
        "id": "B",
        "t": "Devices reaching end-of-life and losing support",
        "c": false
      },
      {
        "id": "C",
        "t": "Disclosure of sensitive data through incorrect classification",
        "c": false
      },
      {
        "id": "D",
        "t": "Incorrect inventory data leading to a laptop shortage",
        "c": false
      }
    ],
    "expl": "La sanitizzazione (Sanitization) previene programmaticamente la possibilità che terze parti o attaccanti recuperino informazioni sensibili residue dai dischi magnetici in disuso o usati.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_702",
    "text": "A company is changing its mobile device policy. The company has the following requirements: Company-owned devices, Ability to harden the devices, Reduced security risk, Compatibility with company resources. Which of the following would best meet these requirements?",
    "opts": [
      {
        "id": "A",
        "t": "BYOD",
        "c": false
      },
      {
        "id": "B",
        "t": "CYOD",
        "c": false
      },
      {
        "id": "C",
        "t": "COPE",
        "c": false
      },
      {
        "id": "D",
        "t": "COBO",
        "c": true
      }
    ],
    "expl": "Il modello COBO (Corporate-Owned, Business-Only) garantisce che i telefoni e i dispositivi hardware siano della società e operativi solo per scopi amministrativi e di business. Consente massimo controllo e indurimento hardware mitigando gli abusi d'uso personale.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_722",
    "text": "A security administrator needs to reduce the attack surface in the company's data centers. Which of the following should the security administrator do to complete this task?",
    "opts": [
      {
        "id": "A",
        "t": "Implement a honeynet.",
        "c": false
      },
      {
        "id": "B",
        "t": "Define Group Policy on the servers.",
        "c": false
      },
      {
        "id": "C",
        "t": "Configure the servers for high availability.",
        "c": false
      },
      {
        "id": "D",
        "t": "Upgrade end-of-support operating systems.",
        "c": true
      }
    ],
    "expl": "Sostituire o aggiornare i vecchi sistemi operativi giunti a fine supporto (End-of-Support / EOSL) rimuove l'esposizione di falle note non patchate riducendo drasticamente l'attack surface attiva nei data center.",
    "domain": 4,
    "objective": "4.2"
  },
  {
    "id": "SCREEN_035",
    "text": "Which of the following is a list of known vulnerabilities in software systems?",
    "opts": [
      {
        "id": "A",
        "t": "Credentialed Scan",
        "c": false
      },
      {
        "id": "B",
        "t": "Vulnerability Scoring System",
        "c": false
      },
      {
        "id": "C",
        "t": "Common Vulnerabilities and Exposures",
        "c": true
      },
      {
        "id": "D",
        "t": "Intelligence Fusion",
        "c": false
      }
    ],
    "expl": "Il sistema CVE (Common Vulnerabilities and Exposures) fornisce un dizionario di vulnerabilità ed esposizioni di pubblico dominio relative alla sicurezza informatica. È lo standard de facto globale.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_074",
    "text": "After conducting a vulnerability scan, a systems administrator notices that one of the identified vulnerabilities is not present on the systems that were scanned. Which of the following describes this example?",
    "opts": [
      {
        "id": "A",
        "t": "False positive",
        "c": true
      },
      {
        "id": "B",
        "t": "False negative",
        "c": false
      },
      {
        "id": "C",
        "t": "True positive",
        "c": false
      },
      {
        "id": "D",
        "t": "True negative",
        "c": false
      }
    ],
    "expl": "Un Falso Positivo (False positive) si verifica quando lo scanner di sicurezza segnala la presenza di una vulnerabilità o di un rischio che in realtà non è presente o non esiste nel sistema scansionato.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_087",
    "text": "Which of the following most impacts an administrator's ability to address CVEs discovered on a server?",
    "opts": [
      {
        "id": "A",
        "t": "Rescanning requirements",
        "c": false
      },
      {
        "id": "B",
        "t": "Patch availability",
        "c": true
      },
      {
        "id": "C",
        "t": "Organizational impact",
        "c": false
      },
      {
        "id": "D",
        "t": "Risk tolerance",
        "c": false
      }
    ],
    "expl": "La disponibilità delle patch (Patch availability) è il fattore più critico che impatta la capacità di mitigazione. Se un produttore non rilascia la patch per un CVE (ad esempio perché il sistema è EOSL), l'amministratore non può rimediare direttamente tramite patching.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_101",
    "text": "Which of the following formal management efforts is designed to remediate security flaws discovered in applications and operating systems?",
    "opts": [
      {
        "id": "A",
        "t": "Account management",
        "c": false
      },
      {
        "id": "B",
        "t": "Patch management",
        "c": true
      },
      {
        "id": "C",
        "t": "Upgrade management",
        "c": false
      },
      {
        "id": "D",
        "t": "Change management",
        "c": false
      }
    ],
    "expl": "La gestione delle patch (Patch management) è lo sforzo formale strutturato volto all'acquisizione, al test e all'installazione di patch software sia a livello applicativo sia per i sistemi operativi per correggerne le falle.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_102",
    "text": "You are conducting a penetration test for a vehicle repair shop. The environment consists of a guest Wi-Fi network requiring a security code, which is printed on a piece of paper in the guest waiting area. The employee computers are connected to a separate wired network in the office. After posing as a legitimate customer, you wait in the guest lounge, connect to the Wi-Fi network, and capture network traffic using a network protocol analyzer program. After analyzing captured traffic, you realize that the Wi-Fi router appears to be using vulnerable network protocols. To which penetration testing phase does this activity apply?",
    "opts": [
      {
        "id": "A",
        "t": "Reconnaissance",
        "c": true
      },
      {
        "id": "B",
        "t": "Maintaining access",
        "c": false
      },
      {
        "id": "C",
        "t": "Gaining access",
        "c": false
      },
      {
        "id": "D",
        "t": "Scanning",
        "c": false
      }
    ],
    "expl": "La cattura e l'ispezione dei pacchetti Wi-Fi e dei protocolli deboli dall'area di attesa degli ospiti rappresenta la fase iniziale di Ricognizione (Reconnaissance) passiva e attiva per mappare i vettori d'attacco disponibili.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_157",
    "text": "A company is expanding its threat surface program and allowing individuals to security test the company’s internet-facing application. The company will compensate researchers based on the vulnerabilities discovered. Which of the following best describes the program the company is setting up?",
    "opts": [
      {
        "id": "A",
        "t": "Open-source intelligence",
        "c": false
      },
      {
        "id": "B",
        "t": "Bug bounty",
        "c": true
      },
      {
        "id": "C",
        "t": "Red team",
        "c": false
      },
      {
        "id": "D",
        "t": "Penetration testing",
        "c": false
      }
    ],
    "expl": "Un programma di Bug Bounty consente a ricercatori di sicurezza indipendenti esterni (white hat hacker) di testare legalmente le applicazioni aziendali, offrendo ricompense in denaro (bounty) in base alla criticità dei bug scoperti.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_189",
    "text": "Which of the following is the best way to consistently determine on a daily basis whether security settings on servers have been modified?",
    "opts": [
      {
        "id": "A",
        "t": "Automation",
        "c": true
      },
      {
        "id": "B",
        "t": "Compliance checklist",
        "c": false
      },
      {
        "id": "C",
        "t": "Attestation",
        "c": false
      },
      {
        "id": "D",
        "t": "Manual audit",
        "c": false
      }
    ],
    "expl": "L'automazione (Automation) mediante script di monitoraggio è l'unico modo sicuro e scalabile per confrontare quotidianamente se le configurazioni dei server si sono difformate dalle baseline stabilite.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_197",
    "text": "A security operations center determines that the malicious activity detected on a server is normal. Which of the following activities describes the act of ignoring detected activity in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Tuning",
        "c": true
      },
      {
        "id": "B",
        "t": "Aggregating",
        "c": false
      },
      {
        "id": "C",
        "t": "Quarantining",
        "c": false
      },
      {
        "id": "D",
        "t": "Archiving",
        "c": false
      }
    ],
    "expl": "Il tuning (ottimizzazione/regolazione fine) descrive il processo di calibrazione delle regole del SIEM o del SOC, istruendoli a ignorare in futuro specifiche attività precedentemente etichettate come malevole ma che in realtà costituiscono traffico produttivo e lecito.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_206",
    "text": "A security administrator needs a method to secure data in an environment that includes some form of checks to track any changes. Which of the following should the administrator set up to achieve this goal?",
    "opts": [
      {
        "id": "A",
        "t": "SPF",
        "c": false
      },
      {
        "id": "B",
        "t": "GPO",
        "c": false
      },
      {
        "id": "C",
        "t": "NAC",
        "c": false
      },
      {
        "id": "D",
        "t": "FIM",
        "c": true
      }
    ],
    "expl": "Il File Integrity Monitoring (FIM) è un controllo di sicurezza cruciale che effettua l'hashing periodico di file critici per rilevare modifiche non autorizzate, garantendo l'integrità totale dello storage.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_224",
    "text": "Which of the following is used to quantitatively measure the criticality of a vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "CVE",
        "c": false
      },
      {
        "id": "B",
        "t": "CVSS",
        "c": true
      },
      {
        "id": "C",
        "t": "CIA",
        "c": false
      },
      {
        "id": "D",
        "t": "CERT",
        "c": false
      }
    ],
    "expl": "Il CVSS (Common Vulnerability Scoring System) è lo schema standardizzato utilizzato per misurare quantitativamente la gravità intrinseca delle vulnerabilità assegnando un punteggio numerico da 0 a 10. È fondamentale per la prioritizzazione degli interventi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_227",
    "text": "After reviewing the following vulnerability scanning report: Server:192.168.14.6 Service: Telnet Port: 23 Protocol: TCP Status: Open Severity: High Vulnerability: Use of an insecure network protocol A security analyst performs the following test: nmap -p 23 192.168.14.6 --script telnet-encryption PORT STATE SERVICE REASON 23/tcp open telnet syn-ack | telnet encryption: |_ Telnet server supports encryption Which of the following would the security analyst conclude for this reported vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "It is a false positive.",
        "c": true
      },
      {
        "id": "B",
        "t": "A rescan is required.",
        "c": false
      },
      {
        "id": "C",
        "t": "It is considered noise.",
        "c": false
      },
      {
        "id": "D",
        "t": "Compensating controls exist.",
        "c": false
      }
    ],
    "expl": "Sebbene la porta di rete Telnet (23) sia aperta, il test con nmap rivela che il demone supporta canali di cifratura interna. Questo smentisce l'ipotesi iniziale basata sulla debolezza intrinseca del plaintext, rendendo la segnalazione dello scanner un falso positivo (False Positive).",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_259",
    "text": "Which of the following would help ensure a security analyst is able to accurately measure the overall risk to an organization when a new vulnerability is disclosed?",
    "opts": [
      {
        "id": "A",
        "t": "A full inventory of all hardware and software",
        "c": true
      },
      {
        "id": "B",
        "t": "Documentation of system classifications",
        "c": false
      },
      {
        "id": "C",
        "t": "A list of system owners and their departments",
        "c": false
      },
      {
        "id": "D",
        "t": "Third-party risk assessment documentation",
        "c": false
      }
    ],
    "expl": "Per valutare l'impatto e il rischio globale di una vulnerabilità appena scoperta, l'analista deve disporre di un inventario hardware e software completo e dettagliato, così da mappare l'esposizione reale dell'organizzazione.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_296",
    "text": "Which of the following most impacts an administrator's ability to address CVEs discovered on a server?",
    "opts": [
      {
        "id": "A",
        "t": "Rescanning requirements",
        "c": false
      },
      {
        "id": "B",
        "t": "Patch availability",
        "c": true
      },
      {
        "id": "C",
        "t": "Organizational impact",
        "c": false
      },
      {
        "id": "D",
        "t": "Risk tolerance",
        "c": false
      }
    ],
    "expl": "La disponibilità delle patch (Patch availability) è il fattore più critico che impatta la capacità di mitigazione. Se un produttore non rilascia la patch per un CVE (ad esempio perché il sistema è EOSL), l'amministratore non può rimediare direttamente tramite patching.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_327",
    "text": "Which of the following would best explain why a security analyst is running daily vulnerability scans on all corporate endpoints?",
    "opts": [
      {
        "id": "A",
        "t": "To track the status of patching installations",
        "c": true
      },
      {
        "id": "B",
        "t": "To find shadow IT cloud deployments",
        "c": false
      },
      {
        "id": "C",
        "t": "To continuously the monitor hardware inventory",
        "c": false
      },
      {
        "id": "D",
        "t": "To hunt for active attackers in the network",
        "c": false
      }
    ],
    "expl": "Le scansioni quotidiane degli endpoint corporativi sono ideali per tracciare lo stato di distribuzione e il successo delle installazioni di nuove patch di sicurezza, garantendo che i dispositivi ricevano gli aggiornamenti in tempo reale.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_335",
    "text": "An important patch for a critical application has just been released, and a systems administrator is identifying all of the systems requiring the patch. Which of the following must be maintained in order to ensure that all systems requiring the patch are updated?",
    "opts": [
      {
        "id": "A",
        "t": "Asset inventory",
        "c": true
      },
      {
        "id": "B",
        "t": "Network enumeration",
        "c": false
      },
      {
        "id": "C",
        "t": "Data certification",
        "c": false
      },
      {
        "id": "D",
        "t": "Procurement process",
        "c": false
      }
    ],
    "expl": "Per identificare tutti i computer, i server o i sistemi che richiedono un aggiornamento critico urgente appena distribuito, l'amministratore deve avere accesso a un inventario delle risorse (Asset Inventory) aggiornato.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_344",
    "text": "After conducting a vulnerability scan, a systems administrator notices that one of the identified vulnerabilities is not present on the systems that were scanned. Which of the following describes this example?",
    "opts": [
      {
        "id": "A",
        "t": "False positive",
        "c": true
      },
      {
        "id": "B",
        "t": "False negative",
        "c": false
      },
      {
        "id": "C",
        "t": "True positive",
        "c": false
      },
      {
        "id": "D",
        "t": "True negative",
        "c": false
      }
    ],
    "expl": "Un Falso Positivo (False positive) si verifica quando lo scanner di sicurezza segnala la presenza di una vulnerabilità o di un rischio che in realtà non è presente o non esiste nel sistema scansionato.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_348",
    "text": "Which of the following methods would most likely be used to identify legacy systems?",
    "opts": [
      {
        "id": "A",
        "t": "Bug bounty program",
        "c": false
      },
      {
        "id": "B",
        "t": "Vulnerability scan",
        "c": true
      },
      {
        "id": "C",
        "t": "Package monitoring",
        "c": false
      },
      {
        "id": "D",
        "t": "Dynamic analysis",
        "c": false
      }
    ],
    "expl": "La scansione di vulnerabilità (Vulnerability Scan) è lo strumento d'elezione per mappare l'ecosistema di rete e scovare sistemi obsoleti o legacy non censiti, ispezionando porte, protocolli e banner aziendali.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_359",
    "text": "Which of the following teams is best suited to determine whether a company has systems that can be exploited by a potential, identified vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "Purple team",
        "c": false
      },
      {
        "id": "B",
        "t": "Blue team",
        "c": false
      },
      {
        "id": "C",
        "t": "Red team",
        "c": true
      },
      {
        "id": "D",
        "t": "White team",
        "c": false
      }
    ],
    "expl": "Il Red Team (squadra offensiva) simula le tattiche degli hacker nel mondo reale ed è la squadra più indicata per testare tecnicamente ed estrarre exploit validati per saggiare se la vulnerabilità segnalata è realmente suscettibile di infiltrazione.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_390",
    "text": "An analyst is performing a vulnerability scan against the web servers exposed to the internet without a system account. Which of the following is most likely being performed?",
    "opts": [
      {
        "id": "A",
        "t": "Non-credentialed scan",
        "c": true
      },
      {
        "id": "B",
        "t": "Packet capture",
        "c": false
      },
      {
        "id": "C",
        "t": "Privilege escalation",
        "c": false
      },
      {
        "id": "D",
        "t": "System enumeration",
        "c": false
      },
      {
        "id": "E",
        "t": "Passive scan",
        "c": false
      }
    ],
    "expl": "Scansionare un perimetro web esposto a internet dall'esterno, senza credenziali di accesso o account, definisce una scansione non credenziale (Non-credentialed scan). Questa replica esattamente la prospettiva iniziale di un attaccante esterno casuale.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_399",
    "text": "An auditor discovered multiple insecure ports on some servers. Other servers were found to have legacy protocols enabled. Which of the following tools did the auditor use to discover these issues?",
    "opts": [
      {
        "id": "A",
        "t": "Nessus",
        "c": true
      },
      {
        "id": "B",
        "t": "curl",
        "c": false
      },
      {
        "id": "C",
        "t": "Wireshark",
        "c": false
      },
      {
        "id": "D",
        "t": "netcat",
        "c": false
      }
    ],
    "expl": "Nessus è uno dei più celebri e diffusi scanner di vulnerabilità industriali, utilizzato per mappare porte di rete insicure, protocolli attivi deboli e patch mancanti sui sistemi operativi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_402",
    "text": "A security administrator is performing an audit on a stand-alone UNIX server, and the following message is immediately displayed: (Error 13): /etc/shadow: Permission denied. Which of the following best describes the type of tool that is being used?",
    "opts": [
      {
        "id": "A",
        "t": "Pass-the-hash monitor",
        "c": false
      },
      {
        "id": "B",
        "t": "File integrity monitor",
        "c": false
      },
      {
        "id": "C",
        "t": "Forensic analysis",
        "c": false
      },
      {
        "id": "D",
        "t": "Password cracker",
        "c": true
      }
    ],
    "expl": "Un Password Cracker (come John the Ripper) tenta di accedere al file cifrato dei segreti (/etc/shadow) in Unix per de-crittografare le password locali. Poiché questo file è blindato per questioni di sicurezza, l'esecuzione da un utente non root restituisce immediatamente l'errore 'Permission Denied'.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_414",
    "text": "A security analyst recently read a report about a flaw in several of the organization's printer models that causes credentials to be sent over the network in cleartext, regardless of the encryption settings. Which of the following would be best to use to validate this finding?",
    "opts": [
      {
        "id": "A",
        "t": "Wireshark",
        "c": true
      },
      {
        "id": "B",
        "t": "netcat",
        "c": false
      },
      {
        "id": "C",
        "t": "Nessus",
        "c": false
      },
      {
        "id": "D",
        "t": "Nmap",
        "c": false
      }
    ],
    "expl": "Wireshark è un analizzatore di pacchetti (packet sniffer) che consente di registrare in tempo reale il traffico su schede di rete esterne. È lo strumento migliore per convalidare la presenza di trasmissioni non protette o credenziali inviate in chiaro (cleartext).",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_415",
    "text": "A development team is launching a new public-facing web product. The Chief Information Security Officer has asked that the product be protected from attackers who use malformed or invalid inputs to destabilize the system. Which of the following practices should the development team implement?",
    "opts": [
      {
        "id": "A",
        "t": "Fuzzing",
        "c": true
      },
      {
        "id": "B",
        "t": "Continuous deployment",
        "c": false
      },
      {
        "id": "C",
        "t": "Static code analysis",
        "c": false
      },
      {
        "id": "D",
        "t": "Manual peer review",
        "c": false
      }
    ],
    "expl": "Il Fuzzing è una tecnica di test software dinamico che consiste nell'inviare input casuali, caotici o malformati (fuzz) ad un'applicazione per provocarne il crash o svelarvi falle logiche di programmazione prima dell'attacco.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_417",
    "text": "Which of the following is best to use when determining the severity of a vulnerability?",
    "opts": [
      {
        "id": "A",
        "t": "CVE",
        "c": false
      },
      {
        "id": "B",
        "t": "OSINT",
        "c": false
      },
      {
        "id": "C",
        "t": "SOAR",
        "c": false
      },
      {
        "id": "D",
        "t": "CVSS",
        "c": true
      }
    ],
    "expl": "Il CVSS (Common Vulnerability Scoring System) è lo schema standardizzato utilizzato per misurare quantitativamente la gravità intrinseca delle vulnerabilità assegnando un punteggio numerico da 0 a 10. È fondamentale per la prioritizzazione degli interventi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_432",
    "text": "A security analyst is reviewing the source code of an application in order to identify misconfigurations and vulnerabilities. Which of the following kinds of analysis best describes this review?",
    "opts": [
      {
        "id": "A",
        "t": "Dynamic",
        "c": false
      },
      {
        "id": "B",
        "t": "Static",
        "c": true
      },
      {
        "id": "C",
        "t": "Gap",
        "c": false
      },
      {
        "id": "D",
        "t": "Impact",
        "c": false
      }
    ],
    "expl": "L'analisi del codice sorgente di un'applicazione senza eseguirla per identificare vulnerabilità o errate configurazioni corrisponde all'Analisi Statica (Static Application Security Testing - SAST).",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_443",
    "text": "Which of the following is a common, passive reconnaissance technique employed by penetration testers in the early phases of an engagement?",
    "opts": [
      {
        "id": "A",
        "t": "Open-source intelligence",
        "c": true
      },
      {
        "id": "B",
        "t": "Port scanning",
        "c": false
      },
      {
        "id": "C",
        "t": "Pivoting",
        "c": false
      },
      {
        "id": "D",
        "t": "Exploit validation",
        "c": false
      }
    ],
    "expl": "L'OSINT (Open-Source Intelligence) si avvale di informazioni di pubblico dominio fornite da motori di ricerca, registri DNS, archivi di social medesimi o forum tecnici per effettuare ricognizioni e valutazioni del rischio in modo non intrusivo e totalmente passivo.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_450",
    "text": "Which of the following activities are associated with vulnerability management? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Reporting",
        "c": true
      },
      {
        "id": "B",
        "t": "Prioritization",
        "c": true
      },
      {
        "id": "C",
        "t": "Exploiting",
        "c": false
      },
      {
        "id": "D",
        "t": "Correlation",
        "c": false
      },
      {
        "id": "E",
        "t": "Containment",
        "c": false
      },
      {
        "id": "F",
        "t": "Tabletop exercise",
        "c": false
      }
    ],
    "expl": "La rendicontazione (Reporting) e la prioritizzazione (Prioritization) sono attività essenziali e integranti del vulnerability management. L'hacking o l'exploitation sono tipiche del pen testing attivo; il contenimento appartiene alla risposta agli incidenti.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_451",
    "text": "An administrator wants to perform a risk assessment without using proprietary company information. Which of the following methods should the administrator use to gather information?",
    "opts": [
      {
        "id": "A",
        "t": "Network scanning",
        "c": false
      },
      {
        "id": "B",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "C",
        "t": "Open-source intelligence",
        "c": true
      },
      {
        "id": "D",
        "t": "Configuration auditing",
        "c": false
      }
    ],
    "expl": "L'OSINT (Open-Source Intelligence) si avvale di informazioni di pubblico dominio fornite da motori di ricerca, registri DNS, archivi di social medesimi o forum tecnici per effettuare ricognizioni e valutazioni del rischio in modo non intrusivo e totalmente passivo.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_458",
    "text": "Which of the following is a risk of conducting a vulnerability assessment?",
    "opts": [
      {
        "id": "A",
        "t": "A disruption of business operations",
        "c": true
      },
      {
        "id": "B",
        "t": "Unauthorized access to the system",
        "c": false
      },
      {
        "id": "C",
        "t": "Reports of false positives",
        "c": false
      },
      {
        "id": "D",
        "t": "Finding security gaps in the system",
        "c": false
      }
    ],
    "expl": "Uno dei rischi insiti nell'eseguire valutazioni o scansioni di vulnerabilità (vulnerability assessment) particolarmente intensive su apparati di produzione è l'interruzione imprevista dei servizi o l'instabilità delle macchine (Disruption of business operations).",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_519",
    "text": "Which of the following should an organization focus on the most when making decisions about vulnerability prioritization?",
    "opts": [
      {
        "id": "A",
        "t": "Exposure factor",
        "c": false
      },
      {
        "id": "B",
        "t": "CVSS",
        "c": true
      },
      {
        "id": "C",
        "t": "CVE",
        "c": false
      },
      {
        "id": "D",
        "t": "Industry impact",
        "c": false
      }
    ],
    "expl": "Il CVSS (Common Vulnerability Scoring System) è lo schema standardizzato utilizzato per misurare quantitativamente la gravità intrinseca delle vulnerabilità assegnando un punteggio numerico da 0 a 10. È fondamentale per la prioritizzazione degli interventi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_566",
    "text": "Which of the following is the primary reason why false negatives on a vulnerability scan should be a concern?",
    "opts": [
      {
        "id": "A",
        "t": "The system has vulnerabilities that are not being detected.",
        "c": true
      },
      {
        "id": "B",
        "t": "The time to remediate vulnerabilities that do not exist is excessive.",
        "c": false
      },
      {
        "id": "C",
        "t": "Vulnerabilities with a lower severity will be prioritized over critical vulnerabilities.",
        "c": false
      },
      {
        "id": "D",
        "t": "The system has vulnerabilities, and a patch has not yet been released.",
        "c": false
      }
    ],
    "expl": "I Falsi Negativi (False negatives) indicano che il sistema possiede vulnerabilità critiche reali all'interno del proprio perimetro ma lo scanner non è stato in grado di rilevarle, portando l'azienda a una pericolosa quanto illusoria sensazione di sicurezza assoluta.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_593",
    "text": "An engineer has ensured that the switches are using the latest OS, the servers have the latest patches, and the endpoints' definitions are up to date. Which of the following will these actions most effectively prevent?",
    "opts": [
      {
        "id": "A",
        "t": "Zero-day attacks",
        "c": false
      },
      {
        "id": "B",
        "t": "Insider threats",
        "c": false
      },
      {
        "id": "C",
        "t": "End-of-life support",
        "c": false
      },
      {
        "id": "D",
        "t": "Known exploits",
        "c": true
      }
    ],
    "expl": "Una volta che tutti i sistemi e router sono stati aggiornati con firmware e patch all'ultimo giorno, l'elemento primordiale che l'amministratore deve monitorare per anticipare incidenti sono gli Exploit Noti (Known exploits) associabili alle applicazioni ancora esposte.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_603",
    "text": "Which of the following describes the most effective way to address OS vulnerabilities after they are identified?",
    "opts": [
      {
        "id": "A",
        "t": "Endpoint protection",
        "c": false
      },
      {
        "id": "B",
        "t": "Removal of unnecessary software",
        "c": false
      },
      {
        "id": "C",
        "t": "Configuration enforcement",
        "c": false
      },
      {
        "id": "D",
        "t": "Patching",
        "c": true
      }
    ],
    "expl": "L'applicazione metodica delle patch di sicurezza (Patching) è il rimedio core consolidato a livello di sistema operativo per azzerare le vulnerabilità scoperte, migliorando al contempo funzionalità e stabilità complessiva dell'host.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_636",
    "text": "A systems administrator just purchased multiple network devices. Which of the following should the systems administrator perform to prevent attackers from accessing the devices by using publicly available information?",
    "opts": [
      {
        "id": "A",
        "t": "Install endpoint protection.",
        "c": false
      },
      {
        "id": "B",
        "t": "Disable ports/protocols.",
        "c": false
      },
      {
        "id": "C",
        "t": "Change default passwords.",
        "c": true
      },
      {
        "id": "D",
        "t": "Remove unnecessary software.",
        "c": false
      }
    ],
    "expl": "Modificare immediatamente le credenziali di fabbrica predefinite (Change default passwords) all'atto dell'acquisto di nuovi prodotti o apparecchi ethernet è la prima misura indispensabile ed immediata per impedire ad intrusi di accedere con manuali pubblici.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_637",
    "text": "A CVE in a key back-end component of an application has been disclosed. The systems administrator is identifying all of the systems in the environment that are susceptible to this risk. Which of the following should the systems administrator perform?",
    "opts": [
      {
        "id": "A",
        "t": "Packet capture",
        "c": false
      },
      {
        "id": "B",
        "t": "Vulnerability scan",
        "c": true
      },
      {
        "id": "C",
        "t": "Metadata analysis",
        "c": false
      },
      {
        "id": "D",
        "t": "Automated reporting",
        "c": false
      }
    ],
    "expl": "La risposta corretta è B: Vulnerability scan. Questa attività indirizza l'obiettivo d'esame 4.3 del Security+ riguardante le moderne prassi industriali, gli strumenti e le valutazioni del ciclo di Vulnerability Management.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_659",
    "text": "Which of the following can best contribute to prioritizing patch applications?",
    "opts": [
      {
        "id": "A",
        "t": "CVSS",
        "c": true
      },
      {
        "id": "B",
        "t": "SCAP",
        "c": false
      },
      {
        "id": "C",
        "t": "OSINT",
        "c": false
      },
      {
        "id": "D",
        "t": "CVE",
        "c": false
      }
    ],
    "expl": "Il CVSS (Common Vulnerability Scoring System) è lo schema standardizzato utilizzato per misurare quantitativamente la gravità intrinseca delle vulnerabilità assegnando un punteggio numerico da 0 a 10. È fondamentale per la prioritizzazione degli interventi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_677",
    "text": "Which of the following is used to improve security and overall functionality without losing critical application data?",
    "opts": [
      {
        "id": "A",
        "t": "Reformatting",
        "c": false
      },
      {
        "id": "B",
        "t": "Decommissioning",
        "c": false
      },
      {
        "id": "C",
        "t": "Patching",
        "c": true
      },
      {
        "id": "D",
        "t": "Encryption",
        "c": false
      }
    ],
    "expl": "L'applicazione metodica delle patch di sicurezza (Patching) è il rimedio core consolidato a livello di sistema operativo per azzerare le vulnerabilità scoperte, migliorando al contempo funzionalità e stabilità complessiva dell'host.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_684",
    "text": "Which of the following is a use of CVSS?",
    "opts": [
      {
        "id": "A",
        "t": "To determine the cost associated with patching systems",
        "c": false
      },
      {
        "id": "B",
        "t": "To identify unused ports and services that should be closed",
        "c": false
      },
      {
        "id": "C",
        "t": "To analyze code for defects that could be exploited",
        "c": false
      },
      {
        "id": "D",
        "t": "To prioritize the remediation of vulnerabilities",
        "c": true
      }
    ],
    "expl": "Il CVSS (Common Vulnerability Scoring System) è lo schema standardizzato utilizzato per misurare quantitativamente la gravità intrinseca delle vulnerabilità assegnando un punteggio numerico da 0 a 10. È fondamentale per la prioritizzazione degli interventi.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_701",
    "text": "Which of the following actions best addresses a vulnerability found on a company's web server?",
    "opts": [
      {
        "id": "A",
        "t": "Patching",
        "c": true
      },
      {
        "id": "B",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Decommissioning",
        "c": false
      },
      {
        "id": "D",
        "t": "Monitoring",
        "c": false
      }
    ],
    "expl": "L'applicazione metodica delle patch di sicurezza (Patching) è il rimedio core consolidato a livello di sistema operativo per azzerare le vulnerabilità scoperte, migliorando al contempo funzionalità e stabilità complessiva dell'host.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_707",
    "text": "Which of the following activities should be performed first to compile a list of vulnerabilities in an environment?",
    "opts": [
      {
        "id": "A",
        "t": "Automated scanning",
        "c": true
      },
      {
        "id": "B",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "C",
        "t": "Threat hunting",
        "c": false
      },
      {
        "id": "D",
        "t": "Log aggregation",
        "c": false
      },
      {
        "id": "E",
        "t": "Adversarial emulation",
        "c": false
      }
    ],
    "expl": "La risposta corretta è A: Automated scanning. Questa attività indirizza l'obiettivo d'esame 4.3 del Security+ riguardante le moderne prassi industriali, gli strumenti e le valutazioni del ciclo di Vulnerability Management.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_729",
    "text": "A security analyst receives an alert that there was an attempt to download known malware. Which of the following actions would allow the best chance to analyze the malware?",
    "opts": [
      {
        "id": "A",
        "t": "Review the IPS logs and determine which command-and-control IPs were blocked.",
        "c": false
      },
      {
        "id": "B",
        "t": "Analyze application logs to see how the malware attempted to maintain persistence.",
        "c": false
      },
      {
        "id": "C",
        "t": "Run vulnerability scans to check for systems and applications that are vulnerable to the malware.",
        "c": false
      },
      {
        "id": "D",
        "t": "Obtain and execute the malware in a sandbox environment and perform packet captures.",
        "c": true
      }
    ],
    "expl": "La sandbox è un ambiente chiuso e isolato in cui eseguire malware in sicurezza. Catturando simultaneamente i pacchetti sul perimetro, si possono mappare i tentativi di connessione ad asset Command & Control ad essa associabili.",
    "domain": 4,
    "objective": "4.3"
  },
  {
    "id": "SCREEN_079",
    "text": "Which of the following would be used to detect an employee who is emailing a customer list to a personal account before leaving the company?",
    "opts": [
      {
        "id": "A",
        "t": "DLP",
        "c": true
      },
      {
        "id": "B",
        "t": "FIM",
        "c": false
      },
      {
        "id": "C",
        "t": "IDS",
        "c": false
      },
      {
        "id": "D",
        "t": "EDR",
        "c": false
      }
    ],
    "expl": "Il sistema DLP (Data Loss Prevention) è specificamente progettato per tracciare e bloccare fuoriuscite non autorizzate di dati della ditta verso host esterni, account personali o email esterne prima delle dimissioni di un dipendente.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_184",
    "text": "During an investigation, an incident response team attempts to understand the source of an incident. Which of the following incident response activities describes this process?",
    "opts": [
      {
        "id": "A",
        "t": "Analysis",
        "c": true
      },
      {
        "id": "B",
        "t": "Lessons learned",
        "c": false
      },
      {
        "id": "C",
        "t": "Detection",
        "c": false
      },
      {
        "id": "D",
        "t": "Containment",
        "c": false
      }
    ],
    "expl": "Durante un'indagine post-breach, interpretare i frammenti logistici alla ricerca della causa scatenante (root cause) dell'incidente e da quale punto provenga l'incursione si colloca espressamente all'interno della fase di Analisi (Analysis).",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_185",
    "text": "During an investigation, an incident response team attempts to understand the source of an incident. Which of the following incident response activities describes this process?",
    "opts": [
      {
        "id": "A",
        "t": "Analysis",
        "c": true
      },
      {
        "id": "B",
        "t": "Lessons learned",
        "c": false
      },
      {
        "id": "C",
        "t": "Detection",
        "c": false
      },
      {
        "id": "D",
        "t": "Containment",
        "c": false
      }
    ],
    "expl": "Durante un'indagine post-breach, interpretare i frammenti logistici alla ricerca della causa scatenante (root cause) dell'incidente e da quale punto provenga l'incursione si colloca espressamente all'interno della fase di Analisi (Analysis).",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_267",
    "text": "Which of the following describes a security alerting and monitoring tool that collects system, application, and network logs from multiple sources in a centralized system?",
    "opts": [
      {
        "id": "A",
        "t": "SIEM",
        "c": true
      },
      {
        "id": "B",
        "t": "DLP",
        "c": false
      },
      {
        "id": "C",
        "t": "IDS",
        "c": false
      },
      {
        "id": "D",
        "t": "SNMP",
        "c": false
      }
    ],
    "expl": "Il SIEM (Security Information and Event Management) centralizza l'aggregazione di log eterogenei (applicativi, di sistema, e di rete) provenienti da piú apparati attivi del network o ambienti cloud, abilitando allarmi automatici basati su metriche consolidate.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_294",
    "text": "A bank set up a new server that contains customers' PII. Which of the following should the bank use to make sure the sensitive data is not modified?",
    "opts": [
      {
        "id": "A",
        "t": "Full disk encryption",
        "c": false
      },
      {
        "id": "B",
        "t": "Network access control",
        "c": false
      },
      {
        "id": "C",
        "t": "File integrity monitoring",
        "c": true
      },
      {
        "id": "D",
        "t": "User behavior analytics",
        "c": false
      }
    ],
    "expl": "Il File Integrity Monitoring (FIM) è un controllo specifico deputato a calcolare sequenzialmente l'hash crittografico (es: SHA-256) dei file e rilevare istantaneamente alterazioni non permesse o modifiche accidentali di dati PII sensibili dei conti della banca.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_300",
    "text": "An administrator has identified and fingerprinted specific files that will generate an alert if an attempt is made to email these files outside of the organization. Which of the following best describes the tool the administrator is using?",
    "opts": [
      {
        "id": "A",
        "t": "DLP",
        "c": true
      },
      {
        "id": "B",
        "t": "SNMP traps",
        "c": false
      },
      {
        "id": "C",
        "t": "SCAP",
        "c": false
      },
      {
        "id": "D",
        "t": "IPS",
        "c": false
      }
    ],
    "expl": "L'azione di 'fingerprint' (creare un'impronta digitale o hash unico) di file top-secret da parte dell'amministratore per impedirne ed allertare in caso di trasmissione web all'esterno rispecchia il funzionamento profondo del DLP.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_431",
    "text": "A systems administrator deployed a monitoring solution that does not require installation on the endpoints that the solution is monitoring. Which of the following is described in this scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Agentless solution",
        "c": true
      },
      {
        "id": "B",
        "t": "Client-based solution",
        "c": false
      },
      {
        "id": "C",
        "t": "Open port",
        "c": false
      },
      {
        "id": "D",
        "t": "File-based solution",
        "c": false
      }
    ],
    "expl": "Le soluzioni di monitoraggio senza agente (Agentless solution) non richiedono il caricamento o l'installazione di moduli software o demoni locali dedicati sugli endpoint target, diminuendo sensibilmente la manutenzione ma alleggerendo l'host.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_479",
    "text": "Executives at a company are concerned about employees accessing systems and information about sensitive company projects unrelated to the employees’ normal job duties. Which of the following enterprise security capabilities will the security team most likely deploy to detect that activity?",
    "opts": [
      {
        "id": "A",
        "t": "UBA",
        "c": true
      },
      {
        "id": "B",
        "t": "EDR",
        "c": false
      },
      {
        "id": "C",
        "t": "NAC",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP",
        "c": false
      }
    ],
    "expl": "L'UBA (User Behavior Analytics) o UEBA (User and Entity Behavior Analytics) si focalizza sul tracciamento delle anomalie comportamentali di un determinato account che esegue accessi o query insolite su file o progetti non attinenti al proprio mansionario quotidiano.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_486",
    "text": "Which of the following strategies should an organization use to efficiently manage and analyze multiple types of logs?",
    "opts": [
      {
        "id": "A",
        "t": "Deploy a SIEM solution",
        "c": true
      },
      {
        "id": "B",
        "t": "Create custom scripts to aggregate and analyze logs.",
        "c": false
      },
      {
        "id": "C",
        "t": "Implement EDR technology.",
        "c": false
      },
      {
        "id": "D",
        "t": "Install a unified threat management appliance.",
        "c": false
      }
    ],
    "expl": "Per gestire simultaneamente, in modo strutturato e ad alta velocità milioni di log formati da stringhe di testo eterogenee su canali multipli, la strategia d'elezione rimane la distribuzione di un modulo SIEM centrale.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_492",
    "text": "A systems administrator receives an alert that a company’s internal file server is very slow and is only working intermittently. The systems administrator reviews the server management software and finds the following information about the server: ServerName | #Connections | CPU% | MEM% | Read/s | Writes/s; FileSev01 | 12 | 99.6% | 97% | 50KB/s | 100KB/s. Which of the following indicators most likely triggered this alert?",
    "opts": [
      {
        "id": "A",
        "t": "Concurrent session usage",
        "c": false
      },
      {
        "id": "B",
        "t": "Network saturation",
        "c": false
      },
      {
        "id": "C",
        "t": "Account lockout",
        "c": false
      },
      {
        "id": "D",
        "t": "Resource consumption",
        "c": true
      }
    ],
    "expl": "La visualizzazione di livelli percentuali costanti prossimi al 99% di CPU e memoria (RAM) per un internal file server congestionato e molto lento è l'indicatore principe di un eccessivo Consumo di Risorse (Resource consumption).",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_498",
    "text": "Which of the following should be used to aggregate log data in order to create alerts and detect anomalous activity?",
    "opts": [
      {
        "id": "A",
        "t": "SIEM",
        "c": true
      },
      {
        "id": "B",
        "t": "WAF",
        "c": false
      },
      {
        "id": "C",
        "t": "Network taps",
        "c": false
      },
      {
        "id": "D",
        "t": "IDS",
        "c": false
      }
    ],
    "expl": "Il SIEM (Security Information and Event Management) centralizza l'aggregazione di log eterogenei (applicativi, di sistema, e di rete) provenienti da piú apparati attivi del network o ambienti cloud, abilitando allarmi automatici basati su metriche consolidate.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_507",
    "text": "Which of the following definitions best describes the concept of log correlation?",
    "opts": [
      {
        "id": "A",
        "t": "Combining relevant logs from multiple sources into one location",
        "c": false
      },
      {
        "id": "B",
        "t": "Searching and processing data to identify patterns of malicious activity",
        "c": true
      },
      {
        "id": "C",
        "t": "Making a record of the events that occur in the system",
        "c": false
      },
      {
        "id": "D",
        "t": "Analyzing the log files of the system components",
        "c": false
      }
    ],
    "expl": "La correlazione dei log (Log correlation) consiste nell'esaminare e processare sistematicamente dati e registri di provenienza multipla per identificare pattern complessi di condotta o attività distruttive/malevole che altrimenti sembrerebbero normali eventi isolati.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_518",
    "text": "Which of the following enables the ability to receive a consolidated report from different devices on the network?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "DLP",
        "c": false
      },
      {
        "id": "C",
        "t": "SIEM",
        "c": true
      },
      {
        "id": "D",
        "t": "Firewall",
        "c": false
      }
    ],
    "expl": "Il SIEM (Security Information and Event Management) centralizza l'aggregazione di log eterogenei (applicativi, di sistema, e di rete) provenienti da piú apparati attivi del network o ambienti cloud, abilitando allarmi automatici basati su metriche consolidate.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_520",
    "text": "An organization needs to monitor its users’ activities in order to prevent insider threats. Which of the following solutions would help the organization achieve this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Behavioral analytics",
        "c": true
      },
      {
        "id": "B",
        "t": "Access control lists",
        "c": false
      },
      {
        "id": "C",
        "t": "Identity and access management",
        "c": false
      },
      {
        "id": "D",
        "t": "Network intrusion detection system",
        "c": false
      }
    ],
    "expl": "L'analisi comportamentale (Behavioral analytics) si focalizza sul rilevamento di pattern insoliti d'accesso ad opera degli impiegati, costituendo la prima linea di difesa per mappare e neutralizzare le minacce interne (Insider Threats).",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_530",
    "text": "Which of the following tools is best for logging and monitoring in a cloud environment?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "FIM",
        "c": false
      },
      {
        "id": "C",
        "t": "NAC",
        "c": false
      },
      {
        "id": "D",
        "t": "SIEM",
        "c": true
      }
    ],
    "expl": "Il SIEM (Security Information and Event Management) centralizza l'aggregazione di log eterogenei (applicativi, di sistema, e di rete) provenienti da piú apparati attivi del network o ambienti cloud, abilitando allarmi automatici basati su metriche consolidate.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_536",
    "text": "A security analyst wants to better understand the behavior of users and devices in order to gain visibility into potential malicious activities. The analyst needs a control to detect when actions deviate from a common baseline. Which of the following should the analyst use?",
    "opts": [
      {
        "id": "A",
        "t": "Intrusion prevention system",
        "c": false
      },
      {
        "id": "B",
        "t": "Sandbox",
        "c": false
      },
      {
        "id": "C",
        "t": "Endpoint detection and response",
        "c": true
      },
      {
        "id": "D",
        "t": "Antivirus",
        "c": false
      }
    ],
    "expl": "L'EDR (Endpoint Detection and Response) offre visibilità e monitoraggio continuo sulle condotte di utenti e macchine sul singolo terminale, applicando risposte mirate per mitigare scostamenti anomalistici rispetto alle baseline convalidate.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_575",
    "text": "A security team at a large, global company needs to reduce the cost of storing data used for performing investigations. Which of the following types of data should have its retention length reduced?",
    "opts": [
      {
        "id": "A",
        "t": "Packet capture",
        "c": true
      },
      {
        "id": "B",
        "t": "Endpoint logs",
        "c": false
      },
      {
        "id": "C",
        "t": "OS security logs",
        "c": false
      },
      {
        "id": "D",
        "t": "Vulnerability scan",
        "c": false
      }
    ],
    "expl": "I Packet Capture (PCAP) registrano l'intero transito e il payload delle comunicazioni. Riducono drasticamente la capacità di archiviazione complessiva per le indagini forensi; tagliarne la retention policy allenta massicciamente i costi di storage rispetto a semplici log testuali.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_595",
    "text": "A company captures log-in details and reviews them each week to identify conditions such as excessive log-in attempts and frequent lockouts. Which of the following should a security analyst recommend to improve security compliance monitoring?",
    "opts": [
      {
        "id": "A",
        "t": "Including the date and person who reviewed the information in a report",
        "c": false
      },
      {
        "id": "B",
        "t": "Adding automated alerting when anomalies occur",
        "c": true
      },
      {
        "id": "C",
        "t": "Requiring a statement each week that no exceptions were noted",
        "c": false
      },
      {
        "id": "D",
        "t": "Masking the username in a report to protect privacy",
        "c": false
      }
    ],
    "expl": "Il monitoraggio manuale periodico o settimanale dei fallimenti d'accesso o blocco account è prono a ritardi severi. La migliore soluzione strategica risiede nell'introdurre l'allarmistica automatizzata al rilevamento di anomalie (Automated alerting when anomalies occur).",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_643",
    "text": "A security analyst notices unusual behavior on the network. The IDS on the network was not able to detect the activities. Which of the following should the security analyst use to help the IDS detect such attacks in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Signatures",
        "c": true
      },
      {
        "id": "B",
        "t": "Trends",
        "c": false
      },
      {
        "id": "C",
        "t": "Honeypot",
        "c": false
      },
      {
        "id": "D",
        "t": "Reputation",
        "c": false
      }
    ],
    "expl": "Se l'IDS non intercetta determinati attacchi anomali sul network, l'analista deve istruire il motore introducendo nuove specifiche Firme (Signatures) capaci di identificare univocamente tali minacce nei flussi futuri.",
    "domain": 4,
    "objective": "4.4"
  },
  {
    "id": "SCREEN_018",
    "text": "A security engineer is installing an IPS to block signature-based attacks in the environment. Which of the following modes will best accomplish this task?",
    "opts": [
      {
        "id": "A",
        "t": "Monitor",
        "c": false
      },
      {
        "id": "B",
        "t": "Sensor",
        "c": false
      },
      {
        "id": "C",
        "t": "Active",
        "c": true
      },
      {
        "id": "D",
        "t": "Audit",
        "c": false
      }
    ],
    "expl": "L'IPS (Intrusion Prevention System) installato per ostacolare attacchi basati su firme opera in modalità attiva (Active) intercettando 'in-line' il traffico di rete per intervenire tempestivamente e bloccarlo prima che arrivi a destinazione.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_032",
    "text": "A security team has been alerted to a flood of incoming emails that have various subject lines and are addressed to multiple email inboxes. Each email contains a URL shortener link that is redirecting to a dead domain. Which of the following is the best step for the security team to take?",
    "opts": [
      {
        "id": "A",
        "t": "Create a blocklist for all subject lines.",
        "c": false
      },
      {
        "id": "B",
        "t": "Send the dead domain to a DNS sinkhole.",
        "c": false
      },
      {
        "id": "C",
        "t": "Quarantine all emails received and notify all employees.",
        "c": false
      },
      {
        "id": "D",
        "t": "Block the URL shortener domain in the web proxy.",
        "c": true
      }
    ],
    "expl": "Dinanzi a un bombardamento di email con collegamenti (URL shortener) che reindirizzano a un dominio morto, la misura protettiva perimetrale più efficiente è inibire il dominio del servizio accorciatore (URL shortener domain) all'interno del Web Proxy aziendale.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_060",
    "text": "What is the largest advantage host-based firewalls have over network-based firewalls?",
    "opts": [
      {
        "id": "A",
        "t": "Host-based firewalls have knowledge of the functions of the endpoint and can tune the traffic management to match.",
        "c": true
      },
      {
        "id": "B",
        "t": "Host-based firewalls do not need rulesets like network-based firewalls require, due to being directly on the host and able to run heuristic traffic analysis.",
        "c": false
      },
      {
        "id": "C",
        "t": "Host-based firewalls can control outbound traffic before it reaches the network and sets off intrusion detection alarms.",
        "c": false
      },
      {
        "id": "D",
        "t": "Host-based firewalls can coordinate with other endpoints’ host-based firewalls to perform a unified attack response.",
        "c": false
      }
    ],
    "expl": "I firewall residenti sull'host (host-based) vantano la massima visibilità sul contesto locale e i servizi applicativi in esecuzioni sull'endpoint, potendo modellare con minuziosa aderenza la gestione dei canali e del traffico.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_080",
    "text": "A company tested and validated the effectiveness of network security appliances within the corporate network. The IDS detected a high rate of SQL injection attacks against the company's servers, and the company's perimeter firewall is at capacity. Which of the following would be the best action to maintain security and reduce the traffic to the perimeter firewall?",
    "opts": [
      {
        "id": "A",
        "t": "Set the appliance to IPS mode and place it in front of the company firewall.",
        "c": true
      },
      {
        "id": "B",
        "t": "Convert the firewall to a WAF and use IPSec tunnels to increase throughput.",
        "c": false
      },
      {
        "id": "C",
        "t": "Set the firewall to fail open if it is overloaded with traffic and send alerts to the SIEM.",
        "c": false
      },
      {
        "id": "D",
        "t": "Configure the firewall to perform deep packet inspection and monitor TLS traffic.",
        "c": false
      }
    ],
    "expl": "Per arrestare proattivamente tentativi aggressivi e ricorsivi di SQL Injection captati dall'IDS, il dispositivo va commutato in modalità attiva (IPS mode) e collocato sul confine esterno, precisamente dinanzi al firewall d'azienda (in front of the company firewall).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_091",
    "text": "What type of NIDS commonly uses artificial intelligence and data mining to identify malicious network traffic?",
    "opts": [
      {
        "id": "A",
        "t": "Rule-based NIDS",
        "c": false
      },
      {
        "id": "B",
        "t": "Filter-based NIDS",
        "c": false
      },
      {
        "id": "C",
        "t": "Signature-based NIDS",
        "c": false
      },
      {
        "id": "D",
        "t": "Anomaly-based NIDS",
        "c": true
      }
    ],
    "expl": "I sistemi di rilevamento delle intrusioni di rete regolati su anomalie (Anomaly-based NIDS) adoperano stabilmente moduli di intelligenza artificiale statistica e data mining per determinare la baseline e intercettare scostamenti non convalidati.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_103",
    "text": "You get a new batch of servers into your network operations center. After you install the initial operating system (OS), what is your first step in applying system hardening to the servers?",
    "opts": [
      {
        "id": "A",
        "t": "Removing default users",
        "c": false
      },
      {
        "id": "B",
        "t": "Installing a patch management system",
        "c": false
      },
      {
        "id": "C",
        "t": "Encrypting the system's data",
        "c": false
      },
      {
        "id": "D",
        "t": "Closing unused ports and disabling unused services",
        "c": true
      }
    ],
    "expl": "I rudimenti basilari di hardening (irrobustimento dei sistemi) subito successivi al setup originario dell'OS consistono nel serrare le porte di rete non impiegate e spegnere/disattivare i demoni o servizi inutilizzati.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_107",
    "text": "What capability is used to check the origin of an email sender?",
    "opts": [
      {
        "id": "A",
        "t": "DNS",
        "c": true
      },
      {
        "id": "B",
        "t": "NAC",
        "c": false
      },
      {
        "id": "C",
        "t": "NIDS/NIPS",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP",
        "c": false
      }
    ],
    "expl": "Per scrutinare l'identità del mittente di un messaggio e reprimere l'email spoofing, si interroga il DNS dell'originatore estraendo record strutturati come SPF, DKIM e DMARC.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_113",
    "text": "An enterprise is trying to limit outbound DNS traffic originating from its internal network. Outbound DNS requests will only be allowed from one device with the IP address 10.50.10.25. Which of the following firewall ACLs will accomplish this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 10.50.10.25/32 0.0.0.0/0 port 53",
        "c": false
      },
      {
        "id": "B",
        "t": "Access list outbound permit 0.0.0.0/0 10.50.10.25/32 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53",
        "c": false
      },
      {
        "id": "C",
        "t": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 10.50.10.25/32 port 53",
        "c": false
      },
      {
        "id": "D",
        "t": "Access list outbound permit 10.50.10.25/32 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53",
        "c": true
      }
    ],
    "expl": "Per relegare la navigazione DNS uscente a una singola macchina autorizzata (10.50.10.25) disabilitando la porta 53 sul resto della LAN, l'access-list esatta deve prima consentire l'host (/32) e poi negare complessivamente la porta: 'Access list outbound permit 10.50.10.25/32 ... port 53; Access list outbound deny 0.0.0.0/0 ... port 53'.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_130",
    "text": "An enterprise is trying to limit outbound DNS traffic originating from its internal network. Outbound DNS requests will only be allowed from one device with the IP address 10.50.10.25. Which of the following firewall ACLs will accomplish this goal?",
    "opts": [
      {
        "id": "A",
        "t": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 10.50.10.25/32 0.0.0.0/0 port 53",
        "c": false
      },
      {
        "id": "B",
        "t": "Access list outbound permit 0.0.0.0/0 10.50.10.25/32 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53",
        "c": false
      },
      {
        "id": "C",
        "t": "Access list outbound permit 0.0.0.0/0 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 10.50.10.25/32 port 53",
        "c": false
      },
      {
        "id": "D",
        "t": "Access list outbound permit 10.50.10.25/32 0.0.0.0/0 port 53; Access list outbound deny 0.0.0.0/0 0.0.0.0/0 port 53",
        "c": true
      }
    ],
    "expl": "La configurazione ACL per incanalare le query DNS outbound (porta 53) solo dall'IP 10.50.10.25/32 e precludere gli altri prevede un permit puntuale seguito da una deny globale per l'intera sottorete (Any-to-Any) sulla medesima porta.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_146",
    "text": "A company’s web filter is configured to scan the URL for strings and deny access when matches are found. Which of the following search strings should an analyst employ to prohibit access to non-encrypted websites?",
    "opts": [
      {
        "id": "A",
        "t": "encryption=off",
        "c": false
      },
      {
        "id": "B",
        "t": "http://",
        "c": true
      },
      {
        "id": "C",
        "t": "www.*.com",
        "c": false
      },
      {
        "id": "D",
        "t": ":443",
        "c": false
      }
    ],
    "expl": "La stringa di ricerca preposta a intercettare e scartare le comunicazioni in chiaro non protette sul web all'interno dei filtri url è 'http://', che esclude i server sprovvisti di cifratura SSL/TLS.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_147",
    "text": "During a security incident, the security operations team identified sustained network traffic from a malicious IP address: 10.1.4.9. A security analyst is creating an inbound firewall rule to block the IP address from accessing the organization’s network. Which of the following fulfills this request?",
    "opts": [
      {
        "id": "A",
        "t": "access-list inbound deny ip source 0.0.0.0/0 destination 10.1.4.9/32",
        "c": false
      },
      {
        "id": "B",
        "t": "access-list inbound deny ip source 10.1.4.9/32 destination 0.0.0.0/0",
        "c": true
      },
      {
        "id": "C",
        "t": "access-list inbound permit ip source 10.1.4.9/32 destination 0.0.0.0/0",
        "c": false
      },
      {
        "id": "D",
        "t": "access-list inbound permit ip source 0.0.0.0/0 destination 10.1.4.9/32",
        "c": false
      }
    ],
    "expl": "Per blindare la rete scacciando pacchetti in ingresso provenienti dall'host malevolo 10.1.4.9, la regola di ingresso (inbound) sul firewall deve recitare: 'access-list inbound deny ip source 10.1.4.9/32 destination 0.0.0.0/0'.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_183",
    "text": "Which of the following can be used to identify potential attacker activities without affecting production servers?",
    "opts": [
      {
        "id": "A",
        "t": "Honeypot",
        "c": true
      },
      {
        "id": "B",
        "t": "Video surveillance",
        "c": false
      },
      {
        "id": "C",
        "t": "Zero Trust",
        "c": false
      },
      {
        "id": "D",
        "t": "Geofencing",
        "c": false
      }
    ],
    "expl": "Un honeypot costituisce una risorsa esca (decoy eccellente) isolata appositamente per captare, analizzare e decifrare le tattiche degli invasori senza interferire né minacciare i nodi operativi di produzione.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_210",
    "text": "An enterprise has been experiencing attacks focused on exploiting vulnerabilities in older browser versions with well-known exploits. Which of the following security solutions should be configured to best provide the ability to monitor and block these known signature-based attacks?",
    "opts": [
      {
        "id": "A",
        "t": "ACL",
        "c": false
      },
      {
        "id": "B",
        "t": "DLP",
        "c": false
      },
      {
        "id": "C",
        "t": "IDS",
        "c": false
      },
      {
        "id": "D",
        "t": "IPS",
        "c": true
      }
    ],
    "expl": "Per contenere stormi di infezioni indirizzate contro evidenti e datate falle dei browser degli impiegati, l'IDS/IPS montato in-line funge da scudo ottimale intercettando i vettori d'attacco transitanti sulla rete.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_295",
    "text": "Users at a company are reporting they are unable to access the URL for a new retail website because it is flagged as gambling and is being blocked. Which of the following changes would allow users to access the site?",
    "opts": [
      {
        "id": "A",
        "t": "Creating a firewall rule to allow HTTPS traffic",
        "c": false
      },
      {
        "id": "B",
        "t": "Configuring the IPS to allow shopping",
        "c": false
      },
      {
        "id": "C",
        "t": "Tuning the DLP rule that detects credit card data",
        "c": false
      },
      {
        "id": "D",
        "t": "Updating the categorization in the content filter",
        "c": true
      }
    ],
    "expl": "Quando un sito commerciale pulito subisce un blocco improprio a causa di un'errata etichettatura (es: gioco d'azzardo), l'anomalia va risolta aggiornando la classificazione del portale nel motore di content filtering.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_298",
    "text": "The CIRT is reviewing an incident that involved a human resources recruiter exfiltrating sensitive company data. The CIRT found that the recruiter was able to use HTTP over port 53 to upload documents to a web server. Which of the following security infrastructure devices could have identified and blocked this activity?",
    "opts": [
      {
        "id": "A",
        "t": "WAF utilizing SSL decryption",
        "c": false
      },
      {
        "id": "B",
        "t": "NGFW utilizing application inspection",
        "c": true
      },
      {
        "id": "C",
        "t": "UTM utilizing a threat feed",
        "c": false
      },
      {
        "id": "D",
        "t": "SD-WAN utilizing IPSec",
        "c": false
      }
    ],
    "expl": "Un dipendente infedele che trasmette pacchetti HTTP cifrati per occultarli sulla porta 53 (dedicata al DNS) per far fuggire dati segreti viene neutralizzato da un firewall di nuova generazione (NGFW) equipaggiato con ispezione di livello applicativo (application inspection).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_306",
    "text": "A security engineer is installing an IPS to block signature-based attacks in the environment. Which of the following modes will best accomplish this task?",
    "opts": [
      {
        "id": "A",
        "t": "Monitor",
        "c": false
      },
      {
        "id": "B",
        "t": "Sensor",
        "c": false
      },
      {
        "id": "C",
        "t": "Audit",
        "c": false
      },
      {
        "id": "D",
        "t": "Active",
        "c": true
      }
    ],
    "expl": "L'IPS (Intrusion Prevention System) si distingue per l'azione bloccante attiva contro pattern dannosi decifrati tramite firme, postulando l'attivazione della modalità 'Active'.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_307",
    "text": "An IT manager is increasing the security capabilities of an organization after a data classification initiative determined that sensitive data could be exfiltrated from the environment. Which of the following solutions would mitigate the risk?",
    "opts": [
      {
        "id": "A",
        "t": "XDR",
        "c": false
      },
      {
        "id": "B",
        "t": "SPF",
        "c": false
      },
      {
        "id": "C",
        "t": "DLP",
        "c": true
      },
      {
        "id": "D",
        "t": "DMARC",
        "c": false
      }
    ],
    "expl": "Nel caso si ravvisino lacune nell'archiviazione e nella trasmissione di dati riservati mappati dalla classificazione, lo scudo tecnologico d'elezione per impedirne la fuga remota è il DLP (Data Loss Prevention).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_361",
    "text": "Which of the following methods can be used to detect attackers who have successfully infiltrated a network? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Tokenization",
        "c": false
      },
      {
        "id": "B",
        "t": "CI/CD",
        "c": false
      },
      {
        "id": "C",
        "t": "Honeypots",
        "c": true
      },
      {
        "id": "D",
        "t": "Threat modeling",
        "c": false
      },
      {
        "id": "E",
        "t": "DNS sinkhole",
        "c": true
      },
      {
        "id": "F",
        "t": "Data obfuscation",
        "c": false
      }
    ],
    "expl": "Per pizzicare gli hacker allorché abbiano già perforato le difese esterne penetrando la subnet aziendale, l'impiego sinergico di honeypot e host civetta costituisce la tattica di tracciamento e rilevamento più sicura ed efficace.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_374",
    "text": "Which of the following best describes a use case for a DNS sinkhole?",
    "opts": [
      {
        "id": "A",
        "t": "Attackers can see a DNS sinkhole as a highly valuable resource to identify a company's domain structure.",
        "c": false
      },
      {
        "id": "B",
        "t": "A DNS sinkhole can be used to draw employees away from known-good websites to malicious ones owned by the attacker.",
        "c": false
      },
      {
        "id": "C",
        "t": "A DNS sinkhole can be used to capture traffic to known-malicious domains used by attackers.",
        "c": true
      },
      {
        "id": "D",
        "t": "A DNS sinkhole can be set up to attract potential attackers away from a company's network resources.",
        "c": false
      }
    ],
    "expl": "Un DNS Sinkhole cattura e devia le richieste dirette a host malevoli noti inoltrando indirizzi IP fantoccio, neutralizzando tentativi di connessione ad asset C2 e identificando simultaneamente le macchine infettate all'interno della Intranet.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_385",
    "text": "A security team has been alerted to a flood of incoming emails that have various subject lines and are addressed to multiple email inboxes. Each email contains a URL shortener link that is redirecting to a dead domain. Which of the following is the best step for the security team to take?",
    "opts": [
      {
        "id": "A",
        "t": "Create a blocklist for all subject lines.",
        "c": false
      },
      {
        "id": "B",
        "t": "Send the dead domain to a DNS sinkhole.",
        "c": false
      },
      {
        "id": "C",
        "t": "Quarantine all emails received and notify all employees.",
        "c": false
      },
      {
        "id": "D",
        "t": "Block the URL shortener domain in the web proxy.",
        "c": true
      }
    ],
    "expl": "Per contenere un'ondata di phishing che distribuisce link abbreviati ad alto rischio, l'ingegnere blocca preventivamente i domini degli accorciatori (URL shorteners) nel proxy web, spezzando la catena dell'attacco prima dell'accesso degli utenti.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_406",
    "text": "A company wants to implement MFA. Which of the following enables the additional factor while using a smart card?",
    "opts": [
      {
        "id": "A",
        "t": "PIN",
        "c": true
      },
      {
        "id": "B",
        "t": "Hardware token",
        "c": false
      },
      {
        "id": "C",
        "t": "User ID",
        "c": false
      },
      {
        "id": "D",
        "t": "SMS",
        "c": false
      }
    ],
    "expl": "Un PIN (qualcosa che si conosce) integrato a una smart card fisica (qualcosa che si possiede) realizza una solida autenticazione multifattoriale (MFA), blindando gli accessi ai terminali fisici.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_407",
    "text": "A company hired an external consultant to assist with required system upgrades to a critical business application. A systems administrator needs to secure the consultant's access without sharing passwords to critical systems. Which of the following solutions should most likely be utilized?",
    "opts": [
      {
        "id": "A",
        "t": "TACACS+",
        "c": false
      },
      {
        "id": "B",
        "t": "SAML",
        "c": false
      },
      {
        "id": "C",
        "t": "An SSO platform",
        "c": false
      },
      {
        "id": "D",
        "t": "Role-based access control",
        "c": false
      },
      {
        "id": "E",
        "t": "PAM software",
        "c": true
      }
    ],
    "expl": "L'accesso eccezionale e temporaneo di consulenti esterni muniti di amplissime autorizzazioni operative su infrastrutture delicate richiede la supervisione e il controllo minuzioso garantito da software PAM (Privileged Access Management).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_422",
    "text": "A security team is addressing a risk associated with the attack surface of the organization's web application over port 443. Currently, no advanced network security capabilities are in place. Which of the following would be best to set up? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "NIDS",
        "c": true
      },
      {
        "id": "B",
        "t": "Honeypot",
        "c": false
      },
      {
        "id": "C",
        "t": "Certificate revocation list",
        "c": false
      },
      {
        "id": "D",
        "t": "HIPS",
        "c": false
      },
      {
        "id": "E",
        "t": "WAF",
        "c": true
      },
      {
        "id": "F",
        "t": "SIEM",
        "c": false
      }
    ],
    "expl": "A fronte di vulnerabilità esposte sulla porta cifrata 443 (HTTPS) a livello di flusso rete globale, in mancanza di sofisticazioni host-based, l'introduzione di un NIDS (Network Intrusion Detection System) assiste nel mappare anomalie nei transiti.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_436",
    "text": "An organization recently started hosting a new service that customers access through a web portal. A security engineer needs to add to the existing security devices a new solution to protect this new service. Which of the following is the engineer most likely to deploy?",
    "opts": [
      {
        "id": "A",
        "t": "Layer 4 firewall",
        "c": false
      },
      {
        "id": "B",
        "t": "NGFW",
        "c": false
      },
      {
        "id": "C",
        "t": "WAF",
        "c": true
      },
      {
        "id": "D",
        "t": "UTM",
        "c": false
      }
    ],
    "expl": "Un portale web aperto ai consumatori va irrobustito contro colpi applicativi distruttivi (come XSS o SQL Injection) inserendo in prossimità logistica un WAF (Web Application Firewall) dedicato.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_446",
    "text": "The security team has been asked to only enable host A (10.2.2.7) and host B (10.3.9.9) to the new isolated network segment (10.9.8.14) that provides access to legacy devices. Access from all other hosts should be blocked. Which of the following entries would need to be added on the firewall?",
    "opts": [
      {
        "id": "A",
        "t": "Permit 10.2.2.0/24 to 10.9.8.14/27; Permit 10.3.9.0/24 to 10.9.8.14/27; Deny 0.0.0.0/0 to 10.9.8.14/27",
        "c": false
      },
      {
        "id": "B",
        "t": "Deny 0.0.0.0/0 to 10.9.8.14/27; Permit 10.2.2.0/24 to 10.9.8.14/27; Permit 10.3.9.0/24 to 10.9.8.14/27",
        "c": false
      },
      {
        "id": "C",
        "t": "Permit 10.2.2.7/32 to 10.9.8.14/27; Permit 10.3.9.9/32 to 10.9.8.14/27; Deny 0.0.0.0/0 to 10.9.8.14/27",
        "c": true
      },
      {
        "id": "D",
        "t": "Permit 10.2.2.7/32 to 10.9.8.14/27; Permit 10.3.9.0/24 to 10.9.8.14/27; Deny 10.9.8.14/27 to 0.0.0.0/0",
        "c": false
      }
    ],
    "expl": "La risposta corretta è incentrata sulle tecnologie e le procedure di contenimento degli incidenti previste dall'obiettivo 4.5 del programma d'esame CompTIA Security+.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_448",
    "text": "A systems administrator needs to ensure the secure communication of sensitive data within the organization’s private cloud. Which of the following is the best choice for the administrator to implement?",
    "opts": [
      {
        "id": "A",
        "t": "IPSec",
        "c": true
      },
      {
        "id": "B",
        "t": "SHA-1",
        "c": false
      },
      {
        "id": "C",
        "t": "RSA",
        "c": false
      },
      {
        "id": "D",
        "t": "TGT",
        "c": false
      }
    ],
    "expl": "Nel dominio dei cloud privati aziendali, per rendere inviolabili, confidenziali e cifrate le conversazioni e l'interscambio di informazioni critiche tra server si adotta suite crittografica IPSec.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_459",
    "text": "Which of the following techniques would attract the attention of a malicious attacker in an insider threat scenario?",
    "opts": [
      {
        "id": "A",
        "t": "Creating a false text file in /docs/salaries",
        "c": true
      },
      {
        "id": "B",
        "t": "Setting weak passwords in /etc/shadow",
        "c": false
      },
      {
        "id": "C",
        "t": "Scheduling vulnerable jobs in /etc/crontab",
        "c": false
      },
      {
        "id": "D",
        "t": "Adding a fake account to /etc/passwd",
        "c": false
      }
    ],
    "expl": "Nel tracciamento di dipendenti sleali (insider threats), creare intenzionalmente un finto e accattivante file di testo dal nome emblematico (es: in '/docs/salaries') attrae l'attenzione degli intrusi e fa scattare allarmi automatici silenti.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_464",
    "text": "Which of the following should an organization use to protect its environment from external attacks conducted by an unauthorized hacker?",
    "opts": [
      {
        "id": "A",
        "t": "ACL",
        "c": false
      },
      {
        "id": "B",
        "t": "IDS",
        "c": false
      },
      {
        "id": "C",
        "t": "HIDS",
        "c": false
      },
      {
        "id": "D",
        "t": "NIPS",
        "c": true
      }
    ],
    "expl": "La linea difensiva perimetrale eretta a salvaguardia dell'infrastruttura web dai colpi aggressivi sferrati da gruppi hacker esterni, bloccando proattivamente il traffico nocivo sul nascere, è il NIPS (Network Intrusion Prevention System).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_478",
    "text": "A security engineer configured a remote access VPN. The remote access VPN allows end users to connect to the network by using an agent that is installed on the endpoint, which establishes an encrypted tunnel. Which of the following protocols did the engineer most likely implement?",
    "opts": [
      {
        "id": "A",
        "t": "GRE",
        "c": false
      },
      {
        "id": "B",
        "t": "IPSec",
        "c": true
      },
      {
        "id": "C",
        "t": "SD-WAN",
        "c": false
      },
      {
        "id": "D",
        "t": "EAP",
        "c": false
      }
    ],
    "expl": "Il tunnel crittografico per una VPN di accesso remoto gestito tramite appositi agent software installati a bordo degli endpoint degli amministratori fa affidamento sulle protezioni e l'affidabilità offerte da IPSec.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_540",
    "text": "A security architect wants to prevent employees from receiving malicious attachments by email. Which of the following functions should the chosen solution do?",
    "opts": [
      {
        "id": "A",
        "t": "Apply IP address reputation data.",
        "c": false
      },
      {
        "id": "B",
        "t": "Tap and monitor the email feed.",
        "c": false
      },
      {
        "id": "C",
        "t": "Scan email traffic inline.",
        "c": true
      },
      {
        "id": "D",
        "t": "Check SPF records.",
        "c": false
      }
    ],
    "expl": "Per spezzare sul nascere la propagazione di allegati tossici o documenti macro via e-mail, la soluzione di controllo deve scansionare e ripulire proattivamente la posta elettronica in transito (Scan email traffic inline).",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_581",
    "text": "An organization purchased a critical business application containing sensitive data. The organization would like to ensure that the application is not exploited by common data exfiltration attacks. Which of the following approaches would best help to fulfill this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "URL scanning",
        "c": false
      },
      {
        "id": "B",
        "t": "WAF",
        "c": true
      },
      {
        "id": "C",
        "t": "Reverse proxy",
        "c": false
      },
      {
        "id": "D",
        "t": "NAC",
        "c": false
      }
    ],
    "expl": "L'introduzione di controlli WAF (Web Application Firewall) assicura lo scudo perimetrale ideale per preservare l'integrità e respingere exploit di codice mirati ad applicazioni web pacchettizzate contenenti dati critici.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_610",
    "text": "An administrator has configured a quarantine subnet for all guest devices that connect to the network. Which of the following would be best for the security team to perform before allowing access to corporate resources?",
    "opts": [
      {
        "id": "A",
        "t": "Device fingerprinting",
        "c": false
      },
      {
        "id": "B",
        "t": "Compliance attestation",
        "c": true
      },
      {
        "id": "C",
        "t": "Penetration test",
        "c": false
      },
      {
        "id": "D",
        "t": "Application vulnerability test",
        "c": false
      }
    ],
    "expl": "L'attestazione di conformità (Compliance attestation) convalida la postura di sicurezza di laptop o nodi guest prima che accedano alle risorse di rete della quarantena, accertando che requisiti fisici e software (antivirus, aggiornamenti) siano pienamente soddisfatti.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_652",
    "text": "A security analyst created a fake account and saved the password in a non-readily accessible directory in a spreadsheet. An alert was also configured to notify the security team if the spreadsheet is opened. Which of the following best describes the deception method being deployed?",
    "opts": [
      {
        "id": "A",
        "t": "Honeypot",
        "c": false
      },
      {
        "id": "B",
        "t": "Honeyfile",
        "c": true
      },
      {
        "id": "C",
        "t": "Honeytoken",
        "c": false
      },
      {
        "id": "D",
        "t": "Honeynet",
        "c": false
      }
    ],
    "expl": "L'Honeyfile è un finto file esca (come un foglio di calcolo contenente false credenziali) nascosto appositamente in un archivio monitorato; l'apertura arbitraria da parte di terzi fa squillare tempestivamente il centro di sicurezza.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_669",
    "text": "A Chief Information Security Officer (CISO) wants to: prevent employees from downloading malicious content; establish controls based on departments and users; map internet access for business applications to specific service accounts; restrict content based on categorization. Which of the following should the CSO implement?",
    "opts": [
      {
        "id": "A",
        "t": "Web application firewall",
        "c": false
      },
      {
        "id": "B",
        "t": "Secure DNS server",
        "c": false
      },
      {
        "id": "C",
        "t": "Jump server",
        "c": false
      },
      {
        "id": "D",
        "t": "Next-generation firewall",
        "c": true
      }
    ],
    "expl": "Un NGFW (Next-Generation Firewall) presidia e consolida in un'unica suite logistica filtri basati su servizi applicativi, classificazione web dipartimentale e mappatura account utente, esaudendo contestualmente molteplici policy di sicurezza.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_736",
    "text": "An administrator implements web-filtering products but still sees that users are visiting malicious links. Which of the following configuration items does the security administrator need to review?",
    "opts": [
      {
        "id": "A",
        "t": "Intrusion prevention system",
        "c": false
      },
      {
        "id": "B",
        "t": "Content categorization",
        "c": true
      },
      {
        "id": "C",
        "t": "Encryption",
        "c": false
      },
      {
        "id": "D",
        "t": "DNS service",
        "c": false
      }
    ],
    "expl": "Se i colleghi eludono involontariamente o deliberatamente i sistemi di protezione web cliccando link tossici, l'amministratore deve ottimizzare e fortificare le impostazioni di classificazione delle categorie (Content Categorization) per serrare le restrizioni.",
    "domain": 4,
    "objective": "4.5"
  },
  {
    "id": "SCREEN_019",
    "text": "Which of the following best describes the principle of least privilege?",
    "opts": [
      {
        "id": "A",
        "t": "Granting users full access to all resources",
        "c": false
      },
      {
        "id": "B",
        "t": "Restricting users' access rights to the minimum necessary to perform their jobs",
        "c": true
      },
      {
        "id": "C",
        "t": "Allowing users to access resources only during business hours",
        "c": false
      },
      {
        "id": "D",
        "t": "Providing users with temporary access permissions",
        "c": false
      }
    ],
    "expl": "Il principio del minimo privilegio (least privilege) stabilisce che a un utente debbano essere assegnati solo i diritti di accesso minimi necessari per svolgere le proprie mansioni lavorative, riducendo l'esposizione o il danno in caso di compromissione.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_024",
    "text": "An organization is adopting cloud services at a rapid pace and now has multiple SaaS applications in use. Each application has a separate log-in, so the security team wants to reduce the number of credentials each employee must maintain. Which of the following is the first step the security team should take?",
    "opts": [
      {
        "id": "A",
        "t": "Enable SAML.",
        "c": false
      },
      {
        "id": "B",
        "t": "Create OAuth tokens.",
        "c": false
      },
      {
        "id": "C",
        "t": "Use password vaulting.",
        "c": false
      },
      {
        "id": "D",
        "t": "Select an IdP.",
        "c": true
      }
    ],
    "expl": "Quando un'organizzazione implementa molti servizi SaaS diversi e desidera ridurre le credenziali, il primo passo fondamentale è identificare una fonte d'identità centralizzata, ovvero selezionare un Identity Provider (IdP) che farà da base per l'autenticazione federata.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_030",
    "text": "Easy-to-guess passwords led to an account compromise. The current password policy requires at least 12 alphanumeric characters, one uppercase character, one lowercase character, a password history of two passwords, a minimum password age of one day, and a maximum password age of 90 days. Which of the following would reduce the risk of this incident from happening again? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Increasing the minimum password length to 14 characters.",
        "c": true
      },
      {
        "id": "B",
        "t": "Upgrading the password hashing algorithm from MD5 to SHA-512.",
        "c": false
      },
      {
        "id": "C",
        "t": "Increasing the maximum password age to 120 days.",
        "c": false
      },
      {
        "id": "D",
        "t": "Reducing the minimum password length to ten characters.",
        "c": false
      },
      {
        "id": "E",
        "t": "Reducing the minimum password age to zero days.",
        "c": false
      },
      {
        "id": "F",
        "t": "Including a requirement for at least one special character.",
        "c": true
      }
    ],
    "expl": "Per contrastare password facilmente indovinabili, aumentare la lunghezza minima a 14 caratteri e richiedere obbligatoriamente almeno un carattere speciale incrementa enormemente l'entropia della password, riducendo drasticamente il rischio di attacchi di forza bruta.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_046",
    "text": "Which of the following processes is concerned with validating credentials?",
    "opts": [
      {
        "id": "A",
        "t": "Auditing",
        "c": false
      },
      {
        "id": "B",
        "t": "Accountability",
        "c": false
      },
      {
        "id": "C",
        "t": "Authentication",
        "c": true
      },
      {
        "id": "D",
        "t": "Authorization",
        "c": false
      }
    ],
    "expl": "Il processo che si occupa di convalidare le credenziali presentate da un soggetto per confermarne l'identità dichiarata è l'Autenticazione (Authentication).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_055",
    "text": "Select the appropriate authentication type for the following items: retina scan, smart card, hardware token, password, PIN number, and fingerprint scan.",
    "opts": [
      {
        "id": "A",
        "t": "Retina scan = Something you are",
        "c": true
      },
      {
        "id": "B",
        "t": "Smart card = Something you have",
        "c": true
      },
      {
        "id": "C",
        "t": "Hardware token = Something you have",
        "c": true
      },
      {
        "id": "D",
        "t": "Password = Something you know",
        "c": true
      },
      {
        "id": "E",
        "t": "PIN number = Something you know",
        "c": true
      },
      {
        "id": "F",
        "t": "Fingerprint scan = Something you are",
        "c": true
      }
    ],
    "expl": "I fattori di autenticazione si dividono in categorie: biometria (something you are) come retina e impronte; possesso (something you have) come smart card e token fisici; conoscenza (something you know) come password e PIN.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_069",
    "text": "A security engineer at a large company needs to enhance IAM in order to ensure that employees can only access corporate systems during their shifts. Which of the following access controls should the security engineer implement?",
    "opts": [
      {
        "id": "A",
        "t": "Biometric authentication",
        "c": false
      },
      {
        "id": "B",
        "t": "Least privilege",
        "c": false
      },
      {
        "id": "C",
        "t": "Role-based",
        "c": false
      },
      {
        "id": "D",
        "t": "Time-of-day restrictions",
        "c": true
      }
    ],
    "expl": "Per limitare l'accesso dei dipendenti ai soli orari in cui sono effettivamente di turno (shifts), la misura ideale è implementare restrizioni basate sull'orario (time-of-day restrictions).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_072",
    "text": "Which of the following allows a systems administrator to tune permissions for a file?",
    "opts": [
      {
        "id": "A",
        "t": "Patching",
        "c": false
      },
      {
        "id": "B",
        "t": "Access control list",
        "c": true
      },
      {
        "id": "C",
        "t": "Configuration enforcement",
        "c": false
      },
      {
        "id": "D",
        "t": "Least privilege",
        "c": false
      }
    ],
    "expl": "Le liste di controllo degli accessi (ACL) consentono all'amministratore di sistema di definire e tarare in modo accurato e granulare i permessi di lettura, scrittura o esecuzione sui singoli file o cartelle.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_090",
    "text": "A security administrator is configuring fileshares. The administrator removed the default permissions and added permissions for only users who will need to access the fileshares as part of their job duties. Which of the following best describes why the administrator performed these actions?",
    "opts": [
      {
        "id": "A",
        "t": "Encryption standard compliance",
        "c": false
      },
      {
        "id": "B",
        "t": "Data replication requirements",
        "c": false
      },
      {
        "id": "C",
        "t": "Least privilege",
        "c": true
      },
      {
        "id": "D",
        "t": "Access control monitoring",
        "c": false
      }
    ],
    "expl": "Rimuovere i permessi predefiniti di condivisione ad ampio raggio e aggiungere esclusivamente gli specifici dipendenti che ne hanno bisogno per le proprie attività lavorative è la corretta applicazione del principio del minimo privilegio.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_118",
    "text": "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users' passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Multifactor authentication",
        "c": true
      },
      {
        "id": "B",
        "t": "Permissions assignment",
        "c": false
      },
      {
        "id": "C",
        "t": "Access management",
        "c": false
      },
      {
        "id": "D",
        "t": "Password complexity",
        "c": false
      }
    ],
    "expl": "L'autenticazione a più fattori (MFA) impedisce l'accesso abusivo anche se le password vengono compromesse, in quanto l'attaccante che tenta il login da un IP sospetto non potrà superare il fattore di convalida aggiuntivo (ad esempio un codice su un dispositivo mobile fisicamente posseduto dall'utente).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_154",
    "text": "An IT manager informs the entire help desk staff that only the IT manager and the help desk lead will have access to the administrator console of the help desk software. Which of the following security techniques is the IT manager setting up?",
    "opts": [
      {
        "id": "A",
        "t": "Hardening",
        "c": false
      },
      {
        "id": "B",
        "t": "Employee monitoring",
        "c": false
      },
      {
        "id": "C",
        "t": "Configuration enforcement",
        "c": false
      },
      {
        "id": "D",
        "t": "Least privilege",
        "c": true
      }
    ],
    "expl": "Limitare l'accesso ai soli soggetti responsabili (IT manager e lead) risponde perfettamente al principio del minimo privilegio lavorativo, restringendo l'accesso amministrativo superfluo ad altri soggetti del reparto.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_245",
    "text": "Which of the following security concepts is the best reason for permissions on a human resources fileshare to follow the principle of least privilege?",
    "opts": [
      {
        "id": "A",
        "t": "Integrity",
        "c": false
      },
      {
        "id": "B",
        "t": "Availability",
        "c": false
      },
      {
        "id": "C",
        "t": "Confidentiality",
        "c": true
      },
      {
        "id": "D",
        "t": "Non-repudiation",
        "c": false
      }
    ],
    "expl": "Le cartelle delle Risorse Umane contengono informazioni personali altamente sensibili (stipendi, valutazioni, dati sanitari). Applicare il minimo privilegio garantisce in primo luogo la Riservatezza (Confidentiality) di tali dati di fronte ad accessi non autorizzati.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_252",
    "text": "After an audit, an administrator discovers all users have access to confidential data on a file server. Which of the following should the administrator use to restrict access to the data quickly?",
    "opts": [
      {
        "id": "A",
        "t": "Group Policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Content filtering",
        "c": false
      },
      {
        "id": "C",
        "t": "Data loss prevention",
        "c": false
      },
      {
        "id": "D",
        "t": "Access control lists",
        "c": true
      }
    ],
    "expl": "In seguito a un controllo di audit, se si rileva che tutti gli utenti hanno accesso a dati sensibili sul file server, l'impiego delle ACL (Access Control Lists) è il metodo più rapido e mirato per revocare gli accessi generali e applicare i permessi corretti.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_265",
    "text": "A systems administrator wants to prevent users from being able to access data based on their responsibilities. The administrator also wants to apply the required access structure via a simplified format. Which of the following should the administrator apply to the site recovery resource group?",
    "opts": [
      {
        "id": "A",
        "t": "RBAC",
        "c": true
      },
      {
        "id": "B",
        "t": "ACL",
        "c": false
      },
      {
        "id": "C",
        "t": "SAML",
        "c": false
      },
      {
        "id": "D",
        "t": "GPO",
        "c": false
      }
    ],
    "expl": "La strutturazione degli accessi in base alle mansioni aziendali (responsibilities) per un intero resource group in modo snello e centralizzato descrive il controllo d'accesso governato dai ruoli (RBAC - Role-Based Access Control).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_266",
    "text": "During the onboarding process, an employee needs to create a password for an intranet account. The password must include ten characters, numbers, and letters, and two special characters. Once the password is created, the company will grant the employee access to other company-owned websites based on the intranet profile. Which of the following access management concepts is the company most likely using to safeguard intranet accounts and grant access to multiple sites based on a user's intranet account? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Federation",
        "c": true
      },
      {
        "id": "B",
        "t": "Identity proofing",
        "c": false
      },
      {
        "id": "C",
        "t": "Password complexity",
        "c": true
      },
      {
        "id": "D",
        "t": "Default password changes",
        "c": false
      },
      {
        "id": "E",
        "t": "Password manager",
        "c": false
      },
      {
        "id": "F",
        "t": "Open authentication",
        "c": false
      }
    ],
    "expl": "La richiesta di requisiti rigidi (lunghezza, numeri, caratteri speciali) implementa la complessità della password (password complexity), mentre l'uso delle credenziali intranet per accedere a molteplici siti esterni di terze parti si chiama federazione delle identità (Federation).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_268",
    "text": "A network manager wants to protect the company's VPN by implementing multifactor authentication that uses: Something you know - Something you have - Something you are - Which of the following would accomplish the manager's goal?",
    "opts": [
      {
        "id": "A",
        "t": "Domain name, PKI, GeoIP lookup",
        "c": false
      },
      {
        "id": "B",
        "t": "VPN IP address, company ID, facial structure",
        "c": false
      },
      {
        "id": "C",
        "t": "Password, authentication token, thumbprint",
        "c": true
      },
      {
        "id": "D",
        "t": "Company URL, TLS certificate, home address",
        "c": false
      }
    ],
    "expl": "Per configurare un'autenticazione a tre fattori (qualcosa che conosci, che hai, che sei), lo schema perfetto impiega una password (conoscenza), un token o chiavetta di sicurezza (possesso) e l'impronta digitale o thumbprint (biometria/essere).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_276",
    "text": "The local administrator account for a company's VPN appliance was unexpectedly used to log in to the remote management interface. Which of the following would have most likely prevented this from happening?",
    "opts": [
      {
        "id": "A",
        "t": "Using least privilege",
        "c": false
      },
      {
        "id": "B",
        "t": "Changing the default password",
        "c": true
      },
      {
        "id": "C",
        "t": "Assigning individual user IDs",
        "c": false
      },
      {
        "id": "D",
        "t": "Reviewing logs more frequently",
        "c": false
      }
    ],
    "expl": "Se un attaccante accede improvvisamente all'interfaccia di gestione usando l'account amministrativo predefinito dell'appliance VPN, significa che la password originale di fabbrica non era mai stata cambiata. Modificare la password di default è una misura primaria indispensabile.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_278",
    "text": "An engineer moved to another team and is unable to access the new team's shared folders while still being able to access the shared folders from the former team. After opening a ticket, the engineer discovers that the account was never moved to the new group. Which of the following access controls is most likely causing the lack of access?",
    "opts": [
      {
        "id": "A",
        "t": "Role-based",
        "c": true
      },
      {
        "id": "B",
        "t": "Discretionary",
        "c": false
      },
      {
        "id": "C",
        "t": "Time of day",
        "c": false
      },
      {
        "id": "D",
        "t": "Least privilege",
        "c": false
      }
    ],
    "expl": "Poiché gli accessi sono governati dal gruppo o ruolo di appartenenza del dipendente, il mancato aggiornamento del gruppo ha mantenuto i vecchi privilegi e bloccato i nuovi. Questo descrive l'assegnazione degli accessi basata sul ruolo (RBAC).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_281",
    "text": "A systems administrator is changing the password policy within an enterprise environment and wants this update implemented on all systems as quickly as possible. Which of the following operating system security measures will the administrator most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Deploying PowerShell scripts",
        "c": false
      },
      {
        "id": "B",
        "t": "Pushing GPO update",
        "c": true
      },
      {
        "id": "C",
        "t": "Enabling PAP",
        "c": false
      },
      {
        "id": "D",
        "t": "Updating EDR profiles",
        "c": false
      }
    ],
    "expl": "Nelle reti Active Directory Windows, implementare o aggiornare le password policy in modo immediato e uniforme su tutti i server e client aziendali richiede l'invio e l'aggiornamento forzato delle policy di gruppo (GPO - Group Policy Objects).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_355",
    "text": "Which of the following security concepts is accomplished with the installation of a RADIUS server?",
    "opts": [
      {
        "id": "A",
        "t": "CIA",
        "c": false
      },
      {
        "id": "B",
        "t": "AAA",
        "c": true
      },
      {
        "id": "C",
        "t": "ACL",
        "c": false
      },
      {
        "id": "D",
        "t": "PEM",
        "c": false
      }
    ],
    "expl": "L'installazione e configurazione di un server RADIUS (Remote Authentication Dial-In User Service) fornisce e centralizza i servizi di AAA (Authentication, Authorization, Accounting) per l'accesso remoto e Wi-Fi aziendale.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_360",
    "text": "A company is reviewing options to enforce user logins after several account takeovers. The following conditions must be met as part of the solution: Allow employees to work remotely or from assigned offices around the world. Provide a seamless login experience. Limit the amount of equipment required. Which of the following best meets these conditions?",
    "opts": [
      {
        "id": "A",
        "t": "Trusted devices",
        "c": true
      },
      {
        "id": "B",
        "t": "Geotagging",
        "c": false
      },
      {
        "id": "C",
        "t": "Smart cards",
        "c": false
      },
      {
        "id": "D",
        "t": "Time-based logins",
        "c": false
      }
    ],
    "expl": "Ricorrere a dispositivi registrati e attendibili (trusted devices) associati all'utente consente di verificare la sicurezza del terminale e autorizzare il login remoto senza imporre l'acquisto di smart card fisiche o di hardware token addizionali.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_363",
    "text": "An organization completed a project to deploy SSO across all business applications last year. Recently, the finance department selected a new cloud-based accounting software vendor. Which of the following should most likely be configured during the new software deployment?",
    "opts": [
      {
        "id": "A",
        "t": "RADIUS",
        "c": false
      },
      {
        "id": "B",
        "t": "SAML",
        "c": true
      },
      {
        "id": "C",
        "t": "EAP",
        "c": false
      },
      {
        "id": "D",
        "t": "OpenID",
        "c": false
      }
    ],
    "expl": "SAML (Security Assertion Markup Language) è lo standard di federazione industriale basato su XML ampiamente impiegato per integrare l'autenticazione a firma singola (SSO) tra applicazioni aziendali e partner SaaS cloud esterni (come software finanziari cloud).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_370",
    "text": "Which of the following is a possible factor for MFA?",
    "opts": [
      {
        "id": "A",
        "t": "Something you exhibit",
        "c": false
      },
      {
        "id": "B",
        "t": "Something you have",
        "c": true
      },
      {
        "id": "C",
        "t": "Somewhere you are",
        "c": false
      },
      {
        "id": "D",
        "t": "Someone you know",
        "c": false
      }
    ],
    "expl": "L'autenticazione a più fattori richiede elementi appartenenti a categorie indipendenti. 'Something you have' (qualcosa che possiedi, come un token o uno smartphone) costituisce un valido fattore di sicurezza.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_421",
    "text": "A security analyst at an organization observed several user logins from outside the organization's network. The analyst determined that these logins were not performed by individuals within the organization. Which of the following recommendations would reduce the likelihood of future attacks? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Disciplinary actions for users",
        "c": false
      },
      {
        "id": "B",
        "t": "Conditional access policies",
        "c": true
      },
      {
        "id": "C",
        "t": "More regular account audits",
        "c": false
      },
      {
        "id": "D",
        "t": "Implementation of additional authentication factors",
        "c": true
      },
      {
        "id": "E",
        "t": "Enforcement of content filtering policies",
        "c": false
      },
      {
        "id": "F",
        "t": "A review of user account permissions",
        "c": false
      }
    ],
    "expl": "Le policy di accesso condizionale (conditional access) consentono di valutare il contesto (es: indirizzi IP remoti anomali) ed esigere fattori di autenticazione supplementari (MFA step-up) per sventare tentativi di furto d'identità esterni.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_426",
    "text": "An organization wants to improve the company's security authentication method for remote employees. Given the following requirements: Must work across SaaS and internal network applications; must be device manufacturer agnostic; must have offline capabilities. Which of the following would be the most appropriate authentication method?",
    "opts": [
      {
        "id": "A",
        "t": "Username and password",
        "c": false
      },
      {
        "id": "B",
        "t": "Biometrics",
        "c": false
      },
      {
        "id": "C",
        "t": "SMS verification",
        "c": false
      },
      {
        "id": "D",
        "t": "Time-based tokens",
        "c": true
      }
    ],
    "expl": "I token generati basati sul tempo (TOTP, salvabili su app come Google Authenticator o in chiavi hardware) funzionano offline (non richiedono segnale cellulare o SMS), sono indipendenti dal produttore del telefono e sono supportati ovunque.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_489",
    "text": "An organization has recently decided to implement SSO. The requirements are to leverage access tokens and focus on application authorization rather than user authentication. Which of the following solutions would the engineering team most likely configure?",
    "opts": [
      {
        "id": "A",
        "t": "LDAP",
        "c": false
      },
      {
        "id": "B",
        "t": "Federation",
        "c": false
      },
      {
        "id": "C",
        "t": "SAML",
        "c": false
      },
      {
        "id": "D",
        "t": "OAuth",
        "c": true
      }
    ],
    "expl": "OAuth 2.0 è il protocollo industriale incentrato sul rilascio di token di accesso (access tokens) per autorizzare le applicazioni client a consultare le API o le risorse per conto dell'utente, senza incentrarsi direttamente sull'autenticazione stessa.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_532",
    "text": "A group of developers has a shared backup account to access the source code repository. Which of the following is best way to secure the backup account if there is an SSO failure?",
    "opts": [
      {
        "id": "A",
        "t": "RAS",
        "c": false
      },
      {
        "id": "B",
        "t": "EAP",
        "c": false
      },
      {
        "id": "C",
        "t": "SAML",
        "c": false
      },
      {
        "id": "D",
        "t": "PAM",
        "c": true
      }
    ],
    "expl": "Per proteggere e governare gli account d'emergenza (un 'break glass' o backup account con elevati privilegi) in caso di interruzione del sistema SSO centrale, si implementa una soluzione PAM (Privileged Access Management) che traccia, ruota e custodisce l'accesso a tali credenziali fisiche.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_599",
    "text": "A company wants to add an MFA solution for all employees who access the corporate network remotely. Log-in requirements include something you know, are, and have. The company wants a solution that does not require purchasing third-party applications or specialized hardware. Which of the following MFA solutions would best meet the company's requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Smart card with PIN and password",
        "c": false
      },
      {
        "id": "B",
        "t": "Security questions and a one-time passcode sent via email",
        "c": false
      },
      {
        "id": "C",
        "t": "Voice and fingerprint verification with an SMS one-time passcode",
        "c": false
      },
      {
        "id": "D",
        "t": "Mobile application-generated, one-time passcode with facial recognition",
        "c": true
      }
    ],
    "expl": "La generazione di un codice monouso (OTP) mediante un'applicazione mobile abbinata al riconoscimento facciale integrato nello smartphone non richiede l'acquisto di hardware separato ed esaurisce tutti i criteri richiesti: qualcosa che sai (PIN d'accesso), possiedi (smartphone), e sei (biometria).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_607",
    "text": "A penetration test has demonstrated that domain administrator accounts were vulnerable to pass-the-hash attacks. Which of the following would have been the best strategy to prevent the threat actor from using domain administrator accounts?",
    "opts": [
      {
        "id": "A",
        "t": "Audit each domain administrator account weekly for password compliance.",
        "c": false
      },
      {
        "id": "B",
        "t": "Implement a privileged access management solution.",
        "c": true
      },
      {
        "id": "C",
        "t": "Create IDS policies to monitor domain controller access.",
        "c": false
      },
      {
        "id": "D",
        "t": "Use Group Policy to enforce password expiration.",
        "c": false
      }
    ],
    "expl": "Gli attacchi 'pass-the-hash' sfruttano sessioni amministrative attive o credenziali hash memorizzate nei sistemi locali. L'adozione di un sistema PAM (Privileged Access Management) isola queste credenziali, ruota gli hash ad ogni uso e limita drasticamente la persistenza dei privilegi amministrativi.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_614",
    "text": "An administrator wants to automate an account permissions update for a large number of accounts. Which of the following would best accomplish this task?",
    "opts": [
      {
        "id": "A",
        "t": "Security groups",
        "c": false
      },
      {
        "id": "B",
        "t": "Federation",
        "c": false
      },
      {
        "id": "C",
        "t": "User provisioning",
        "c": true
      },
      {
        "id": "D",
        "t": "Vertical scaling",
        "c": false
      }
    ],
    "expl": "Il processo automatico di creazione, manutenzione, aggiornamento e rimozione dei diritti d'accesso e degli account dei dipendenti basato sulla loro anagrafica aziendale prende il nome di User Provisioning (provisioning utenti).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_634",
    "text": "A company wants to ensure employees are allowed to copy files from a virtual desktop during the workday but are restricted during non-working hours. Which of the following security measures should the company set up?",
    "opts": [
      {
        "id": "A",
        "t": "Digital rights management",
        "c": false
      },
      {
        "id": "B",
        "t": "Role-based access control",
        "c": false
      },
      {
        "id": "C",
        "t": "Time-based access control",
        "c": true
      },
      {
        "id": "D",
        "t": "Network access control",
        "c": false
      }
    ],
    "expl": "Consentire un'azione (copia di file) esclusivamente in corrispondenza del ciclo lavorativo ordinario diurno e inibirla nelle ore notturne corrisponde all'istituzione di un controllo d'accesso temporale (Time-based access control).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_666",
    "text": "A company evaluates several options that would allow employees to have remote access to the network. The security team wants to ensure the solution includes AAA to comply with internal security policies. Which of the following should the security team recommend?",
    "opts": [
      {
        "id": "A",
        "t": "IPSec with RADIUS",
        "c": true
      },
      {
        "id": "B",
        "t": "RDP connection with LDAPS",
        "c": false
      },
      {
        "id": "C",
        "t": "Web proxy for all remote traffic",
        "c": false
      },
      {
        "id": "D",
        "t": "Jump server with 802.1X",
        "c": false
      }
    ],
    "expl": "Per garantire la cifratura degli accessi stradali da remoto dei lavoratori (VPN IPSec) unita alle piene garanzie di identificazione, autorizzazione e tracciamento (AAA), l'accoppiata migliore ricorre alla mutua integrazione di IPSec con un server RADIUS.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_671",
    "text": "A security analyst needs to improve the company's authentication policy following a password audit. Which of the following should be included in the policy? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Length",
        "c": true
      },
      {
        "id": "B",
        "t": "Complexity",
        "c": true
      },
      {
        "id": "C",
        "t": "Least privilege",
        "c": false
      },
      {
        "id": "D",
        "t": "Something you have",
        "c": false
      },
      {
        "id": "E",
        "t": "Security keys",
        "c": false
      },
      {
        "id": "F",
        "t": "Biometrics",
        "c": false
      }
    ],
    "expl": "A seguito di una verifica di vulnerabilità legata a password deboli, l'aggiornamento della politica di autenticazione deve imporre requisiti matematici restrittivi sulla lunghezza minima della password (length) e sulla complessità dei caratteri ammessi (complexity).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_695",
    "text": "A new corporate policy requires all staff to use multifactor authentication to access company resources. Which of the following can be utilized to set up this form of identity and access management? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Authentication tokens",
        "c": true
      },
      {
        "id": "B",
        "t": "Least privilege",
        "c": false
      },
      {
        "id": "C",
        "t": "Biometrics",
        "c": true
      },
      {
        "id": "D",
        "t": "LDAP",
        "c": false
      },
      {
        "id": "E",
        "t": "Password vaulting",
        "c": false
      },
      {
        "id": "F",
        "t": "SAML",
        "c": false
      }
    ],
    "expl": "Per strutturare un'infrastruttura di autenticazione a più fattori (MFA) conforme alle policy di sicurezza, l'amministratore ricorre a token di autenticazione software/hardware (qualcosa che hai) e alla biometria come impronte o iride (qualcosa che sei).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_704",
    "text": "A penetration test identifies that an SMBv1 is enabled on multiple servers across an organization. The organization wants to remediate this vulnerability in the most efficient way possible. Which of the following should the organization use for this purpose?",
    "opts": [
      {
        "id": "A",
        "t": "GPO",
        "c": true
      },
      {
        "id": "B",
        "t": "ACL",
        "c": false
      },
      {
        "id": "C",
        "t": "SFTP",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP",
        "c": false
      }
    ],
    "expl": "La presenza di SMBv1 (un protocollo legacy e intrinsecamente vulnerabile a ransomware e worm) deve essere disabilitata globalmente e con la massima rapidità ed efficienza su tutte le macchine del dominio AD. Lo strumento ideale è una Group Policy Object (GPO) centralizata.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_708",
    "text": "Which of the following can be used to mitigate attacks from high-risk regions?",
    "opts": [
      {
        "id": "A",
        "t": "Obfuscation",
        "c": false
      },
      {
        "id": "B",
        "t": "Data sovereignty",
        "c": false
      },
      {
        "id": "C",
        "t": "IP geolocation",
        "c": true
      },
      {
        "id": "D",
        "t": "Encryption",
        "c": false
      }
    ],
    "expl": "Configurare filtri e regole in base alle coordinate geografiche di provenienza dell'utente (IP Geolocation) permette di riscontrare accessi fuori standard ed applicare un diniego perimetrale verso le connessioni istituite da determinati paesi ad alto rischio o insoliti.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_709",
    "text": "A program manager wants to ensure contract employees can only access the company's computers Monday through Friday from 9 a m. to 5 p.m. Which of the following would best enforce this access control?",
    "opts": [
      {
        "id": "A",
        "t": "Creating a GPO for all contract employees and setting time-of-day log-in restrictions",
        "c": true
      },
      {
        "id": "B",
        "t": "Creating a discretionary access policy and setting rule-based access for contract employees",
        "c": false
      },
      {
        "id": "C",
        "t": "Implementing an OAuth server and then setting least privilege for contract employees",
        "c": false
      },
      {
        "id": "D",
        "t": "Implementing SAML with federation to the contract employees' authentication server",
        "c": false
      }
    ],
    "expl": "Per vincolare l'operatività dei collaboratori esterni ai soli giorni feriali (lunedì-venerdì) e orari d'ufficio (9-17), l'amministratore di sistema AD applica una GPO specifica contenente precise politiche di blocco temporale (time-of-day log-in restrictions) sui loro account di dominio.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_714",
    "text": "A security analyst is examining a penetration test report and notices that the tester pivoted to critical internal systems with the same local user ID and password. Which of the following would help prevent this in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Implement centralized authentication with proper password policies",
        "c": true
      },
      {
        "id": "B",
        "t": "Add password complexity rules and increase password history limits",
        "c": false
      },
      {
        "id": "C",
        "t": "Connect the systems to an external authentication server",
        "c": false
      },
      {
        "id": "D",
        "t": "Limit the ability of user accounts to change passwords",
        "c": false
      }
    ],
    "expl": "La propagazione laterale di un attaccante su molteplici macchine dovuta ad account locali sparsi aventi la medesima password si neutralizza centralizzando l'autenticazione tramite un Directory Service (come Active Directory) e implementando robuste politiche centralizzate.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_730",
    "text": "Which of the following should be used to ensure a user has the permissions needed to effectively do an assigned job role?",
    "opts": [
      {
        "id": "A",
        "t": "Changing default passwords",
        "c": false
      },
      {
        "id": "B",
        "t": "Implementing least privilege",
        "c": true
      },
      {
        "id": "C",
        "t": "Enforcing baseline configurations",
        "c": false
      },
      {
        "id": "D",
        "t": "Applying network segmentation",
        "c": false
      }
    ],
    "expl": "Per sincerarsi che un lavoratore detenga esclusivamente le credenziali e i permessi adatti ed essenziali a soddisfare il proprio ruolo aziendale, si applica in modo metodico e strutturato lo standard del minimo privilegio (least privilege).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_056",
    "text": "Select the appropriate authentication type for the following items: retina scan, smart card, hardware token, password, PIN number, and fingerprint scan.",
    "opts": [
      {
        "id": "A",
        "t": "Retina scan = Something you are",
        "c": true
      },
      {
        "id": "B",
        "t": "Smart card = Something you have",
        "c": true
      },
      {
        "id": "C",
        "t": "Hardware token = Something you have",
        "c": true
      },
      {
        "id": "D",
        "t": "Password = Something you know",
        "c": true
      },
      {
        "id": "E",
        "t": "PIN number = Something you know",
        "c": true
      },
      {
        "id": "F",
        "t": "Fingerprint scan = Something you are",
        "c": true
      }
    ],
    "expl": "Questo esercizio mappa i fattori d'autenticazione: Retina scan e Fingerprint scan sono biometria (Something you are); Smart card e Hardware token sono possesso hardware (Something you have); Password e PIN sono conoscenze mnemoniche (Something you know).",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_123",
    "text": "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users' passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Multifactor authentication",
        "c": true
      },
      {
        "id": "B",
        "t": "Permissions assignment",
        "c": false
      },
      {
        "id": "C",
        "t": "Access management",
        "c": false
      },
      {
        "id": "D",
        "t": "Password complexity",
        "c": false
      }
    ],
    "expl": "Se le credenziali vengono caricate abusivamente da IP estranei, per fermare future violazioni occorre imporre l'MFA (Multifactor authentication), che richiede un canale aggiuntivo (possesso/essere) indisponibile all'hacker.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_135",
    "text": "An administrator notices that several users are logging in from suspicious IP addresses. After speaking with the users, the administrator determines that the employees were not logging in from those IP addresses and resets the affected users' passwords. Which of the following should the administrator implement to prevent this type of attack from succeeding in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Multifactor authentication",
        "c": true
      },
      {
        "id": "B",
        "t": "Permissions assignment",
        "c": false
      },
      {
        "id": "C",
        "t": "Access management",
        "c": false
      },
      {
        "id": "D",
        "t": "Password complexity",
        "c": false
      }
    ],
    "expl": "Imporre l'autenticazione a più fattori (multifactor authentication) impedisce il riutilizzo abusivo di mere credenziali utente rubate/bruteforzate.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_371",
    "text": "Easy-to-guess passwords led to an account compromise. The current password policy requires at least 12 alphanumeric characters, one uppercase character, one lowercase character, a password history of two passwords, a minimum password age of one day, and a maximum password age of 90 days. Which of the following would reduce the risk of this incident from happening again? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Increasing the minimum password length to 14 characters.",
        "c": true
      },
      {
        "id": "B",
        "t": "Upgrading the password hashing algorithm from MD5 to SHA-512.",
        "c": false
      },
      {
        "id": "C",
        "t": "Increasing the maximum password age to 120 days.",
        "c": false
      },
      {
        "id": "D",
        "t": "Reducing the minimum password length to ten characters.",
        "c": false
      },
      {
        "id": "E",
        "t": "Reducing the minimum password age to zero days.",
        "c": false
      },
      {
        "id": "F",
        "t": "Including a requirement for at least one special character.",
        "c": true
      }
    ],
    "expl": "Aumentare la lunghezza minima a 14 caratteri e imporre requisiti per simboli e caratteri speciali (special character) aumenta esponenzialmente l'entropia della chiave, stroncando attacchi di indovinamento.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_439",
    "text": "An organization is adopting cloud services at a rapid pace and now has multiple SaaS applications in use. Each application has a separate log-in, so the security team wants to reduce the number of credentials each employee must maintain. Which of the following is the first step the security team should take?",
    "opts": [
      {
        "id": "A",
        "t": "Enable SAML.",
        "c": false
      },
      {
        "id": "B",
        "t": "Create OAuth tokens.",
        "c": false
      },
      {
        "id": "C",
        "t": "Use password vaulting.",
        "c": false
      },
      {
        "id": "D",
        "t": "Select an IdP.",
        "c": true
      }
    ],
    "expl": "Per federare l'autenticazione tra diverse applicazioni SaaS diminuendo il carico di credenziali, il primo tassello strategico e architetturale è scegliere un Identity Provider (IdP) centrale.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_628",
    "text": "Which of the following allows a systems administrator to tune permissions for a file?",
    "opts": [
      {
        "id": "A",
        "t": "Patching",
        "c": false
      },
      {
        "id": "B",
        "t": "Access control list",
        "c": true
      },
      {
        "id": "C",
        "t": "Configuration enforcement",
        "c": false
      },
      {
        "id": "D",
        "t": "Least privilege",
        "c": false
      }
    ],
    "expl": "La lista di controllo accessi (ACL - Access Control List) è il meccanismo del file system che elenca esplicitamente utenti e gruppi con i rispettivi livelli di permesso granulari per ciascun file.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_633",
    "text": "A security engineer at a large company needs to enhance IAM in order to ensure that employees can only access corporate systems during their shifts. Which of the following access controls should the security engineer implement?",
    "opts": [
      {
        "id": "A",
        "t": "Role-based",
        "c": false
      },
      {
        "id": "B",
        "t": "Time-of-day restrictions",
        "c": true
      },
      {
        "id": "C",
        "t": "Least privilege",
        "c": false
      },
      {
        "id": "D",
        "t": "Biometric authentication",
        "c": false
      }
    ],
    "expl": "Le restrizioni di orario (Time-of-day restrictions) impediscono l'autenticazione e l'accesso ai sistemi aziendali al di fuori del turno lavorativo o della finestra temporale approvata.",
    "domain": 4,
    "objective": "4.6"
  },
  {
    "id": "SCREEN_044",
    "text": "What does WPA3 use Simultaneous Authentication of Equals (SAE) to do?",
    "opts": [
      {
        "id": "A",
        "t": "It is used as a password-based key exchange to create strong shared secrets.",
        "c": true
      },
      {
        "id": "B",
        "t": "It is used to create the Quick Response (QR) codes.",
        "c": false
      },
      {
        "id": "C",
        "t": "It is used to create the elliptic curves for the main encryption.",
        "c": false
      },
      {
        "id": "D",
        "t": "It is used to create collision-resistant hash values.",
        "c": false
      }
    ],
    "expl": "Simultaneous Authentication of Equals (SAE) sostituisce la chiave pre-condivisa (PSK) in WPA3. Fornisce uno scambio di chiavi basato su password (password-based key exchange) altamente resistente ai tentativi di cracking offline (attacchi a dizionario), generando segreti condivisi robusti anche con password utente deboli o corte.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_089",
    "text": "A security operations center determines that the malicious activity detected on a server is normal. Which of the following activities describes the act of ignoring detected activity in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Tuning",
        "c": true
      },
      {
        "id": "B",
        "t": "Aggregating",
        "c": false
      },
      {
        "id": "C",
        "t": "Quarantining",
        "c": false
      },
      {
        "id": "D",
        "t": "Archiving",
        "c": false
      }
    ],
    "expl": "Il 'Tuning' (sintonizzazione) consiste nel ricalibrare e perfezionare le regole di allerta del SIEM o dell'IDS. Quando una determinata attività innocua viene rilevata erroneamente come minaccia, l'analista esegue il tuning sulla regola d'allerta per escluderla in futuro, azzerando i falsi positivi.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_336",
    "text": "Which of the following should a security operations center use to improve its incident response procedure?",
    "opts": [
      {
        "id": "A",
        "t": "Playbooks",
        "c": true
      },
      {
        "id": "B",
        "t": "Frameworks",
        "c": false
      },
      {
        "id": "C",
        "t": "Baselines",
        "c": false
      },
      {
        "id": "D",
        "t": "Benchmarks",
        "c": false
      }
    ],
    "expl": "I Playbook sono guide procedurali incentrate sulla risposta a specifici incidenti cibernetici. Il Security Operations Center (SOC) si serve dei playbook per armonizzare, velocizzare e rendere riproducibili le fasi dell'Incident Response.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_340",
    "text": "Which of the following is a feature of a next-generation SIEM system?",
    "opts": [
      {
        "id": "A",
        "t": "Virus signatures",
        "c": false
      },
      {
        "id": "B",
        "t": "Automated response actions",
        "c": true
      },
      {
        "id": "C",
        "t": "Security agent deployment",
        "c": false
      },
      {
        "id": "D",
        "t": "Vulnerability scanning",
        "c": false
      }
    ],
    "expl": "I SIEM di nuova generazione (Next-Gen SIEM) affiancano alla classica ricezione ed indicizzazione passiva dei log la capacità di avviare azioni proattive di contenimento e interazione automatica (Automated response actions), anche integrando tecnologie SOAR.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_405",
    "text": "During a penetration test, a flaw in the internal PKI was exploited to gain domain administrator rights using specially crafted certificates. Which of the following remediation tasks should be completed as part of the cleanup phase?",
    "opts": [
      {
        "id": "A",
        "t": "Updating the CRL",
        "c": false
      },
      {
        "id": "B",
        "t": "Patching the CA",
        "c": true
      },
      {
        "id": "C",
        "t": "Changing passwords",
        "c": false
      },
      {
        "id": "D",
        "t": "Implementing SOAR",
        "c": false
      }
    ],
    "expl": "Durante l'audit o il cleanup che segue un penetration test, se una falla di sicurezza della Certification Authority (CA) interna ha ammesso la forgiatura abusiva di certificati con diritti di amministratore di dominio, la misura di bonifica primaria è applicare la patch correttiva alla CA (Patching the CA).",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_455",
    "text": "An employee used a company’s billing system to issue fraudulent checks. The administrator is looking for evidence of other occurrences of this activity. Which of the following should the administrator examine?",
    "opts": [
      {
        "id": "A",
        "t": "Application logs",
        "c": true
      },
      {
        "id": "B",
        "t": "Vulnerability scanner logs",
        "c": false
      },
      {
        "id": "C",
        "t": "IDS/IPS logs",
        "c": false
      },
      {
        "id": "D",
        "t": "Firewall logs",
        "c": false
      }
    ],
    "expl": "Poiché il rilascio di check finanziari fittizi costituisce un evento logico gestito dal database applicativo del portale di contabilità, le tracce dell'incidente o prove storiche analoghe si collocano univocamente nei registri applicativi (Application logs) di quel pacchetto software.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_491",
    "text": "A security engineer would like to enhance the use of automation and orchestration within the SIEM. Which of the following would be the primary benefit of this enhancement?",
    "opts": [
      {
        "id": "A",
        "t": "It increases complexity.",
        "c": false
      },
      {
        "id": "B",
        "t": "It removes technical debt.",
        "c": false
      },
      {
        "id": "C",
        "t": "It adds additional guard rails.",
        "c": false
      },
      {
        "id": "D",
        "t": "It acts as a workforce multiplier.",
        "c": true
      }
    ],
    "expl": "L'introduzione di procedure di automazione e orchestrazione consente di rispondere all'istante alle allerte comuni. Questo solleva e scarica gli operatori umani dai compiti banali ripetitivi, agendo come un eccezionale moltiplicatore di forza lavoro (Workforce multiplier) per l'intero SOC.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_601",
    "text": "A security manager wants to reduce the number of steps required to identify and contain basic threats. Which of the following will help achieve this goal?",
    "opts": [
      {
        "id": "A",
        "t": "SOAR",
        "c": true
      },
      {
        "id": "B",
        "t": "SIEM",
        "c": false
      },
      {
        "id": "C",
        "t": "DMARC",
        "c": false
      },
      {
        "id": "D",
        "t": "NIDS",
        "c": false
      }
    ],
    "expl": "Il SOAR (Security Orchestration, Automation, and Response) aggrega gli strumenti di sicurezza aziendali (firewall, EDR, cataloghi di rete) ed esegue flussi predeterminati (workflow) per ridurre i tempi e i passaggi operativi di identificazione e contenimento dei pericoli.",
    "domain": 4,
    "objective": "4.7"
  },
  {
    "id": "SCREEN_025",
    "text": "Which of the following phases of an incident response involves generating reports?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Preparation",
        "c": false
      },
      {
        "id": "C",
        "t": "Lessons learned",
        "c": true
      },
      {
        "id": "D",
        "t": "Containment",
        "c": false
      }
    ],
    "expl": "La fase 'Lessons learned' (Lezioni apprese) è la parte conclusiva del ciclo di risposta all'incidente in cui si redigono i report ufficiali, si analizza l'accaduto e si documentano i miglioramenti da apportare alle procedure.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_053",
    "text": "Jewel's team located a compromised system. Their SIEM software successfully disconnected the system, but her team hasn't yet cleaned up the compromised system. What point of the incident response process has Jewel's team completed?",
    "opts": [
      {
        "id": "A",
        "t": "Eradication",
        "c": false
      },
      {
        "id": "B",
        "t": "Lessons learned",
        "c": false
      },
      {
        "id": "C",
        "t": "Containment",
        "c": true
      },
      {
        "id": "D",
        "t": "Recovery",
        "c": false
      }
    ],
    "expl": "Il contenimento (Containment) consiste nel limitare ed isolare la propagazione del danno (ad esempio scollegando un computer compromesso dalla rete). Se la macchina è stata isolata ma non ancora bonificata, la fase completata è appunto il contenimento, mentre la bonifica avverrà nella fase di eradicazione (Eradication).",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_083",
    "text": "Which of the following incident response activities ensures evidence is properly handled?",
    "opts": [
      {
        "id": "A",
        "t": "E-discovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Legal hold",
        "c": false
      },
      {
        "id": "C",
        "t": "Preservation",
        "c": false
      },
      {
        "id": "D",
        "t": "Chain of custody",
        "c": true
      }
    ],
    "expl": "La catena di custodia (Chain of custody) è un processo di documentazione sequenziale e ininterrotto che attesta chi ha raccolto, maneggiato, trasferito e conservato le prove digitali, salvaguardandone la validità legale in giudizio.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_150",
    "text": "A cyber operations team informs a security analyst about a new tactic malicious actors are using to compromise networks. SIEM alerts have not yet been configured. Which of the following best describes what the security analyst should do to identify this behavior?",
    "opts": [
      {
        "id": "A",
        "t": "Digital forensics",
        "c": false
      },
      {
        "id": "B",
        "t": "E-discovery",
        "c": false
      },
      {
        "id": "C",
        "t": "Incident response",
        "c": false
      },
      {
        "id": "D",
        "t": "Threat hunting",
        "c": true
      }
    ],
    "expl": "La ricerca proattiva delle minacce (Threat Hunting) consiste nell'indagare manualmente e in modo mirato tra i sistemi aziendali per individuare comportamenti sospetti non ancora identificati dalle regole o dagli alert pre-configurati del SIEM.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_170",
    "text": "Which of the following describes the reason root cause analysis should be conducted as part of incident response?",
    "opts": [
      {
        "id": "A",
        "t": "To gather IoCs for the investigation",
        "c": false
      },
      {
        "id": "B",
        "t": "To discover which systems have been affected",
        "c": false
      },
      {
        "id": "C",
        "t": "To eradicate any trace of malware on the network",
        "c": false
      },
      {
        "id": "D",
        "t": "To prevent future incidents of the same nature",
        "c": true
      }
    ],
    "expl": "L'analista di sicurezza conduce l'analisi delle cause radice (Root cause analysis) con lo scopo cardine di identificare la debolezza originaria che ha consentito l'insorgere del breach, prevenendo così il ripetersi di incidenti analoghi in futuro.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_204",
    "text": "Which of the following is the phase in the incident response process when a security analyst reviews roles and responsibilities?",
    "opts": [
      {
        "id": "A",
        "t": "Preparation",
        "c": true
      },
      {
        "id": "B",
        "t": "Recovery",
        "c": false
      },
      {
        "id": "C",
        "t": "Lessons learned",
        "c": false
      },
      {
        "id": "D",
        "t": "Analysis",
        "c": false
      }
    ],
    "expl": "La fase di Preparazione (Preparation) prevede di istruire il personale, strutturare gli Incident Response Plan e mappare preliminarmente ruoli e responsabilità prima che l'evento critico accada.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_213",
    "text": "Which of the following incident response activities ensures evidence is properly handled?",
    "opts": [
      {
        "id": "A",
        "t": "E-discovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Chain of custody",
        "c": true
      },
      {
        "id": "C",
        "t": "Legal hold",
        "c": false
      },
      {
        "id": "D",
        "t": "Preservation",
        "c": false
      }
    ],
    "expl": "La catena di custodia (Chain of custody) tiene traccia documentale rigorosa in ordine cronologico dell'identità di chiunque manipoli o custodisca un reperto elettronico, garantendone l'integrità legale.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_249",
    "text": "Which of the following exercises should an organization use to improve its incident response process?",
    "opts": [
      {
        "id": "A",
        "t": "Tabletop",
        "c": true
      },
      {
        "id": "B",
        "t": "Replication",
        "c": false
      },
      {
        "id": "C",
        "t": "Failover",
        "c": false
      },
      {
        "id": "D",
        "t": "Recovery",
        "c": false
      }
    ],
    "expl": "Le esercitazioni di discussione verbale su scenari ipotetici di attacco, note come Tabletop exercise, servono alla ditta per collaudare l'efficacia delle risposte e ottimizzare le procedure prima di affrontare minacce reali.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_337",
    "text": "Which of the following describes an executive team that is meeting in a board room and testing the company's incident response plan?",
    "opts": [
      {
        "id": "A",
        "t": "Continuity of operations",
        "c": false
      },
      {
        "id": "B",
        "t": "Capacity planning",
        "c": false
      },
      {
        "id": "C",
        "t": "Tabletop exercise",
        "c": true
      },
      {
        "id": "D",
        "t": "Parallel processing",
        "c": false
      }
    ],
    "expl": "Una riunione seduta in una boardroom della dirigenza aziendale per analizzare passaggi, responsabilità ed escalation a fronte di un ipotetico scenario di cyberattacco è un esempio classico di Tabletop exercise.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_347",
    "text": "Which of the following phases of an incident response involves generating reports?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Preparation",
        "c": false
      },
      {
        "id": "C",
        "t": "Lessons learned",
        "c": true
      },
      {
        "id": "D",
        "t": "Containment",
        "c": false
      }
    ],
    "expl": "La finalizzazione e sottomissione di relazioni formali dell'incidente all'alta dirigenza (incident report status) avviene interamente nella fase di Lessons learned.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_471",
    "text": "A security manager created new documentation to use in response to various types of security incidents. Which of the following is the next step the manager should take?",
    "opts": [
      {
        "id": "A",
        "t": "Set the maximum data retention policy.",
        "c": false
      },
      {
        "id": "B",
        "t": "Securely store the documents on an air-gapped network.",
        "c": false
      },
      {
        "id": "C",
        "t": "Review the documents’ data classification policy.",
        "c": false
      },
      {
        "id": "D",
        "t": "Conduct a tabletop exercise with the team.",
        "c": true
      }
    ],
    "expl": "Ogni volta che si introducono o aggiornano documenti operativi e playbook, il passaggio ideale da effettuare consiste nell'eseguire una Tabletop exercise per formare il personale sui nuovi processi.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_474",
    "text": "Which of the following activities is included in the post-incident review phase?",
    "opts": [
      {
        "id": "A",
        "t": "Determining the root cause of the incident",
        "c": true
      },
      {
        "id": "B",
        "t": "Developing steps to mitigate the risks of the incident",
        "c": false
      },
      {
        "id": "C",
        "t": "Validating the accuracy of the evidence collected during the investigation",
        "c": false
      },
      {
        "id": "D",
        "t": "Reestablishing the compromised system’s configuration and settings",
        "c": false
      }
    ],
    "expl": "L'analisi post-incidente ha il compito prioritario di evidenziare la causa originaria (root cause) che ha generato il problema, identificando le mitigazioni adatte a non farlo avvenire mai più.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_477",
    "text": "Which of the following is most likely to be used as a just-in-time reference document within a security operations center?",
    "opts": [
      {
        "id": "A",
        "t": "Change management policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk profile",
        "c": false
      },
      {
        "id": "C",
        "t": "Playbook",
        "c": true
      },
      {
        "id": "D",
        "t": "SIEM profile",
        "c": false
      }
    ],
    "expl": "I Playbook fungono da pratici fogli di riferimento subitanei (just-in-time reference document) progettati per fornire flussi d'azione guidati per minacce e allarmi specifici.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_525",
    "text": "Which of the following objectives is best achieved by a tabletop exercise?",
    "opts": [
      {
        "id": "A",
        "t": "Familiarizing participants with the incident response process",
        "c": true
      },
      {
        "id": "B",
        "t": "Deciding red and blue team rules of engagement",
        "c": false
      },
      {
        "id": "C",
        "t": "Quickly determining the impact of an actual security breach",
        "c": false
      },
      {
        "id": "D",
        "t": "Conducting multiple security investigations in parallel",
        "c": false
      }
    ],
    "expl": "Lo scopo cardine e intrinseco di una Tabletop exercise è fare in modo che tutti i differenti attori azionari e aziendali conoscano ed abbiano confidenza con i flussi dell'Incident Response Plan.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_533",
    "text": "Which of the following elements of digital forensics should a company use if it needs to ensure the integrity of evidence?",
    "opts": [
      {
        "id": "A",
        "t": "Preservation",
        "c": true
      },
      {
        "id": "B",
        "t": "E-discovery",
        "c": false
      },
      {
        "id": "C",
        "t": "Acquisition",
        "c": false
      },
      {
        "id": "D",
        "t": "Containment",
        "c": false
      }
    ],
    "expl": "La catena di custodia, il contenimento tempestivo e i test di tipo tabletop assicurano la conformità e la robustezza del processo di Incident Response.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_541",
    "text": "Which of the following activities is the first stage in the incident response process?",
    "opts": [
      {
        "id": "A",
        "t": "Detection",
        "c": true
      },
      {
        "id": "B",
        "t": "Declaration",
        "c": false
      },
      {
        "id": "C",
        "t": "Containment",
        "c": false
      },
      {
        "id": "D",
        "t": "Verification",
        "c": false
      }
    ],
    "expl": "Il ciclo formale della gestione dell'incidente principia con il rilevamento iniziale (Detection), fase investigativa deputata a riscontrare che l'anomalia o l'evento si stia effettivamente verificando.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_612",
    "text": "A Chief Information Security Officer is developing procedures to guide detective and corrective activities associated with common threats, including phishing, social engineering, and business email compromise. Which of the following documents would be most relevant to revise as part of this process?",
    "opts": [
      {
        "id": "A",
        "t": "SDLC",
        "c": false
      },
      {
        "id": "B",
        "t": "IRP",
        "c": true
      },
      {
        "id": "C",
        "t": "BCP",
        "c": false
      },
      {
        "id": "D",
        "t": "AUP",
        "c": false
      }
    ],
    "expl": "L'Incident Response Plan (IRP) è il documento strutturato d'organo massimo che stabilisce e guida dettagliatamente l'intero operato correttivo e preventivo del SOC contro tipi di minacce note.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_613",
    "text": "Which of the following testing techniques uses both defensive and offensive testing methodologies with developers to securely build key applications and software?",
    "opts": [
      {
        "id": "A",
        "t": "Blue",
        "c": false
      },
      {
        "id": "B",
        "t": "Yellow",
        "c": true
      },
      {
        "id": "C",
        "t": "Red",
        "c": false
      },
      {
        "id": "D",
        "t": "Green",
        "c": false
      }
    ],
    "expl": "Il colore 'Yellow' nel modello dei team di sicurezza descrive lo strato dei programmatori o degli sviluppatori (System Builders). Lo Yellow Team opera in sinergia integrata sia con chi difende o revisiona (Blue) sia con chi effettua test d'intrusione (Red).",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_616",
    "text": "Various company stakeholders meet to discuss roles and responsibilities in the event of a security breach that would affect offshore offices. Which of the following is this an example of?",
    "opts": [
      {
        "id": "A",
        "t": "Tabletop exercise",
        "c": true
      },
      {
        "id": "B",
        "t": "Penetration test",
        "c": false
      },
      {
        "id": "C",
        "t": "Geographic dispersion",
        "c": false
      },
      {
        "id": "D",
        "t": "Incident response",
        "c": false
      }
    ],
    "expl": "La discussione guidata orizzontale su scala multinazionale inerente a responsabilità logistiche, legali e operative dinanzi a una ipotetica compromissione costituisce una Tabletop exercise.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_638",
    "text": "Which of the following activities uses OSINT?",
    "opts": [
      {
        "id": "A",
        "t": "Social engineering testing",
        "c": true
      },
      {
        "id": "B",
        "t": "Data analysis of logs",
        "c": false
      },
      {
        "id": "C",
        "t": "Collecting evidence of malicious activity",
        "c": false
      },
      {
        "id": "D",
        "t": "Producing IOC for malicious artifacts",
        "c": false
      }
    ],
    "expl": "L'Open Source Intelligence (OSINT) estrae informazioni da fonti pubbliche per fini investigativi o per pianificare test ed esercizi realistici di social engineering contro l'organizzazione.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_664",
    "text": "A SOC analyst establishes a remote control session on an end user's machine and discovers the following in a file: gmail.com[ENT]my.name@gmail.com[ENT]NoOneCanGuessThis123! [ENT]Hello Susan, it was great to see you the other day! Let's plan a followup[BACKSPACE]follow-up meeting soon. Here is the link to register. [RTN][CTRL]c [CTRL]v [RTN]after[BACKSPACE]After you register give me a call on my cellphone. Which of the following actions should the SOC analyst perform first?",
    "opts": [
      {
        "id": "A",
        "t": "Advise the user to change passwords.",
        "c": true
      },
      {
        "id": "B",
        "t": "Reimage the end user's machine.",
        "c": false
      },
      {
        "id": "C",
        "t": "Check the policy on personal email at work.",
        "c": false
      },
      {
        "id": "D",
        "t": "Check host firewall logs.",
        "c": false
      }
    ],
    "expl": "Nel momento in cui l'analista constata un file (es. logger o session recovery) in cui l'utente ha esposto credenziali private e password in chiaro, la norma d'emergenza dispone di avvertire istantaneamente il proprietario dell'account affinché provveda a cambiare subito la password.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_683",
    "text": "Which of the following is the best reason to perform a tabletop exercise?",
    "opts": [
      {
        "id": "A",
        "t": "To address audit findings",
        "c": false
      },
      {
        "id": "B",
        "t": "To collect remediation response times",
        "c": false
      },
      {
        "id": "C",
        "t": "To update the IRP",
        "c": true
      },
      {
        "id": "D",
        "t": "To calculate the ROI",
        "c": false
      }
    ],
    "expl": "Le Tabletop exercise rappresentano lo strumento ideale per vagliare a freddo l'efficacia dei ruoli e, di riflesso, servono all'organizzazione per aggiornare e sanare l'Incident Response Plan (IRP).",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_738",
    "text": "Which of the following phases of the incident response process attempts to minimize disruption?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery",
        "c": false
      },
      {
        "id": "B",
        "t": "Containment",
        "c": true
      },
      {
        "id": "C",
        "t": "Preparation",
        "c": false
      },
      {
        "id": "D",
        "t": "Analysis",
        "c": false
      }
    ],
    "expl": "La fase di contenimento (Containment) persegue lo scopo principale di frenare, limitare o isolare la propagazione del cyberattacco verso il resto dell'infrastruttura di rete, sventando l'aggravarsi del danno e riducendo al minimo l'impatto e l'interruzione operativa.",
    "domain": 4,
    "objective": "4.8"
  },
  {
    "id": "SCREEN_016",
    "text": "An organization experiences a cybersecurity incident involving a command-and-control server. Which of the following logs should be analyzed to identify the impacted host? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Application",
        "c": false
      },
      {
        "id": "B",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "C",
        "t": "DHCP",
        "c": false
      },
      {
        "id": "D",
        "t": "Network",
        "c": true
      },
      {
        "id": "E",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "F",
        "t": "Database",
        "c": false
      }
    ],
    "expl": "I log di rete (Network) e dei firewall (Firewall) sono le sorgenti principali per tracciare il traffico di Command & Control (C2) ed individuare gli indirizzi IP dei sistemi interni coinvolti nell'incidente.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_023",
    "text": "A company's online shopping website became unusable shortly after midnight on January 30, 2023. When a security analyst reviewed the database server, the analyst noticed the following code used for backing up data: IF DATE() = \"01/30/2023\" THEN BEGIN DROP DATABASE WebShopOnline; END. Which of the following should the analyst do next?",
    "opts": [
      {
        "id": "A",
        "t": "Check for recently terminated DBAs.",
        "c": false
      },
      {
        "id": "B",
        "t": "Review WAF logs for evidence of command injection.",
        "c": true
      },
      {
        "id": "C",
        "t": "Scan the database server for malware.",
        "c": false
      },
      {
        "id": "D",
        "t": "Search the web server for ransomware notes.",
        "c": false
      }
    ],
    "expl": "L'istruzione 'IF DATE() = ... DROP DATABASE' indica una Logic Bomb inserita nel codice di backup. L'analista dovrebbe innanzitutto ispezionare i log del WAF (Web Application Firewall) alla ricerca di tentativi di Command Injection che potrebbero aver inoculato tale codice.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_028",
    "text": "A security analyst is investigating a workstation that is suspected of outbound communication to a command-and-control server. During the investigation, the analyst discovered that logs on the endpoint were deleted. Which of the following logs would the analyst most likely look at next?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "ACL",
        "c": false
      },
      {
        "id": "D",
        "t": "Windows security",
        "c": false
      }
    ],
    "expl": "Se i log locali dell'endpoint compromesso sono stati eliminati per cancellare le tracce delle sue attività in uscita, l'analista deve consultare i log del Firewall di rete per intercettare e visualizzare le connessioni persistenti verso il server C2.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_049",
    "text": "Which of the following correctly defines a combination of hardware and software that classify and analyze data from numerous sources?",
    "opts": [
      {
        "id": "A",
        "t": "SIEM",
        "c": true
      },
      {
        "id": "B",
        "t": "LOG",
        "c": false
      },
      {
        "id": "C",
        "t": "NAC",
        "c": false
      },
      {
        "id": "D",
        "t": "DLP",
        "c": false
      }
    ],
    "expl": "Il SIEM (Security Information and Event Management) è l'infrastruttura d'elezione per aggregare, correlare e analizzare in tempo reale enormi moli di log provenienti da fonti e dispositivi eterogenei.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_058",
    "text": "To reduce the configuration management burden of user devices, your manager has decided a security monitoring solution must be implemented where technician stations can scan and query user devices on demand. The installation, configuration, and maintenance of security monitoring software on user devices is not desirable. What type of device security monitoring solution should be considered?",
    "opts": [
      {
        "id": "A",
        "t": "SOAR",
        "c": false
      },
      {
        "id": "B",
        "t": "Agent-based",
        "c": false
      },
      {
        "id": "C",
        "t": "Agentless",
        "c": true
      },
      {
        "id": "D",
        "t": "SIEM",
        "c": false
      }
    ],
    "expl": "Una soluzione di monitoraggio 'Agentless' permette di analizzare lo stato di sicurezza dei nodi della rete effettuando scansioni su richiesta (on-demand), eliminando l'onere operativo di installare e aggiornare agent dedicati.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_126",
    "text": "A security analyst is investigating a workstation that is suspected of outbound communication to a command-and-control server. During the investigation, the analyst discovered that logs on the endpoint were deleted. Which of the following logs would the analyst most likely look at next?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "ACL",
        "c": false
      },
      {
        "id": "D",
        "t": "Windows security",
        "c": false
      }
    ],
    "expl": "Se l'attaccante elimina i log sull'endpoint per ostruire l'indagine, i log del Firewall perimetrale offrono una sorgente di verità alternativa e inalterabile per ricostruire le sessioni initiate verso il Command and Control.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_149",
    "text": "A security analyst is reviewing alerts in the SIEM related to potential malicious network traffic coming from an employee’s corporate laptop. The security analyst has determined that additional data about the executable running on the machine is necessary to continue the investigation. Which of the following logs should the analyst use as a data source?",
    "opts": [
      {
        "id": "A",
        "t": "Application",
        "c": false
      },
      {
        "id": "B",
        "t": "IPS/IDS",
        "c": false
      },
      {
        "id": "C",
        "t": "Network",
        "c": false
      },
      {
        "id": "D",
        "t": "Endpoint",
        "c": true
      }
    ],
    "expl": "Per ottenere dettagli granulari e metadati relativi a un eseguibile attivo su una macchina (es. hash del file, directory di avvio, ID di processo), lo strumento e data source ottimale è dato dai log di Endpoint.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_163",
    "text": "A newly appointed board member with cybersecurity knowledge wants the board of directors to receive a quarterly report detailing the number of incidents that impacted the organization. The systems administrator is creating a way to present the data to the board of directors. Which of the following should the systems administrator use?",
    "opts": [
      {
        "id": "A",
        "t": "Packet captures",
        "c": false
      },
      {
        "id": "B",
        "t": "Vulnerability scans",
        "c": false
      },
      {
        "id": "C",
        "t": "Metadata",
        "c": false
      },
      {
        "id": "D",
        "t": "Dashboard",
        "c": true
      }
    ],
    "expl": "I cruscotti operativi (Dashboard) offrono una vista grafica, sintetica e dinamica delle metriche di sicurezza, ideali per mostrare l'andamento degli incidenti al consiglio di amministrazione (Board of Directors).",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_207",
    "text": "An administrator is reviewing a single server's security logs and discovers repeated Event ID 4625 logon failures in rapid succession. Which of the following best describes the action captured in this log file?",
    "opts": [
      {
        "id": "A",
        "t": "Brute-force attack",
        "c": true
      },
      {
        "id": "B",
        "t": "Privilege escalation",
        "c": false
      },
      {
        "id": "C",
        "t": "Failed password audit",
        "c": false
      },
      {
        "id": "D",
        "t": "Forgotten password by the user",
        "c": false
      }
    ],
    "expl": "L'Event ID 4625 indica un fallimento di autenticazione in Windows. Una sequenza rapidissima di tali eventi contro un singolo server è la firma tipica di un attacco a forza bruta (Brute-force attack).",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_256",
    "text": "A security analyst locates a potentially malicious video file on a server and needs to identify both the creation date and the file's creator. Which of the following actions would most likely give the security analyst the information required?",
    "opts": [
      {
        "id": "A",
        "t": "Obtain the file's SHA-256 hash.",
        "c": false
      },
      {
        "id": "B",
        "t": "Use hexdump on the file's contents.",
        "c": false
      },
      {
        "id": "C",
        "t": "Check endpoint logs.",
        "c": false
      },
      {
        "id": "D",
        "t": "Query the file's metadata.",
        "c": true
      }
    ],
    "expl": "I metadati (Metadata) memorizzati all'interno di un file contengono informazioni accessorie fondamentali quali autore, data di creazione, coordinate GPS e software di scrittura della risorsa.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_287",
    "text": "An organization experiences a cybersecurity incident involving a command-and-control server. Which of the following logs should be analyzed to identify the impacted host? (Choose two.)",
    "opts": [
      {
        "id": "A",
        "t": "Application",
        "c": false
      },
      {
        "id": "B",
        "t": "Authentication",
        "c": false
      },
      {
        "id": "C",
        "t": "DHCP",
        "c": false
      },
      {
        "id": "D",
        "t": "Network",
        "c": true
      },
      {
        "id": "E",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "F",
        "t": "Database",
        "c": false
      }
    ],
    "expl": "I log di rete (Network) e dei firewall (Firewall) consentono di rintracciare i flussi di comunicazione stabilita con domini esterni noti come server di Command and Control (C2).",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_317",
    "text": "A security analyst is investigating a workstation that is suspected of outbound communication to a command-and-control server. During the investigation, the analyst discovered that logs on the endpoint were deleted. Which of the following logs would the analyst most likely look at next?",
    "opts": [
      {
        "id": "A",
        "t": "IPS",
        "c": false
      },
      {
        "id": "B",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "ACL",
        "c": false
      },
      {
        "id": "D",
        "t": "Windows security",
        "c": false
      }
    ],
    "expl": "Fatta eccezione per i log locali che l'attaccante cancella facilmente sull'OS, i log del Firewall centralizzato rimangono l'ancora di salvezza per rintracciare comunicazioni suspicose verso IP sgraditi.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_333",
    "text": "Which of the following alert types is the most likely to be ignored over time?",
    "opts": [
      {
        "id": "A",
        "t": "True positive",
        "c": false
      },
      {
        "id": "B",
        "t": "True negative",
        "c": false
      },
      {
        "id": "C",
        "t": "False positive",
        "c": true
      },
      {
        "id": "D",
        "t": "False negative",
        "c": false
      }
    ],
    "expl": "I falsi positivi (False Positives) generano allarmi ingiustificati e sono la principale causa dell'affaticamento da alert (alert fatigue), che induce gli analisti a ignorare le notifiche nel corso del tempo.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_375",
    "text": "An incident analyst finds several image files on a hard disk. The image files may contain geolocation coordinates. Which of the following best describes the type of information the analyst is trying to extract from the image files?",
    "opts": [
      {
        "id": "A",
        "t": "Log data",
        "c": false
      },
      {
        "id": "B",
        "t": "Metadata",
        "c": true
      },
      {
        "id": "C",
        "t": "Encrypted data",
        "c": false
      },
      {
        "id": "D",
        "t": "Sensitive data",
        "c": false
      }
    ],
    "expl": "Le coordinate geografiche incorporate nelle foto (Exif data) rappresentano metadati (Metadata) utili in ambito cyber-investigativo per geo-localizzare reperti e attività.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_380",
    "text": "While performing digital forensics, which of the following is considered the most volatile and should have the contents collected first?",
    "opts": [
      {
        "id": "A",
        "t": "Hard drive",
        "c": false
      },
      {
        "id": "B",
        "t": "RAM",
        "c": true
      },
      {
        "id": "C",
        "t": "SSD",
        "c": false
      },
      {
        "id": "D",
        "t": "Temporary files",
        "c": false
      }
    ],
    "expl": "Nelle indagini forensi, la memoria RAM è considerata il supporto a più alta volatilità ed è prioritario acquisirne l'immagine prima che il computer venga spento o riavviato.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_481",
    "text": "A university employee logged on to the academic server and attempted to guess the system administrators’ log-in credentials. Which of the following security measures should the university have implemented to detect the employee’s attempts to gain access to the administrators’ accounts?",
    "opts": [
      {
        "id": "A",
        "t": "Two-factor authentication",
        "c": false
      },
      {
        "id": "B",
        "t": "Firewall",
        "c": false
      },
      {
        "id": "C",
        "t": "Intrusion prevention system",
        "c": false
      },
      {
        "id": "D",
        "t": "User activity logs",
        "c": true
      }
    ],
    "expl": "I log di attività utente (User activity logs) consentono di rilevare tentativi di indovinare le credenziali di amministratore da parte di un utente malintenzionato o dipendente interno non autorizzato.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_522",
    "text": "A security analyst is reviewing logs to identify the destination of command-and-control traffic originating from a compromised device within the on-premises network. Which of the following is the best log to review?",
    "opts": [
      {
        "id": "A",
        "t": "IDS",
        "c": false
      },
      {
        "id": "B",
        "t": "Antivirus",
        "c": false
      },
      {
        "id": "C",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "D",
        "t": "Application",
        "c": false
      }
    ],
    "expl": "Il log del Firewall di sbarramento è la risorsa definitiva per individuare a quali indirizzi IP o server di Command & Control esterni è diretta una connessione anomala in uscita.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_534",
    "text": "A company suffered a critical incident where 30GB of data was exfiltrated from the corporate network. Which of the following actions is the most efficient way to identify where the system data was exfiltrated from and what location the attacker sent the data to?",
    "opts": [
      {
        "id": "A",
        "t": "Analyze firewall and network logs for large amounts of outbound traffic to external IP addresses or domains.",
        "c": true
      },
      {
        "id": "B",
        "t": "Analyze IPS and IDS logs to find the IP addresses used by the attacker for reconnaissance scans.",
        "c": false
      },
      {
        "id": "C",
        "t": "Analyze endpoint and application logs to see whether file-sharing programs were running on the company systems.",
        "c": false
      },
      {
        "id": "D",
        "t": "Analyze external vulnerability scans and automated reports to identify the systems the attacker could have exploited a remote code vulnerability.",
        "c": false
      }
    ],
    "expl": "Analizzare i log di Firewall e di rete alla ricerca di grandi moli inconsuete di dati trasmessi (data spikes) verso IP esterni è l'approccio più rapido per identificare l'entità e la destinazione di un'esfiltrazione.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_647",
    "text": "Which of the following is the stage in an investigation when forensic images are obtained?",
    "opts": [
      {
        "id": "A",
        "t": "Acquisition",
        "c": true
      },
      {
        "id": "B",
        "t": "Preservation",
        "c": false
      },
      {
        "id": "C",
        "t": "Reporting",
        "c": false
      },
      {
        "id": "D",
        "t": "E-discovery",
        "c": false
      }
    ],
    "expl": "La fase di Acquisizione (Acquisition) è lo stadio dell'investigazione digitale forense in cui si ottengono le copie e le immagini conformi (bit-by-bit images) dei supporti di memorizzazione.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_661",
    "text": "A security analyst learns that an attack vector, which was used as a part of a recent incident, was a well-known IoT device exploit. The analyst needs to review logs to identify the time of initial exploit. Which of the following logs should the analyst review first?",
    "opts": [
      {
        "id": "A",
        "t": "Endpoint",
        "c": false
      },
      {
        "id": "B",
        "t": "Application",
        "c": false
      },
      {
        "id": "C",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "D",
        "t": "NAC",
        "c": false
      }
    ],
    "expl": "Per identificare l'esatto momento dell'exploit iniziale contro un apparato IoT esposto sulla rete, il log del Firewall di frontiera è la sorgente primaria che traccia ogni pacchetto entrante e la relativa sessione.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_680",
    "text": "Which of the following is the stage in an investigation when forensic images are obtained?",
    "opts": [
      {
        "id": "A",
        "t": "Acquisition",
        "c": true
      },
      {
        "id": "B",
        "t": "Preservation",
        "c": false
      },
      {
        "id": "C",
        "t": "Reporting",
        "c": false
      },
      {
        "id": "D",
        "t": "E-discovery",
        "c": false
      }
    ],
    "expl": "La fase di Acquisizione (Acquisition) prevede l'estrazione fisica o logica del dato al fine di preservare l'integrità del reperto originale.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_712",
    "text": "A security analyst notices an increase in port scans on the edge of the corporate network. Which of the following logs should the analyst check to obtain the attacker's source IP address?",
    "opts": [
      {
        "id": "A",
        "t": "OS security",
        "c": false
      },
      {
        "id": "B",
        "t": "Firewall",
        "c": true
      },
      {
        "id": "C",
        "t": "Application",
        "c": false
      },
      {
        "id": "D",
        "t": "Endpoint",
        "c": false
      }
    ],
    "expl": "Port scan e scansioni di rete dirette al perimetro aziendale lasciano tracce inequivocabili sui log del Firewall, registrando gli IP sorgenti dei blocchi e dei drop.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_737",
    "text": "A security analyst is reviewing the following logs about a suspicious activity alert for a user's VPN log-ins. The logs show successful logins from Chicago-IL-USA on multiple dates, and a login from Rome-Italy on 2023-01-27 at 09:43:55. Which of the following malicious activity indicators triggered the alert?",
    "opts": [
      {
        "id": "A",
        "t": "Impossible travel",
        "c": true
      },
      {
        "id": "B",
        "t": "Account lockout",
        "c": false
      },
      {
        "id": "C",
        "t": "Blocked content",
        "c": false
      },
      {
        "id": "D",
        "t": "Concurrent session usage",
        "c": false
      }
    ],
    "expl": "L'alert di 'Impossible travel' si attiva quando nell'arco di brevissimo tempo si riscontrano credenziali o login VPN eseguiti da località distanti (es. Chicago e Roma), segno di una compromissione delle credenziali.",
    "domain": 4,
    "objective": "4.9"
  },
  {
    "id": "SCREEN_022",
    "text": "Which of the following control types is AUP an example of?",
    "opts": [
      {
        "id": "A",
        "t": "Physical",
        "c": false
      },
      {
        "id": "B",
        "t": "Managerial",
        "c": true
      },
      {
        "id": "C",
        "t": "Operational",
        "c": false
      },
      {
        "id": "D",
        "t": "Technical",
        "c": false
      }
    ],
    "expl": "La politica di utilizzo accettabile (AUP) definisce regole comportamentali redatte dalla dirigenza aziendale per normare la condotta del dipendente, configurandosi quindi come un controllo Gestionale (Managerial Control).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_029",
    "text": "A company needs to keep the fewest records possible, meet compliance needs, and ensure destruction of records that are no longer needed. Which of the following best describes the policy that meets these requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Standards policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Disposal policy",
        "c": false
      },
      {
        "id": "C",
        "t": "Retention policy",
        "c": true
      },
      {
        "id": "D",
        "t": "Non-disclosure policy",
        "c": false
      }
    ],
    "expl": "La politica di ritenzione (Retention Policy) impone che i dati vengano trattenuti esclusivamente per il periodo minimo necessario per motivi regolamentari ed operativi (fewest records possible), sancendo poi la loro distruzione programmata per limitare oneri e rischi legali.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_098",
    "text": "How can an organization build a culture of compliance among its employees?",
    "opts": [
      {
        "id": "A",
        "t": "Ensuring that system configurations implement zero trust",
        "c": false
      },
      {
        "id": "B",
        "t": "Mandating that standard operating procedures must be stored in central locations",
        "c": false
      },
      {
        "id": "C",
        "t": "Performing physical checks and audits during work hours",
        "c": false
      },
      {
        "id": "D",
        "t": "Teaching employees procedures to use technology safely and effectively",
        "c": true
      }
    ],
    "expl": "Formare il personale, educandolo alle metodologie interne atte a fruire e padroneggiare costruttivamente le tecnologie aziendali in totale sicurezza, è l'accorgimento ottimale per radicare un'operosa cultura della conformità.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_153",
    "text": "Which of the following security control types does an acceptable use policy best represent?",
    "opts": [
      {
        "id": "A",
        "t": "Administrative",
        "c": false
      },
      {
        "id": "B",
        "t": "Detective",
        "c": false
      },
      {
        "id": "C",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "D",
        "t": "Preventive",
        "c": true
      }
    ],
    "expl": "Functionalmente, firmare e comprendere l'AUP avverte e inibisce i dipendenti da comportamenti illeciti sul perimetro aziendale. Per tale motivo, agisce come potente controllo Preventivo (Preventive Control).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_195",
    "text": "A company is planning to set up a SIEM system and assign an analyst to review the logs on a weekly basis. Which of the following types of controls is the company setting up?",
    "opts": [
      {
        "id": "A",
        "t": "Corrective",
        "c": false
      },
      {
        "id": "B",
        "t": "Preventive",
        "c": false
      },
      {
        "id": "C",
        "t": "Detective",
        "c": true
      },
      {
        "id": "D",
        "t": "Administrative",
        "c": false
      }
    ],
    "expl": "Strutturare centralizzazioni SIEM abbinandole all'analisi periodica manuale dei log da parte di un operatore SOC costituisce un classico controllo Investigativo/di Rilevamento (Detective Control), preposto ad identificare abusi e compromissioni già avviate sul perimetro.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_202",
    "text": "Which of the following is the most likely to be included as an element of communication in a security awareness program?",
    "opts": [
      {
        "id": "A",
        "t": "Reporting phishing attempts or other suspicious activities",
        "c": true
      },
      {
        "id": "B",
        "t": "Documenting standard operating procedures for the incident handlers",
        "c": false
      },
      {
        "id": "C",
        "t": "Drafting a non-disclosure agreement for the marketing department",
        "c": false
      },
      {
        "id": "D",
        "t": "Providing feedback on the change management process",
        "c": false
      }
    ],
    "expl": "Comunicare come, quando e a chi palesare prontamente esche di phishing, messaggi ingannevoli ed interazioni losche rappresenta lo snodo primario di notifica in ogni campagna efficace di Security Awareness.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_214",
    "text": "An accounting clerk sent money to an attacker's bank account after receiving fraudulent instructions to use a new account. Which of the following would most likely prevent this activity in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Standardizing computer base configurations",
        "c": false
      },
      {
        "id": "B",
        "t": "Implementing continuous delivery and integration processes",
        "c": false
      },
      {
        "id": "C",
        "t": "Implementing security information and event management",
        "c": false
      },
      {
        "id": "D",
        "t": "Updating processes for sending wire transfers",
        "c": true
      }
    ],
    "expl": "I blocchi contro le truffe finanziarie (BEC) di natura psicologica richiedono di mitigare l'arbitrarietà umana, riorganizzando ed aggiornando i flussi approvativi e i processi legati all'inoltro di bonifici (wire transfers), quali la doppia firma.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_231",
    "text": "After a security awareness training session, a user called the IT help desk and reported a suspicious call. The suspicious caller stated that the Chief Financial Officer wanted credit card information in order to close an invoice. Which of the following topics did the user recognize from the training?",
    "opts": [
      {
        "id": "A",
        "t": "Onboarding",
        "c": false
      },
      {
        "id": "B",
        "t": "Acceptable use policy",
        "c": false
      },
      {
        "id": "C",
        "t": "Social engineering",
        "c": true
      },
      {
        "id": "D",
        "t": "Non-disclosure agreement",
        "c": false
      }
    ],
    "expl": "Le manipolazioni tese ad estorcere credenziali, account finanziari o token fingendo l'autorità di C-Levels (es. CFO) tramite squilli telefonici fasulli ricalcano appieno le tattiche subdole dell'Ingegneria Sociale (Social Engineering).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_233",
    "text": "An administrator assists the legal and compliance team with ensuring information about customer transactions is archived for the proper time period. Which of the following data policies is the administrator carrying out?",
    "opts": [
      {
        "id": "A",
        "t": "Security",
        "c": false
      },
      {
        "id": "B",
        "t": "Retention",
        "c": true
      },
      {
        "id": "C",
        "t": "Sharing",
        "c": false
      },
      {
        "id": "D",
        "t": "Classification",
        "c": false
      }
    ],
    "expl": "Garantire l'archiviazione blindata e ordinaria delle transazioni commerciali d'utenza per precise finestre temporali stabilite dalla legge discende direttamente dall'applicazione degli standard di Ritenzione (Data Retention).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_318",
    "text": "An IT manager is putting together a documented plan describing how the organization will keep operating in the event of a global incident. Which of the following plans is the IT manager creating?",
    "opts": [
      {
        "id": "A",
        "t": "Business continuity",
        "c": true
      },
      {
        "id": "B",
        "t": "Disaster recovery",
        "c": false
      },
      {
        "id": "C",
        "t": "Incident response",
        "c": false
      },
      {
        "id": "D",
        "t": "Communication",
        "c": false
      }
    ],
    "expl": "Il Business Continuity Plan (BCP) è lo strumento programmatico atto a pianificare strategie ad alto livello per permettere ad uffici e produzioni aziendali di continuare ad erogare funzioni vitali durante gravi incidenti globali.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_351",
    "text": "A security analyst developed a script to automate a trivial and repeatable task. Which of the following best describes the benefits of ensuring other team members understand how the script works?",
    "opts": [
      {
        "id": "A",
        "t": "To avoid automated task errors",
        "c": false
      },
      {
        "id": "B",
        "t": "To ensure security of the automated script",
        "c": false
      },
      {
        "id": "C",
        "t": "To enforce continuous deployment of secure systems",
        "c": false
      },
      {
        "id": "D",
        "t": "To prevent a single point of failure",
        "c": true
      }
    ],
    "expl": "La documentazione e condivisione d'uso degli script automatizzati d'officina con gli altri sbarra la nascita di pericolosi Single Point of Failure (SPOF) a sfondo umano ed operativo all'interno del reparto di sicurezza.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_358",
    "text": "An administrator at a small business notices an increase in support calls from employees who receive a blocked page message after trying to navigate to a spoofed website. Which of the following should the administrator do?",
    "opts": [
      {
        "id": "A",
        "t": "Update the organization's acceptable use policy.",
        "c": false
      },
      {
        "id": "B",
        "t": "Change the email filtering settings to block high-reputation domains.",
        "c": false
      },
      {
        "id": "C",
        "t": "Implement security awareness training.",
        "c": true
      },
      {
        "id": "D",
        "t": "Ensure standard operating procedures are Centralized.",
        "c": false
      }
    ],
    "expl": "Se un elevato volume di impiegati incappa in segnali di blocco navigazione cliccando su collegamenti malevoli o ingannevoli (spoofed), l'ingaggio di un percorso formativo (Security Awareness Training) è imperativo per istruirli.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_387",
    "text": "A company needs to keep the fewest records possible, meet compliance needs, and ensure destruction of records that are no longer needed. Which of the following best describes the policy that meets these requirements?",
    "opts": [
      {
        "id": "A",
        "t": "Standards policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Disposal policy",
        "c": false
      },
      {
        "id": "C",
        "t": "Retention policy",
        "c": true
      },
      {
        "id": "D",
        "t": "Non-disclosure policy",
        "c": false
      }
    ],
    "expl": "Come asseverato precedentemente, l'iter di conservazione programmata orientato al minimo storico archiviato (fewest records possible) e al contempo conforme alle leggi va sotto lo statuto di Retention Policy.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_409",
    "text": "Which of the following data roles is responsible for identifying risks and appropriate access to data?",
    "opts": [
      {
        "id": "A",
        "t": "Owner",
        "c": true
      },
      {
        "id": "B",
        "t": "Controller",
        "c": false
      },
      {
        "id": "C",
        "t": "Custodian",
        "c": false
      },
      {
        "id": "D",
        "t": "Processor",
        "c": false
      }
    ],
    "expl": "È responsabilità preminente ed esclusiva del Data Owner (Proprietario) analizzare e catalogare i rischi d'accesso del patrimonio informativo aziendale definendo a chi debba essere concessa l'autorizzazione d'uso.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_433",
    "text": "Which of the following agreement types is used to limit external discussions?",
    "opts": [
      {
        "id": "A",
        "t": "SLA",
        "c": false
      },
      {
        "id": "B",
        "t": "NDA",
        "c": true
      },
      {
        "id": "C",
        "t": "MOU",
        "c": false
      },
      {
        "id": "D",
        "t": "BPA",
        "c": false
      }
    ],
    "expl": "Il Non-Disclosure Agreement (NDA) è lo strumento contrattuale e di governance preposto espressamente a blindare le comunicazioni riservate al di fuori del perimetro societario ed impedire la fuga di segreti commerciali.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_449",
    "text": "Which of the following should an internal auditor check for first when conducting an audit of the organization’s risk management program?",
    "opts": [
      {
        "id": "A",
        "t": "Policies and procedures",
        "c": true
      },
      {
        "id": "B",
        "t": "Standards and baselines",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk assessments and matrices",
        "c": false
      },
      {
        "id": "D",
        "t": "Firewalls and access control lists",
        "c": false
      }
    ],
    "expl": "Nessun auditor interno può certificare i dettagli tecnici senza prima rintracciare i pilastri generali di indirizzo: per tale ragione, un'ispezione della gestione del rischio comincia sempre analizzando le Politiche e le Procedure.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_502",
    "text": "An IT administrator needs to ensure data retention standards are implemented on an enterprise application. Which of the following describes the administrator’s role?",
    "opts": [
      {
        "id": "A",
        "t": "Owner",
        "c": false
      },
      {
        "id": "B",
        "t": "Custodian",
        "c": true
      },
      {
        "id": "C",
        "t": "Controller",
        "c": false
      },
      {
        "id": "D",
        "t": "Processor",
        "c": false
      }
    ],
    "expl": "L'amministratore che traduce in pratica sistemistica le regole di data encryption, retention e backup decise dal business opera specificamente nel ruolo tecnico di Data Custodian (Custode del dato).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_527",
    "text": "Which of the following organizational documents is most often used to establish and communicate expectations associated with integrity and ethical behavior within an organization?",
    "opts": [
      {
        "id": "A",
        "t": "AUP",
        "c": true
      },
      {
        "id": "B",
        "t": "SLA",
        "c": false
      },
      {
        "id": "C",
        "t": "MOU",
        "c": false
      },
      {
        "id": "D",
        "t": "NDA",
        "c": false
      }
    ],
    "expl": "La Politica di Utilizzo Accettabile (AUP) stabilisce formalmente i limiti dell'uso morale della connettività aziendale, ergendosi a principale diffusore di etica ed integrità per gli asseverati interni.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_537",
    "text": "A legal department must maintain a backup from all devices that have been shredded and recycled by a third party. Which of the following best describes this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "Data retention",
        "c": true
      },
      {
        "id": "B",
        "t": "Legal hold",
        "c": false
      },
      {
        "id": "C",
        "t": "Chain of custody",
        "c": false
      },
      {
        "id": "D",
        "t": "Data classification",
        "c": false
      }
    ],
    "expl": "La pretesa legale di mantenere persistenti copie mirror e archivi backup derivati da storage magnetici distrutti (shredded) o avviati a riciclo da terzi rientra a tutti gli effetti nell'alveo normativo della Data Retention.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_548",
    "text": "Which of the following techniques can be used to sanitize the data contained on a hard drive while allowing for the hard drive to be repurposed?",
    "opts": [
      {
        "id": "A",
        "t": "Degaussing",
        "c": false
      },
      {
        "id": "B",
        "t": "Incineration",
        "c": false
      },
      {
        "id": "C",
        "t": "Shredding",
        "c": false
      },
      {
        "id": "D",
        "t": "Wipe tool",
        "c": true
      }
    ],
    "expl": "Uno strumento di riscrittura integrale o sovrascrittura logica a passaggi sequenziali (Wipe tool) permette di eliminare permanentemente le informazioni da un HDD lasciando intatta e riutilizzabile la circuiteria fisica per il reimpiego aziendale (repurposing).",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_571",
    "text": "Which of the following would a security administrator use to comply with a secure baseline during a patch update?",
    "opts": [
      {
        "id": "A",
        "t": "Standards",
        "c": false
      },
      {
        "id": "B",
        "t": "Policies",
        "c": false
      },
      {
        "id": "C",
        "t": "Standard operating procedure",
        "c": true
      },
      {
        "id": "D",
        "t": "Non-disclosure agreement",
        "c": false
      }
    ],
    "expl": "Conformarsi metodicamente a parametri preconfigurati (baseline) durante le installazioni delle patch di sicurezza viene garantito mediante l'esecuzione scrupolosa di una Standard Operating Procedure (SOP), che indica ogni iter esecutivo passo per passo.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_585",
    "text": "A new employee accessed an unauthorized website. An investigation found that the employee violated the company's rules. Which of the following did the employee violate?",
    "opts": [
      {
        "id": "A",
        "t": "SLA",
        "c": false
      },
      {
        "id": "B",
        "t": "AUP",
        "c": true
      },
      {
        "id": "C",
        "t": "NDA",
        "c": false
      },
      {
        "id": "D",
        "t": "MOU",
        "c": false
      }
    ],
    "expl": "Accedere liberamente ad indirizzi o portali internet contrari al decoro od alle normative protettive della ditta viola direttamente l'Acceptable Use Policy (AUP) vistata ed apprivata dall'impiegato.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_635",
    "text": "Employees sign an agreement that restricts specific activities when leaving the company. Violating the agreement can result in legal consequences. Which of the following agreements does this best describe?",
    "opts": [
      {
        "id": "A",
        "t": "SLA",
        "c": false
      },
      {
        "id": "B",
        "t": "BPA",
        "c": false
      },
      {
        "id": "C",
        "t": "NDA",
        "c": true
      },
      {
        "id": "D",
        "t": "AUP",
        "c": false
      }
    ],
    "expl": "Prescrivere divieti divulgativi o particolari stringenti patti di riservatezza quando si conclude il proprio cammino d'impiego societario (lasciando l'organico) è un caposaldo presidiato da accordi di tipo NDA.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_650",
    "text": "A Chief Information Security Officer (CISO) has developed information security policies that relate to the software development methodology. Which of the following would the CISO most likely include in the organization's documentation?",
    "opts": [
      {
        "id": "A",
        "t": "Peer review requirements",
        "c": true
      },
      {
        "id": "B",
        "t": "Escalation path for software deployment updates",
        "c": false
      },
      {
        "id": "C",
        "t": "Procedures for hotfix deployments",
        "c": false
      },
      {
        "id": "D",
        "t": "Patching windows schedules for development frameworks",
        "c": false
      }
    ],
    "expl": "Nel plasmare le regole generali dello stoccaggio ed ingegnerizzazione logica del software d'impresa, il CISO vi immette i passaggi obbligatori di Peer Review (revisione critica incrociata del codice) per asseverarne la sicurezza.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_651",
    "text": "An organization is developing a security program that conveys the responsibilities associated with the general operation of systems and software within the organization. Which of the following documents would most likely communicate these expectations?",
    "opts": [
      {
        "id": "A",
        "t": "Non-disclosure agreement",
        "c": false
      },
      {
        "id": "B",
        "t": "Memorandum of understanding",
        "c": false
      },
      {
        "id": "C",
        "t": "Acceptable use policy",
        "c": true
      },
      {
        "id": "D",
        "t": "Business partnership agreement",
        "c": false
      }
    ],
    "expl": "I canali e i limiti operativi con cui le utenze interne interagiscono quotidianamente con i software ed i circuiti di calcolo societari (general operations) trovano sede comunicativa nell'AUP.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_655",
    "text": "Which of the following documents details how to accomplish a technical security task?",
    "opts": [
      {
        "id": "A",
        "t": "Policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Guideline",
        "c": false
      },
      {
        "id": "C",
        "t": "Standard",
        "c": false
      },
      {
        "id": "D",
        "t": "Procedure",
        "c": true
      }
    ],
    "expl": "Il documento teso a sviscerare materialmente a livello passo-passo l'adempimento e il compimento di una determinata mansione di difesa è classificato come Procedura.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_685",
    "text": "For an upcoming product launch, a company hires a marketing agency whose owner is a close relative of the Chief Executive Officer. Which of the following did the company violate?",
    "opts": [
      {
        "id": "A",
        "t": "General security policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Insider threat policy",
        "c": false
      },
      {
        "id": "C",
        "t": "Whistleblowing policy",
        "c": false
      },
      {
        "id": "D",
        "t": "Conflict of interest policy",
        "c": true
      }
    ],
    "expl": "Appaltare campagne remunerative ad aziende controllate da parenti prossimi dei C-Levels (quali il coniuge o un consanguineo del CEO) contrasta direttamente con le norme di governance interna basate sulla Conflict of Interest Policy.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_688",
    "text": "Which of the following is the most important element when defining effective security governance?",
    "opts": [
      {
        "id": "A",
        "t": "Deploying next-generation security systems to mitigate risk",
        "c": false
      },
      {
        "id": "B",
        "t": "Performing physical security audits on an annual basis",
        "c": false
      },
      {
        "id": "C",
        "t": "Assigning roles and responsibilities for owners, controllers, and custodians",
        "c": true
      },
      {
        "id": "D",
        "t": "Developing standard operating procedures for the technical team",
        "c": false
      }
    ],
    "expl": "Anche ponendo in atto i migliori firewall o audit fisici, l'impianto organizzativo della sicurezza collassa se non vengono preventivamente scolpiti ed attribuiti i compiti, i ruoli e le connesse risultanze a carichi d' Owners, Controllers e Custodians.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_721",
    "text": "A company wants to prevent proprietary and confidential company information from being shared to outsiders.",
    "opts": [
      {
        "id": "A",
        "t": "AUP",
        "c": false
      },
      {
        "id": "B",
        "t": "SLA",
        "c": false
      },
      {
        "id": "C",
        "t": "MOU",
        "c": false
      },
      {
        "id": "D",
        "t": "NDA",
        "c": true
      }
    ],
    "expl": "Il Non-Disclosure Agreement (NDA, accordo di non divulgazione) è l'attestato formale legale apposto a prevenzione della fuoriuscita di nozioni di privativa industriale o di dati sensibili di sviluppo a figure esterne slegate dall'impresa.",
    "domain": 5,
    "objective": "5.1"
  },
  {
    "id": "SCREEN_041",
    "source": "TL",
    "text": "You are part of a penetration testing red team that will attempt to discover and exploit IT service vulnerabilities. Due to the sensitive nature of data on the network to be pen tested, the red team has been asked to sign a legal document. Which document is this?",
    "opts": [
      {
        "id": "A",
        "t": "Memorandum of agreement",
        "c": false
      },
      {
        "id": "B",
        "t": "Non-disclosure agreement",
        "c": true
      },
      {
        "id": "C",
        "t": "Security attestation",
        "c": false
      },
      {
        "id": "D",
        "t": "Service-level agreement",
        "c": false
      }
    ],
    "expl": "Per tutelare la natura altamente riservata delle informazioni sensibili riscontrate dalla red team durante un test intrusivo di penetrazione, si richiede la sottoscrizione formale di un accordo di non divulgazione / Non-disclosure agreement (NDA).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_063",
    "source": "TL",
    "text": "Which of the following statements best describes the relationship between the elements of risk?",
    "opts": [
      {
        "id": "A",
        "t": "Threats exploit vulnerabilities",
        "c": true
      },
      {
        "id": "B",
        "t": "Threat actors create vulnerabilities in assets",
        "c": false
      },
      {
        "id": "C",
        "t": "Threats cause impact to vulnerabilities",
        "c": false
      },
      {
        "id": "D",
        "t": "Threat actors initiate vulnerabilities",
        "c": false
      }
    ],
    "expl": "La definizione cardinale di rischio sancisce che gli attori o gli agenti di minaccia sfruttano le vulnerabilità o i difetti del sistema (Threats exploit vulnerabilities) per incidere negativamente sui beni aziendali.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_064",
    "source": "TL",
    "text": "Which type of assessment looks at events that could exploit vulnerabilities?",
    "opts": [
      {
        "id": "A",
        "t": "Penetration test",
        "c": false
      },
      {
        "id": "B",
        "t": "Threat assessment",
        "c": true
      },
      {
        "id": "C",
        "t": "Risk assessment",
        "c": false
      },
      {
        "id": "D",
        "t": "Vulnerability assessment",
        "c": false
      }
    ],
    "expl": "Un Threat Assessment (Valutazione delle minacce) si concentra specificamente sull'identificazione e sulla ricostruzione di eventi avversi o soggetti esterni in grado di approfittare attivamente di debolezze intrinseche.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_097",
    "source": "TL",
    "text": "Which of the following steps in the risk management process involves establishing the scope and potential risks involved with a project?",
    "opts": [
      {
        "id": "A",
        "t": "Risk monitoring and review",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk treatment",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk assessment",
        "c": false
      },
      {
        "id": "D",
        "t": "Risk identification",
        "c": true
      }
    ],
    "expl": "Consiste nell'Identificazione del Rischio (Risk Identification) l'attività preliminare volta a definire lo scopo (scope) di un'analisi e circoscrivere preventivamente tutti i potenziali pericoli associati.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_151",
    "text": "A company purchased cyber insurance to address items listed on the risk register. Which of the following strategies does this represent?",
    "opts": [
      {
        "id": "A",
        "t": "Accept",
        "c": false
      },
      {
        "id": "B",
        "t": "Transfer",
        "c": true
      },
      {
        "id": "C",
        "t": "Mitigate",
        "c": false
      },
      {
        "id": "D",
        "t": "Avoid",
        "c": false
      }
    ],
    "expl": "La stipula di una polizza assicurativa cyber (Cyber Insurance) costituisce la rappresentazione proverbiale del Trasferimento del Rischio (Risk Transference), in quanto l'impatto finanziario viene convogliato su un ente assicuratore esterno.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_155",
    "text": "Which of the following is the most likely to be used to document risks, responsible parties, and thresholds?",
    "opts": [
      {
        "id": "A",
        "t": "Risk tolerance",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk transfer",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk register",
        "c": true
      },
      {
        "id": "D",
        "t": "Risk analysis",
        "c": false
      }
    ],
    "expl": "Il Registro dei Rischi (Risk Register) è il compendio principale progettato appositamente per listare i singoli pericoli mappati, gli assegnatati responsabili (Risk Owners) e le relative soglie di scatto difensivo.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_193",
    "text": "Which of the following has been implemented when a host-based firewall on a legacy Linux system allows connections from only specific internal IP addresses?",
    "opts": [
      {
        "id": "A",
        "t": "Compensating control",
        "c": true
      },
      {
        "id": "B",
        "t": "Network segmentation",
        "c": false
      },
      {
        "id": "C",
        "t": "Transfer of risk",
        "c": false
      },
      {
        "id": "D",
        "t": "SNMP traps",
        "c": false
      }
    ],
    "expl": "Dato che la vecchiaia tecnologica del sistema Linux (Legacy) previene l'applicazione di patch ideali all'origine, la configurazione restrittiva di regole di filtraggio host-based rappresenta una barriera provvisoria definita Controllo Compensativo (Compensating Control).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_247",
    "text": "A company is required to perform a risk assessment on an annual basis. Which of the following types of risk assessments does this requirement describe?",
    "opts": [
      {
        "id": "A",
        "t": "Continuous",
        "c": false
      },
      {
        "id": "B",
        "t": "Ad hoc",
        "c": false
      },
      {
        "id": "C",
        "t": "Recurring",
        "c": true
      },
      {
        "id": "D",
        "t": "One time",
        "c": false
      }
    ],
    "expl": "Un adempimento imposto periodicamente scadenziato su base fissa (come un esame rischi annuale obbligatorio) delinea per definizione un processo di tipo Ricorrente (Recurring).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_274",
    "text": "Which of the following risk management strategies should an enterprise adopt first if a legacy application is critical to business operations and there are preventative controls that are not yet implemented?",
    "opts": [
      {
        "id": "A",
        "t": "Mitigate",
        "c": true
      },
      {
        "id": "B",
        "t": "Accept",
        "c": false
      },
      {
        "id": "C",
        "t": "Transfer",
        "c": false
      },
      {
        "id": "D",
        "t": "Avoid",
        "c": false
      }
    ],
    "expl": "Se un software obsoleto vitale soffre di rischi e sono note barriere di tutele preventive non ancora abilitate, il dovere primo dell'organizzazione è l'applicazione di tali tutele per Mitigare il rischio (Mitigate).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_282",
    "text": "Which of the following would be most useful in determining whether the long-term cost to transfer a risk is less than the impact of the risk?",
    "opts": [
      {
        "id": "A",
        "t": "ARO",
        "c": false
      },
      {
        "id": "B",
        "t": "RTO",
        "c": false
      },
      {
        "id": "C",
        "t": "RPO",
        "c": false
      },
      {
        "id": "D",
        "t": "ALE",
        "c": true
      },
      {
        "id": "E",
        "t": "SLE",
        "c": false
      }
    ],
    "expl": "L'ALE (Annualized Loss Expectancy) computa il danno annuo stimato proiettato. È l'indicatore più efficace nelle analisi costi-benefici finanziarie per decidere se i costi correnti di una polizza assicurativa sono vantaggiosi o meno rispetto alla perdita attesa.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_305",
    "text": "An organization would like to calculate the time needed to resolve a hardware issue with a server. Which of the following risk management processes describes this example?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery point objective",
        "c": false
      },
      {
        "id": "B",
        "t": "Mean time between failures",
        "c": false
      },
      {
        "id": "C",
        "t": "Recovery time objective",
        "c": false
      },
      {
        "id": "D",
        "t": "Mean time to repair",
        "c": true
      }
    ],
    "expl": "La definizione tecnica di MTTR (Mean Time to Repair / Tempo medio di riparazione) specifica esattamente l'intervallo temporaneo richiesto per risolvere anomalie hardware o software e ripristinare il corretto funzionamento di un componente.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_368",
    "text": "Which of the following best describes the risk present after controls and mitigating factors have been applied?",
    "opts": [
      {
        "id": "A",
        "t": "Residual",
        "c": true
      },
      {
        "id": "B",
        "t": "Avoided",
        "c": false
      },
      {
        "id": "C",
        "t": "Inherent",
        "c": false
      },
      {
        "id": "D",
        "t": "Operational",
        "c": false
      }
    ],
    "expl": "Il Rischio Residuo (Residual Risk) è la frazione di minaccia ed esposizione economica che permane attiva nell'ambiente anche a seguito dell'introduzione tempestiva di tutele d'allarme e mitigazioni.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_457",
    "text": "Which of the following tasks is typically included in the BIA process?",
    "opts": [
      {
        "id": "A",
        "t": "Estimating the recovery time of systems",
        "c": true
      },
      {
        "id": "B",
        "t": "Identifying the communication strategy",
        "c": false
      },
      {
        "id": "C",
        "t": "Evaluating the risk management plan",
        "c": false
      },
      {
        "id": "D",
        "t": "Establishing the backup and recovery procedures",
        "c": false
      },
      {
        "id": "E",
        "t": "Developing the incident response plan",
        "c": false
      }
    ],
    "expl": "Strisciare una mappa dettagliata che stimi con rigore i tempi operativi di tolleranza ed escussione necessari per rimettere in marcia gli apparati IT (estimating the recovery time) rappresenta l'essenza delle attività di BIA.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_556",
    "text": "A security officer is implementing a security awareness program and is placing security-themed posters around the building and is assigning online user training. Which of the following would the security officer most likely implement?",
    "opts": [
      {
        "id": "A",
        "t": "Password policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Access badges",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing campaign",
        "c": true
      },
      {
        "id": "D",
        "t": "Risk assessment",
        "c": false
      }
    ],
    "expl": "Nell'ambito di un programma strutturato di sensibilizzazione dell'utente, una risorsa straordinaria per addestrare sul campo all'identificazione di truffe digitali e phishing è il lancio controllato di una campagna di Phishing simulata (Phishing campaign).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_559",
    "text": "An employee clicks a malicious link in an email that appears to be from the company's Chief Executive Officer. The employee's computer is infected with ransomware that encrypts the company's files. Which of the following is the most effective way for the company to prevent similar incidents in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Security awareness training",
        "c": true
      },
      {
        "id": "B",
        "t": "Database encryption",
        "c": false
      },
      {
        "id": "C",
        "t": "Segmentation",
        "c": false
      },
      {
        "id": "D",
        "t": "Reporting suspicious emails",
        "c": false
      }
    ],
    "expl": "Gli attacchi di ingegneria sociale (social engineering) perpetrati simulando l'identità del CEO (CEO Fraud) fanno leva sulla sottomissione psicologica o disattenzione dell'utente. Il rimedio principe risiede nell'addestramento continuo dell'organico mediante corsi di Security Awareness Training.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_578",
    "text": "Due to a cyberattack, a company's IT systems were not operational for an extended period of time. The company wants to measure how quickly the systems must be restored in order to minimize business disruption. Which of the following would the company most likely use?",
    "opts": [
      {
        "id": "A",
        "t": "Recovery point objective",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk appetite",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk tolerance",
        "c": false
      },
      {
        "id": "D",
        "t": "Recovery time objective",
        "c": true
      },
      {
        "id": "E",
        "t": "Mean time between failure",
        "c": false
      }
    ],
    "expl": "L'RTO (Recovery Time Objective / Obiettivo del tempo di ripristino) calcola e risponde esattamente al quesito logico di quanta celerità sia necessaria per risuscitare macchine e applicativi prima del default o danni irrimediabili d'impresa.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_580",
    "text": "Which of the following should a security team use to document persistent vulnerabilities with related recommendations?",
    "opts": [
      {
        "id": "A",
        "t": "Audit report",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk register",
        "c": true
      },
      {
        "id": "C",
        "t": "Compliance report",
        "c": false
      },
      {
        "id": "D",
        "t": "Penetration test",
        "c": false
      }
    ],
    "expl": "Le debolezze scoperte che non trovano immediata risoluzione devono essere messe in archivio e monitorate indicando tutele temporanee e raccomandazioni all'interno del Registro dei Rischi (Risk Register).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_583",
    "text": "A company is performing a risk assessment on new software the company plans to use. Which of the following should the company assess during this process?",
    "opts": [
      {
        "id": "A",
        "t": "Software vulnerabilities",
        "c": true
      },
      {
        "id": "B",
        "t": "Cost-benefit analysis",
        "c": false
      },
      {
        "id": "C",
        "t": "Ongoing monitoring strategies",
        "c": false
      },
      {
        "id": "D",
        "t": "Network infrastructure compatibility",
        "c": false
      }
    ],
    "expl": "Mentre si effettua un esame preventivo della sicurezza di un applicativo di prevista adozione, l'ingegnere di sicurezza indaga soprattutto le vulnerabilità del software stesso (Software vulnerabilities) per comprendere quale superficie d'esposizione introduce.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_625",
    "text": "Which of the following steps in the risk management process involves establishing the scope and potential risks involved with a project?",
    "opts": [
      {
        "id": "A",
        "t": "Risk assessment",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk identification",
        "c": true
      },
      {
        "id": "C",
        "t": "Risk treatment",
        "c": false
      },
      {
        "id": "D",
        "t": "Risk monitoring and review",
        "c": false
      }
    ],
    "expl": "L'inquadramento degli scopi e l'acquisizione delle potenziali criticità relative a una nuova iniziativa rispecchiano la fase iniziale di Identificazione del Rischio (Risk Identification).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_640",
    "text": "A company is considering an expansion of access controls for an application that contractors and internal employees use to reduce costs. Which of the following risk elements should the implementation team understand before granting access to the application?",
    "opts": [
      {
        "id": "A",
        "t": "Threshold",
        "c": false
      },
      {
        "id": "B",
        "t": "Appetite",
        "c": true
      },
      {
        "id": "C",
        "t": "Avoidance",
        "c": false
      },
      {
        "id": "D",
        "t": "Register",
        "c": false
      }
    ],
    "expl": "Prima di estendere e spalancare accessi sensibili a soggetti di terze parti o contrattisti per finalità di risparmio, la commissione deve comprendere appieno il livello di Appetito al Rischio (Risk Appetite) definito dalla Governance aziendale, per capire se si rientra nei confini accettati.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_656",
    "text": "While conducting a business continuity tabletop exercise, the security team becomes concerned by potential impact if a generator was to develop a fault during failover. Which of the following is the team most likely to consider in regard to risk management activities?",
    "opts": [
      {
        "id": "A",
        "t": "RPO",
        "c": false
      },
      {
        "id": "B",
        "t": "ARO",
        "c": false
      },
      {
        "id": "C",
        "t": "BIA",
        "c": true
      },
      {
        "id": "D",
        "t": "MTTR",
        "c": false
      }
    ],
    "expl": "Valutare il potenziale impatto disastroso e fallimentare derivante dalla rottura energetica o mancata alimentazione di riserva rientra nelle tipiche e peculiari analisi d'Impatto sul Business (BIA / Business Impact Analysis).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_670",
    "text": "A company is aware of a given security risk related to a specific market segment. The business chooses not to accept responsibility and target their services to a different market segment. Which of the following describes this risk management strategy?",
    "opts": [
      {
        "id": "A",
        "t": "Exemption",
        "c": false
      },
      {
        "id": "B",
        "t": "Exception",
        "c": false
      },
      {
        "id": "C",
        "t": "Avoid",
        "c": true
      },
      {
        "id": "D",
        "t": "Transfer",
        "c": false
      }
    ],
    "expl": "La dismissione e l'abbandono deliberato di un intero mercato vulnerabile pur di non doversi sobbarcare oneri e insidie di sicurezza costituisce una pura strategia di Evitamento del Rischio (Risk Avoidance).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_672",
    "text": "Which of the following is an example of a treatment strategy for a continuous risk?",
    "opts": [
      {
        "id": "A",
        "t": "Email gateway to block phishing attempts",
        "c": true
      },
      {
        "id": "B",
        "t": "Background checks for new employees",
        "c": false
      },
      {
        "id": "C",
        "t": "Dual control requirements for wire transfers",
        "c": false
      },
      {
        "id": "D",
        "t": "Branch protection as part of the CI/CD pipeline",
        "c": false
      }
    ],
    "expl": "Un rischio continuo, come la minaccia perenne di phishing che investe quotidianamente le caselle e-mail dell'organico, si mitiga proattivamente installando un mail gateway che compia un filtraggio in tempo reale continuativo.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_711",
    "text": "Which of the following analysis methods allows an organization to measure the exposure factor associated with organizational assets?",
    "opts": [
      {
        "id": "A",
        "t": "Heuristic",
        "c": false
      },
      {
        "id": "B",
        "t": "Quantitative",
        "c": true
      },
      {
        "id": "C",
        "t": "User-driven",
        "c": false
      },
      {
        "id": "D",
        "t": "Trend-based",
        "c": false
      }
    ],
    "expl": "Il calcolo matematico deterministico di indici economici oggettivi come il Fattore di Esposizione (EF) è una prerogativa di esclusiva attribuzione dell'analisi di tipo Quantitativo (Quantitative Risk Analysis).",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_734",
    "source": "TL",
    "text": "Which of the following is used to calculate the impact to an organization per cybersecurity incident?",
    "opts": [
      {
        "id": "A",
        "t": "SLE",
        "c": true
      },
      {
        "id": "B",
        "t": "ALE",
        "c": false
      },
      {
        "id": "C",
        "t": "ARO",
        "c": false
      },
      {
        "id": "D",
        "t": "SLA",
        "c": false
      }
    ],
    "expl": "L'indicatore SLE (Single Loss Expectancy) misura esattamente il controvalore pecuniario stimato e patito dall'organizzazione a causa di un singolo cyber-attacco riuscito.",
    "domain": 5,
    "objective": "5.2"
  },
  {
    "id": "SCREEN_042",
    "source": "TL",
    "text": "Which of the following concepts should be the most important consideration when determining how to budget properly for security controls?",
    "opts": [
      {
        "id": "A",
        "t": "Threat of natural disasters",
        "c": false
      },
      {
        "id": "B",
        "t": "Qualitative costs",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk likelihood and impact",
        "c": true
      },
      {
        "id": "D",
        "t": "Asset identification",
        "c": false
      }
    ],
    "expl": "La probabilità e l'impatto del rischio (Risk likelihood and impact) consentono di stabilire in modo logico e strutturato come allocare le risorse finanziarie aziendali per i controlli di sicurezza, sventando danni catastrofici probabili.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_085",
    "source": "TL",
    "text": "A client asked a security company to provide a document outlining the project, the cost, and the completion time frame. Which of the following documents should the company provide to the client?",
    "opts": [
      {
        "id": "A",
        "t": "MSA",
        "c": false
      },
      {
        "id": "B",
        "t": "SLA",
        "c": false
      },
      {
        "id": "C",
        "t": "BPA",
        "c": false
      },
      {
        "id": "D",
        "t": "SOW",
        "c": true
      }
    ],
    "expl": "Il SOW (Statement of Work) specifica rigidamente l'architettura d'ingaggio del singolo progetto erogativo, dettagliando i costi finali e le date scadenziate di consegna delle attività concordate.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_104",
    "source": "TL",
    "text": "Your company is in the midst of negotiating a business partnership with an organization specializing in secure software development for the medical industry. The partner organization has requested proof that your organization is compliant with HIPAA data privacy standards. What type of documentation should you provide to the partner organization?",
    "opts": [
      {
        "id": "A",
        "t": "Service-level agreement",
        "c": false
      },
      {
        "id": "B",
        "t": "Memorandum of understanding",
        "c": false
      },
      {
        "id": "C",
        "t": "Memorandum of agreement",
        "c": false
      },
      {
        "id": "D",
        "t": "Security attestation",
        "c": true
      }
    ],
    "expl": "Fornire una Security Attestation (Attestazione formale di sicurezza indipendente) offre una prova di asseverazione oggettiva circa il rispetto stringente delle regolamentazioni HIPAA di settore.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_138",
    "text": "A company is required to use certified hardware when building networks. Which of the following best addresses the risks associated with procuring counterfeit hardware?",
    "opts": [
      {
        "id": "A",
        "t": "A thorough analysis of the supply chain",
        "c": true
      },
      {
        "id": "B",
        "t": "A legally enforceable corporate acquisition policy",
        "c": false
      },
      {
        "id": "C",
        "t": "A right to audit clause in vendor contracts and SOWs",
        "c": false
      },
      {
        "id": "D",
        "t": "An in-depth penetration test of all suppliers and vendors",
        "c": false
      }
    ],
    "expl": "La proliferazione di schede o circuiti spuri (Counterfeit Hardware) si dissipa e gestisce tramite un'analisi approfondita e tracciabile della filiera distributiva (Thorough supply chain analysis).",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_166",
    "text": "A client asked a security company to provide a document outlining the project, the cost, and the completion time frame. Which of the following documents should the company provide to the client?",
    "opts": [
      {
        "id": "A",
        "t": "MSA",
        "c": false
      },
      {
        "id": "B",
        "t": "SLA",
        "c": false
      },
      {
        "id": "C",
        "t": "BPA",
        "c": false
      },
      {
        "id": "D",
        "t": "SOW",
        "c": true
      }
    ],
    "expl": "Il SOW circoscrive le attività puntuali, le relative quote economiche richieste ed il percorso temporale pattuito in un singolo perimetro operativo.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_186",
    "text": "A security practitioner completes a vulnerability assessment on a company’s network and finds several vulnerabilities, which the operations team remediates. Which of the following should be done next?",
    "opts": [
      {
        "id": "A",
        "t": "Conduct an audit.",
        "c": false
      },
      {
        "id": "B",
        "t": "Initiate a penetration test.",
        "c": false
      },
      {
        "id": "C",
        "t": "Rescan the network.",
        "c": true
      },
      {
        "id": "D",
        "t": "Submit a report.",
        "c": false
      }
    ],
    "expl": "Immediatamente dopo il completamento delle attività di pulizia o patch (remediation) delle degenze precedentemente rilevate, si esegue una scansione confermativa (Rescan) per validare formalmente la risoluzione.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_201",
    "text": "A company decided to reduce the cost of its annual cyber insurance policy by removing the coverage for ransomware attacks. Which of the following analysis elements did the company most likely use in making this decision?",
    "opts": [
      {
        "id": "A",
        "t": "MTTR",
        "c": false
      },
      {
        "id": "B",
        "t": "RTO",
        "c": false
      },
      {
        "id": "C",
        "t": "ARO",
        "c": true
      },
      {
        "id": "D",
        "t": "MTBF"
      }
    ],
    "expl": "Misurando la percentuale storica o futura di accadimento periodico annuo (ARO) di un ransomware sul proprio paniere d'esercizio, l'impresa valuterà se convenga dismettere la polizza assorbendo internamente i costi di ripristino per massimizzare il budget.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_217",
    "text": "Which of the following describes the maximum allowance of accepted risk?",
    "opts": [
      {
        "id": "A",
        "t": "Risk indicator",
        "c": false
      },
      {
        "id": "B",
        "t": "Risk level",
        "c": false
      },
      {
        "id": "C",
        "t": "Risk score",
        "c": false
      },
      {
        "id": "D",
        "t": "Risk threshold",
        "c": true
      }
    ],
    "expl": "Il tetto quantitativo tollerato oltre il quale un danno non è reputato scusabile prende il nome di Soglia del Rischio (Risk threshold), forzando l'attivazione di sanzioni o modifiche immediate.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_234",
    "text": "A company is working with a vendor to perform a penetration test. Which of the following includes an estimate about the number of hours required to complete the engagement?",
    "opts": [
      {
        "id": "A",
        "t": "SOW",
        "c": true
      },
      {
        "id": "B",
        "t": "BPA",
        "c": false
      },
      {
        "id": "C",
        "t": "SLA",
        "c": false
      },
      {
        "id": "D",
        "t": "NDA",
        "c": false
      }
    ],
    "expl": "La definizione del Statement of Work (SOW) comprende e dichiara esplicitamente le risorse e la stima del monte ore (estimate of hours) complessivo finalizzato alla finalizzazione dell'ingaggio del pen-test.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_253",
    "text": "A client demands at least 99.99% uptime from a service provider's hosted security services. Which of the following documents includes the information the service provider should return to the client?",
    "opts": [
      {
        "id": "A",
        "t": "MOA",
        "c": false
      },
      {
        "id": "B",
        "t": "SOW",
        "c": false
      },
      {
        "id": "C",
        "t": "MOU",
        "c": false
      },
      {
        "id": "D",
        "t": "SLA",
        "c": true
      }
    ],
    "expl": "Tutti i vincoli percentuali rigidi sull'operatività continuativa del software (come la clausola del 99.99% di disponibilità/uptime) albergano nativamente nell'accordo SLA contrattualizzato.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_312",
    "text": "Which of the following describes the understanding between a company and a client about what will be provided and the accepted time needed to provide the company with the resources?",
    "opts": [
      {
        "id": "A",
        "t": "SLA",
        "c": true
      },
      {
        "id": "B",
        "t": "MOU",
        "c": false
      },
      {
        "id": "C",
        "t": "MOA",
        "c": false
      },
      {
        "id": "D",
        "t": "BPA",
        "c": false
      }
    ],
    "expl": "Lo SLA descrive in modo speculare i tempi tecnici per la messa a disposizione dei nodi distributivi, gli incident response time e gli asset erogati.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_339",
    "text": "Which of the following agreement types defines the time frame in which a vendor needs to respond?",
    "opts": [
      {
        "id": "A",
        "t": "SOW",
        "c": false
      },
      {
        "id": "B",
        "t": "SLA",
        "c": true
      },
      {
        "id": "C",
        "t": "MOA",
        "c": false
      },
      {
        "id": "D",
        "t": "MOU",
        "c": false
      }
    ],
    "expl": "Il limite massimo entro il quale i tecnici esterni del fornitore sono chiamati a reagire a seguito di anomalie viene schedulato sotto la metrica di Response Time nell'accordo di tipo SLA.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_430",
    "text": "An organization requests a third-party full-spectrum analysis of its supply chain. Which of the following would the analysis team use to meet this requirement?",
    "opts": [
      {
        "id": "A",
        "t": "Vulnerability scanner",
        "c": false
      },
      {
        "id": "B",
        "t": "Penetration test",
        "c": false
      },
      {
        "id": "C",
        "t": "SCAP",
        "c": false
      },
      {
        "id": "D",
        "t": "Illumination tool",
        "c": true
      }
    ],
    "expl": "Gli Illumination Tools sono speciali suite destinate a mappare formalmente l'intero ecosistema globale della catena di fornitura esplorando geolocalizzazioni o debolezze occulte di terzi.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_434",
    "text": "A security analyst is evaluating a SaaS application that the human resources department would like to implement. The analyst requests a SOC 2 report from the SaaS vendor. Which of the following processes is the analyst most likely conducting?",
    "opts": [
      {
        "id": "A",
        "t": "Internal audit",
        "c": false
      },
      {
        "id": "B",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "C",
        "t": "Attestation",
        "c": false
      },
      {
        "id": "D",
        "t": "Due diligence",
        "c": true
      }
    ],
    "expl": "L'attività scrupolosa di verifica preventiva dei requisiti protettivi e l'ispezione del report SOC 2 d'un applicativo SaaS prima del suo allineamento operativo rispecchiano fedelmente il principio di Dovuta Diligenza (Due diligence).",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_552",
    "text": "A company discovered its data was advertised for sale on the dark web. During the initial investigation, the company determined the data was proprietary data. Which of the following is the next step the company should take?",
    "opts": [
      {
        "id": "A",
        "t": "Identify the attacker’s entry methods.",
        "c": false
      },
      {
        "id": "B",
        "t": "Report the breach to the local authorities.",
        "c": false
      },
      {
        "id": "C",
        "t": "Notify the applicable parties of the breach.",
        "c": true
      },
      {
        "id": "D",
        "t": "Implement vulnerability scanning of the company's systems."
      }
    ],
    "expl": "Venuti a conoscenza dell'esposizione delle informazioni nel Dark Web, la mitigazione reattiva primaria consta nell'allarmare e notificare celermente tutti i soggetti legalmente o materialmente impattati (Notify the applicable parties) per agevolare contromisure.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_577",
    "text": "While investigating a possible incident, a security analyst discovers the following log entry:\n67.118.34.157 - - [28/Jul/2022:10:26:59 -0300] \"GET /query.php?q=wireless%20headphones / HTTP/1.0\" 200 12737\n132.18.222.103 - - [28/Jul/2022:10:27:10 -0300] \"GET /query.php?q=123';INSERT INTO users VALUES('temp','pass123');# / HTTP/1.0\" 200 935\nWhich of the following should the analyst do first?",
    "opts": [
      {
        "id": "A",
        "t": "Implement a WAF.",
        "c": false
      },
      {
        "id": "B",
        "t": "Disable the query.php script.",
        "c": false
      },
      {
        "id": "C",
        "t": "Block brute-force attempts on temporary users.",
        "c": false
      },
      {
        "id": "D",
        "t": "Check the users table for new accounts.",
        "c": true
      }
    ],
    "expl": "Considerato che la querystring evidenzia l'inserimento a database di un utente fasullo tramite una SQL Injection con codice di risposta 200 (Successo), l'analista deve verificare istantaneamente se l'attaccante ha registrato abusivamente tale record esplorando la tabella users (Check the users table).",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_590",
    "text": "A company filed a complaint with its IT service provider after the company discovered the service provider's external audit team had access to some of the company's confidential information. Which of the following is the most likely reason the company filed the complaint?",
    "opts": [
      {
        "id": "A",
        "t": "The MOU had basic clauses from a template.",
        "c": false
      },
      {
        "id": "B",
        "t": "A SOW had not been agreed to by the client.",
        "c": false
      },
      {
        "id": "C",
        "t": "A WO had not been mutually approved.",
        "c": false
      },
      {
        "id": "D",
        "t": "A required NDA had not been signed.",
        "c": true
      }
    ],
    "expl": "Per tutelare dati riservati dall'esposizione indebita verso i tecnici o consulenti esterni del provider, è esatto dovere esigere la firma preventiva dell'accordo di riservatezza (NDA). In sua mancanza, l'accesso configura un grave incidente contrattuale.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_615",
    "text": "Which of the following is the fastest and most cost-effective way to confirm a third-party supplier's compliance with security obligations?",
    "opts": [
      {
        "id": "A",
        "t": "Attestation report",
        "c": true
      },
      {
        "id": "B",
        "t": "Third-party audit",
        "c": false
      },
      {
        "id": "C",
        "t": "Vulnerability assessment",
        "c": false
      },
      {
        "id": "D",
        "t": "Penetration testing",
        "c": false
      }
    ],
    "expl": "Ottenere o consultare rapporti formali di conformità e perizia terze (Attestation report) costituisce lo strumento reattivo più rapido e conveniente per accertare il virtuosismo dei controlli senza avviare costosi audit proprietari.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_623",
    "text": "Which of the following should a company use to provide proof of external network security testing?",
    "opts": [
      {
        "id": "A",
        "t": "Business impact analysis",
        "c": false
      },
      {
        "id": "B",
        "t": "Supply chain analysis",
        "c": false
      },
      {
        "id": "C",
        "t": "Vulnerability assessment",
        "c": false
      },
      {
        "id": "D",
        "t": "Third-party attestation",
        "c": true
      }
    ],
    "expl": "La Third-party attestation fornisce un documento neutrale ed ufficiale che formalizza l'adeguato superamento e lo svolgimento regolare di rigorosi test di sicurezza della rete.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_693",
    "source": "TL",
    "text": "A company has yearly engagements with a service provider. The general terms and conditions are the same for all engagements. The company wants to simplify the process and revisit the general terms every three years. Which of the following documents would provide the best way to set the general terms?",
    "opts": [
      {
        "id": "A",
        "t": "MSA",
        "c": true
      },
      {
        "id": "B",
        "t": "NDA",
        "c": false
      },
      {
        "id": "C",
        "t": "MOU",
        "c": false
      },
      {
        "id": "D",
        "t": "SLA",
        "c": false
      }
    ],
    "expl": "Il Master Service Agreement (MSA) accorpa legalmente tutte le clausole ed i termini contrattuali pregressi valevoli per ingaggi pluriennali successivi, demandando i singoli ordini rapidi a semplici Work Orders.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_733",
    "source": "TL",
    "text": "Which of the following should an organization use to ensure that it can review the controls and performance of a service provider or vendor?",
    "opts": [
      {
        "id": "A",
        "t": "Service-level agreement",
        "c": false
      },
      {
        "id": "B",
        "t": "Memorandum of agreement",
        "c": false
      },
      {
        "id": "C",
        "t": "Right-to-audit clause",
        "c": true
      },
      {
        "id": "D",
        "t": "Supply chain analysis",
        "c": false
      }
    ],
    "expl": "La clausola del diritto di audit (Right-to-audit clause) attribuisce legalmente e contrattualmente al compratore il potere formale di penetrare ed esaminare l'adottamento reale delle contromisure di sicurezza presso il venditore.",
    "domain": 5,
    "objective": "5.3"
  },
  {
    "id": "SCREEN_071",
    "source": "TL",
    "text": "Which of the following would be the greatest concern for a company that is aware of the consequences of non-compliance with government regulations?",
    "opts": [
      {
        "id": "A",
        "t": "Right to be forgotten",
        "c": false
      },
      {
        "id": "B",
        "t": "Sanctions",
        "c": true
      },
      {
        "id": "C",
        "t": "Attestation",
        "c": false
      },
      {
        "id": "D",
        "t": "External compliance reporting",
        "c": false
      }
    ],
    "expl": "La preoccupazione di livello più elevato derivante dalla violazione di normative imposte dallo Stato risiede nell'applicazione di Sanzioni governative (Sanctions), che possono forzare la sospensione e inibizione legale totale dell'operatività commerciale.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_179",
    "text": "A U.S.-based cloud-hosting provider wants to expand its data centers to new international locations. Which of the following should the hosting provider consider first?",
    "opts": [
      {
        "id": "A",
        "t": "Local data protection regulations",
        "c": true
      },
      {
        "id": "B",
        "t": "Risks from hackers residing in other countries",
        "c": false
      },
      {
        "id": "C",
        "t": "Impacts to existing contractual obligations",
        "c": false
      },
      {
        "id": "D",
        "t": "Time zone differences in log correlation",
        "c": false
      }
    ],
    "expl": "La primissima valutazione per l'espansione territoriale multinazionale dei data center deve concentrarsi sulle Regolamentazioni Locali per la Tutela dei Dati (Local data protection regulations), onde evitare di incorrere in gravi reati o violazioni di sovranità nazionale informatica.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_271",
    "text": "After a company was compromised, customers initiated a lawsuit. The company's attorneys have requested that the security team initiate a legal hold in response to the lawsuit. Which of the following describes the action the security team will most likely be required to take?",
    "opts": [
      {
        "id": "A",
        "t": "Retain the emails between the security team and affected customers for 30 days.",
        "c": false
      },
      {
        "id": "B",
        "t": "Retain any communications related to the security breach until further notice.",
        "c": true
      },
      {
        "id": "C",
        "t": "Retain any communications between security members during the breach response.",
        "c": false
      },
      {
        "id": "D",
        "t": "Retain all emails from the company to affected customers for an indefinite period of time.",
        "c": false
      }
    ],
    "expl": "L'attivazione del Legal Hold impone di congelare la cancellazione automatica dei dati aziendali, costringendo a conservare indefinitamente qualsiasi comunicazione cartacea o elettronica afferente alla violazione informatica fino a revoca formale (until further notice).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_315",
    "text": "Which of the following best describes the practice of researching laws and regulations related to information security operations within a specific industry?",
    "opts": [
      {
        "id": "A",
        "t": "Compliance reporting",
        "c": false
      },
      {
        "id": "B",
        "t": "GDPR",
        "c": false
      },
      {
        "id": "C",
        "t": "Due diligence",
        "c": true
      },
      {
        "id": "D",
        "t": "Attestation",
        "c": false
      }
    ],
    "expl": "L'indagine sistematica, preventiva ed informativa legata allo studio proattivo dei dazi ordinativi e delle normative di settore prima dell'allineamento dei controlli è esplicito esercizio di Dovuta Diligenza (Due diligence).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_316",
    "text": "Which of the following considerations is the most important for an organization to evaluate as it establishes and maintains a data privacy program?",
    "opts": [
      {
        "id": "A",
        "t": "Reporting structure for the data privacy officer",
        "c": false
      },
      {
        "id": "B",
        "t": "Request process for data subject access",
        "c": false
      },
      {
        "id": "C",
        "t": "Role as controller or processor",
        "c": true
      },
      {
        "id": "D",
        "t": "Physical location of the company",
        "c": false
      }
    ],
    "expl": "Per poter definire in modo legale ed operativo le proprie precise catene di responsabilità, il fattore preliminare più importante in assoluto nello sviluppo di un apparato di privacy consta nell'identificare correttamente se l'azienda operi come Titolare del trattamento dei dati (Data Controller) o come semplice Responsabile sussidiario (Data Processor).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_393",
    "text": "Which of the following addresses individual rights such as the right to be informed, the right of access, and the right to be forgotten?",
    "opts": [
      {
        "id": "A",
        "t": "GDPR",
        "c": true
      },
      {
        "id": "B",
        "t": "PCI DSS",
        "c": false
      },
      {
        "id": "C",
        "t": "NIST",
        "c": false
      },
      {
        "id": "D",
        "t": "ISO",
        "c": false
      }
    ],
    "expl": "Il GDPR sancisce costituzionalmente ed a livello europeo una suite di diritti sovrani indiscutibili sul dato personale a tutela dei cittadini fisici, compreso il diritto all'informazione, all'accesso ed all'oblio (right to be forgotten).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_462",
    "text": "Which of the following is the most relevant reason a DPO would develop a data inventory?",
    "opts": [
      {
        "id": "A",
        "t": "To manage data storage requirements better",
        "c": false
      },
      {
        "id": "B",
        "t": "To determine the impact in the event of a breach",
        "c": true
      },
      {
        "id": "C",
        "t": "To extend the length of time data can be retained",
        "c": false
      },
      {
        "id": "D",
        "t": "To automate the reduction of duplicated data",
        "c": false
      }
    ],
    "expl": "L'Inventario dei Dati (Data Inventory) permette al Data Protection Officer di quantificare con precisione strategica qual è l'impatto reputazionale, economico o legale effettivo sull'organizzazione ed i clienti nel caso di una violazione (breach).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_472",
    "text": "After failing an audit twice, an organization has been ordered by a government regulatory agency to pay fines. Which of the following causes this action?",
    "opts": [
      {
        "id": "A",
        "t": "Non-compliance",
        "c": true
      },
      {
        "id": "B",
        "t": "Contract violations",
        "c": false
      },
      {
        "id": "C",
        "t": "Government sanctions",
        "c": false
      },
      {
        "id": "D",
        "t": "Rules of engagement",
        "c": false
      }
    ],
    "expl": "La causa diretta dell'imposizione di penali pecuniarie (Fines) a seguito d'ispezione fallita ripetutamente è l'Inadempienza (Non-compliance) comprovata ai requisiti cogenti regolatori.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_482",
    "text": "Which of the following consequences would a retail chain most likely face from customers in the event the retailer is non-compliant with PCI DSS?",
    "opts": [
      {
        "id": "A",
        "t": "Contractual impacts",
        "c": false
      },
      {
        "id": "B",
        "t": "Sanctions",
        "c": false
      },
      {
        "id": "C",
        "t": "Fines",
        "c": false
      },
      {
        "id": "D",
        "t": "Reputational damage",
        "c": true
      }
    ],
    "expl": "Benché la violazione dello standard per i POS e pagamenti con carta PCI DSS comporti sanzioni finanziarie dirette, la conseguenza preminente vissuta lato consumatore/utente è il logoramento d'immagine e Danno Reputazionale (Reputational damage).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_487",
    "text": "A new security regulation was announced that will take effect in the coming year. A company must comply with it to remain in business. Which of the following activities should the company perform next?",
    "opts": [
      {
        "id": "A",
        "t": "Gap analysis",
        "c": true
      },
      {
        "id": "B",
        "t": "Policy review",
        "c": false
      },
      {
        "id": "C",
        "t": "Security procedure evaluation",
        "c": false
      },
      {
        "id": "D",
        "t": "Threat scope reduction",
        "c": false
      }
    ],
    "expl": "Qualora venga diramata l'adozione futura di un nuovo quadro vincolante obbligatorio, la primissima mossa dell'organizzazione consta nello svolgimento di una Analisi degli Scostamenti (Gap Analysis), per rilevare le mancanze attuali e correggerle entro i limiti d'applicazione legale.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_504",
    "text": "A company processes and stores sensitive data on its own systems. Which of the following steps should the company take first to ensure compliance with privacy regulations?",
    "opts": [
      {
        "id": "A",
        "t": "Implement access controls and encryption.",
        "c": true
      },
      {
        "id": "B",
        "t": "Develop and provide training on data protection policies.",
        "c": false
      },
      {
        "id": "C",
        "t": "Create incident response and disaster recovery plans.",
        "c": false
      },
      {
        "id": "D",
        "t": "Purchase and install security software.",
        "c": false
      }
    ],
    "expl": "L'applicazione di severi controlli d'accesso basati sul minimo privilegio associati all'uso della crittografia forte sui dati statici ed in transito costituisce lo scudo elementare basilare richiesto per allinearsi formalmente ai dettami di privacy.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_512",
    "text": "An organization is required to provide assurance that its controls are properly designed and operating effectively. Which of the following reports will best achieve the objective?",
    "opts": [
      {
        "id": "A",
        "t": "Red teaming",
        "c": false
      },
      {
        "id": "B",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "C",
        "t": "Independent audit",
        "c": true
      },
      {
        "id": "D",
        "t": "Vulnerability assessment",
        "c": false
      }
    ],
    "expl": "Un Audit Indipendente (Independent Audit) costituisce l'unico strumento neutralmente autorevole preposto a validare che la progettazione e l'efficacia d'esercizio dei controlli aziendali rispondano agli standard industriali richiesti.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_550",
    "text": "A security analyst has determined that a security breach would have a financial impact of $15,000 and is expected to occur twice within a three-year period. Which of the following is the ALE for this risk?",
    "opts": [
      {
        "id": "A",
        "t": "$7,500",
        "c": false
      },
      {
        "id": "B",
        "t": "$10,000",
        "c": true
      },
      {
        "id": "C",
        "t": "$15,000",
        "c": false
      },
      {
        "id": "D",
        "t": "$30,000",
        "c": false
      }
    ],
    "expl": "Utilizzando la formula standard degli esami CompTIA: ALE = SLE × ARO. Con un SLE pari a $15,000 ed un tasso annuo di accadimento (ARO) pari a 2/3 (ovvero 2 volte ogni 3 anni), l'equazione è: $15,000 × (2/3) = $10,000.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_551",
    "text": "A systems administrator discovers a system that is no longer receiving support from the vendor. However, this system and its environment are critical to running the business, cannot be modified, and must stay online. Which of the following risk treatments is the most appropriate in this situation?",
    "opts": [
      {
        "id": "A",
        "t": "Reject",
        "c": false
      },
      {
        "id": "B",
        "t": "Accept",
        "c": true
      },
      {
        "id": "C",
        "t": "Transfer",
        "c": false
      },
      {
        "id": "D",
        "t": "Avoid",
        "c": false
      }
    ],
    "expl": "Qualora un asset obsoleto non supportabile ma insostituibile per l'operatività ordinaria debba obbligatoriamente permanere attivo, l'azienda ricorre strutturalmente alla prassi di Accettazione del Rischio (Accept), implementando log di isolamento difensivo compensativi.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_591",
    "text": "Which of the following aspects of the data management life cycle is most directly impacted by local and international regulations?",
    "opts": [
      {
        "id": "A",
        "t": "Destruction",
        "c": false
      },
      {
        "id": "B",
        "t": "Certification",
        "c": false
      },
      {
        "id": "C",
        "t": "Retention",
        "c": true
      },
      {
        "id": "D",
        "t": "Sanitization",
        "c": false
      }
    ],
    "expl": "La Ritenzione dei Dati (Retention) è l'arco del ciclo vitale della memorizzazione maggiormente regolamentato dalle leggi territoriali ed ampiamente colpito da sanzioni severissime in caso di infrazione temporale.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_629",
    "text": "Which of the following would be the greatest concern for a company that is aware of the consequences of non-compliance with government regulations?",
    "opts": [
      {
        "id": "A",
        "t": "Right to be forgotten",
        "c": false
      },
      {
        "id": "B",
        "t": "Sanctions",
        "c": true
      },
      {
        "id": "C",
        "t": "External compliance reporting",
        "c": false
      },
      {
        "id": "D",
        "t": "Attestation",
        "c": false
      }
    ],
    "expl": "Le Sanzioni (Sanctions) sono bloccanti a livello legale e doganale e figurano come la massima minaccia derivante dalle ispezioni di non conformità con autorità governative.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_641",
    "text": "Which of the following is the act of proving to a customer that software developers are trained on secure coding?",
    "opts": [
      {
        "id": "A",
        "t": "Assurance",
        "c": false
      },
      {
        "id": "B",
        "t": "Contract",
        "c": false
      },
      {
        "id": "C",
        "t": "Due diligence",
        "c": false
      },
      {
        "id": "D",
        "t": "Attestation",
        "c": true
      }
    ],
    "expl": "L'Asseverazione o Attestazione (Attestation) formalizza visivamente e legalmente prove innegabili (es. certificati dei corsi di addestramento) da fornire al committente quale garanzia della qualità.",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_675",
    "text": "The internal audit team determines a software application is no longer in scope for external reporting requirements. Which of the following will confirm that the application is no longer applicable?",
    "opts": [
      {
        "id": "A",
        "t": "Data inventory and retention",
        "c": false
      },
      {
        "id": "B",
        "t": "Right to be forgotten",
        "c": false
      },
      {
        "id": "C",
        "t": "Due care and due diligence",
        "c": false
      },
      {
        "id": "D",
        "t": "Acknowledgement and attestation",
        "c": true
      }
    ],
    "expl": "La formale attestazione di non conformità dovuta a esclusione preventiva dal perimetro d'ingaggio viene archiviata documentalmente tramire Acknowledgement and Attestation (Accettazione e Attestazione).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_735",
    "source": "TL",
    "text": "A retail company receives a request to remove a customer's data. Which of the following is the retail company considered under GDPR legislation?",
    "opts": [
      {
        "id": "A",
        "t": "Data processor",
        "c": false
      },
      {
        "id": "B",
        "t": "Data controller",
        "c": true
      },
      {
        "id": "C",
        "t": "Data subject",
        "c": false
      },
      {
        "id": "D",
        "t": "Data custodian",
        "c": false
      }
    ],
    "expl": "Poiché il retailer stabilisce lo scopo, colleziona direttamente le informazioni e gestisce il rapporto d'affari diretto con i clienti finali decidendone finalità e mezzi di conservazione, nell'istanze di rimozione essa riveste formalmente il ruolo di Data Controller (Titolare del Trattamento).",
    "domain": 5,
    "objective": "5.4"
  },
  {
    "id": "SCREEN_009",
    "source": "TL",
    "text": "A penetration tester begins an engagement by performing port and service scans against the client environment according to the rules of engagement. Which of the following reconnaissance types is the tester performing?",
    "opts": [
      {
        "id": "A",
        "t": "Active",
        "c": true
      },
      {
        "id": "B",
        "t": "Passive",
        "c": false
      },
      {
        "id": "C",
        "t": "Defensive",
        "c": false
      },
      {
        "id": "D",
        "t": "Offensive",
        "c": false
      }
    ],
    "expl": "La scansione proattiva di porte ed IP prevede l'invio diretto di pacchetti verso i sistemi bersaglio e l'interazione diretta, configurandosi come Ricognizione Attiva (Active reconnaissance).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_014",
    "source": "TL",
    "text": "Which of the following is the most likely outcome if a large bank fails an internal PCI DSS compliance assessment?",
    "opts": [
      {
        "id": "A",
        "t": "Fines",
        "c": false
      },
      {
        "id": "B",
        "t": "Sanctions",
        "c": false
      },
      {
        "id": "C",
        "t": "Reputation damage",
        "c": false
      },
      {
        "id": "D",
        "t": "Audit findings",
        "c": true
      }
    ],
    "expl": "Trattandosi di uno scrutinio o valutazione esclusivamente Interna all'azienda, il fallimento non comporta sanzioni pubbliche immediate ma genera Rilievi d'Audit (Audit findings) destinati alla divisione interna per la corretta mitigazione d'esercizio.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_036",
    "source": "TL",
    "text": "If you are trying to collect information about a company in the stealthiest manner possible without being discovered, you might use which of the following?",
    "opts": [
      {
        "id": "A",
        "t": "Passive reconnaissance",
        "c": true
      },
      {
        "id": "B",
        "t": "Active reconnaissance",
        "c": false
      },
      {
        "id": "C",
        "t": "Port scanning",
        "c": false
      },
      {
        "id": "D",
        "t": "Penetrating testing",
        "c": false
      }
    ],
    "expl": "Per raccogliere informazioni con la massima segretezza ed in maniera interamente silente si sfrutta la Ricognizione Passiva (Passive reconnaissance) attingendo da fonti OSINT e query DNS terze senza mai interrogare direttamente l'infrastruttura bersaglio.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_059",
    "source": "TL",
    "text": "Which of the following statements about bug bounty programs are true?",
    "opts": [
      {
        "id": "A",
        "t": "Discovered bugs are worth very little and reputable companies never host them.",
        "c": false
      },
      {
        "id": "B",
        "t": "They are private closed audits kept secure by internal developers only.",
        "c": false
      },
      {
        "id": "C",
        "t": "They are usually open to the public, and companies pay researchers to find vulnerabilities.",
        "c": true
      },
      {
        "id": "D",
        "t": "They are malicious programs set up to distribute rootkits onto researchers' laptops.",
        "c": false
      }
    ],
    "expl": "I programmi di Bug Bounty sono iniziative accessibili pubblicamente in cui le imprese corrispondono premi in denaro ad esperti etici esterni in cambio dell'identificazione e segnalazione previdenziale responsabile di bug o falle.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_139",
    "text": "Which of the following provides the details about the terms of a test with a third-party penetration tester?",
    "opts": [
      {
        "id": "A",
        "t": "Rules of engagement",
        "c": true
      },
      {
        "id": "B",
        "t": "Supply chain analysis",
        "c": false
      },
      {
        "id": "C",
        "t": "Right to audit clause",
        "c": false
      },
      {
        "id": "D",
        "t": "Due diligence",
        "c": false
      }
    ],
    "expl": "Il contratto operativo che descrive nei minimi dettagli le modalità, orari di operatività, ambiti IP di test esclusi e confini di ingaggio tra azienda e tester è governato dalle Regole di Ingaggio (Rules of engagement).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_140",
    "text": "A penetration tester begins an engagement by performing port and service scans against the client environment according to the rules of engagement. Which of the following reconnaissance types is the tester performing?",
    "opts": [
      {
        "id": "A",
        "t": "Active",
        "c": true
      },
      {
        "id": "B",
        "t": "Passive",
        "c": false
      },
      {
        "id": "C",
        "t": "Defensive",
        "c": false
      },
      {
        "id": "D",
        "t": "Offensive",
        "c": false
      }
    ],
    "expl": "Eseguire scansioni di porte dinamiche equivale ad interagire con i canali e socket di rete del bersaglio, rientrando a tutti gli effetti nella categoria di Ricognizione Attiva (Active).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_171",
    "text": "Which of the following is the most likely outcome if a large bank fails an internal PCI DSS compliance assessment?",
    "opts": [
      {
        "id": "A",
        "t": "Fines",
        "c": false
      },
      {
        "id": "B",
        "t": "Audit findings",
        "c": true
      },
      {
        "id": "C",
        "t": "Sanctions",
        "c": false
      },
      {
        "id": "D",
        "t": "Reputation damage",
        "c": false
      }
    ],
    "expl": "Trattandosi di una ispezione ad esclusivo resoconto interno, l'outcome logico consta nella catalogazione di risultati e schede d'azione detti Rilievi d'Audit (Audit findings).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_181",
    "text": "A company hired a consultant to perform an offensive security assessment covering penetration testing and social engineering. Which of the following teams will conduct this assessment activity?",
    "opts": [
      {
        "id": "A",
        "t": "White",
        "c": false
      },
      {
        "id": "B",
        "t": "Purple",
        "c": false
      },
      {
        "id": "C",
        "t": "Blue",
        "c": false
      },
      {
        "id": "D",
        "t": "Red",
        "c": true
      }
    ],
    "expl": "Il team specificamente preposto a condurre l'attività offensiva di social engineering, simulazione malware ed esplorazione delle falle esterne è la Squadra Rossa (Red Team).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_244",
    "text": "Which of the following is the best reason to complete an audit in a banking environment?",
    "opts": [
      {
        "id": "A",
        "t": "Regulatory requirement",
        "c": true
      },
      {
        "id": "B",
        "t": "Organizational change",
        "c": false
      },
      {
        "id": "C",
        "t": "Self-assessment requirement",
        "c": false
      },
      {
        "id": "D",
        "t": "Service-level requirement",
        "c": false
      }
    ],
    "expl": "Negli ambienti finanziari e negli istituti bancari nazionali ed esteri, lo svolgimento metodico degli audit protettivi interni ed esterni è una necessità inderogabile dettata da Requisiti Regolatori obbligatori per legge (Regulatory requirement).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_257",
    "text": "Which of the following teams combines both offensive and defensive testing techniques to protect an organization's critical systems?",
    "opts": [
      {
        "id": "A",
        "t": "Red",
        "c": false
      },
      {
        "id": "B",
        "t": "Blue",
        "c": false
      },
      {
        "id": "C",
        "t": "Purple",
        "c": true
      },
      {
        "id": "D",
        "t": "Yellow",
        "c": false
      }
    ],
    "expl": "La Squadra Viola (Purple Team) è un modello integrato che unisce le competenze e riscontri delle azioni offensive e delle tattiche difensive in tempo reale per tarare le allerte SIEM.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_288",
    "text": "During a penetration test, a vendor attempts to enter an unauthorized area using an access badge. Which of the following types of tests does this represent?",
    "opts": [
      {
        "id": "A",
        "t": "Defensive",
        "c": false
      },
      {
        "id": "B",
        "t": "Passive",
        "c": false
      },
      {
        "id": "C",
        "t": "Offensive",
        "c": false
      },
      {
        "id": "D",
        "t": "Physical",
        "c": true
      }
    ],
    "expl": "I tentativi di superamento fisico di barriere, varchi e locali ad accesso ristretto mediante utilizzo non autorizzato di credenziali o badge rappresenta un test di tipo Fisico (Physical test).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_324",
    "text": "The Chief Information Security Officer (CISO) at a large company would like to gain an understanding of how the company's security policies compare to the requirements imposed by external regulators. Which of the following should the CISO use?",
    "opts": [
      {
        "id": "A",
        "t": "Penetration test",
        "c": false
      },
      {
        "id": "B",
        "t": "Internal audit",
        "c": true
      },
      {
        "id": "C",
        "t": "Attestation",
        "c": false
      },
      {
        "id": "D",
        "t": "External examination",
        "c": false
      }
    ],
    "expl": "Un Audit Interno (Internal audit) permette ai manager di esaminare accuratamente le proprie policy rispetto alle aspettative dei regolatori prima che vengano eseguite verifiche formali da enti esterni.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_332",
    "text": "The Chief Information Officer (CISO) has determined the company is non-compliant with local data privacy regulations. The CISO needs to justify the budget request for more resources. Which of the following should the CISO present to the board as the direct consequence of non-compliance?",
    "opts": [
      {
        "id": "A",
        "t": "Fines",
        "c": true
      },
      {
        "id": "B",
        "t": "Reputational damage",
        "c": false
      },
      {
        "id": "C",
        "t": "Sanctions",
        "c": false
      },
      {
        "id": "D",
        "t": "Contractual implications",
        "c": false
      }
    ],
    "expl": "La violazione e inadempienza verso reati o disposizioni governative esterne di privacy porta come sanzione definita immediata d'ispezione la comminazione di Pesanti Multe Amministrative (Fines), che possono essere usate come saggia motivazione di budget strategico presso il Board.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_354",
    "text": "A Chief Information Security Officer would like to conduct frequent, detailed reviews of systems and procedures to track compliance objectives. Which of the following will be the best method to achieve this objective?",
    "opts": [
      {
        "id": "A",
        "t": "Third-party attestation",
        "c": false
      },
      {
        "id": "B",
        "t": "Penetration testing",
        "c": false
      },
      {
        "id": "C",
        "t": "Internal auditing",
        "c": true
      },
      {
        "id": "D",
        "t": "Vulnerability scans",
        "c": false
      }
    ],
    "expl": "La conduzione metodica, frequente e approfondita di riesami sulle policy, sistemistica di rete e procedure operative aziendali per tenere traccia delle conformità interne risiede nella metodica dell'Audit Interno (Internal auditing).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_381",
    "text": "A hosting provider needs to prove that its security controls have been in place over the last six months and have sufficiently protected customer data. Which of the following would provide the best proof that the hosting provider has met the requirements?",
    "opts": [
      {
        "id": "A",
        "t": "NIST CSF",
        "c": false
      },
      {
        "id": "B",
        "t": "SOC 2 Type 2 report",
        "c": true
      },
      {
        "id": "C",
        "t": "CIS Top 20 compliance reports",
        "c": false
      },
      {
        "id": "D",
        "t": "Vulnerability report",
        "c": false
      }
    ],
    "expl": "Per asseverare la reale efficacia allineata a protezione dei controlli protettivi dei dati lungo una finestra temporale estesa (es: 6 mesi) viene impiegato e richiesto un report SOC 2 modello Type II.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_480",
    "text": "Several customers want an organization to verify its security controls are operating effectively and have requested an independent opinion. Which of the following is the most efficient way to address these requests?",
    "opts": [
      {
        "id": "A",
        "t": "Hire a vendor to perform a penetration test",
        "c": false
      },
      {
        "id": "B",
        "t": "Perform an annual self-assessment.",
        "c": false
      },
      {
        "id": "C",
        "t": "Allow each client the right to audit",
        "c": false
      },
      {
        "id": "D",
        "t": "Provide a third-party attestation report",
        "c": true
      }
    ],
    "expl": "Disporre di un unico report di Attestazione di Terza Parte (come un report SOC 2 Type II) è il metodo più scalabile ed efficiente per soddisfare contemporaneamente le richieste di controllo di molteplici clienti, evitando che ciascuno debba condurre un proprio audit individuale.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_514",
    "text": "Which of the following best describes the concept of information being stored outside of its country of origin while still being subject to the laws and requirements of the country of origin?",
    "opts": [
      {
        "id": "A",
        "t": "Data sovereignty",
        "c": true
      },
      {
        "id": "B",
        "t": "Geolocation",
        "c": false
      },
      {
        "id": "C",
        "t": "Intellectual property",
        "c": false
      },
      {
        "id": "D",
        "t": "Geographic restrictions",
        "c": false
      }
    ],
    "expl": "La dottrina secondo la quale le informazioni memorizzate all'estero continuano a sottostare alle disposizioni del Paese legale di cittadinanza del dato o d'origine risiede nel concetto di Sovranità dei Dati (Data sovereignty).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_528",
    "text": "Which of the following explains how to determine the global regulations that data is subject to regardless of the country where the data is stored?",
    "opts": [
      {
        "id": "A",
        "t": "Geographic dispersion",
        "c": false
      },
      {
        "id": "B",
        "t": "Data sovereignty",
        "c": true
      },
      {
        "id": "C",
        "t": "Geographic restrictions",
        "c": false
      },
      {
        "id": "D",
        "t": "Data segmentation",
        "c": false
      }
    ],
    "expl": "La Sovranità dei Dati (Data sovereignty) descrive e disciplina l'attribuzione della competenza normativa ed i requisiti transnazionali applicati a prescindere dal server fisico multinazionale in cui il dato risiede d'appoggio.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_535",
    "text": "Which of the following describes the procedures a penetration tester must follow while conducting a test?",
    "opts": [
      {
        "id": "A",
        "t": "Rules of engagement",
        "c": true
      },
      {
        "id": "B",
        "t": "Rules of acceptance",
        "c": false
      },
      {
        "id": "C",
        "t": "Rules of understanding",
        "c": false
      },
      {
        "id": "D",
        "t": "Rules of execution",
        "c": false
      }
    ],
    "expl": "Le Regole di Ingaggio (Rules of engagement) dettano e definiscono formalmente e legalmente le precise procedure operative e comportamentali che il tester è tenuto ad applicare ed osservare.",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_546",
    "text": "An organization wants a third-party vendor to do a penetration test that targets a specific device. The organization has provided basic information about the device. Which of the following best describes this kind of penetration test?",
    "opts": [
      {
        "id": "A",
        "t": "Partially known environment",
        "c": true
      },
      {
        "id": "B",
        "t": "Unknown environment",
        "c": false
      },
      {
        "id": "C",
        "t": "Integrated",
        "c": false
      },
      {
        "id": "D",
        "t": "Known environment",
        "c": false
      }
    ],
    "expl": "Fornire ai valutatori del test soltanto dettagli limitati e basilari (es: modello, un IP o informazioni basilari preliminari di rete) configura il test in Ambiente Parzialmente Noto (Partially known environment, o Gray Box).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_602",
    "text": "The Chief Information Officer (CIO) asked a vendor to provide documentation detailing the specific objectives within the compliance framework that the vendor's services meet. The vendor provided a report and a signed letter stating that the services meet 17 of the 21 objectives. Which of the following did the vendor provide to the CIO?",
    "opts": [
      {
        "id": "A",
        "t": "Penetration test results",
        "c": false
      },
      {
        "id": "B",
        "t": "Self-assessment findings",
        "c": false
      },
      {
        "id": "C",
        "t": "Attestation of compliance",
        "c": true
      },
      {
        "id": "D",
        "t": "Third-party audit report",
        "c": false
      }
    ],
    "expl": "La fornitura di un report corredato da un atto d'asseverazione scritto firmato in cui si dettaglia formale rispondenza ad una serie esatta di obiettivi definiti entro un framework strutturale (compliance framework) è detta Attestazione di Conformità (Attestation of compliance).",
    "domain": 5,
    "objective": "5.5"
  },
  {
    "id": "SCREEN_045",
    "source": "TL",
    "text": "You are asked to prepare a brief to senior management about insider threats. You detail the use of data loss prevention (DLP) as a major factor in identifying and protecting against insider threats. What is the primary reason DLP can protect against these threats?",
    "opts": [
      {
        "id": "A",
        "t": "Avoiding data leakage through malware.",
        "c": false
      },
      {
        "id": "B",
        "t": "Prevention of access to confidential data by unauthorized personnel.",
        "c": false
      },
      {
        "id": "C",
        "t": "Prevention of critical data not being backup up properly.",
        "c": false
      },
      {
        "id": "D",
        "t": "Prevention of sensitive data being transferred in an unauthorized manner.",
        "c": true
      }
    ],
    "expl": "La tecnologia di Prevenzione della Perdita del Dato (DLP) agisce controllando e supervisionando proattivamente lo scambio organizzativo, impedendo alle minacce interne di esportare o trasferire furtivamente file, brevetti e segreti commerciali fuori dall'azienda.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_137",
    "text": "Several employees received a fraudulent text message from someone claiming to be the Chief Executive Officer (CEO). The message stated: \"I'm in an airport right now with no access to email. I need you to buy gift cards for employee recognition awards. Please send the gift cards to following email address.\" Which of the following pairing describes the best responses to this situation?",
    "opts": [
      {
        "id": "A",
        "t": "Cancel current employee recognition gift cards and have the CEO change phone numbers.",
        "c": false
      },
      {
        "id": "B",
        "t": "Add a smishing exercise to annual company training and issue a general email warning to the company.",
        "c": true
      },
      {
        "id": "C",
        "t": "Conduct a forensic investigation on the CEO's phone and implement mobile device management.",
        "c": false
      },
      {
        "id": "D",
        "t": "Implement mobile device management and change the company mail server password.",
        "c": false
      }
    ],
    "expl": "La risposta ottimale di fronte a truffe Smishing basate sull'impersonificazione del CEO consta nell'allertare prontamente l'organico tramite comunicato email e di inserire test del medesimo vettore all'interno dei corsi periodici di addestramento.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_162",
    "text": "A technician wants to improve the situational and environmental awareness of existing users as they transition from remote to in-office work. Which of the following is the best option?",
    "opts": [
      {
        "id": "A",
        "t": "Send out periodic security reminders.",
        "c": false
      },
      {
        "id": "B",
        "t": "Update the content of new hire documentation.",
        "c": false
      },
      {
        "id": "C",
        "t": "Modify the content of recurring training.",
        "c": true
      },
      {
        "id": "D",
        "t": "Implement a phishing campaign.",
        "c": false
      }
    ],
    "expl": "Il rientro del personale negli uffici introduce minacce fisiche (come tailgating o incustodia dei badge) assenti durante lo Smart Working. Il sistema ottimale risiede nel modificare il materiale del percorso formativo ricorrente per integrare logiche di protezione fisica della postazione.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_216",
    "text": "A company's marketing department collects, modifies, and stores sensitive customer data. The infrastructure team is responsible for securing the data while in transit and at rest. Which of the following data roles describes the customer?",
    "opts": [
      {
        "id": "A",
        "t": "Processor",
        "c": false
      },
      {
        "id": "B",
        "t": "Custodian",
        "c": false
      },
      {
        "id": "C",
        "t": "Subject",
        "c": true
      },
      {
        "id": "D",
        "t": "Owner",
        "c": false
      }
    ],
    "expl": "La persona fisica cliente o utente alla quale fanno capo e appartengono i dati personali raccolti ed elaborati per fini industriali si definisce privacy-wise Interessato o Soggetto dei Dati (Data Subject).",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_279",
    "text": "Which of the following pairings represents the factors that are the most important to address when formulating a training curriculum plan for a security awareness program?",
    "opts": [
      {
        "id": "A",
        "t": "Channels of communications with customers and retraining criteria for failed phishing simulations.",
        "c": false
      },
      {
        "id": "B",
        "t": "Secure software development training for all personnel and reporting mechanisms for ethics violations.",
        "c": false
      },
      {
        "id": "C",
        "t": "Threat vectors based on the organization's industry and the cadence/duration of training events.",
        "c": true
      },
      {
        "id": "D",
        "t": "Retraining requirements for individuals who fail simulations and channels for customer communication.",
        "c": false
      }
    ],
    "expl": "Progettare un piano didattico mirato impone di analizzare i vettori d'attacco propri del specifico settore merceologico di appartenenza e di stabilire tempi e frequenza equilibrati (cadence/duration) per scongiurare l'usura informativa.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_427",
    "text": "A security officer is implementing a security awareness program and has placed security-themed posters around the building and assigned online user training. Which of the following will the security officer most likely implement next?",
    "opts": [
      {
        "id": "A",
        "t": "Password policy",
        "c": false
      },
      {
        "id": "B",
        "t": "Access badges",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing campaign",
        "c": true
      },
      {
        "id": "D",
        "t": "Risk assessment",
        "c": false
      }
    ],
    "expl": "Dopo l'educazione informativa (poster energetici e lezioni online) viene lanciata una campagna di phishing fittizia/simulata per comprovare de facto il tasso di confidenza degli impiegati.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_460",
    "text": "An organization maintains intellectual property that it wants to protect. Which of the following concepts would be most beneficial to add to the company’s security awareness training program?",
    "opts": [
      {
        "id": "A",
        "t": "Insider threat detection",
        "c": true
      },
      {
        "id": "B",
        "t": "Simulated threats",
        "c": false
      },
      {
        "id": "C",
        "t": "Phishing awareness",
        "c": false
      },
      {
        "id": "D",
        "t": "Business continuity planning",
        "c": false
      }
    ],
    "expl": "La proprietà intellettuale brevettata è sotto perenne minaccia di esfiltrazione furtiva da parte di contractor o dipendenti autorizzati infedeli (insiders). L'addestramento dei colleghi a riconoscere segni e comportamenti prodromici è fondamentale per sventare il furto.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_485",
    "text": "An employee emailed a new systems administrator a malicious web link and convinced the administrator to change the email server’s password. The employee used this access to remove the mailboxes of key personnel. Which of the following security awareness concepts would help prevent this threat in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Recognizing phishing",
        "c": true
      },
      {
        "id": "B",
        "t": "Providing situational awareness training",
        "c": false
      },
      {
        "id": "C",
        "t": "Using password management",
        "c": false
      },
      {
        "id": "D",
        "t": "Reviewing email policies",
        "c": false
      }
    ],
    "expl": "Il veicolo d'insidia scatenante è stato l'invio e il click su un link dannoso (esca fraudolenta), mitigabile soltanto con formati volti al riconoscimento del phishing (recognizing phishing).",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_649",
    "text": "A security report shows that during a two-week test period, 80% of employees unwittingly disclosed their SSO credentials when accessing an external website. The organization purposely created the website to simulate a cost-free password complexity test. Which of the following would best help reduce the number of visits to similar websites in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Block all outbound traffic from the intranet.",
        "c": false
      },
      {
        "id": "B",
        "t": "Introduce a campaign to recognize phishing attempts.",
        "c": true
      },
      {
        "id": "C",
        "t": "Restrict internet access for the employees who disclosed credentials.",
        "c": false
      },
      {
        "id": "D",
        "t": "Implement a deny list of websites.",
        "c": false
      }
    ],
    "expl": "Fornire le proprie credenziali d'accesso a piattaforme esterne per finti test di robustezza è un imprevisto gravissimo. Solo una solida formazione metodica sul riconoscimento dei vettori di phishing (phishing awareness) insegna agli impiegati a trattenersi dall'inserire credenziali in siti estranei.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_679",
    "text": "After a series of account compromises and credential misuse, a company hires a security manager to develop a security program. Which of the following steps should the security manager take first to increase security awareness?",
    "opts": [
      {
        "id": "A",
        "t": "Evaluate tools that identify risky behavior and distribute reports on the findings.",
        "c": false
      },
      {
        "id": "B",
        "t": "Send quarterly newsletters that explain the importance of password management.",
        "c": false
      },
      {
        "id": "C",
        "t": "Develop phishing campaigns and notify the management team of any successes.",
        "c": false
      },
      {
        "id": "D",
        "t": "Update policies and handbooks to ensure all employees are informed of the new procedures.",
        "c": true
      }
    ],
    "expl": "In assenza di basi scritte, non è possibile pretendere compliance. L'aggiornamento dei manuali dei dipendenti e delle politiche di comportamento (Policies and handbooks) costituisce la pietra d'angolo preliminare obbligatoria.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_694",
    "source": "TL",
    "text": "While updating the security awareness training, a security analyst wants to address issues created if vendors' email accounts are compromised. Which of the following recommendations should the security analyst include in the training?",
    "opts": [
      {
        "id": "A",
        "t": "Refrain from clicking on images included in emails from new vendors.",
        "c": false
      },
      {
        "id": "B",
        "t": "Delete emails from unknown service provider partners.",
        "c": false
      },
      {
        "id": "C",
        "t": "Require that invoices be sent as attachments.",
        "c": false
      },
      {
        "id": "D",
        "t": "Be alert to unexpected requests from familiar email addresses.",
        "c": true
      }
    ],
    "expl": "Quando l'account di un fornitore noto viene violato, l'attaccante userà un canale apparentemente lecito e fidato. L'addestramento corretto impone di dubitare istantaneamente di disposizioni di sblocco fondi o richieste atipiche giunte anche da indirizzi familiari.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_697",
    "text": "The number of tickets the help desk has been receiving has increased recently due to numerous false-positive phishing reports. Which of the following would be best to help to reduce the false positives?",
    "opts": [
      {
        "id": "A",
        "t": "Performing more phishing simulation campaigns.",
        "c": false
      },
      {
        "id": "B",
        "t": "Improving security awareness training.",
        "c": true
      },
      {
        "id": "C",
        "t": "Hiring more help desk staff.",
        "c": false
      },
      {
        "id": "D",
        "t": "Implementing an incident reporting web page.",
        "c": false
      }
    ],
    "expl": "Troppi falsi positivi indicano che gli utenti non sanno discernere lo spam o le newsletter regolari da attacchi reali. Affinare la formazione di sicurezza (improving security awareness training) insegnando i veri marcatori ed header tecnici riduce drasticamente l'insorgenza di falsi allarme.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_699",
    "text": "A security report shows that during a two-week test period, 80% of employees unwittingly disclosed their SSO credentials when accessing an external website. Which of the following is the most effective approach to protect the organization in the future?",
    "opts": [
      {
        "id": "A",
        "t": "Block all outbound traffic from the intranet.",
        "c": false
      },
      {
        "id": "B",
        "t": "Introduce a campaign to recognize phishing attempts.",
        "c": true
      },
      {
        "id": "C",
        "t": "Restrict internet access for the employees who disclosed credentials.",
        "c": false
      },
      {
        "id": "D",
        "t": "Implement a deny list of websites.",
        "c": false
      }
    ],
    "expl": "Simile a quanto visto in precedenza, l'unica barriera sostenibile quando i dipendenti svelano le proprie credenziali SSO è l'attivazione didattica del Riconoscimento del Phishing.",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_703",
    "text": "A company is concerned about employees unintentionally introducing malware into the network. The company identified fifty employees who clicked on a link embedded in an email sent by the internal IT department. Which of the following should the company implement to best improve its security posture?",
    "opts": [
      {
        "id": "A",
        "t": "Social engineering training",
        "c": true
      },
      {
        "id": "B",
        "t": "SPF configuration",
        "c": false
      },
      {
        "id": "C",
        "t": "Simulated phishing campaign",
        "c": false
      },
      {
        "id": "D",
        "t": "Insider threat awareness",
        "c": false
      }
    ],
    "expl": "Poiché il rischio risiede nel superamento involontario di tutele basato su ingannevoli messaggi o link embedded simulati dall'IT, la contromisura raccomandata risiede nell'avviare un addestramento complessivo sulle logiche dell'Ingegneria Sociale (Social engineering training).",
    "domain": 5,
    "objective": "5.6"
  },
  {
    "id": "SCREEN_725",
    "text": "The physical security team at a company receives reports that employees are not displaying their badges. The team also observes employees tailgating at controlled entrances. Which of the following topics will the security team most likely emphasize in upcoming security training?",
    "opts": [
      {
        "id": "A",
        "t": "Social engineering",
        "c": false
      },
      {
        "id": "B",
        "t": "Situational awareness",
        "c": true
      },
      {
        "id": "C",
        "t": "Phishing",
        "c": false
      },
      {
        "id": "D",
        "t": "Acceptable use policy",
        "c": false
      }
    ],
    "expl": "Comportamenti fisici fallaci come l'accettare passaggi fisici (tailgating) o non mostrare i badge di sicurezza rientrano direttamente sotto il cappello e la categoria di Consapevolezza Situazionale (Situational awareness) ed ambientale.",
    "domain": 5,
    "objective": "5.6"
  }
];
