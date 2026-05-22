const fs = require('fs');
const path = require('path');

const chFolder = path.join(__dirname, '..', 'chapters');
const files = fs.readdirSync(chFolder).filter(f => f.endsWith('.html'));

const domainsMap = {
  d1: ['obj1_1', 'obj1_2', 'obj1_3', 'obj1_4'],
  d2: ['obj2_1', 'obj2_2', 'obj2_3', 'obj2_4', 'obj2_5'],
  d3: ['obj3_1', 'obj3_2', 'obj3_3', 'obj3_4'],
  d4: ['obj4_1', 'obj4_2', 'obj4_3', 'obj4_4', 'obj4_5', 'obj4_6', 'obj4_7', 'obj4_8', 'obj4_9'],
  d5: ['obj5_1', 'obj5_2', 'obj5_3', 'obj5_4', 'obj5_5', 'obj5_6']
};

const termsToCheck = {
  // Domain 1: Security Controls, Fundamentals, Cryptography
  d1: [
    'Technical', 'Managerial', 'Operational', 'Physical',
    'Preventive', 'Deterrent', 'Detective', 'Corrective', 'Compensating', 'Directive',
    'Confidentiality', 'Integrity', 'Availability', 'Non-repudiation',
    'Authentication', 'Authorization', 'Accounting',
    'Zero Trust', 'Control Plane', 'Data Plane', 'Microsegmentation',
    'Honeypot', 'Honeynet', 'Honeyfile', 'Honeytoken',
    'AES', '3DES', 'DES', 'RC4', 'Blowfish', 'Twofish',
    'RSA', 'ECC', 'Diffie-Hellman', 'DSA',
    'MD5', 'SHA-1', 'SHA-256', 'SHA-3', 'HMAC',
    'bcrypt', 'PBKDF2', 'Argon2',
    'PKI', 'CA', 'Root CA', 'Intermediate CA', 'RA', 'CSR', 'X.509',
    'CRL', 'OCSP', 'Online Certificate Status',
    'Ephemeral', 'PFS', 'Perfect Forward Secrecy',
    'TPM', 'HSM', 'Secure Enclave',
    'Steganography', 'Tokenization', 'Data Masking', 'Blockchain'
  ],
  // Domain 2: Threat Actors, Vectors, Vulnerabilities, Malware
  d2: [
    'Nation-state', 'Unskilled', 'Script Kiddie', 'Hacktivist', 'Insider', 'Organized crime', 'Shadow IT',
    'Exfiltration', 'Espionage', 'Phishing', 'Spear Phishing', 'Whaling', 'Vishing', 'Smishing',
    'Pharming', 'Watering Hole', 'Typosquatting', 'BEC', 'Business Email Compromise',
    'Social Engineering', 'Pretexting', 'Impersonation', 'Dumpster Diving', 'Shoulder Surfing',
    'Tailgating', 'Piggybacking', 'Malicious Update', 'Supply Chain', 'Hardware Tampering',
    'Buffer Overflow', 'Memory Injection', 'Race Condition', 'TOC/TOU', 'SQL Injection', 'SQLi',
    'XSS', 'Cross-site Scripting', 'Directory Traversal', 'Path Traversal',
    'VM Escape', 'Resource Reuse', 'Sideloading', 'Jailbreaking', 'Rooting', 'Zero-day',
    'Ransomware', 'Trojan', 'Worm', 'Spyware', 'Keylogger', 'Virus', 'Bloatware', 'Rootkit',
    'Logic Bomb', 'Fileless Malware', 'Botnet', 'C2', 'Beaconing', 'Lateral Movement',
    'DDoS', 'Amplification', 'Reflection', 'On-path', 'MitM', 'Downgrade Attack', 'Collision',
    'Birthday Attack', 'Password Spraying', 'Pass-the-hash', 'Credential Stuffing'
  ],
  // Domain 3: Architecture, Cloud, Infrastructure, Data Protection, Resilience
  d3: [
    'IaaS', 'PaaS', 'SaaS', 'Shared Responsibility', 'Private Cloud', 'Public Cloud', 'Hybrid Cloud',
    'SASE', 'Secure Access Service Edge', 'IaC', 'Infrastructure as Code', 'Serverless', 'Microservices',
    'Containerization', 'Docker', 'Kubernetes', 'Virtualization', 'Hypervisor', 'Air-gapped',
    'Logical Segmentation', 'VLAN', 'SDN', 'On-premises', 'SCADA', 'ICS', 'RTOS', 'Embedded Systems',
    'Jump server', 'Bastion host', 'Failure Modes', 'Fail-open', 'Fail-closed', 'Active vs Passive',
    'Inline vs Tap', 'Proxy', 'IPS', 'IDS', 'Load balancer', 'Port Security', 'MAC Filtering',
    '802.1X', 'EAP', 'WAF', 'VPN', 'IPsec', 'TLS', 'Data Sovereignty', 'Geolocation', 'At Rest',
    'In Transit', 'In Use', 'Anonymization', 'Pseudonymization', 'Hot Site', 'Warm Site', 'Cold Site',
    'Geographic Dispersion', 'RTO', 'RPO', 'MTBF', 'MTTR', 'SLE', 'ALE', 'ARO', 'UPS', 'Generator',
    'Tabletop', 'Failover', 'Simulation', 'BCP', 'DRP'
  ],
  // Domain 4: Security Operations, Assets, Vulnerabilities, Identity, Incident Response
  d4: [
    'Endpoint Protection', 'EDR', 'XDR', 'AV', 'HIPS', 'CIS Benchmarks', 'Secure Baseline',
    'Asset Management', 'Inventory', 'Hardware Inventory', 'Software Inventory', 'EOL', 'EOSL',
    'Vulnerability Scan', 'Credentialed vs Non-credentialed', 'Active vs Passive Scan', 'Agent-based',
    'False Positive', 'False Negative', 'CVSS', 'Base Score', 'Penetration Testing', 'Pentest',
    'Reconnaissance', 'OSINT', 'Exploitation', 'Post-exploitation', 'SOC', 'SIEM', 'Log Aggregation',
    'Correlation Rules', 'Alert Triage', 'SOAR', 'Playbook', 'Runbook', 'Workflow', 'Incident Response',
    'NIST SP 800-61', 'Preparation', 'Detection', 'Analysis', 'Containment', 'Eradication', 'Recovery',
    'Post-Incident', 'Lessons Learned', 'SAML', 'IdP', 'SP', 'OAuth', 'OIDC', 'SSO', 'RADIUS', 'TACACS+',
    'Kerberos', 'PAM', 'PIM', 'Just-In-Time', 'JIT', 'Forensics', 'Chain of Custody', 'Order of Volatility',
    'Write Blocker', 'Live Forensics', 'Dead Forensics', 'Memory Dump', 'Disk Image', 'FIM'
  ],
  // Domain 5: Governance, Risk, Compliance, Awareness
  d5: [
    'AUP', 'Acceptable Use Policy', 'NDA', 'Conflict of Interest', 'Board of Directors', 'CISO',
    'BPA', 'Business Partnership', 'ISA', 'MOU', 'MOA', 'MSA', 'SLA', 'SBOM', 'Software Bill of Materials',
    'Controller', 'Processor', 'DPO', 'DPIA',
    'HIPAA', 'PCI DSS', 'SOX', 'GDPR', 'FISMA', 'GLBA', 'COPPA', 'CCPA',
    'Onboarding', 'Offboarding', 'Clean Desk', 'Least Privilege', 'Separation of Duties',
    'Job Rotation', 'Mandatory Vacations', 'Vishing', 'Smishing', 'Tailgating', 'Piggybacking',
    'Shoulder Surfing', 'Spam', 'Spim', 'Gap Analysis', 'SOC 2', 'Type II'
  ]
};

