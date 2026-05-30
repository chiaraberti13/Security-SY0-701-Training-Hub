import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('CompTIA Study Guide Base Configuration & Integrity Tests', () => {
  it('should verify all 28 chapters files are present in the chapters/ directory', () => {
    const chaptersDir = path.join(process.cwd(), 'chapters');
    expect(fs.existsSync(chaptersDir)).toBe(true);

    const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.html'));
    expect(files.length).toBe(28);

    // Verify some representative files exist
    expect(files).toContain('obj1_1_security_controls.html');
    expect(files).toContain('obj2_1_threat_actors.html');
    expect(files).toContain('obj3_1_architecture.html');
    expect(files).toContain('obj4_1_computing_resources.html');
    expect(files).toContain('obj5_1_governance.html');
  });

  it('should have a valid, parseable glossario_db.json with matching entries', () => {
    const dbPath = path.join(process.cwd(), 'script', 'glossario_db.json');
    expect(fs.existsSync(dbPath)).toBe(true);

    const rawData = fs.readFileSync(dbPath, 'utf8');
    const data = JSON.parse(rawData);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(100); // There are typically lots of glossary words

    // Every item must have either acronym or name, and a definition + category
    data.forEach(item => {
      expect(item.name || item.acronym).toBeDefined();
      expect(item.def).toBeDefined();
      expect(typeof item.def).toBe('string');
      expect(item.category).toBeDefined();
      expect(typeof item.category).toBe('string');
      expect(item.category.length).toBeGreaterThan(0);
    });
  });

  it('should verify the service worker sw.js file lists core assets correctly', () => {
    const swPath = path.join(process.cwd(), 'sw.js');
    expect(fs.existsSync(swPath)).toBe(true);

    const swContent = fs.readFileSync(swPath, 'utf8');
    expect(swContent).toContain('style/style.css');
    expect(swContent).toContain('script/global-nav-footer.js');
    expect(swContent).toContain('quiz_database.xml');
  });

  it('should check if quiz_database.xml exists and is well-formed XML', () => {
    const xmlPath = path.join(process.cwd(), 'quiz_database.xml');
    expect(fs.existsSync(xmlPath)).toBe(true);

    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    expect(xmlContent.trim().startsWith('<quiz>')).toBe(true);
    expect(xmlContent).toContain('<quiz>');
    expect(xmlContent.endsWith('</quiz>\n') || xmlContent.endsWith('</quiz>')).toBe(true);
  });
});

describe('CompTIA Coverage Terms Analysis Test (T-C0)', () => {
  it('should verify that we cover a supermajority of the key CompTIA terms in the HTML materials', () => {
    const chaptersDir = path.join(process.cwd(), 'chapters');
    const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.html'));

    // Defined subset of some of the most critical terms across the five domains
    const highlyCriticalTerms = [
      'Technical', 'Managerial', 'Operational', 'Physical',
      'Preventive', 'Deterrent', 'Detective', 'Corrective',
      'AES', 'RSA', 'ECC', 'PKI', 'CA', 'CRL', 'OCSP',
      'Nation-state', 'Phishing', 'Social Engineering', 'Malware', 'Ransomware', 'Trojan',
      'IaaS', 'PaaS', 'SaaS', 'VLAN', 'VPN', 'TLS', 'DRP', 'BCP',
      'EDR', 'XDR', 'SIEM', 'SOAR', 'SAML', 'OAuth', 'OIDC',
      'Least Privilege', 'Separation of Duties', 'HIPAA', 'GDPR', 'PCI DSS'
    ];

    let foundCount = 0;
    const contents = files.map(file => fs.readFileSync(path.join(chaptersDir, file), 'utf8'));

    highlyCriticalTerms.forEach(term => {
      let matches = 0;
      contents.forEach(content => {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        if (regex.test(content)) {
          matches++;
          // Reset the index of regex
          regex.lastIndex = 0;
        }
      });

      if (matches > 0) {
        foundCount++;
      }
    });

    const coveragePercentage = (foundCount / highlyCriticalTerms.length) * 100;
    console.log(`[Coverage Test] Critical terms covered: ${foundCount}/${highlyCriticalTerms.length} (${coveragePercentage.toFixed(2)}%)`);

    // Assert that we have at least 80% coverage on these absolutely fundamental concepts
    expect(coveragePercentage).toBeGreaterThanOrEqual(80);
  });
});
