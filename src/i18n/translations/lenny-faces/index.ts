import { lennyFacesTranslationsDe } from './de';
import { lennyFacesTranslationsEn } from './en';
import { lennyFacesTranslationsEs } from './es';
import { lennyFacesTranslationsFr } from './fr';
import { lennyFacesTranslationsIt } from './it';
import { lennyFacesTranslationsJa } from './ja';
import { lennyFacesTranslationsKo } from './ko';
import { lennyFacesTranslationsNl } from './nl';
import { lennyFacesTranslationsPl } from './pl';
import { lennyFacesTranslationsPt } from './pt';
import { lennyFacesTranslationsRu } from './ru';
import { lennyFacesTranslationsZh } from './zh';
import type { LanguageCode } from '../../constants';

export const lennyFacesTranslations: Record<LanguageCode, typeof lennyFacesTranslationsEn> = {
  de: lennyFacesTranslationsDe,
  en: lennyFacesTranslationsEn,
  es: lennyFacesTranslationsEs,
  fr: lennyFacesTranslationsFr,
  it: lennyFacesTranslationsIt,
  ja: lennyFacesTranslationsJa,
  ko: lennyFacesTranslationsKo,
  nl: lennyFacesTranslationsNl,
  pl: lennyFacesTranslationsPl,
  pt: lennyFacesTranslationsPt,
  ru: lennyFacesTranslationsRu,
  zh: lennyFacesTranslationsZh
};

export function getLennyFaceTranslation(name: string, language: LanguageCode): string {
  const translations = lennyFacesTranslations[language] || lennyFacesTranslations.en;
  return translations.faces[name as keyof typeof translations.faces] || name;
}
