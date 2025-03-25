import type { StyleDefinition } from '../types';

export const reversedStyle: StyleDefinition = {
  name: 'Reversed',
  transform: (text: string) => text.split('').reverse().join('')
};
