/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  CheckCircle2, 
  XCircle, 
  BookOpen,
  LayoutGrid,
  RotateCcw,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  FileSearch
} from 'lucide-react';
import { Question, Language } from './types';
import questionsData from './data/questions.json';

// Interface for Multi-Select Questions
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

// Interface for Matching Questions
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

const QUESTIONS_PER_PAGE = 1;

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
    cat: p1IsCat ? p.p1 : p.p2
  }));
};

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const [currentObjective, setCurrentObjective] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [view, setView] = useState<'home' | 'quiz' | 'stats'>('home');

  const questions = (questionsData as Question[]);

  const isMultiSelect = (q: Question) => {
    return q.options.filter(o => o.correct).length > 1 && !isMatching(q);
  };

  const isMatching = (q: Question) => {
    const correctOptions = q.options.filter(o => o.correct);
    if (correctOptions.length < 3) return false;
    return q.options.some(o => o.text.en.includes(':') || o.text.en.includes('=') || o.text.en.includes(' - '));
  };

  const objectives = useMemo(() => {
    const objs = Array.from(new Set(questions.map(q => q.objective))).sort();
    return objs;
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    if (!currentObjective) return [];
    return questions.filter(q => q.objective === currentObjective);
  }, [currentObjective, questions]);

  const totalInObjective = filteredQuestions.length;
  const currentQuestionIdx = currentPage;
  const currentQuestion = filteredQuestions[currentQuestionIdx];

  const { correctCount, wrongCount } = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    Object.entries(userAnswers).forEach(([qId, ans]) => {
      const q = questions.find(q => q.id === qId);
      if (q) {
        if (isMatching(q)) {
          // For matching, we compare the user's pairs with the correct pairs
          const correctPairs = getMatchingPairs(q, lang);
          const userPairs = ans as Record<string, string>;
          const isAllCorrect = correctPairs.every(cp => userPairs[cp.item] === cp.cat);
          if (isAllCorrect) correct++;
          else wrong++;
        } else if (isMultiSelect(q)) {
          const selected = ans as string[];
          const correctOnes = q.options.filter(o => o.correct).map(o => o.id);
          const isCorrect = selected.length === correctOnes.length && selected.every(id => correctOnes.includes(id));
          if (isCorrect) correct++;
          else wrong++;
        } else {
          const isCorrect = q.options.find(o => o.id === ans)?.correct;
          if (isCorrect) correct++;
          else wrong++;
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

    if (isMultiSelect(q)) {
      // Logic for multi-select is handled by a "Confirm" button or similar
      // But for simplicity in this UI, we might need a different handler for multi-select
    } else {
      setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
    }
  };

  const handleMultiAnswer = (questionId: string, optionIds: string[]) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIds }));
  };

  const handleMatchingAnswer = (questionId: string, pairs: Record<string, string>) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: pairs }));
  };

  const resetProgress = () => {
    if (confirm(lang === 'it' ? 'Sei sicuro di voler resettare tutti i progressi?' : 'Are you sure you want to reset all progress?')) {
      setUserAnswers({});
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#fcfcfc] text-slate-900 font-sans overflow-hidden">
      {/* Header */}
      <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <ShieldCheck className="text-accent w-5 h-5" />
            <div className="hidden sm:flex flex-col leading-tight" onClick={() => setView('home')}>
              <h1 className="text-slate-900 font-semibold text-xs tracking-tight">
                CompTIA Security+ (SY0-701)
              </h1>
              <span className="text-slate-400 text-[10px] font-medium">
                Exam Prep
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-50 p-0.5 rounded-md border border-slate-100">
            <button 
              onClick={() => setLang('it')}
              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-all ${lang === 'it' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              IT
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-all ${lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Content Area */}
        <main className="flex-1 bg-[#fcfcfc] p-6 lg:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">
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
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
                    CompTIA Security+ (SY0-701)<br />
                    Exam Prep
                  </h2>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    {lang === 'it' 
                      ? 'Seleziona un dominio per iniziare la tua sessione di studio personalizzata.' 
                      : 'Select a domain to begin your personalized study session.'}
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
              </motion.div>
            )}

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
                      <span>{lang === 'it' ? 'Quesito' : 'Question'} {currentQuestionIdx + 1} / {totalInObjective}</span>
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
                            className={`
                              w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all group
                              ${style}
                            `}
                          >
                            <div className={`
                              shrink-0 w-6 h-6 flex items-center justify-center rounded-lg border text-[10px] font-bold
                              ${isAnswered && isOptionCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : ''}
                              ${isAnswered && isSelected && !isOptionCorrect ? 'bg-rose-500 border-rose-500 text-white' : ''}
                              ${!isAnswered && isSelected ? 'bg-accent border-accent text-white' : 'text-slate-400 bg-slate-50 border-slate-100 group-hover:border-accent group-hover:text-accent'}
                            `}>
                              {isAnswered ? (
                                isOptionCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : (isSelected ? <XCircle className="w-3.5 h-3.5" /> : option.id)
                              ) : option.id}
                            </div>
                            <span className="text-sm font-normal">
                               {option.text[lang]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {userAnswers[currentQuestion.id] && currentQuestion.explanation && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4"
                    >
                      <div className="shrink-0 w-8 h-8 bg-white text-accent rounded-lg flex items-center justify-center border border-slate-100 italic font-serif font-bold text-lg">
                        i
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest">
                          {lang === 'it' ? 'Spiegazione' : 'Explanation'}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {currentQuestion.explanation[lang]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

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
                      {Object.keys(userAnswers).length > 0 ? Math.round((correctCount / Object.keys(userAnswers).length) * 100) : 0}%
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

        {/* Removed Sidebar as per user request */}
      </div>

      {/* Footer Controls */}
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
          {view !== 'quiz' && view !== 'home' && (
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

