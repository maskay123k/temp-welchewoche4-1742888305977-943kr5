import type { StyleDefinition } from '../types';

const antrophobiaMap: Record<string, string> = {
  A: 'α', B: 'в', C: '¢', D: '∂', E: 'є', F: 'f', G: 'g', H: 'н',
  I: 'ι', J: 'נ', K: 'к', L: 'ℓ', M: 'м', N: 'и', O: 'σ', P: 'ρ',
  Q: 'q', R: 'я', S: 'ѕ', T: 'т', U: 'υ', V: 'ν', W: 'ω', X: 'χ',
  Y: 'у', Z: 'z', a: 'α', b: 'в', c: '¢', d: '∂', e: 'є', f: 'f',
  g: 'g', h: 'н', i: 'ι', j: 'נ', k: 'к', l: 'ℓ', m: 'м', n: 'и',
  o: 'σ', p: 'ρ', q: 'q', r: 'я', s: 'ѕ', t: 'т', u: 'υ', v: 'ν',
  w: 'ω', x: 'χ', y: 'у', z: 'z', 'Ä': 'α̈', 'Ö': 'σ̈', 'Ü': 'ϋ',
  'ä': 'α̈', 'ö': 'σ̈', 'ü': 'ϋ', 'ß': 'ß'
};

export const antrophobiaStyle: StyleDefinition = {
  name: 'Antrophobia',
  transform: (text: string) => text.split('').map(char => antrophobiaMap[char] || char).join('')
};
