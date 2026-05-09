/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  BookOpen,
  RotateCcw,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Question, Language } from './types';
import questionsData from './data/questions.json';

// ---------------------------------------------------------------------------
// Manual data
// ---------------------------------------------------------------------------

const MANUAL_DOMAINS = [
  {
    id: 1,
    color: '#0B1F3A',
    label: { it: 'Dominio 1 — Concetti generali di sicurezza', en: 'Domain 1 — General Security Concepts' },
    summary: { it: 'Obiettivi 1.1 · 1.2 · 1.3 · 1.4 · 2 capitoli', en: 'Objectives 1.1 · 1.2 · 1.3 · 1.4 · 2 chapters' },
    examPct: '12%',
    objectives: [
      { num: '1.1', it: 'Controlli di sicurezza (categorie e tipi)', en: 'Security controls (categories and types)' },
      { num: '1.2', it: 'Concetti fondamentali: CIA, AAA, Zero Trust, Physical, Deception', en: 'Core concepts: CIA, AAA, Zero Trust, Physical, Deception' },
      { num: '1.3', it: 'Change management', en: 'Change management' },
      { num: '1.4', it: 'Soluzioni crittografiche: PKI, cifratura, hash, certificati, blockchain', en: 'Cryptographic solutions: PKI, encryption, hash, certificates, blockchain' },
    ],
    chapters: [
      { id: 'ch1', title: { it: 'CH1 — Fondamenti e governance', en: 'CH1 — Fundamentals and governance' }, objectives: ['1.1', '1.2', '1.3'], href: { it: 'manual/chapters/ch1_governance_classification_canonical.html', en: 'manual/chapters/en/ch1_governance_classification_canonical.html' } },
      { id: 'ch7', title: { it: 'CH7 — Crittografia e PKI', en: 'CH7 — Cryptography and PKI' }, objectives: ['1.4'], href: { it: 'manual/chapters/ch7_crittografia_pki_canonical.html', en: 'manual/chapters/en/ch7_crittografia_pki_canonical.html' } },
    ],
  },
  {
    id: 2,
    color: '#0F766E',
    label: { it: 'Dominio 2 — Minacce, vulnerabilità e mitigazioni', en: 'Domain 2 — Threats, Vulnerabilities & Mitigations' },
    summary: { it: 'Obiettivi 2.1 · 2.2 · 2.3 · 2.4 · 2.5 · 5 capitoli', en: 'Objectives 2.1 · 2.2 · 2.3 · 2.4 · 2.5 · 5 chapters' },
    examPct: '22%',
    objectives: [
      { num: '2.1', it: 'Threat actors e motivazioni (nation-state, insider, hacktivist…)', en: 'Threat actors and motivations (nation-state, insider, hacktivist…)' },
      { num: '2.2', it: 'Threat vectors e attack surfaces (email, supply chain, social engineering)', en: 'Threat vectors and attack surfaces (email, supply chain, social engineering)' },
      { num: '2.3', it: 'Tipi di vulnerabilità (app, OS, web, hardware, cloud, mobile)', en: 'Vulnerability types (app, OS, web, hardware, cloud, mobile)' },
      { num: '2.4', it: 'Indicatori di attività malevola (malware, network, app, crypto)', en: 'Indicators of malicious activity (malware, network, app, crypto)' },
      { num: '2.5', it: 'Tecniche di mitigazione enterprise', en: 'Enterprise mitigation techniques' },
    ],
    chapters: [
      { id: 'ch2', title: { it: 'CH2 — Threat landscape', en: 'CH2 — Threat landscape' }, objectives: ['2.1', '2.2'], href: { it: 'manual/chapters/ch2_threat_landscape_canonical.html', en: 'manual/chapters/en/ch2_threat_landscape_canonical.html' } },
      { id: 'ch3', title: { it: 'CH3 — Vulnerabilità, attacchi e mitigazioni', en: 'CH3 — Vulnerabilities, attacks and mitigations' }, objectives: ['2.3', '2.4', '2.5'], href: { it: 'manual/chapters/ch3_vulnerabilita_attacchi_mitigazioni_canonical.html', en: 'manual/chapters/en/ch3_vulnerabilita_attacchi_mitigazioni_canonical.html' } },
      { id: 'ch4', title: { it: 'CH4 — Ingegneria sociale e attacchi password', en: 'CH4 — Social engineering and password attacks' }, objectives: ['2.2', '2.4'], href: { it: 'manual/chapters/ch4_social_engineering_password_attacks_canonical.html', en: 'manual/chapters/en/ch4_social_engineering_password_attacks_canonical.html' } },
      { id: 'ch5', title: { it: 'CH5 — Vulnerability management', en: 'CH5 — Vulnerability management' }, objectives: ['4.3'], href: { it: 'manual/chapters/ch5_vulnerability_management_canonical.html', en: 'manual/chapters/en/ch5_vulnerability_management_canonical.html' } },
      { id: 'ch6', title: { it: 'CH6 — Sicurezza applicativa', en: 'CH6 — Application security' }, objectives: ['2.3', '4.1'], href: { it: 'manual/chapters/ch6_application_security_canonical.html', en: 'manual/chapters/en/ch6_application_security_canonical.html' } },
    ],
  },
  {
    id: 3,
    color: '#334155',
    label: { it: 'Dominio 3 — Architettura di sicurezza', en: 'Domain 3 — Security Architecture' },
    summary: { it: 'Obiettivi 3.1 · 3.2 · 3.3 · 3.4 · 4 capitoli', en: 'Objectives 3.1 · 3.2 · 3.3 · 3.4 · 4 chapters' },
    examPct: '18%',
    objectives: [
      { num: '3.1', it: 'Modelli architetturali (cloud, IaC, IoT, ICS, SDN, embedded)', en: 'Architectural models (cloud, IaC, IoT, ICS, SDN, embedded)' },
      { num: '3.2', it: "Applicare principi di sicurezza all'infrastruttura enterprise", en: 'Apply security principles to enterprise infrastructure' },
      { num: '3.3', it: 'Protezione dei dati (tipi, classificazioni, stati, metodi)', en: 'Data protection (types, classifications, states, methods)' },
      { num: '3.4', it: 'Resilienza e recovery (HA, backup, site, capacity, testing)', en: 'Resilience and recovery (HA, backup, site, capacity, testing)' },
    ],
    chapters: [
      { id: 'ch9', title: { it: 'CH9 — Resilienza e sicurezza fisica', en: 'CH9 — Resilience and physical security' }, objectives: ['3.4'], href: { it: 'manual/chapters/ch9_resilience_physical_security_canonical.html', en: 'manual/chapters/en/ch9_resilience_physical_security_canonical.html' } },
      { id: 'ch10', title: { it: 'CH10 — Cloud e virtualizzazione', en: 'CH10 — Cloud and virtualization' }, objectives: ['3.1', '2.3'], href: { it: 'manual/chapters/ch10_cloud_virtualizzazione_canonical.html', en: 'manual/chapters/en/ch10_cloud_virtualizzazione_canonical.html' } },
      { id: 'ch12', title: { it: 'CH12 — Architettura e sicurezza della rete', en: 'CH12 — Network architecture and security' }, objectives: ['3.1', '3.2', '4.5'], href: { it: 'manual/chapters/ch12_network_security_canonical.html', en: 'manual/chapters/en/ch12_network_security_canonical.html' } },
      { id: 'ch18', title: { it: 'CH18 — Protezione dei dati', en: 'CH18 — Data protection' }, objectives: ['3.3'], href: { it: 'manual/chapters/ch18_data_protection_canonical.html', en: 'manual/chapters/en/ch18_data_protection_canonical.html' } },
    ],
  },
  {
    id: 4,
    color: '#1D4ED8',
    label: { it: 'Dominio 4 — Operazioni di sicurezza', en: 'Domain 4 — Security Operations' },
    summary: { it: 'Obiettivi 4.1–4.9 · 5 capitoli', en: 'Objectives 4.1–4.9 · 5 chapters' },
    examPct: '28%',
    objectives: [
      { num: '4.1', it: 'Tecniche di sicurezza su computing resources (hardening, mobile, app)', en: 'Security techniques on computing resources (hardening, mobile, app)' },
      { num: '4.2', it: 'Asset management (acquisizione, assegnazione, disposal)', en: 'Asset management (acquisition, assignment, disposal)' },
      { num: '4.3', it: 'Vulnerability management (scan, CVSS, CVE, pen test, remediation)', en: 'Vulnerability management (scan, CVSS, CVE, pen test, remediation)' },
      { num: '4.4', it: 'Security alerting e monitoring (SIEM, DLP, SNMP, NetFlow, scanner)', en: 'Security alerting and monitoring (SIEM, DLP, SNMP, NetFlow, scanner)' },
      { num: '4.5', it: 'Modificare le capacità enterprise (firewall, EDR/XDR, DLP, NAC, email)', en: 'Modify enterprise capabilities (firewall, EDR/XDR, DLP, NAC, email)' },
      { num: '4.6', it: 'Identity and Access Management (SSO, MFA, PAM, password)', en: 'Identity and Access Management (SSO, MFA, PAM, password)' },
      { num: '4.7', it: 'Automazione e orchestrazione (SOAR, scripting, API)', en: 'Automation and orchestration (SOAR, scripting, API)' },
      { num: '4.8', it: 'Incident response (PICERL, training, testing, root cause, forensics)', en: 'Incident response (PICERL, training, testing, root cause, forensics)' },
      { num: '4.9', it: 'Fonti dati per le indagini (log, packet capture, dashboard, scan)', en: 'Data sources for investigations (log, packet capture, dashboard, scan)' },
    ],
    chapters: [
      { id: 'ch8', title: { it: 'CH8 — Identity and Access Management', en: 'CH8 — Identity and Access Management' }, objectives: ['4.6'], href: { it: 'manual/chapters/ch8_identity_access_management_canonical.html', en: 'manual/chapters/en/ch8_identity_access_management_canonical.html' } },
      { id: 'ch11', title: { it: 'CH11 — Endpoint e asset management', en: 'CH11 — Endpoint and asset management' }, objectives: ['4.1', '4.2'], href: { it: 'manual/chapters/ch11_endpoint_architecture_canonical.html', en: 'manual/chapters/en/ch11_endpoint_architecture_canonical.html' } },
      { id: 'ch13', title: { it: 'CH13 — Wireless e mobile', en: 'CH13 — Wireless and mobile' }, objectives: ['4.1'], href: { it: 'manual/chapters/ch13_wireless_mobile_canonical.html', en: 'manual/chapters/en/ch13_wireless_mobile_canonical.html' } },
      { id: 'ch14', title: { it: 'CH14 — Incident response, monitoring e automazione', en: 'CH14 — Incident response, monitoring and automation' }, objectives: ['4.4', '4.7', '4.8', '4.9'], href: { it: 'manual/chapters/ch14_incident_response_canonical.html', en: 'manual/chapters/en/ch14_incident_response_canonical.html' } },
      { id: 'ch15', title: { it: 'CH15 — Digital forensics', en: 'CH15 — Digital forensics' }, objectives: ['4.8', '4.9'], href: { it: 'manual/chapters/ch15_digital_forensics_canonical.html', en: 'manual/chapters/en/ch15_digital_forensics_canonical.html' } },
    ],
  },
  {
    id: 5,
    color: '#7C3AED',
    label: { it: 'Dominio 5 — Governance e supervisione', en: 'Domain 5 — Security Program Management & Oversight' },
    summary: { it: 'Obiettivi 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6 · 2 capitoli', en: 'Objectives 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6 · 2 chapters' },
    examPct: '20%',
    objectives: [
      { num: '5.1', it: 'Governance della sicurezza (policy, standard, procedure, strutture)', en: 'Security governance (policy, standard, procedure, structures)' },
      { num: '5.2', it: 'Risk management (qualitativo/quantitativo, SLE/ALE/ARO, BIA)', en: 'Risk management (qualitative/quantitative, SLE/ALE/ARO, BIA)' },
      { num: '5.3', it: 'Third-party risk (vendor assessment, selezione, accordi, monitoring)', en: 'Third-party risk (vendor assessment, selection, agreements, monitoring)' },
      { num: '5.4', it: 'Compliance (reporting, conseguenze, monitoring, privacy)', en: 'Compliance (reporting, consequences, monitoring, privacy)' },
      { num: '5.5', it: 'Audit e assessment (interno/esterno, pen test, attestazione)', en: 'Audit and assessment (internal/external, pen test, attestation)' },
      { num: '5.6', it: 'Security awareness (phishing, training, reporting, anomalie)', en: 'Security awareness (phishing, training, reporting, anomalies)' },
    ],
    chapters: [
      { id: 'ch16', title: { it: 'CH16 — Governance, compliance e policy', en: 'CH16 — Governance, compliance and policy' }, objectives: ['5.1', '5.3', '5.4', '5.5'], href: { it: 'manual/chapters/ch16_governance_compliance_policy_canonical.html', en: 'manual/chapters/en/ch16_governance_compliance_policy_canonical.html' } },
      { id: 'ch17', title: { it: 'CH17 — Rischio, BIA e security awareness', en: 'CH17 — Risk, BIA and security awareness' }, objectives: ['5.2', '5.6'], href: { it: 'manual/chapters/ch17_risk_privacy_third_party_canonical.html', en: 'manual/chapters/en/ch17_risk_privacy_third_party_canonical.html' } },
    ],
  },
];

