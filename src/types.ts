export interface Option {
  id: string;
  text: {
    it: string;
    en: string;
  };
  correct: boolean;
}

export interface Question {
  id: string;
  objective: string;
  text: {
    it: string;
    en: string;
  };
  options: Option[];
  explanation?: {
    it: string;
    en: string;
  };
}

export type Language = 'it' | 'en';
