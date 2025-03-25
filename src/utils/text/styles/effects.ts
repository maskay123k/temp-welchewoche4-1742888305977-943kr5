import { reverseText, alternateCase } from '../transformers';
import type { StyleDefinition } from '../types';

export const effectStyles: StyleDefinition[] = [
  {
    name: 'Reversed',
    transform: reverseText
  },
  {
    name: 'Alternating Case',
    transform: alternateCase
  }
];
