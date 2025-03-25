import type { StyleDefinition } from '../types';

export const bracketsStyle: StyleDefinition = {
  name: 'Brackets',
  transform: (text: string) => text.split('').map(char => `[${char}]`).join('')
};
