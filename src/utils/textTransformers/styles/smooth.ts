import type { StyleDefinition } from '../types';

const smoothMap: Record<string, string> = {
  A: 'α', B: 'Ⴆ', C: 'ƈ', D: 'ԃ', E: 'ҽ', F: 'ϝ', G: 'ɠ', H: 'ԋ',
  I: 'ι', J: 'ʝ', K: 'ƙ', L: 'ʅ', M: 'ɱ', N: 'ɳ', O: 'σ', P: 'ρ',
  Q: 'ϙ', R: 'ɾ', S: 'ʂ', T: 'ƚ', U: 'υ', V: 'ʋ', W: 'ɯ', X: 'x',
  Y: 'ყ', Z: 'ȥ', a: 'α', b: 'Ⴆ', c: 'ƈ', d: 'ԃ', e: 'ҽ', f: 'ϝ',
  g: 'ɠ', h: 'ԋ', i: 'ι', j: 'ʝ', k: 'ƙ', l: 'ʅ', m: 'ɱ', n: 'ɳ',
  o: 'σ', p: 'ρ', q: 'ϙ', r: 'ɾ', s: 'ʂ', t: 'ƚ', u: 'υ', v: 'ʋ',
  w: 'ɯ', x: 'x', y: 'ყ', z: 'ȥ', 'Ä': 'α̈', 'Ö': 'σ̈', 'Ü': 'ϋ',
  'ä': 'α̈', 'ö': 'σ̈', 'ü': 'ϋ', 'ß': 'ß'
};

export const smoothStyle: StyleDefinition = {
  name: 'Smooth',
  transform: (text: string) => text.split('').map(char => smoothMap[char] || char).join('')
};
