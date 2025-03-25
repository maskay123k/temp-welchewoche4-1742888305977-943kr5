import type { MenuItem } from '../types';

    export function getMenuItems(language: string): MenuItem[] {
      return [
        {
          id: 'info',
          label: 'navigation.info',
          children: [
            {
              id: 'about',
              label: 'navigation.about',
              href: `/${language}/about`
            },
            {
              id: 'contact',
              label: 'navigation.contact',
              href: `/${language}/contact`
            },
            {
              id: 'imprint',
              label: 'navigation.imprint',
              href: `/${language}/imprint`
            },
            {
              id: 'privacy',
              label: 'navigation.privacy',
              href: `/${language}/privacy`
            }
          ]
        }
      ];
    }
