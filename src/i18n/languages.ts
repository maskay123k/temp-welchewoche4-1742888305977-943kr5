export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹'
  },
  {
    code: 'pt',
    name: 'Português',
    flag: '🇵🇹'
  },
  {
    code: 'nl',
    name: 'Nederlands',
    flag: '🇳🇱'
  },
  {
    code: 'pl',
    name: 'Polski',
    flag: '🇵🇱'
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: '🇷🇺'
  },
  {
    code: 'ja',
    name: '日本語',
    flag: '🇯🇵'
  },
  {
    code: 'ko',
    name: '한국어',
    flag: '🇰🇷'
  },
  {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳'
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    flag: '🇮🇳'
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦'
  },
  {
    code: 'bn',
    name: 'বাংলা',
    flag: '🇧🇩'
  },
  {
    code: 'ur',
    name: 'اردو',
    flag: '🇵🇰'
  },
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: '🇮🇩'
  },
  {
    code: 'pcm',
    name: 'Naija',
    flag: '🇳🇬'
  },
  {
    code: 'mr',
    name: 'मराठी',
    flag: '🇮🇳'
  },
  {
    code: 'te',
    name: 'తెలుగు',
    flag: '🇮🇳'
  },
  {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷'
  },
  {
    code: 'ta',
    name: 'தமிழ்',
    flag: '🇮🇳'
  },
  {
    code: 'vi',
    name: 'Tiếng Việt',
    flag: '🇻🇳'
  }
];

export const defaultLanguage = 'de';
