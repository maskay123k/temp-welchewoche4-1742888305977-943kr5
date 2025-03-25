import { emojiDescriptionsEn } from './en';
import { emojiDescriptionsDe } from './de';
import { emojiDescriptionsEs } from './es';
import { emojiDescriptionsFr } from './fr';
import { emojiDescriptionsIt } from './it';
import { emojiDescriptionsJa } from './ja';
import { emojiDescriptionsKo } from './ko';
import { emojiDescriptionsZh } from './zh';
import { emojiDescriptionsRu } from './ru';
import { emojiDescriptionsPt } from './pt';
import { emojiDescriptionsNl } from './nl';
import { emojiDescriptionsPl } from './pl';
import type { LanguageCode } from '../../constants';

export const emojiDescriptions: Record<LanguageCode, Record<string, string>> = {
  en: emojiDescriptionsEn,
  de: emojiDescriptionsDe,
  es: emojiDescriptionsEs,
  fr: emojiDescriptionsFr,
  it: emojiDescriptionsIt,
  ja: emojiDescriptionsJa,
  ko: emojiDescriptionsKo,
  zh: emojiDescriptionsZh,
  pt: emojiDescriptionsPt,
  nl: emojiDescriptionsNl,
  pl: emojiDescriptionsPl,
  ru: emojiDescriptionsRu
};