const MANUAL_TOTAL_CHAPTERS = 18;
const PROGRESS_KEY = 'sy0701_progress';
const DOMAIN_TOTALS: Record<number, number> = { 1: 2, 2: 5, 3: 4, 4: 5, 5: 2 };
const CH_DOMAIN: Record<string, number> = {
  ch1: 1, ch7: 1,
  ch2: 2, ch3: 2, ch4: 2, ch5: 2, ch6: 2,
  ch9: 3, ch10: 3, ch12: 3, ch18: 3,
  ch8: 4, ch11: 4, ch13: 4, ch14: 4, ch15: 4,
  ch16: 5, ch17: 5,
};

// ---------------------------------------------------------------------------
// ManualView
// ---------------------------------------------------------------------------

function ManualView({ lang }: { lang: Language }) {
  const [progress, setProgress] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch { return {}; }
  });
  const [openDomains, setOpenDomains] = useState<Record<number, boolean>>({});

  const completedCount = useMemo(
    () => Object.values(progress).filter(Boolean).length,
    [progress]
  );

  const toggleChapter = useCallback((id: string, checked: boolean) => {
    setProgress((prev: Record<string, boolean>) => {
      const next = { ...prev, [id]: checked };
      try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(next)); } catch { /* noop */ }
      return next;
    });
  }, []);

  const resetProgress = () => {
    if (!confirm(lang === 'it' ? 'Azzera tutti i progressi?' : 'Reset all progress?')) return;
    setProgress({});
    try { localStorage.removeItem(PROGRESS_KEY); } catch { /* noop */ }
  };

  const toggleDomain = (id: number) => {
    setOpenDomains((prev: Record<number, boolean>) => ({ ...prev, [id]: !prev[id] }));
  };

  const globalPct = Math.round((completedCount / MANUAL_TOTAL_CHAPTERS) * 100);

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center mx-auto mb-6 border border-accent/10">
          <FileText size={20} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
          {lang === 'it' ? 'Guida interattiva' : 'Interactive Guide'}
        </h2>
        <p className="text-slate-400 text-sm max-w-sm mx-auto">
          {lang === 'it'
            ? 'Esplora i 5 domini e i 21 obiettivi. Spunta i capitoli man mano che li studi.'
            : 'Explore the 5 domains and 21 objectives. Check off chapters as you study.'}
        </p>
      </div>

      {/* Global progress */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {lang === 'it' ? 'Progressi di studio' : 'Study progress'}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {completedCount} / {MANUAL_TOTAL_CHAPTERS} {lang === 'it' ? 'capitoli' : 'chapters'} — {globalPct}%
            </div>
          </div>
          <button
            onClick={resetProgress}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <RotateCcw size={12} />
            {lang === 'it' ? 'Azzera' : 'Reset'}
          </button>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-700 rounded-full"
            style={{ width: `${globalPct}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-300 mt-2">
          {lang === 'it' ? 'I progressi vengono salvati nel browser.' : 'Progress is saved in your browser.'}
        </p>
      </div>

      {/* Domain accordion */}
      <div className="space-y-3">
        {MANUAL_DOMAINS.map(domain => {
          const isOpen = !!openDomains[domain.id];
          const domainChapterIds = domain.chapters.map(c => c.id);
          const domainDone = domainChapterIds.filter(id => progress[id]).length;
          const domainTotal = DOMAIN_TOTALS[domain.id];
          const domainPct = Math.round((domainDone / domainTotal) * 100);

          return (
            <div key={domain.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden">
              {/* Domain header */}
              <button
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-50/50 transition-colors"
                onClick={() => toggleDomain(domain.id)}
                aria-expanded={isOpen}
              >
                <div className="w-3 h-10 rounded-full shrink-0" style={{ backgroundColor: domain.color }} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-900 mb-0.5">{domain.label[lang]}</div>
                  <div className="text-[11px] text-slate-400">{domain.summary[lang]}</div>
                  <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${domainPct}%`, backgroundColor: domain.color }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-500 border border-slate-100">
                    {domain.examPct}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Domain body */}
              {isOpen && (
                <div className="border-t border-slate-50 px-5 pb-5 pt-4">
                  {/* Objectives */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-5">
                    {domain.objectives.map(obj => (
                      <div key={obj.num} className="flex gap-2 text-[11px]">
                        <span className="shrink-0 font-mono font-bold text-slate-400">{obj.num}</span>
                        <span className="text-slate-500">{obj[lang]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chapter cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {domain.chapters.map(ch => {
                      const isDone = !!progress[ch.id];
                      return (
                        <div
                          key={ch.id}
                          className={`rounded-xl border p-4 transition-colors ${isDone ? 'bg-emerald-50/50 border-emerald-100' : 'bg-slate-50/50 border-slate-100'}`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <span className="text-xs font-semibold text-slate-800 leading-snug">{ch.title[lang]}</span>
                            <label className="flex items-center gap-1.5 shrink-0 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={e => toggleChapter(ch.id, e.target.checked)}
                                className="w-3.5 h-3.5 rounded accent-emerald-500"
                              />
                              <span className={`text-[10px] font-medium ${isDone ? 'text-emerald-600' : 'text-slate-400'}`}>
                                {isDone
                                  ? (lang === 'it' ? '✓ Fatto' : '✓ Done')
                                  : (lang === 'it' ? 'Completato' : 'Mark done')}
                              </span>
                            </label>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {ch.objectives.map(o => (
                              <span key={o} className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-white border border-slate-200 text-slate-500 rounded">
                                {o}
                              </span>
                            ))}
                          </div>
                          <a
                            href={ch.href[lang]}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent hover:underline"
                          >
                            <ExternalLink size={11} />
                            {lang === 'it' ? 'Apri capitolo' : 'Open chapter'}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full guide link */}
      <div className="mt-8 text-center">
        <a
          href="manual/chapters/security_plus_sy0_701_guida.html"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:border-accent/40 hover:text-accent transition-colors"
        >
          <BookOpen size={15} />
          {lang === 'it' ? 'Apri la guida di studio completa' : 'Open the complete study guide'}
        </a>
        <p className="text-[10px] text-slate-300 mt-2">18 {lang === 'it' ? 'capitoli' : 'chapters'} · 21 {lang === 'it' ? 'obiettivi' : 'objectives'} · 5 {lang === 'it' ? 'domini' : 'domains'}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Multi-select interface
// ---------------------------------------------------------------------------

function MultiSelectInterface({ question, lang, onAnswer, userAnswer }: {
  question: Question,
  lang: Language,
  onAnswer: (ids: string[]) => void,
  userAnswer?: string[]
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>(userAnswer || []);
  const isAnswered = !!userAnswer;

  const toggleOption = (id: string) => {
    if (isAnswered) return;
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {question.options.map(option => {
          const isSelected = selectedIds.includes(option.id);
          const isCorrect = option.correct;

          let style = "bg-white hover:bg-slate-50 border-slate-100";
          if (isAnswered) {
             if (isSelected) {
               style = isCorrect ? "bg-emerald-50 border-emerald-100 text-emerald-700" : "bg-rose-50 border-rose-100 text-rose-700";
             } else if (isCorrect) {
               style = "bg-emerald-50/30 border-emerald-50 text-emerald-600";
             } else {
               style = "bg-white border-transparent opacity-40";
             }
          } else if (isSelected) {
            style = "bg-blue-50 border-blue-100 text-blue-700";
          }

          return (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={`w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all group ${style}`}
            >
              <div className={`
                shrink-0 w-6 h-6 flex items-center justify-center rounded-lg border text-[10px] font-bold
                ${isSelected ? 'bg-accent border-accent text-white' : 'text-slate-400 bg-slate-50 border-slate-100'}
                ${isAnswered && isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : ''}
              `}>
                {isSelected ? <CheckCircle2 className="w-3.5 h-3.5" /> : option.id}
              </div>
              <span className="text-sm font-normal">{option.text[lang]}</span>
            </button>
          );
        })}
      </div>
      {!isAnswered && (
        <button
          onClick={() => onAnswer(selectedIds)}
          disabled={selectedIds.length === 0}
          className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium disabled:opacity-30"
        >
          {lang === 'it' ? 'Conferma' : 'Confirm'}
        </button>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Matching interface
// ---------------------------------------------------------------------------

function MatchingInterface({ question, lang, onAnswer, userAnswer }: {
  question: Question,
  lang: Language,
  onAnswer: (pairs: Record<string, string>) => void,
  userAnswer?: Record<string, string>
}) {
  const parsed = useMemo(() => getMatchingPairs(question, lang), [question, lang]);
  const categories = useMemo(() => Array.from(new Set(parsed.map(p => p.cat))), [parsed]);
  const items = useMemo(() => Array.from(new Set(parsed.map(p => p.item))), [parsed]);
  const [selections, setSelections] = useState<Record<string, string>>(userAnswer || {});
  const isAnswered = !!userAnswer;

  const handleSelect = (item: string, cat: string) => {
    if (isAnswered) return;
    setSelections(prev => ({ ...prev, [item]: cat }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map(item => {
          const selectedCat = selections[item];
          const correctCat = parsed.find(p => p.item === item)?.cat;
          const isCorrect = selectedCat === correctCat;

          return (
            <div key={item} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl">
              <span className="flex-1 text-sm font-medium text-slate-700">{item}</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => {
                  const isSelected = selectedCat === cat;
                  let style = "bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-300";
                  if (isSelected) {
                    if (isAnswered) {
                      style = isCorrect ? "bg-emerald-500 text-white border-emerald-500" : "bg-rose-500 text-white border-rose-500";
                    } else {
                      style = "bg-accent text-white border-accent";
                    }
                  } else if (isAnswered && cat === correctCat) {
                    style = "bg-emerald-50 text-emerald-600 border-emerald-200";
                  }

                  return (
                    <button
                      key={cat}
                      disabled={isAnswered}
                      onClick={() => handleSelect(item, cat)}
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold transition-all ${style}`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {!isAnswered && (
        <button
          onClick={() => onAnswer(selections)}
          disabled={Object.keys(selections).length < items.length}
          className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium disabled:opacity-30"
        >
          {lang === 'it' ? 'Conferma' : 'Confirm'}
        </button>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const getMatchingPairs = (q: Question, lang: Language) => {
  const rawPairs = q.options.map(o => {
    const text = o.text[lang];
    const parts = text.split(/[:=]| - /);
    const p1 = parts[0]?.trim() || '';
    const p2 = parts[parts.length - 1]?.trim() || '';
    return { p1, p2 };
  });
  const p1s = new Set(rawPairs.map(p => p.p1));
  const p2s = new Set(rawPairs.map(p => p.p2));
  const p1IsCat = p1s.size <= p2s.size;
  return rawPairs.map(p => ({
    item: p1IsCat ? p.p2 : p.p1,
    cat: p1IsCat ? p.p1 : p.p2,
  }));
};

// ---------------------------------------------------------------------------
// Root App
// ---------------------------------------------------------------------------

type View = 'manual' | 'home' | 'quiz' | 'stats';

export default function App() {
  const [lang, setLang] = useState<Language>(() =>
    localStorage.getItem('lang') === 'en' ? 'en' : 'it'
  );
  const [currentObjective, setCurrentObjective] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [view, setView] = useState<View>('home');

  const questions = questionsData as Question[];

  const handleLangChange = (l: Language) => {
    setLang(l);
    try { localStorage.setItem('lang', l); } catch { /* noop */ }
  };

  const isMultiSelect = (q: Question) =>
    q.options.filter(o => o.correct).length > 1 && !isMatching(q);

  const isMatching = (q: Question) => {
    const correctOptions = q.options.filter(o => o.correct);
    if (correctOptions.length < 3) return false;
    return q.options.some(o => o.text.en.includes(':') || o.text.en.includes('=') || o.text.en.includes(' - '));
  };

  const objectives = useMemo(
    () => Array.from(new Set(questions.map(q => q.objective))).sort(),
    [questions]
  );

  const filteredQuestions = useMemo(() => {
    if (!currentObjective) return [];
    return questions.filter(q => q.objective === currentObjective);
  }, [currentObjective, questions]);

  const totalInObjective = filteredQuestions.length;
  const currentQuestion = filteredQuestions[currentPage];

  const { correctCount } = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    Object.entries(userAnswers).forEach(([qId, ans]) => {
      const q = questions.find(q => q.id === qId);
      if (q) {
        if (isMatching(q)) {
          const correctPairs = getMatchingPairs(q, lang);
          const userPairs = ans as Record<string, string>;
          if (correctPairs.every(cp => userPairs[cp.item] === cp.cat)) correct++;
          else wrong++;
        } else if (isMultiSelect(q)) {
          const selected = ans as string[];
          const correctOnes = q.options.filter(o => o.correct).map(o => o.id);
          const ok = selected.length === correctOnes.length && selected.every(id => correctOnes.includes(id));
          if (ok) correct++; else wrong++;
        } else {
          if (q.options.find(o => o.id === ans)?.correct) correct++; else wrong++;
        }
      }
    });
    return { correctCount: correct, wrongCount: wrong };
  }, [userAnswers, questions, lang]);

  const handleSelectObjective = (obj: string) => {
    setCurrentObjective(obj);
    setCurrentPage(0);
    setView('quiz');
  };

  const handleAnswer = (questionId: string, optionId: string) => {
    const q = questions.find(item => item.id === questionId);
    if (!q || userAnswers[questionId]) return;
    if (!isMultiSelect(q)) {
      setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
    }
  };

  const handleMultiAnswer = (questionId: string, optionIds: string[]) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIds }));
  };

  const handleMatchingAnswer = (questionId: string, pairs: Record<string, string>) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: pairs }));
  };

  const resetQuizProgress = () => {
    if (confirm(lang === 'it' ? 'Sei sicuro di voler resettare tutti i progressi?' : 'Are you sure you want to reset all progress?')) {
      setUserAnswers({});
    }
  };

  const isQuizSection = view === 'home' || view === 'quiz' || view === 'stats';

  return (
    <div className="h-screen flex flex-col bg-[#fcfcfc] text-slate-900 font-sans overflow-hidden">
      {/* Header */}
      <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6 shrink-0 z-50">
        {/* Brand */}
        <button
          className="flex items-center gap-2"
          onClick={() => setView(isQuizSection ? 'home' : 'manual')}
        >
          <ShieldCheck className="text-accent w-5 h-5" />
          <div className="hidden sm:flex flex-col leading-tight text-left">
            <h1 className="text-slate-900 font-semibold text-xs tracking-tight">
              CompTIA Security+ (SY0-701)
            </h1>
            <span className="text-slate-400 text-[10px] font-medium">Exam Prep</span>
          </div>
        </button>

        {/* Main nav tabs */}
        <div className="flex bg-slate-50 p-0.5 rounded-lg border border-slate-100 gap-0.5">
          <button
            onClick={() => setView('manual')}
            className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all flex items-center gap-1.5 ${
              view === 'manual'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <FileText size={12} />
            {lang === 'it' ? 'Manuale' : 'Manual'}
          </button>
          <button
            onClick={() => setView('home')}
            className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all flex items-center gap-1.5 ${
              isQuizSection
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <BookOpen size={12} />
            Quiz
          </button>
        </div>

        {/* Language toggle */}
        <div className="flex bg-slate-50 p-0.5 rounded-md border border-slate-100">
          <button
            onClick={() => handleLangChange('it')}
            className={`px-2 py-0.5 text-[10px] font-medium rounded transition-all ${lang === 'it' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            IT
          </button>
          <button
            onClick={() => handleLangChange('en')}
            className={`px-2 py-0.5 text-[10px] font-medium rounded transition-all ${lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            EN
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden relative">
        <main className="flex-1 bg-[#fcfcfc] p-6 lg:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">

            {/* Manual view */}
            {view === 'manual' && (
              <motion.div
                key="manual"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <ManualView lang={lang} />
              </motion.div>
            )}

            {/* Quiz home — objective selector */}
            {view === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl mx-auto pb-20"
              >
                <div className="text-center mb-16">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center mx-auto mb-6 border border-accent/10">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
                    {lang === 'it' ? 'Seleziona un dominio' : 'Select a domain'}
                  </h2>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    {lang === 'it'
                      ? 'Scegli un obiettivo per iniziare la tua sessione di studio.'
                      : 'Choose an objective to begin your study session.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {objectives.map(obj => {
                    const objQuestions = questions.filter(q => q.objective === obj);
                    const answeredCount = objQuestions.filter(q => userAnswers[q.id]).length;
                    const progressPct = (answeredCount / objQuestions.length) * 100;

                    return (
                      <button
                        key={obj}
                        onClick={() => handleSelectObjective(obj)}
                        className="group bg-white p-6 rounded-2xl border border-slate-100 text-left transition-all hover:border-accent/30 hover:shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                            <BookOpen size={16} />
                          </div>
                          <span className="text-[10px] font-mono text-slate-300">
                            {answeredCount}/{objQuestions.length}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-accent transition-colors">
                          Domain {obj}
                        </h3>
                        <p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                          {lang === 'it' ? 'Preparazione completa' : 'Full domain preparation'}
                        </p>
                        <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-900 group-hover:bg-accent transition-all duration-700"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {Object.keys(userAnswers).length > 0 && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={resetQuizProgress}
                      className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-medium text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <RotateCcw size={12} />
                      {lang === 'it' ? 'Azzera progressi quiz' : 'Reset quiz progress'}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Quiz question view */}
            {view === 'quiz' && currentQuestion && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, scale: 0.995 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.995 }}
                className="max-w-2xl mx-auto h-full flex flex-col pt-4"
              >
                <div className="flex-1 flex flex-col pb-12">
                  <div className="mb-10">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                      <span>{lang === 'it' ? 'Quesito' : 'Question'} {currentPage + 1} / {totalInObjective}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-accent/70">Domain {currentObjective}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-medium text-slate-900 leading-snug">
                      {currentQuestion.text[lang]}
                    </h2>
                  </div>

                  {isMatching(currentQuestion) ? (
                    <MatchingInterface
                      question={currentQuestion}
                      lang={lang}
                      onAnswer={(pairs) => handleMatchingAnswer(currentQuestion.id, pairs)}
                      userAnswer={userAnswers[currentQuestion.id]}
                    />
                  ) : isMultiSelect(currentQuestion) ? (
                    <MultiSelectInterface
                      question={currentQuestion}
                      lang={lang}
                      onAnswer={(ids) => handleMultiAnswer(currentQuestion.id, ids)}
                      userAnswer={userAnswers[currentQuestion.id]}
                    />
                  ) : (
                    <div className="space-y-2">
                      {currentQuestion.options.map(option => {
                        const selectedOptionId = userAnswers[currentQuestion.id];
                        const isAnswered = !!selectedOptionId;
                        const isSelected = selectedOptionId === option.id;
                        const isOptionCorrect = option.correct;

                        let style = "bg-white hover:bg-slate-50 border-slate-100";
                        if (isAnswered) {
                          if (isSelected) {
                            style = isOptionCorrect
                              ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                              : "bg-rose-50 border-rose-100 text-rose-700";
                          } else if (isOptionCorrect) {
                            style = "bg-emerald-50/30 border-emerald-50 text-emerald-600";
                          } else {
                            style = "bg-white border-transparent opacity-40";
                          }
                        } else if (isSelected) {
                          style = "bg-blue-50 border-blue-100 text-blue-700";
                        }

                        return (
                          <button
                            key={option.id}
                            disabled={isAnswered}
                            onClick={() => handleAnswer(currentQuestion.id, option.id)}
                            className={`w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all group ${style}`}
                          >
                            <div className={`
                              shrink-0 w-6 h-6 flex items-center justify-center rounded-lg border text-[10px] font-bold
                              ${isAnswered && isOptionCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : ''}
                              ${isAnswered && isSelected && !isOptionCorrect ? 'bg-rose-500 border-rose-500 text-white' : ''}
                              ${!isAnswered && isSelected ? 'bg-accent border-accent text-white' : 'text-slate-400 bg-slate-50 border-slate-100 group-hover:border-accent group-hover:text-accent'}
                            `}>
                              {isAnswered
                                ? (isOptionCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : (isSelected ? <XCircle className="w-3.5 h-3.5" /> : option.id))
                                : option.id}
                            </div>
                            <span className="text-sm font-normal">{option.text[lang]}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {userAnswers[currentQuestion.id] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border font-bold ${
                          (isMatching(currentQuestion)
                            ? getMatchingPairs(currentQuestion, lang).every(cp => userAnswers[currentQuestion.id][cp.item] === cp.cat)
                            : isMultiSelect(currentQuestion)
                              ? (userAnswers[currentQuestion.id].length === currentQuestion.options.filter(o => o.correct).length && userAnswers[currentQuestion.id].every((id: string) => currentQuestion.options.filter(o => o.correct).map(o => o.id).includes(id)))
                              : currentQuestion.options.find(o => o.id === userAnswers[currentQuestion.id])?.correct
                          ) ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                          {(isMatching(currentQuestion)
                            ? getMatchingPairs(currentQuestion, lang).every(cp => userAnswers[currentQuestion.id][cp.item] === cp.cat)
                            : isMultiSelect(currentQuestion)
                              ? (userAnswers[currentQuestion.id].length === currentQuestion.options.filter(o => o.correct).length && userAnswers[currentQuestion.id].every((id: string) => currentQuestion.options.filter(o => o.correct).map(o => o.id).includes(id)))
                              : currentQuestion.options.find(o => o.id === userAnswers[currentQuestion.id])?.correct
                          ) ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                        </div>
                        <div className="font-semibold text-sm">
                          {(isMatching(currentQuestion)
                            ? getMatchingPairs(currentQuestion, lang).every(cp => userAnswers[currentQuestion.id][cp.item] === cp.cat)
                            : isMultiSelect(currentQuestion)
                              ? (userAnswers[currentQuestion.id].length === currentQuestion.options.filter(o => o.correct).length && userAnswers[currentQuestion.id].every((id: string) => currentQuestion.options.filter(o => o.correct).map(o => o.id).includes(id)))
                              : currentQuestion.options.find(o => o.id === userAnswers[currentQuestion.id])?.correct
                          )
                            ? (lang === 'it' ? 'Risposta Corretta!' : 'Correct Answer!')
                            : (lang === 'it' ? 'Risposta Errata' : 'Incorrect Answer')}
                        </div>
                      </div>

                      {currentQuestion.explanation ? (
                        <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="shrink-0 w-6 h-6 bg-white text-accent rounded-md flex items-center justify-center border border-slate-100 italic font-serif font-bold text-sm">
                            i
                          </div>
                          <div className="space-y-1">
                            <div className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none mb-1">
                              {lang === 'it' ? 'Spiegazione' : 'Explanation'}
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed font-normal">
                              {currentQuestion.explanation[lang]}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                          <div className="shrink-0 w-6 h-6 bg-white text-emerald-600 rounded-md flex items-center justify-center border border-emerald-100 italic font-serif font-bold text-sm">
                            ✓
                          </div>
                          <div className="space-y-1">
                            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none mb-1">
                              {lang === 'it' ? 'La risposta corretta è' : 'The correct answer is'}
                            </div>
                            <div className="text-sm text-emerald-800 leading-relaxed font-medium">
                              {isMatching(currentQuestion) ? (
                                <ul className="space-y-1 mt-1">
                                  {getMatchingPairs(currentQuestion, lang).map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
                                      {p.item} → {p.cat}
                                    </li>
                                  ))}
                                </ul>
                              ) : isMultiSelect(currentQuestion) ? (
                                <ul className="space-y-1 mt-1">
                                  {currentQuestion.options.filter(o => o.correct).map(o => (
                                    <li key={o.id} className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" />
                                      {o.text[lang]}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <span>{currentQuestion.options.find(o => o.correct)?.text[lang]}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Stats view */}
            {view === 'stats' && (
              <motion.div
                key="stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-10">
                  <BarChart3 className="text-slate-900" size={20} />
                  <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
                    {lang === 'it' ? 'Statistiche Sessione' : 'Session Statistics'}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {Object.keys(userAnswers).length}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      {lang === 'it' ? 'Risposte' : 'Answered'}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">
                      {Object.keys(userAnswers).length > 0
                        ? Math.round((correctCount / Object.keys(userAnswers).length) * 100)
                        : 0}%
                    </div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      {lang === 'it' ? 'Accuratezza' : 'Accuracy'}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                    {lang === 'it' ? 'Performance per Dominio' : 'Domain Performance'}
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-50">
                    {objectives.map(obj => {
                      const objQuestions = questions.filter(q => q.objective === obj);
                      const answeredInObj = objQuestions.filter(q => userAnswers[q.id]);
                      const correctInObj = answeredInObj.filter(q => {
                        const ans = userAnswers[q.id];
                        if (isMatching(q)) {
                          const correctPairs = getMatchingPairs(q, lang);
                          const userPairs = ans as Record<string, string>;
                          return correctPairs.every(cp => userPairs[cp.item] === cp.cat);
                        } else if (isMultiSelect(q)) {
                          const selected = ans as string[];
                          const correctOnes = q.options.filter(o => o.correct).map(o => o.id);
                          return selected.length === correctOnes.length && selected.every(id => correctOnes.includes(id));
                        }
                        return q.options.find(o => o.id === ans)?.correct;
                      });
                      const pct = objQuestions.length > 0 ? (answeredInObj.length / objQuestions.length) * 100 : 0;
                      const accuracy = answeredInObj.length > 0 ? (correctInObj.length / answeredInObj.length) * 100 : 0;

                      return (
                        <div key={obj} className="p-5 flex items-center gap-6">
                          <div className="w-20 shrink-0">
                            <div className="text-[11px] font-bold text-slate-900">Domain {obj}</div>
                            <div className="text-[9px] text-slate-400 font-mono">
                              {answeredInObj.length}/{objQuestions.length}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-slate-900 transition-all duration-1000"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                          <div className="w-12 text-right shrink-0">
                            <div className="text-xs font-bold text-slate-900">{Math.round(accuracy)}%</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-16 bg-white border-t border-border flex items-center justify-between px-8 shrink-0 z-50">
        <div>
          {view === 'quiz' && (
            <button
              onClick={() => setView('stats')}
              className="px-4 py-1.5 rounded-full text-[11px] font-medium bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all flex items-center gap-1.5 border border-slate-100"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {lang === 'it' ? 'Analisi' : 'Analytics'}
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {view === 'quiz' && (
            <>
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(p => p - 1)}
                className="px-4 py-1.5 rounded-full text-[11px] font-medium bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={14} />
                {lang === 'it' ? 'Indietro' : 'Back'}
              </button>
              <button
                disabled={currentPage === totalInObjective - 1}
                onClick={() => setCurrentPage(p => p + 1)}
                className="px-6 py-1.5 rounded-full text-[11px] font-medium bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {lang === 'it' ? 'Avanti' : 'Next'}
                <ChevronRight size={14} />
              </button>
            </>
          )}
          {(view === 'stats') && (
            <button
              onClick={() => setView('home')}
              className="px-6 py-1.5 rounded-full text-[11px] font-medium bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              {lang === 'it' ? 'Torna alla Home' : 'Back to Home'}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
