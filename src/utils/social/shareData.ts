import { socialConfig } from './config';
import type { ShareConfig } from '../../types/social';

export function getSocialShareData({
  url,
  title,
  description = '',
  image = ''
}: ShareConfig) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  return {
    facebook: {
      url: `${socialConfig.facebook.shareUrl}${encodedUrl}`
    },
    x: {
      url: `${socialConfig.x.shareUrl}${encodedUrl}&text=${encodedTitle}`
    },
    email: {
      url: `${socialConfig.email.shareUrl}${encodedTitle}%0A%0A${encodedUrl}`
    },
    whatsapp: {
      url: `${socialConfig.whatsapp.shareUrl}${encodedTitle}%20${encodedUrl}`
    },
    telegram: {
      url: `${socialConfig.telegram.shareUrl}${encodedUrl}&text=${encodedTitle}`
    }
  };
}
