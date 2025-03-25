import { emojiDescriptions } from '../i18n/translations/emoji-descriptions';
    import { translations } from '../i18n/translations';
    import type { LanguageCode } from '../i18n/constants';

    export function getEmojiDescription(emojiName: string, language: string): string {
      // Get language-specific emoji descriptions
      const descriptions = emojiDescriptions[language as LanguageCode];
      if (!descriptions) return emojiName;
      
      // Return translated description or fallback to original name
      return descriptions[emojiName] || emojiName;
    }

    export function getCategoryTitle(categoryName: string, language: string): string {
      const t = translations[language as LanguageCode];
      if (!t?.categories) return categoryName;
      return t.categories[categoryName] || categoryName;
    }

    // Get English name for an emoji regardless of current language
    export function getEnglishName(name: string): string {
      return name;
    }

    // Get the correct slug for an emoji
    export function getEmojiSlug(name: string): string {
      return getEnglishName(name).toLowerCase().replace(/\s+/g, '-');
    }
