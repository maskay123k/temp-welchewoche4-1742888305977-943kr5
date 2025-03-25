import type { StyleDefinition } from '../types';

export const spacedStyle: StyleDefinition = {
  name: 'Spaced',
  transform: (text: string) => text.split('').join(' ')
};
