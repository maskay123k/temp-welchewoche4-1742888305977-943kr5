export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  general: FAQ[];
  technical: FAQ[];
}

export interface FAQData {
  [language: string]: FAQCategory;
}
