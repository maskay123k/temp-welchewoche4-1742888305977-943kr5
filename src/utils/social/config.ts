export const socialConfig = {
  facebook: {
    color: '#1877F2',
    label: 'Facebook',
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  x: {
    color: '#000000',
    label: 'X',
    shareUrl: 'https://twitter.com/intent/tweet?url='
  },
  email: {
    color: '#EA4335',
    label: 'Email',
    shareUrl: 'mailto:?body='
  },
  whatsapp: {
    color: '#25D366',
    label: 'WhatsApp',
    shareUrl: 'https://wa.me/?text='
  },
  telegram: {
    color: '#0088cc',
    label: 'Telegram',
    shareUrl: 'https://t.me/share/url?url='
  }
} as const;

export function getSocialConfig(platform: keyof typeof socialConfig) {
  return socialConfig[platform];
}
