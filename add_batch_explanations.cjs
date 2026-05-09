const fs = require('fs');

const explanations = {
    "SCREEN_027": {
        "en": "Segmenting a legacy server into a private network is a preventive control because it proactively isolates the vulnerable system to prevent unauthorized access or potential attacks.",
        "it": "La segmentazione di un server legacy in una rete privata è un controllo preventivo perché isola proattivamente il sistema vulnerabile per impedire accessi non autorizzati o potenziali attacchi."
    },
    "SCREEN_057": {
        "en": "In the CIA triad (Confidentiality, Integrity, and Availability), the 'A' stands for Availability, which ensures that authorized users have timely and reliable access to systems and information.",
        "it": "Nella triade CIA (Riservatezza, Integrità e Disponibilità), la 'A' sta per Disponibilità (Availability), che garantisce che gli utenti autorizzati abbiano un accesso tempestivo e affidabile ai sistemi e alle informazioni."
    },
    "SCREEN_190": {
        "en": "Data Loss Prevention (DLP) tools are specifically designed to detect and prevent sensitive information, such as PII, from leaving the organization via unauthorized channels like email.",
        "it": "Gli strumenti di Data Loss Prevention (DLP) sono progettati specificamente per rilevare e impedire che informazioni sensibili, come le PII, lascino l'organizzazione attraverso canali non autorizzati come l'email."
    },
    "SCREEN_211": {
        "en": "Safety controls should always 'fail open' to ensure that people can exit a facility quickly during an emergency, prioritizing human life over physical asset protection.",
        "it": "I controlli di sicurezza (safety controls) dovrebbero sempre 'fallire in modalità aperta' (fail open) per garantire che le persone possano uscire rapidamente da una struttura durante un'emergenza, dando priorità alla vita umana rispetto alla protezione dei beni fisici."
    },
    "SCREEN_228": {
        "en": "Compensating controls are used when an organization cannot meet a standard security requirement (like patching a legacy system) and instead implements alternative measures like firewalling and service hardening.",
        "it": "I controlli compensativi vengono utilizzati quando un'organizzazione non può soddisfare un requisito di sicurezza standard (come il patching di un sistema legacy) e implementa invece misure alternative come firewall e hardening dei servizi."
    },
    "SCREEN_232": {
        "en": "Data classification is the critical first step in a DLP deployment because the system must know which data is sensitive before it can effectively apply rules to protect it.",
        "it": "La classificazione dei dati è il primo passo critico nella distribuzione di una soluzione DLP perché il sistema deve sapere quali dati sono sensibili prima di poter applicare efficacemente le regole per proteggerli."
    },
    "SCREEN_239": {
        "en": "A combination of badge access and an access control vestibule provides strong physical security, ensuring only authenticated individuals can enter and preventing tailgating.",
        "it": "La combinazione di badge di accesso e di una bussola di controllo accessi (access control vestibule) fornisce una forte sicurezza fisica, garantendo che solo le persone autenticate possano entrare e impedendo l'accodamento (tailgating)."
    },
    "SCREEN_248": {
        "en": "Reviewing log files after an event is a detective control because it involves analyzing history to identify and confirm that a security incident has occurred.",
        "it": "La revisione dei file di log dopo un evento è un controllo rilevativo poiché comporta l'analisi della cronologia per identificare e confermare che si è verificato un incidente di sicurezza."
    },
    "SCREEN_275": {
        "en": "Controls like vestibules and photo ID are physical security controls because they are tangible measures implemented to secure the actual building and physical assets.",
        "it": "Controlli come le bussole di accesso e il documento d'identità con foto sono controlli di sicurezza fisica perché sono misure tangibili implementate per proteggere l'edificio e i beni fisici."
    },
    "SCREEN_277": {
        "en": "Using an access badge ensures that only authorized employees can enter sensitive areas like a data center, making it a primary defense against unauthorized physical access by insiders.",
        "it": "L'uso di un badge di accesso garantisce che solo i dipendenti autorizzati possano entrare in aree sensibili come un data center, rendendolo una difesa primaria contro l'accesso fisico non autorizzato da parte di insider."
    },
    "SCREEN_323": {
        "en": "Firewalls and anti-malware software are technical security controls because they leverage hardware and software to protect digital assets and network integrity.",
        "it": "I firewall e i software anti-malware sono controlli di sicurezza tecnici perché sfruttano hardware e software per proteggere le risorse digitali e l'integrità della rete."
    },
    "SCREEN_341": {
        "en": "Reviewing documentation such as security policies and procedures is a management (or administrative) control designed to establish the rules and direction for organizational security.",
        "it": "La revisione della documentazione, come le policy e le procedure di sicurezza, è un controllo gestionale (o amministrativo) progettato per stabilire le regole e la direzione della sicurezza organizzativa."
    },
    "SCREEN_366": {
        "en": "Deterrent controls, such as warning signs or visible security cameras, are intended to discourage potential attackers from attempting a security breach by highlighting the consequences or risks.",
        "it": "I controlli deterrenti, come segnali di avvertimento o telecamere di sicurezza visibili, hanno lo scopo di scoraggiare i potenziali aggressori dal tentare una violazione della sicurezza evidenziandone le conseguenze o i rischi."
    },
    "SCREEN_383": {
        "en": "The principle of 'Least Privilege' ensures that users only have the minimum level of access necessary to perform their job functions, significantly reducing the impact of potential account compromises.",
        "it": "Il principio del 'Privilegio Minimo' (Least Privilege) garantisce che gli utenti abbiano solo il livello minimo di accesso necessario per svolgere le proprie funzioni lavorative, riducendo significativamente l'impatto di potenziali compromissioni degli account."
    },
    "SCREEN_410": {
        "en": "Separation of duties is a management control that splits critical tasks between multiple people to prevent fraud and errors, ensuring that no single individual has total control over a major process.",
        "it": "La separazione delle mansioni (separation of duties) è un controllo gestionale che suddivide le attività critiche tra più persone per prevenire frodi ed errori, garantendo che nessun singolo individuo abbia il controllo totale su un processo importante."
    },
    "SCREEN_466": {
        "en": "A honeypot is a detective control designed to lure and trap attackers, allowing security teams to observe their methods and detect intrusion attempts that might otherwise go unnoticed.",
        "it": "Un honeypot è un controllo rilevativo progettato per attirare e intrappolare gli aggressori, consentendo ai team di sicurezza di osservare i loro metodi e rilevare tentativi di intrusione che potrebbero altrimenti passare inosservati."
    },
    "SCREEN_476": {
        "en": "Security awareness training is an operational control that addresses the human element of security by educating employees on how to recognize and respond to potential threats.",
        "it": "La formazione sulla consapevolezza della sicurezza (security awareness training) è un controllo operativo che affronta l'elemento umano della sicurezza istruendo i dipendenti su come riconoscere e rispondere alle potenziali minacce."
    },
    "SCREEN_511": {
        "en": "Red teaming is an advanced operational control where a simulated adversarial group attempts to breach security, providing a realistic test of the organization's defense and response capabilities.",
        "it": "Il red teaming è un controllo operativo avanzato in cui un gruppo avversario simulato tenta di violare la sicurezza, fornendo un test realistico delle capacità di difesa e risposta dell'organizzazione."
    },
    "SCREEN_543": {
        "en": "SIEM (Security Information and Event Management) tools provide a centralized platform for monitoring and analyzing security logs, helping teams detect complex attack patterns across the network.",
        "it": "Gli strumenti SIEM (Security Information and Event Management) forniscono una piattaforma centralizzata per il monitoraggio e l'analisi dei log di sicurezza, aiutando i team a rilevare modelli di attacco complessi in tutta la rete."
    },
    "SCREEN_554": {
        "en": "Secure coding practices and vulnerability scanning during the software development lifecycle are preventive controls intended to identify and fix security flaws before applications are deployed.",
        "it": "Le pratiche di codifica sicura e la scansione delle vulnerabilità durante il ciclo di vita dello sviluppo del software sono controlli preventivi destinati a identificare e correggere i difetti di sicurezza prima della distribuzione delle applicazioni."
    },
    "SCREEN_606": {
        "en": "Encryption is a technical integrity control that ensures data has not been altered during transit or storage by making it unreadable to anyone without the matching decryption key.",
        "it": "La crittografia è un controllo tecnico dell'integrità che garantisce che i dati non siano stati alterati durante il transito o l'archiviazione rendendoli illeggibili a chiunque non disponga della chiave di decrittografia corrispondente."
    },
    "SCREEN_639": {
        "en": "Asset management and inventory tracking are essential operational controls that ensure an organization knows what devices and data it needs to protect, reducing the risk of 'Shadow IT'.",
        "it": "La gestione delle risorse (asset management) e il tracciamento dell'inventario sono controlli operativi essenziali che garantiscono che un'organizzazione sappia quali dispositivi e dati deve proteggere, riducendo il rischio di 'Shadow IT'."
    },
    "SCREEN_644": {
        "en": "An IPS (Intrusion Prevention System) is a technical control that actively scans network traffic for malicious activity and can take automated action to block detected threats in real-time.",
        "it": "Un IPS (Intrusion Prevention System) è un controllo tecnico che scansiona attivamente il traffico di rete alla ricerca di attività dannose e può intraprendere azioni automatizzate per bloccare le minacce rilevate in tempo reale."
    },
    "SCREEN_646": {
        "en": "Physical environmental controls, such as humidity sensors and cooling systems in a data center, are crucial for ensuring the 'Availability' of systems by preventing hardware failures due to environmental stress.",
        "it": "I controlli ambientali fisici, come i sensori di umidità e i sistemi di raffreddamento in un data center, sono fondamentali per garantire la 'Disponibilità' dei sistemi prevenendo guasti hardware dovuti allo stress ambientale."
    },
    "SCREEN_095": {
        "en": "Authorization is the process of granting or denying specific access rights to a user after they have been successfully identified and authenticated on a network.",
        "it": "L'autorizzazione è il processo di concessione o negazione di specifici diritti di accesso a un utente dopo che è stato identificato e autenticato con successo in una rete."
    },
    "SCREEN_108": {
        "en": "Zero Trust is the security concept that assumes no entity inside or outside the network is inherently trustworthy, validating that even with credentials, systems should be scanned for vulnerabilities.",
        "it": "Zero Trust è il concetto di sicurezza che presuppone che nessuna entità all'interno o all'esterno della rete sia intrinsecamente degna di fiducia, convalidando che, anche con le credenziali, i sistemi debbano essere scansionati alla ricerca di vulnerabilità."
    },
    "SCREEN_114": {
        "en": "Single Sign-On (SSO) allows users to use one set of credentials (like domain credentials) to access multiple applications, reducing the burden of managing many different passwords.",
        "it": "Il Single Sign-On (SSO) consente agli utenti di utilizzare un unico set di credenziali (come le credenziali di dominio) per accedere a più applicazioni, riducendo l'onere di gestire molte password diverse."
    },
    "SCREEN_144": {
        "en": "In a Zero Trust architecture, the data plane is where actual communication occurs, and evaluating the 'Subject Role' helps ensure that only authorized subjects can access specific data resources.",
        "it": "In un'architettura Zero Trust, il piano dei dati (data plane) è dove avviene la comunicazione effettiva; valutare il 'Ruolo del Soggetto' (Subject Role) aiuta a garantire che solo i soggetti autorizzati possano accedere a specifiche risorse di dati."
    },
    "SCREEN_280": {
        "en": "Load balancers distribute traffic across multiple servers to ensure that services remain accessible even if one server fails, directly supporting the security requirement of Availability.",
        "it": "I bilanciatori di carico distribuiscono il traffico su più server per garantire che i servizi rimangano accessibili anche se un server si guasta, supportando direttamente il requisito di sicurezza della Disponibilità."
    },
    "SCREEN_309": {
        "en": "Confidentiality ensures that sensitive information is only accessible by authorized individuals who have a legitimate need to see it based on their role in the organization.",
        "it": "La Riservatezza garantisce che le informazioni sensibili siano accessibili solo a persone autorizzate che hanno un legittimo bisogno di vederle in base al loro ruolo nell'organizzazione."
    },
    "SCREEN_338": {
        "en": "For a health emergency reporting application, Availability is the most critical factor because the system must be reachable and functional at all times to handle life-critical information.",
        "it": "Per un'applicazione di segnalazione di emergenze sanitarie, la Disponibilità è il fattore più critico perché il sistema deve essere raggiungibile e funzionante in ogni momento per gestire informazioni vitali."
    },
    "SCREEN_470": {
        "en": "Distributed Denial of Service (DDoS) attacks aim to overwhelm a system to make it unavailable; therefore, protection against these attacks primarily supports the concept of Availability.",
        "it": "Gli attacchi DDoS (Distributed Denial of Service) mirano a sovraccaricare un sistema per renderlo non disponibile; pertanto, la protezione contro questi attacchi supporta principalmente il concetto di Disponibilità."
    },
    "SCREEN_493": {
        "en": "'Data in use' refers to information that is currently being processed or accessed by applications or computer systems, such as data active in RAM or being computed by a database server.",
        "it": "I 'dati in uso' (data in use) si riferiscono alle informazioni che vengono attualmente elaborate o consultate da applicazioni o sistemi informatici, come i dati attivi nella RAM o elaborati da un database server."
    },
    "SCREEN_500": {
        "en": "Accounting is the security concept that involves tracking user activity and resource usage, often through logs, to maintain a record of who accessed what and for how long.",
        "it": "L'Accounting è il concetto di sicurezza che prevede il tracciamento dell'attività degli utenti e dell'utilizzo delle risorse, spesso tramite log, per mantenere un registro di chi ha effettuato l'accesso, a cosa e per quanto tempo."
    },
    "SCREEN_524": {
        "en": "A honeypot is a decoy system designed to mislead attackers and gather intelligence on their activities, tools, and techniques without putting real production systems at risk.",
        "it": "Un honeypot è un sistema esca progettato per trarre in inganno gli aggressori e raccogliere informazioni sulle loro attività, strumenti e tecniche senza mettere a rischio i reali sistemi di produzione."
    },
    "SCREEN_587": {
        "en": "A honeytoken is a specific digital asset, such as a fake user account or file, that is placed as a trap to detect and monitor unauthorized activity or data breaches.",
        "it": "Un honeytoken è una specifica risorsa digitale, come un finto account utente o un file, che viene posizionata come trappola per rilevare e monitorare attività non autorizzate o violazioni dei dati."
    },
    "SCREEN_609": {
        "en": "Hard drive encryption protects the Confidentiality of data by making it unreadable to anyone who does not have the correct decryption key, even if the physical drive is stolen.",
        "it": "La crittografia del disco rigido protegge la Riservatezza dei dati rendendoli illeggibili a chiunque non disponga della chiave di decrittografia corretta, anche se il disco fisico viene rubato."
    },
    "SCREEN_686": {
        "en": "A fail-open configuration for a firewall prioritize Availability by ensuring that traffic can still flow even if the firewall service fails, though it may compromise integrity in that frangente.",
        "it": "Una configurazione 'fail-open' per un firewall dà priorità alla Disponibilità garantendo che il traffico possa ancora scorrere anche se il servizio firewall si guasta, sebbene ciò possa comprometterla in quel frangente."
    },
    "SCREEN_013": {
        "en": "Before applying any significant changes to a production system, a change control request must be created to ensure the change is documented, assessed for risk, and approved by the appropriate authorities.",
        "it": "Prima di applicare modifiche significative a un sistema di produzione, è necessario creare una richiesta di controllo delle modifiche (change control request) per garantire che la modifica sia documentata, valutata per il rischio e approvata dalle autorità competenti."
    },
    "SCREEN_017": {
        "en": "An essential part of effective change management is having a documented backout plan, which provides clear steps to revert a system to its previous stable state if a patch or update fails.",
        "it": "Una parte essenziale di una gestione delle modifiche efficace è avere un piano di ripristino (backout plan) documentato, che fornisca passaggi chiari per riportare un sistema allo stato stabile precedente se una patch o un aggiornamento fallisce."
    },
    "SCREEN_088": {
        "en": "Setting up new firewall rules is a major infrastructure change that must follow the organization's change management procedures to prevent accidental outages and ensure all security implications are reviewed.",
        "it": "L'impostazione di nuove regole del firewall è una modifica importante dell'infrastruttura che deve seguire le procedure di gestione delle modifiche dell'organizzazione per prevenire interruzioni accidentali e garantire che tutte le implicazioni di sicurezza siano esaminate."
    },
    "SCREEN_175": {
        "en": "Testing policies in a non-production (staging) environment is a critical best practice that allows technicians to identify potential issues and misconfigurations before they impact live business services.",
        "it": "Testare le policy in un ambiente non di produzione (staging) è una best practice fondamentale che consente ai tecnici di identificare potenziali problemi e configurazioni errate prima che abbiano un impatto sui servizi aziendali live."
    },
    "SCREEN_260": {
        "en": "Scheduled downtime (or maintenance windows) provide a defined timeframe for administrators to perform system updates, minimizing the impact on business operations and ensuring users are informed in advance.",
        "it": "I periodi di inattività pianificata (scheduled downtime o maintenance windows) forniscono un arco di tempo definito agli amministratori per eseguire gli aggiornamenti del sistema, riducendo al minimo l'impatto sulle operazioni aziendali e garantendo che gli utenti siano informati in anticipo."
    },
    "SCREEN_292": {
        "en": "A backout plan is a requirement in change management that demonstrates a clear strategy for restoring a system to its original state if a newly deployed change causes performance issues or failures.",
        "it": "Un piano di ripristino (backout plan) è un requisito nella gestione delle modifiche che dimostra una strategia chiara per riportare un sistema allo stato originale se una modifica appena distribuita causa problemi di prestazioni o guasti."
    },
    "SCREEN_356": {
        "en": "Version control is the process of tracking and managing changes to documents or code, ensuring that all revisions are saved and that users can identify which version is the most current and accurate.",
        "it": "Il controllo delle versioni (version control) è il processo di tracciamento e gestione delle modifiche a documenti o codice, garantendo che tutte le revisioni siano salvate e che gli utenti possano identificare quale versione sia la più attuale e accurata."
    },
    "SCREEN_416": {
        "en": "When issues are identified in an existing design, the change control process should be initiated to systematically evaluate, document, and approve the necessary modifications before they are implemented.",
        "it": "Quando vengono identificati problemi in un design esistente, è necessario avviare il processo di controllo delle modifiche (change control) per valutare, documentare e approvare sistematicamente le modifiche necessarie prima che vengano implementate."
    },
    "SCREEN_437": {
        "en": "Branch protection requirements are part of the Software Development Life Cycle (SDLC) as they ensure that code changes are reviewed and tested before being merged into the main production codebase.",
        "it": "I requisiti di protezione dei rami (branch protection) fanno parte del ciclo di vita dello sviluppo del software (SDLC) in quanto garantiscono che le modifiche al codice siano esaminate e testate prima di essere unite alla base di codice di produzione principale."
    },
    "SCREEN_445": {
        "en": "A maintenance window is a pre-approved time period during which administrators can perform intrusive tasks, such as firmware upgrades on critical network devices, with reduced risk to business availability.",
        "it": "Una finestra di manutenzione (maintenance window) è un periodo di tempo preventivamente approvato durante il quale gli amministratori possono eseguire attività intrusive, come gli aggiornamenti del firmware su dispositivi di rete critici, con un rischio ridotto per la disponibilità aziendale."
    },
    "SCREEN_621": {
        "en": "Referring to the change management policy is a vital step before mitigating vulnerabilities, as it ensures the fix follows internal procedures for documentation, approval, and risk assessment.",
        "it": "Fare riferimento alla policy di gestione delle modifiche è un passaggio fondamentale prima di mitigare le vulnerabilità, in quanto garantisce che la correzione segua le procedure interne per la documentazione, l'approvazione e la valutazione del rischio."
    },
    "SCREEN_674": {
        "en": "Backout planning is a key step in change management that prepares a 'fallback' strategy to quickly undo a change if it introduces unexpected security vulnerabilities or operational issues.",
        "it": "La pianificazione del ripristino (backout planning) è un passaggio chiave nella gestione delle modifiche che prepara una strategia di 'ripiego' (fallback) per annullare rapidamente una modifica se introduce vulnerabilità di sicurezza impreviste o problemi operativi."
    },
    "SCREEN_007": {
        "en": "Salting involves adding a random string of data (the salt) to a password before hashing it, which ensures that identical passwords result in unique hashes and protects against rainbow table attacks.",
        "it": "Il salting consiste nell'aggiungere una stringa casuale di dati (il salt) a una password prima di effettuarne l'hashing, garantendo che password identiche producano hash univoci e proteggendo dagli attacchi tramite rainbow table."
    },
    "SCREEN_026": {
        "en": "Hashing is used to verify the integrity of software; by checking the hash of the final version against a known good value, a company can ensure the software has not been tampered with.",
        "it": "L'hashing viene utilizzato per verificare l'integrità del software; confrontando l'hash della versione finale con un valore noto e corretto, un'azienda può garantire che il software non sia stato manomesso."
    },
    "SCREEN_033": {
        "en": "When a certificate is compromised or used maliciously, it must be revoked, and the Certificate Revocation List (CRL) must be updated so that systems know the certificate is no longer trustworthy.",
        "it": "Quando un certificato viene compromesso o utilizzato in modo malevolo, deve essere revocato e la Certificate Revocation List (CRL) deve essere aggiornata affinché i sistemi sappiano che il certificato non è più affidabile."
    },
    "SCREEN_048": {
        "en": "A Hardware Security Module (HSM) is a dedicated network device used for centralized cryptographic operations and secure key generation, offering higher security than software-based solutions.",
        "it": "Un Hardware Security Module (HSM) è un dispositivo di rete dedicato utilizzato per operazioni crittografiche centralizzate e generazione sicura di chiavi, offrendo una sicurezza superiore rispetto alle soluzioni software."
    },
    "SCREEN_051": {
        "en": "Using custom, non-standardized proprietary algorithms and old or weak cipher suites are two major factors that lead to weak encryption which can be easily broken by attackers.",
        "it": "L'uso di algoritmi proprietari personalizzati e non standardizzati e di suite di cifratura vecchie o deboli sono due fattori principali che portano a una crittografia debole facilmente violabile dagli aggressori."
    },
    "SCREEN_065": {
        "en": "Ciphertext is the unreadable, encrypted version of information produced when plaintext is transformed using a cryptographic algorithm and a key.",
        "it": "Il testo cifrato (ciphertext) è la versione crittografata e illeggibile delle informazioni prodotta quando il testo in chiaro (plaintext) viene trasformato utilizzando un algoritmo crittografico e una chiave."
    },
    "SCREEN_100": {
        "en": "Hashing is a one-way function that produces a fixed-length digest from variable-length input, used primarily for integrity verification rather than confidentiality.",
        "it": "L'hashing è una funzione unidirezionale che produce un digest a lunghezza fissa da un input a lunghezza variabile, utilizzato principalmente per la verifica dell'integrità piuttosto che per la riservatezza."
    },
    "SCREEN_105": {
        "en": "Electronic Codebook (ECB) mode is considered the weakest encryption mode because it encrypts identical blocks of plaintext into identical blocks of ciphertext, revealing patterns in the data.",
        "it": "La modalità Electronic Codebook (ECB) è considerata la modalità di crittografia più debole perché crittografa blocchi identici di testo in chiaro in blocchi identici di testo cifrato, rivelando schemi nei dati."
    },
    "SCREEN_111": {
        "en": "Salting adds unique, random data to an input before hashing, significantly increasing the complexity of cracking passwords even if two users have the same original password.",
        "it": "Il salting aggiunge dati univoci e casuali a un input prima dell'hashing, aumentando significativamente la complessità della violazione delle password anche se due utenti hanno la stessa password originale."
    },
    "SCREEN_152": {
        "en": "Full disk encryption (FDE) is the most effective way to protect all data on a laptop's hard drive, ensuring that everything is unreadable if the physical device is lost or stolen.",
        "it": "La crittografia completa del disco (FDE) è il modo più efficace per proteggere tutti i dati sul disco rigido di un laptop, garantendo che tutto sia illeggibile se il dispositivo fisico viene smarrito o rubato."
    },
    "SCREEN_182": {
        "en": "Code signing provides authenticity and integrity by using a digital signature to verify the software developer's identity and ensure the code hasn't been modified since it was signed.",
        "it": "Il code signing fornisce autenticità e integrità utilizzando una firma digitale per verificare l'identità dello sviluppatore del software e garantire che il codice non sia stato modificato da quando è stato firmato."
    },
    "SCREEN_188": {
        "en": "Non-repudiation is a security concept that ensures the sender of a message cannot deny having sent it, providing proof of both the sender's identity and the message's integrity.",
        "it": "Il non ripudio (non-repudiation) è un concetto di sicurezza che garantisce che il mittente di un messaggio non possa negare di averlo inviato, fornendo la prova sia dell'identità del mittente che dell'integrità del messaggio."
    },
    "SCREEN_208": {
        "en": "When planning Full Disk Encryption, it's crucial to confirm the presence of a Trusted Platform Module (TPM) for secure key storage and to implement key escrow so that data can be recovered if keys are lost.",
        "it": "Quando si pianifica la crittografia completa del disco (FDE), è fondamentale confermare la presenza di un Trusted Platform Module (TPM) per l'archiviazione sicura delle chiavi e implementare il deposito delle chiavi (key escrow) per poter recuperare i dati se le chiavi vengono smarrite."
    },
    "SCREEN_222": {
        "en": "The Online Certificate Status Protocol (OCSP) is used by browsers and systems to quickly check the real-time revocation status of a digital certificate without downloading a full CRL.",
        "it": "L'Online Certificate Status Protocol (OCSP) viene utilizzato dai browser e dai sistemi per verificare rapidamente e in tempo reale lo stato di revoca di un certificato digitale senza scaricare un'intera CRL."
    },
    "SCREEN_272": {
        "en": "Steganography is the technique of hiding secret information, such as text or code, within a non-secret carrier like a digital image, so that the message's very existence is concealed.",
        "it": "La steganografia è la tecnica che consiste nel nascondere informazioni segrete, come testo o codice, all'interno di un supporto non segreto come un'immagine digitale, in modo che l'esistenza stessa del messaggio sia celata."
    },
    "SCREEN_283": {
        "en": "Adding a long random string to a password before hashing is called salting; it makes the resulting hash unique even for common passwords, protecting against high-speed dictionary and rainbow table attacks.",
        "it": "L'aggiunta di una lunga stringa casuale a una password prima dell'hashing è chiamata salting; rende l'hash risultante univoco anche per le password comuni, proteggendo dagli attacchi di tipo dizionario e rainbow table ad alta velocità."
    },
    "SCREEN_289": {
        "en": "Symmetric encryption uses a single, shared secret key for both encrypting and decrypting information, making it fast but requiring a secure way to distribute the key to both parties.",
        "it": "La crittografia simmetrica utilizza un'unica chiave segreta condivisa sia per crittografare che per decrittografare le informazioni, rendendola veloce ma richiedendo un modo sicuro per distribuire la chiave a entrambe le parti."
    },
    "SCREEN_301": {
        "en": "Providing a hash of a downloadable file allows users to independently verify that the file they received is identical to the original and has not been corrupted or altered by an attacker.",
        "it": "Fornire l'hash di un file scaricabile consente agli utenti di verificare autonomamente che il file ricevuto sia identico all'originale e non sia stato corrotto o alterato da un aggressore."
    },
    "SCREEN_302": {
        "en": "Hashing is the best way to protect a login database; instead of storing the actual passwords, the database stores hashes, so even if it's breached, the cleartext passwords remain unknown.",
        "it": "L'hashing è il modo migliore per proteggere un database di login; invece di memorizzare le password effettive, il database memorizza gli hash, quindi anche in caso di violazione, le password in chiaro rimangono sconosciute."
    },
    "SCREEN_322": {
        "en": "Validating a code signature (digital signature) is the most reliable way to confirm that software actually originated from the claimed vendor and has not been modified since it was released.",
        "it": "La convalida di una firma del codice (firma digitale) è il modo più affidabile per confermare che il software provenga effettivamente dal fornitore dichiarato e non sia stato modificato dal momento del rilascio."
    },
    "SCREEN_376": {
        "en": "Digital signatures provided by S/MIME ensure non-repudiation by mathematically linking the sender's identity to the email, proving that they are the true author and cannot deny sending it.",
        "it": "Le firme digitali fornite da S/MIME garantiscono il non ripudio collegando matematicamente l'identità del mittente all'email, dimostrando che ne è il vero autore e che non può negarne l'invio."
    },
    "SCREEN_378": {
        "en": "Resource constraints (limited CPU, memory, and battery) are the biggest challenge for IoT cryptography, often requiring more efficient algorithms like Elliptic Curve Cryptography (ECC).",
        "it": "I limiti di risorse (CPU, memoria e batteria limitate) rappresentano la sfida più grande per la crittografia IoT, richiedendo spesso algoritmi più efficienti come la crittografia a curve ellittiche (ECC)."
    },
    "SCREEN_394": {
        "en": "If a trusted internal LDAP server triggers certificate errors, the administrator likely needs to add the server's root or intermediate certificate to the local tool's truststore to establish trust.",
        "it": "Se un server LDAP interno affidabile attiva errori di certificato, è probabile che l'amministratore debba aggiungere il certificato root o intermedio del server al truststore dello strumento locale per stabilire la fiducia."
    },
    "SCREEN_398": {
        "en": "A wildcard certificate is a cost-effective solution for securing a main domain and all its subdomains (e.g., *.example.com) with a single certificate, simplifying management for large organizations.",
        "it": "Un certificato wildcard è una soluzione economica per proteggere un dominio principale e tutti i suoi sottodomini (es. *.esempio.com) con un unico certificato, semplificando la gestione per le grandi organizzazioni."
    },
    "SCREEN_412": {
        "en": "Code signing is the best technique to ensure software integrity on a website, as it allows users to verify that the installer has not been altered or repackaged with malware after it left the author.",
        "it": "Il code signing è la tecnica migliore per garantire l'integrità del software su un sito web, poiché consente agli utenti di verificare che l'installer non sia stato alterato o riconfezionato con malware dopo aver lasciato l'autore."
    },
    "SCREEN_442": {
        "en": "Transport Layer Security (TLS) 1.3 is the modern standard for protecting data in transit over networks, providing strong encryption and faster connections compared to older versions like SSL or TLS 1.0.",
        "it": "Transport Layer Security (TLS) 1.3 è lo standard moderno per la protezione dei dati in transito sulle reti, fornendo una crittografia forte e connessioni più veloci rispetto alle versioni precedenti come SSL o TLS 1.0."
    },
    "SCREEN_453": {
        "en": "Tokenization replaces sensitive data like credit card numbers with a non-sensitive 'token' while the real data is stored securely elsewhere, significantly reducing the impact of a database breach.",
        "it": "La tokenizzazione sostituisce i dati sensibili, come i numeri delle carte di credito, con un 'token' non sensibile, mentre i dati reali vengono archiviati in modo sicuro altrove, riducendo significativamente l'impatto di una violazione del database."
    },
    "SCREEN_463": {
        "en": "Full Disk Encryption (FDE) is a key cryptographic solution for protecting data at rest, ensuring that all information stored on a hard drive is unreadable without the correct authorization.",
        "it": "La crittografia completa del disco (FDE) è una soluzione crittografica chiave per proteggere i dati a riposo (at rest), garantendo che tutte le informazioni memorizzate su un disco rigido siano illeggibili senza la corretta autorizzazione."
    },
    "SCREEN_467": {
        "en": "Key escrow is a process where cryptographic keys are stored by a trusted third party, allowing authorized entities to recover the keys if the original owner loses them or access is legally required.",
        "it": "Il deposito delle chiavi (key escrow) è un processo in cui le chiavi crittografiche vengono memorizzate da una terza parte fidata, consentendo alle entità autorizzate di recuperare le chiavi se il proprietario originale le perde o se l'accesso è legalmente richiesto."
    },
    "SCREEN_468": {
        "en": "Hashes provided on vendor websites are used to verify the integrity of the downloaded file, ensuring it hasn't been modified or corrupted.",
        "it": "Gli hash forniti sui siti web dei fornitori vengono utilizzati per verificare l'integrità del file scaricato, assicurando che non sia stato modificato o corrotto."
    },
    "SCREEN_484": {
        "en": "If a private key and CSR are valid but a certificate is still untrusted, the issue is likely a missing root certificate in the system's trust chain, which prevents it from verifying the issuing Authority.",
        "it": "Se una chiave privata e una CSR sono valide ma un certificato continua a non essere attendibile, il problema è probabilmente un certificato root mancante nella catena di fiducia del sistema, che impedisce la verifica dell'autorità emittente."
    },
    "SCREEN_488": {
        "en": "Encryption is the primary mitigation to protect the confidentiality of data during transmission, transforming the information into an unreadable state that only authorized parties can decrypt.",
        "it": "La crittografia è la mitigazione primaria per proteggere la riservatezza dei dati durante la trasmissione, trasformando le informazioni in uno stato illeggibile che solo le parti autorizzate possono decrittografare."
    },
    "SCREEN_505": {
        "en": "Symmetric encryption is generally preferred for securing communications in resource-constrained environments because it requires significantly less processing power than asymmetric methods.",
        "it": "La crittografia simmetrica è generalmente preferita per proteggere le comunicazioni in ambienti con risorse limitate perché richiede una potenza di elaborazione significativamente inferiore rispetto ai metodi asimmetrici."
    },
    "SCREEN_523": {
        "en": "Self-signed certificates are often used for internal sites but trigger security warnings in browsers because they are not verified by a trusted third-party Certificate Authority (CA).",
        "it": "I certificati autofirmati (self-signed) sono spesso utilizzati per i siti interni ma attivano avvisi di sicurezza nei browser perché non sono verificati da un'autorità di certificazione (CA) terza attendibile."
    },
    "SCREEN_526": {
        "en": "When a private key is stolen, the associated certificate is compromised and must be revoked immediately by updating the Certificate Revocation List (CRL) so that browsers know to reject it.",
        "it": "Quando una chiave privata viene rubata, il certificato associato è compromesso e deve essere revocato immediatamente aggiornando la Certificate Revocation List (CRL) affinché i browser sappiano di doverlo rifiutare."
    },
    "SCREEN_560": {
        "en": "Insecure key storage is a major vulnerability where cryptographic keys are not properly protected (e.g., stored in cleartext), allowing attackers to bypass encryption even if a strong algorithm is used.",
        "it": "L'archiviazione non sicura delle chiavi è una vulnerabilità importante in cui le chiavi crittografiche non sono adeguatamente protette (es. memorizzate in chiaro), consentendo agli aggressori di bypassare la crittografia anche se viene utilizzato un algoritmo forte."
    },
    "SCREEN_564": {
        "en": "Full Disk Encryption (FDE) ensures that an attacker cannot read any data from a mobile device's drive if the device is lost, as the entire physical volume is encrypted and requires a key to access.",
        "it": "La crittografia completa del disco (FDE) garantisce che un aggressore non possa leggere alcun dato dal disco di un dispositivo mobile in caso di smarrimento, poiché l'intero volume fisico è crittografato e richiede una chiave per l'accesso."
    },
    "SCREEN_600": {
        "en": "SSH tunneling can be used as a compensating control to protect data from a legacy FTP server by encapsulating the unencrypted FTP traffic inside a secure, encrypted SSH session during transit.",
        "it": "Il tunneling SSH può essere utilizzato come controllo compensativo per proteggere i dati da un server FTP legacy incapsulando il traffico FTP non crittografato all'interno di una sessione SSH sicura e crittografata durante il transito."
    },
    "SCREEN_620": {
        "en": "Steganography is unique because it doesn't just make a message unreadable; it hides the message inside another file (like an image) so that observers don't even know a secret communication is happening.",
        "it": "La steganografia è unica perché non si limita a rendere un messaggio illeggibile; nasconde il messaggio all'interno di un altro file (come un'immagine) in modo che gli osservatori non sappiano nemmeno che sta avvenendo una comunicazione segreta."
    },
    "SCREEN_648": {
        "en": "Encryption is a reversible process (with a key) designed for confidentiality, while hashing is a one-way process designed to produce a unique checksum (digest) for integrity verification.",
        "it": "La crittografia è un processo reversibile (con una chiave) progettato per la riservatezza, mentre l'hashing è un processo unidirezionale progettato per produrre un checksum univoco (digest) per la verifica dell'integrità."
    },
    "SCREEN_658": {
        "en": "A Certificate Revocation List (CRL) is the standard method for a Certificate Authority to let the public know about certificates that have expired prematurely or have been compromised and revoked.",
        "it": "Una Certificate Revocation List (CRL) è il metodo standard per un'autorità di certificazione per informare il pubblico sui certificati che sono scaduti prematuramente o che sono stati compromessi e revocati."
    },
    "SCREEN_667": {
        "en": "A Certificate Signing Request (CSR) is an encoded message sent to a Certificate Authority containing information about the organization and the public key that will be included in the new SSL certificate.",
        "it": "Una Certificate Signing Request (CSR) è un messaggio codificato inviato a un'autorità di certificazione contenente informazioni sull'organizzazione e la chiave pubblica che sarà inclusa nel nuovo certificato SSL."
    },
    "SCREEN_687": {
        "en": "Hashing is the best way to ensure a script has not been modified; by comparing the script's current hash to its original value, an engineer can verify its integrity before execution.",
        "it": "L'hashing è il modo migliore per garantire che uno script non sia stato modificato; confrontando l'hash attuale dello script con il suo valore originale, un ingegnere può verificarne l'integrità prima dell'esecuzione."
    },
    "SCREEN_015": {
        "en": "Organized crime groups are highly sophisticated threat actors whose primary motivation is usually financial profit, earned through activities like ransomware or data theft.",
        "it": "I gruppi della criminalità organizzata sono attori di minaccia altamente sofisticati la cui motivazione principale è solitamente il profitto finanziario, ottenuto attraverso attività come ransomware o furto di dati."
    },
    "SCREEN_086": {
        "en": "Shadow IT refers to information technology systems, software, or services used within an organization without explicit departmental approval, which can bypass corporate security controls like VPNs.",
        "it": "Per Shadow IT si intendono i sistemi, i software o i servizi informatici utilizzati all'interno di un'organizzazione senza l'esplicita approvazione del dipartimento IT, il che può comportare il bypass dei controlli di sicurezza aziendali come la VPN."
    },
    "SCREEN_110": {
        "en": "Organized crime syndicates are sometimes hired as 'proxies' by foreign governments to perform cyberattacks, providing the government with plausible deniability.",
        "it": "I sindacati della criminalità organizzata vengono talvolta assunti come 'proxy' da governi stranieri per eseguire attacchi informatici, fornendo al governo una plausibile smentita."
    },
    "SCREEN_158": {
        "en": "Nation-state actors have the backing of government resources, giving them immense financial and technical power to conduct long-term, sophisticated cyberattacks against foreign adversaries.",
        "it": "Gli attori statali (nation-state) dispongono del sostegno delle risorse governative, il che conferisce loro un immenso potere finanziario e tecnico per condurre attacchi informatici sofisticati e a lungo termine contro avversari stranieri."
    },
    "SCREEN_187": {
        "en": "An insider threat involves an individual with authorized access (like an employee) who misuses their privileges to cause harm, such as exfiltrating sensitive data to a personal device.",
        "it": "Una minaccia interna (insider threat) coinvolge un individuo con accesso autorizzato (come un dipendente) che abusa dei propri privilegi per causare danni, ad esempio esfiltrando dati sensibili su un dispositivo personale."
    },
    "SCREEN_235": {
        "en": "Ransomware-as-a-Service (RaaS) is a business model used by organized crime groups where developers sell or lease ransomware tools to other criminals, further professionalizing cybercrime.",
        "it": "Il Ransomware-as-a-Service (RaaS) è un modello di business utilizzato dai gruppi della criminalità organizzata in cui gli sviluppatori vendono o noleggiano strumenti ransomware ad altri criminali, professionalizzando ulteriormente il crimine informatico."
    },
    "SCREEN_444": {
        "en": "Organized crime is the threat actor most associated with large-scale ransomware campaigns, as their primary objective is to extort money from victims in exchange for returning access to encrypted data.",
        "it": "La criminalità organizzata è l'attore di minaccia più associato alle campagne ransomware su larga scala, poiché il suo obiettivo principale è estorcere denaro alle vittime in cambio della restituzione dell'accesso ai dati crittografati."
    },
    "SCREEN_539": {
        "en": "An unskilled attacker (sometimes called a 'script kiddie') may use pre-made tools to perform visible but technically simple attacks, such as website defacement, to gain notoriety or just for fun.",
        "it": "Un aggressore non qualificato (talvolta chiamato 'script kiddie') può utilizzare strumenti già pronti per eseguire attacchi visibili ma tecnicamente semplici, come il defacement di siti web, per guadagnare notorietà o solo per divertimento."
    },
    "SCREEN_569": {
        "en": "Blackmail is the intent of a threat actor who uses sensitive or embarrassing information (like private photos) to extort money or specific actions from a target.",
        "it": "Il ricatto (blackmail) è l'intento di un attore di minaccia che utilizza informazioni sensibili o imbarazzanti (come foto private) per estorcere denaro o azioni specifiche a un obiettivo."
    },
    "SCREEN_579": {
        "en": "Hacktivists are threat actors motivated by personal, social, or political beliefs; they use cyberattacks to draw attention to their cause or to protest against specific organizations or governments.",
        "it": "Gli hacktivisti sono attori di minaccia motivati da convinzioni personali, sociali o politiche; usano gli attacchi informatici per attirare l'attenzione sulla loro causa o per protestare contro specifiche organizzazioni o governi."
    },
    "SCREEN_691": {
        "en": "In a school district setting, an internal user like a student or disgruntled employee who performs a technical attack like ARP poisoning to disrupt testing is considered an insider threat.",
        "it": "In un contesto scolastico, un utente interno come uno studente o un dipendente scontento che esegue un attacco tecnico come l'ARP poisoning per interrompere i test è considerato una minaccia interna."
    },
    "SCREEN_726": {
        "en": "The primary motive of a hacktivist is to further a cause based on their philosophical, social, or political beliefs, often through highly visible cyberattacks or digital protests.",
        "it": "Il motivo principale di un hacktivista è promuovere una causa basata sulle proprie convinzioni filosofiche, sociali o politiche, spesso attraverso attacchi informatici altamente visibili o proteste digitali."
    },
    "SCREEN_021": {
        "en": "A Man-in-the-Middle (MitM) attack occurs when an attacker secretly relays and possibly alters the communications between two parties who believe they are directly talking to each other.",
        "it": "Un attacco Man-in-the-Middle (MitM) si verifica quando un aggressore trasmette segretamente, e possibilmente altera, le comunicazioni tra due parti che credono di parlare direttamente tra loro."
    },
    "SCREEN_047": {
        "en": "To avoid phishing, you should never click links in unsolicited emails. Instead, go directly to the official website by typing the address in your browser to verify if any action is needed.",
        "it": "Per evitare il phishing, non si dovrebbero mai cliccare i link contenuti in email non richieste. Invece, visita direttamente il sito ufficiale digitandone l'indirizzo nel browser per verificare se sia necessaria qualche azione."
    },
    "SCREEN_070": {
        "en": "Phishing is a broad social engineering attack that uses emails or fake websites to trick users into revealing sensitive information, like login credentials or financial details.",
        "it": "Il phishing è un attacco di ingegneria sociale ad ampio raggio che utilizza email o siti web contraffatti per indurre gli utenti a rivelare informazioni sensibili, come credenziali di accesso o dettagli finanziari."
    },
    "SCREEN_073": {
        "en": "Typosquatting (or URL hijacking) involves registering domain names that are very similar to a popular site's domain, relying on users making a typo when entering the URL.",
        "it": "Il typosquatting (o URL hijacking) consiste nel registrare nomi di dominio molto simili a quello di un sito popolare, facendo affidamento sugli errori di battitura degli utenti durante l'inserimento dell'URL."
    },
    "SCREEN_112": {
        "en": "This is a classic example of phishing where an email masquerading as a legitimate service tricks a user into visiting a fake login page to steal their credentials.",
        "it": "Questo è un classico esempio di phishing in cui un'email che si maschera da servizio legittimo induce un utente a visitare una finta pagina di login per rubarne le credenziali."
    },
    "SCREEN_115": {
        "en": "Business Email Compromise (BEC) often involves an attacker gaining access to or impersonating a high-level executive's email to trick employees into performing unauthorized actions, like sharing credentials.",
        "it": "La Business Email Compromise (BEC) spesso coinvolge un aggressore che ottiene l'accesso o impersona l'email di un dirigente di alto livello per indurre i dipendenti a compiere azioni non autorizzate, come la condivisione di credenziali."
    },
    "SCREEN_119": {
        "en": "Receiving a fraudulent text message is called 'smishing' (SMS phishing), and because the sender is pretending to be a specific department, it is also a form of 'impersonation'.",
        "it": "Ricevere un messaggio di testo fraudolento è chiamato 'smishing' (SMS phishing) e, poiché il mittente finge di essere un dipartimento specifico, è anche una forma di 'impersonificazione' (impersonation)."
    },
    "SCREEN_241": {
        "en": "Air-gapped networks (isolated from the internet) are most commonly compromised through removable media, such as USB drives, which can intentionally or accidentally carry data across the 'gap'.",
        "it": "Le reti air-gapped (isolate da Internet) vengono più comunemente compromesse tramite supporti rimovibili, come le chiavette USB, che possono trasportare dati oltre il 'gap' intenzionalmente o accidentalmente."
    },
    "SCREEN_242": {
        "en": "A watering-hole attack targets a group of users by infecting a website they frequently visit, such as an industry blog, to deliver malware specifically to that audience.",
        "it": "Un attacco watering-hole prende di mira un gruppo di utenti infettando un sito web che visitano frequentemente, come un blog di settore, per distribuire malware specificamente a quel pubblico."
    },
    "SCREEN_273": {
        "en": "Smishing is a form of phishing conducted via SMS text messages, often using impersonation (like pretending to be a CEO) to pressure the victim into taking a specific action.",
        "it": "Lo smishing è una forma di phishing condotta tramite messaggi di testo SMS, spesso utilizzando l'impersonificazione (come fingersi un CEO) per spingere la vittima a compiere un'azione specifica."
    },
    "SCREEN_311": {
        "en": "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information, such as the deceptive links used in this onboarding email.",
        "it": "L'ingegneria sociale è la manipolazione psicologica delle persone per indurle a compiere azioni o divulgare informazioni riservate, come i link ingannevoli usati in questa email di onboarding."
    },
    "SCREEN_321": {
        "en": "End-user training is the best defense against social engineering, as it teaches employees to be skeptical of unsolicited messages and to check for red flags like suspicious URLs by hovering over links.",
        "it": "La formazione degli utenti finali è la miglior difesa contro l'ingegneria sociale, poiché insegna ai dipendenti a essere scettici verso i messaggi non richiesti e a controllare segnali di allarme come URL sospetti passando il mouse sopra i link."
    },
    "SCREEN_325": {
        "en": "Shadow IT refers to any software or service used in a company without official IT approval, creating security gaps because these services aren't monitored or protected by corporate controls.",
        "it": "Per Shadow IT si intende qualsiasi software o servizio utilizzato in azienda senza l'approvazione ufficiale dell'IT, creando lacune di sicurezza perché tali servizi non sono monitorati o protetti dai controlli aziendali."
    },
    "SCREEN_326": {
        "en": "When a department ignores official processes and sets up its own tools (like project management software), it is engaging in Shadow IT, which can lead to data loss and unmanaged security risks.",
        "it": "Quando un dipartimento ignora i processi ufficiali e configura i propri strumenti (come un software di gestione progetti), sta praticando lo Shadow IT, il che può portare a perdite di dati e rischi di sicurezza non gestiti."
    },
    "SCREEN_330": {
        "en": "Removable devices like USB flash drives are a primary vector for insider threats because they are portable, easily concealed, and can be used to quickly copy large amounts of data for exfiltration.",
        "it": "I dispositivi rimovibili come le chiavette USB sono un vettore primario per le minacce interne perché sono portatili, facilmente occultabili e possono essere utilizzati per copiare rapidamente grandi quantità di dati per l'esfiltrazione."
    },
    "SCREEN_343": {
        "en": "Impersonation is a social engineering technique where an attacker pretends to be someone else, often a figure of authority like a CEO, to gain trust and manipulate victims into obeying instructions.",
        "it": "L'impersonificazione (impersonation) è una tecnica di ingegneria sociale in cui un aggressore finge di essere qualcun altro, spesso una figura autoritaria come un CEO, per ottenere fiducia e manipolare le vittime affinché eseguano le istruzioni."
    },
    "SCREEN_364": {
        "en": "An on-path attack (formerly called Man-in-the-Middle) on public Wi-Fi occurs when an attacker positioned between the user and the internet intercepts their traffic to steal credentials or credit card data.",
        "it": "Un attacco on-path (precedentemente chiamato Man-in-the-Middle) su Wi-Fi pubblico si verifica quando un aggressore posizionato tra l'utente e Internet intercetta il traffico dell'utente per rubare credenziali o dati della carta di credito."
    },
    "SCREEN_377": {
        "en": "Dumpster diving is the physical social engineering technique of searching through trash (including printing center bins) to find sensitive information like discarded passwords, notes, or internal documents.",
        "it": "Il dumpster diving è la tecnica fisica di ingegneria sociale che consiste nel cercare tra i rifiuti (compresi i cestini dei centri stampa) per trovare informazioni sensibili come password scartate, appunti o documenti interni."
    },
    "SCREEN_396": {
        "en": "Telnet sends data, including passwords, in plain text; therefore, an attacker with a packet capture tool (sniffer) on the same network can easily steal administrative credentials.",
        "it": "Telnet invia i dati, comprese le password, in chiaro; pertanto, un aggressore con uno strumento di acquisizione pacchetti (sniffer) sulla stessa rete può facilmente rubare le credenziali amministrative."
    },
    "SCREEN_404": {
        "en": "Whaling is a highly targeted form of spear-phishing aimed directly at high-level executives (the 'big fish'), often using sophisticated social engineering to steal information or authorize large transfers.",
        "it": "Il whaling è una forma di spear-phishing altamente mirata e rivolta direttamente ai dirigenti di alto livello ('i pesci grossi'), che spesso utilizza una sofisticata ingegneria sociale per rubare informazioni o autorizzare grandi trasferimenti."
    },
    "SCREEN_420": {
        "en": "A DNS zone transfer (AXFR) query is used by attackers to footprint an internal network, as it provides a complete list of all hostnames and IP addresses within the targeted domain's zone.",
        "it": "Una query di trasferimento di zona DNS (AXFR) viene utilizzata dagli aggressori per eseguire il footprinting di una rete interna, poiché fornisce un elenco completo di tutti gli hostname e gli indirizzi IP all'interno della zona del dominio target."
    },
    "SCREEN_490": {
        "en": "Social engineering is the most common way to harvest credentials, using deceptive emails, fake websites, or phone calls to trick users into giving up their usernames and passwords voluntarily.",
        "it": "L'ingegneria sociale è il modo più comune per raccogliere credenziali (credential harvesting), utilizzando email ingannevoli, siti web falsi o telefonate per indurre gli utenti a cedere volontariamente i propri nomi utente e password."
    },
    "SCREEN_517": {
        "en": "Tailgating is a physical security breach where an unauthorized person follows an authorized individual through a secure entrance, taking advantage of social norms or lack of attention.",
        "it": "Il tailgating è una violazione della sicurezza fisica in cui una persona non autorizzata segue un individuo autorizzato attraverso un ingresso sicuro, approfittando delle norme sociali o della mancanza di attenzione."
    },
    "SCREEN_521": {
        "en": "Vishing (voice phishing) is a social engineering attack conducted over the phone, often combined with caller ID spoofing to make the call appear more legitimate to the victim.",
        "it": "Il vishing (voice phishing) è un attacco di ingegneria sociale condotto per telefono, spesso combinato con lo spoofing dell'ID chiamante per far sembrare la chiamata più legittima agli occhi della vittima."
    },
    "SCREEN_562": {
        "en": "A spear-phishing attachment is the most likely vector for this ransomware, as the victim was tricked into opening a specific malicious document (a resume) designed to infect their workstation.",
        "it": "Un allegato di spear-phishing è il vettore più probabile per questo ransomware, poiché la vittima è stata indotta ad aprire uno specifico documento malevolo (un curriculum) progettato per infettare la sua workstation."
    },
    "SCREEN_570": {
        "en": "Closing unused service ports is a fundamental security practice that reduces the system's attack surface, meaning there are fewer entry points for an attacker to discover and exploit.",
        "it": "Chiudere le porte dei servizi non utilizzate è una pratica di sicurezza fondamentale che riduce la superficie di attacco del sistema, il che significa che ci sono meno punti di ingresso che un aggressore può scoprire e sfruttare."
    },
    "SCREEN_589": {
        "en": "Business Email Compromise (BEC) often involves spear-phishing or impersonation of a trusted partner (like a bank) to trick an organization into making urgent, fraudulent wire transfers.",
        "it": "La Business Email Compromise (BEC) spesso coinvolge lo spear-phishing o l'impersonificazione di un partner fidato (come una banca) per indurre un'organizzazione a effettuare bonifici urgenti e fraudolenti."
    },
    "SCREEN_592": {
        "en": "Attackers can use public job postings to gather technical intelligence about a company, such as the specific software versions and technologies they use, to plan more targeted exploits.",
        "it": "Gli aggressori possono utilizzare gli annunci di lavoro pubblici per raccogliere informazioni tecniche su un'azienda, come le versioni specifiche del software e le tecnologie utilizzate, per pianificare exploit più mirati."
    },
    "SCREEN_668": {
        "en": "Smishing is the threat vector being used here, as the attacker is sending an urgent, fraudulent text message (SMS) pretending to be a CEO to trick the employee into resetting a password.",
        "it": "Lo smishing è il vettore di minaccia utilizzato in questo caso, poiché l'aggressore sta inviando un messaggio di testo (SMS) urgente e fraudolento fingendosi un CEO per indurre il dipendente a resettare una password."
    },
    "SCREEN_689": {
        "en": "Inspecting hardware for tampering is a mitigation against supply chain risks, ensuring that components weren't modified or replaced with malicious versions during manufacturing, shipping, or storage.",
        "it": "L'ispezione dell'hardware alla ricerca di manomissioni è una mitigazione contro i rischi della catena di fornitura (supply chain), che garantisce che i componenti non siano stati modificati o sostituiti con versioni malevole durante la produzione, la spedizione o lo stoccaggio."
    },
    "SCREEN_692": {
        "en": "Typosquatting (also called URL hijacking) occurs when an attacker registers a domain name that is slightly misspelled compared to the real one, hoping users will land on the fake site after making a typo.",
        "it": "Il typosquatting (chiamato anche URL hijacking) si verifica quando un aggressore registra un nome di dominio scritto in modo leggermente errato rispetto a quello reale, sperando che gli utenti finiscano sul sito falso dopo aver commesso un errore di battitura."
    },
    "SCREEN_696": {
        "en": "Vishing involves using fraudulent phone calls and social engineering to impersonate trusted individuals, like a CEO, to trick people into giving up access or sensitive details like passwords.",
        "it": "Il vishing consiste nell'utilizzare telefonate fraudolente e ingegneria sociale per impersonare individui fidati, come un CEO, al fine di indurre le persone a cedere l'accesso o dettagli sensibili come le password."
    },
    "SCREEN_731": {
        "en": "Impersonation is the core technique here, where an attacker assumes the identity of a trusted authority figure (the CEO) in a text message to manipulate an employee into taking a costly action.",
        "it": "L'impersonificazione (impersonation) è la tecnica principale utilizzata in questo caso, in cui un aggressore assume l'idendità di una figura autoritaria fidata (il CEO) in un messaggio di testo per manipolare un dipendente affinché compia un'azione costosa."
    },
    "SCREEN_732": {
        "en": "Business Email Compromise (BEC) often uses a compromised or spoofed corporate account to send high-pressure, out-of-character requests intended to trick employees into authorizing financial transactions.",
        "it": "La Business Email Compromise (BEC) utilizza spesso un account aziendale compromesso o contraffatto per inviare richieste pressanti e insolite progettate per indurre i dipendenti ad autorizzare transazioni finanziarie."
    }
};

const data = JSON.parse(fs.readFileSync('./src/data/questions.json', 'utf8'));

data.forEach(q => {
    if (explanations[q.id]) {
        q.explanation = explanations[q.id];
    }
});

fs.writeFileSync('./src/data/questions.json', JSON.stringify(data, null, 2));
console.log("Updated batch of explanations.");