console.log('--- COMPASS SEARCH FOR KEY EXAM TERMS ---');

for (const [dom, domFiles] of Object.entries(domainsMap)) {
  console.log(`\n=================== ${dom.toUpperCase()} ANALYSIS ===================`);
  const domTerms = termsToCheck[dom];
  const missingInDomain = [];
  
  domTerms.forEach(term => {
    let totalMatches = 0;
    // Search in files belonging to this domain
    files.forEach(file => {
      const belongs = domFiles.some(prefix => file.startsWith(prefix));
      if (belongs) {
        const filePath = path.join(chFolder, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        const matches = content.match(regex);
        if (matches) {
          totalMatches += matches.length;
        }
      }
    });

    if (totalMatches === 0) {
      // Also check general files to see if the term is found elsewhere
      let globalMatches = 0;
      files.forEach(file => {
        const filePath = path.join(chFolder, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        const matches = content.match(regex);
        if (matches) globalMatches += matches.length;
      });
      
      if (globalMatches > 0) {
        console.log(`  ⚠ Term "${term}" has 0 matches in ${dom.toUpperCase()} but is present globally (${globalMatches} matches).`);
      } else {
        console.log(`  ❌ Term "${term}" has 0 matches globally! CRITICAL MISSING TERM.`);
        missingInDomain.push(term);
      }
    } else {
      // console.log(`  ✓ "${term}": ${totalMatches} matches`);
    }
  });
  
  if (missingInDomain.length === 0) {
    console.log(`  ✓ All ${domTerms.length} terms of ${dom.toUpperCase()} are present!`);
  } else {
    console.log(`  Summary of ${dom.toUpperCase()}: ${missingInDomain.length} missing terms out of ${domTerms.length}.`);
  }
}
