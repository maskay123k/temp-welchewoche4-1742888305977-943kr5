import type { StyleDefinition } from '../types';

export const alternatingStyle: StyleDefinition = {
  name: 'Alternating Case',
  transform: (text: string) => 
    text.split('').map((char, i) => 
      i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('')
};
