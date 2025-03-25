export type SocialPlatform = 'facebook' | 'x' | 'email' | 'whatsapp' | 'telegram';

export interface ShareConfig {
  url: string;
  title: string;
  description?: string;
  image?: string;
}
