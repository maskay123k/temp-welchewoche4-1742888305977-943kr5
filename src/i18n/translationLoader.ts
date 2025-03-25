import type { SupportedLanguage, Translation } from './types';

export class TranslationLoader {
  private static cache: Map<SupportedLanguage, Translation> = new Map();

  static async load(language: SupportedLanguage): Promise<Translation> {
    // Check cache first
    const cached = this.cache.get(language);
    if (cached) return cached;

    try {
      // Load translations dynamically
      const module = await import(`./translations/${language}.ts`);
      const translations = module.default;
      
      // Cache the translations
      this.cache.set(language, translations);
      
      return translations;
    } catch (error) {
      console.error(`Failed to load translations for ${language}`, error);
      // Fall back to default language if loading fails
      return this.load('en');
    }
  }

  static clearCache(): void {
    this.cache.clear();
  }
}
