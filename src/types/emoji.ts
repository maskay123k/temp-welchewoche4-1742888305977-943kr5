export interface EmojiDetail {
  id: string;
  char: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive';
  seo: {
    title: Record<string, string>;
    description: Record<string, string>;
    keywords: Record<string, string[]>;
  };
  content: Record<string, {
    name: string;
    description: string;
    usage: string[];
    cultural: string;
    interpretations: string[];
  }>;
  unicode: {
    name: string;
    code: string;
    version: string;
  };
  platformVariations: {
    platform: string;
    image: string;
    version: string;
  }[];
  shortcodes: {
    platform: string;
    code: string;
  }[];
  categories: string[];
  tags: Record<string, string[]>;
  related: string[];
}

export interface Emoji {
  char: string;
  name: string;
}
