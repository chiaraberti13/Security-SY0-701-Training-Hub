import json
import re

with open('src/data/questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

english_indicators = [
    r'\bthe\b', r'\band\b', r'\bwith\b', r'\bfor\b', r'\bfrom\b', r'\bthat\b', r'\bwhich\b',
    r'\bmost likely\b', r'\bbest describes\b', r'\bfollowing\b', r'\bChoose\b', r'\bSelect\b',
    r'\bprovides\b', r'\bensures\b', r'\baccomplishes\b', r'\bduring\b', r'\bbetween\b',
    r'\bof the\b', r'\bis a\b', r'\bis an\b'
]

# Common IT terms to ignore
ignore_terms = [
    'WPA3', 'SLA', 'NDA', 'BYOD', 'EOSL', 'PCI DSS', 'IdP', 'SOAR', 'WAF', 'NGFW', 'TLS', 'SD-WAN',
    'IRP', 'DRP', 'RPO', 'SDLC', 'SIEM', 'NAC', 'DLP', 'BIA', 'MTBF', 'HSM', 'TPM', 'MFA', 'COPE',
    'AAA', 'APT', 'SQL', 'Rootkit', 'Worm', 'Phishing', 'Vishing', 'Smishing', 'Whaling',
    'Bluejacking', 'Bluesnarfing', 'Zero-day', 'Adware', 'Spyware', 'Ransomware', 'Keylogger',
    'Trojan', 'Backdoor', 'Logic bomb', 'Worm', 'Rootkit', 'Botnet', 'Cryptominer', 'Sideloading',
    'Jailbreaking', 'Rooting', 'Sandboxing', 'Containerization', 'Virtualization', 'Hypervisor',
    'VM escape', 'Cloud computing', 'SaaS', 'PaaS', 'IaaS', 'Public cloud', 'Private cloud',
    'Hybrid cloud', 'Community cloud', 'Serverless', 'Infrastructure as Code', 'IaC',
    'Software-defined networking', 'SDN', 'Microservices', 'Zero Trust', 'Least privilege',
    'Role-based access control', 'RBAC', 'Attribute-based access control', 'ABAC',
    'Mandatory access control', 'MAC', 'Discretionary access control', 'DAC', 'Single sign-on',
    'SSO', 'Multi-factor authentication', 'MFA', 'Identity as a Service', 'IDaaS', 'Active Directory',
    'Lightweight Directory Access Protocol', 'LDAP', 'SAML', 'OAuth', 'OpenID Connect', 'OIDC',
    'RADIUS', 'TACACS+', 'Kerberos', 'Biometrics', 'Tokenization', 'Hashing', 'Salting',
    'Key stretching', 'Encryption', 'Decryption', 'Symmetric', 'Asymmetric', 'Public key infrastructure',
    'PKI', 'Certificate Authority', 'CA', 'Registration Authority', 'RA', 'Certificate Revocation List',
    'CRL', 'Online Certificate Status Protocol', 'OCSP', 'Digital signature', 'Non-repudiation',
    'Data Loss Prevention', 'DLP', 'File Integrity Monitoring', 'FIM', 'Security Information and Event Management',
    'SIEM', 'Endpoint Detection and Response', 'EDR', 'Managed Detection and Response', 'MDR',
    'Extended Detection and Response', 'XDR', 'Cloud Security Posture Management', 'CSPM',
    'Cloud Access Security Broker', 'CASB', 'Secure Access Service Edge', 'SASE',
    'Intrusion Detection System', 'IDS', 'Intrusion Prevention System', 'IPS', 'Web Application Firewall',
    'WAF', 'Next-Generation Firewall', 'NGFW', 'Unified Threat Management', 'UTM', 'Virtual Private Network',
    'VPN', 'IPSec', 'Secure Sockets Layer', 'SSL', 'Transport Layer Security', 'TLS', 'Hypertext Transfer Protocol',
    'HTTP', 'HTTPS', 'Domain Name System', 'DNS', 'Dynamic Host Configuration Protocol', 'DHCP',
    'Simple Network Management Protocol', 'SNMP', 'Network Access Control', 'NAC', 'Virtual Local Area Network',
    'VLAN', 'Software Development Life Cycle', 'SDLC', 'DevSecOps', 'Agile', 'Waterfall',
    'Static Application Security Testing', 'SAST', 'Dynamic Application Security Testing', 'DAST',
    'Software Bill of Materials', 'SBOM', 'Open Source Intelligence', 'OSINT', 'Computer Emergency Response Team',
    'CERT', 'Incident Response Plan', 'IRP', 'Disaster Recovery Plan', 'DRP', 'Business Continuity Plan',
    'BCP', 'Business Impact Analysis', 'BIA', 'Recovery Time Objective', 'RTO', 'Recovery Point Objective',
    'RPO', 'Mean Time Between Failures', 'MTBF', 'Mean Time to Repair', 'MTTR', 'Acceptable Use Policy',
    'AUP', 'Bring Your Own Device', 'BYOD', 'Choose Your Own Device', 'CYOD', 'Corporate-Owned, Personally Enabled',
    'COPE', 'Corporate-Owned, Business Only', 'COBO', 'Internet of Things', 'IoT', 'Operational Technology',
    'OT', 'Industrial Control Systems', 'ICS', 'Scada', 'Programmable Logic Controller', 'PLC',
    'Human-Machine Interface', 'HMI', 'Distributed Control System', 'DCS', 'Building Management System',
    'BMS', 'Health Insurance Portability and Accountability Act', 'HIPAA', 'General Data Protection Regulation',
    'GDPR', 'Payment Card Industry Data Security Standard', 'PCI DSS', 'Statement of Work', 'SOW',
    'Service Level Agreement', 'SLA', 'Master Service Agreement', 'MSA', 'Non-Disclosure Agreement', 'NDA',
    'Business Partnership Agreement', 'BPA', 'Memorandum of Understanding', 'MOU', 'Memorandum of Agreement',
    'MOA', 'Common Vulnerabilities and Exposures', 'CVE', 'Common Vulnerability Scoring System', 'CVSS',
    'Indicators of Compromise', 'IoC', 'Indicators of Attack', 'IoA', 'Tactics, Techniques, and Procedures',
    'TTPs', 'Threat Intelligence', 'Vulnerability management', 'Asset management', 'Change management',
    'Configuration management', 'Patch management', 'Identity and Access Management', 'IAM',
    'Privileged Access Management', 'PAM', 'Single Sign-On', 'SSO', 'Multi-Factor Authentication', 'MFA',
    'Zero Trust Architecture', 'ZTA', 'Security Orchestration, Automation, and Response', 'SOAR',
    'Cloud-native security', 'Container security', 'Serverless security', 'API security', 'Mobile security',
    'Endpoint security', 'Network security', 'Data security', 'Application security', 'Physical security',
    'Administrative security', 'Technical security', 'Operational security', 'Managerial security',
    'Preventive control', 'Detective control', 'Corrective control', 'Deterrent control', 'Compensating control',
    'Physical control', 'Technical control', 'Administrative control', 'Managerial control', 'Operation control',
    'Risk assessment', 'Threat assessment', 'Vulnerability assessment', 'Penetration testing', 'Red team',
    'Blue team', 'Purple team', 'White team', 'Bug bounty'
]

results = []

def check_text(text, screen_id, context=""):
    if not text:
        return
    for pattern in english_indicators:
        if re.search(pattern, text, re.IGNORECASE):
            # Check if it's just an ignore term
            is_valid = False
            for term in ignore_terms:
                if term.lower() in text.lower():
                    # This is tricky because it might contain both.
                    # If the pattern is part of the ignore term, it's fine.
                    # But if "the" is outside the ignore term, it's a problem.
                    pass
            results.append({
                "id": screen_id,
                "context": context,
                "text": text,
                "pattern": pattern
            })
            break

for q in data:
    check_text(q['text'].get('it'), q['id'], "question")
    for opt in q['options']:
        check_text(opt['text'].get('it'), q['id'], f"option {opt['id']}")

for res in results:
    print(f"ID: {res['id']} | Context: {res['context']}")
    print(f"Text: {res['text']}")
    print(f"Pattern found: {res['pattern']}")
    print("-" * 40)
