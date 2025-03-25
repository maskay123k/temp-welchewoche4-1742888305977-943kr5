import type { StyleDefinition } from '../types';

const dotAboveMap: Record<string, string> = {
  A: 'Ȧ', B: 'Ḃ', C: 'Ċ', D: 'Ḋ', E: 'Ė', F: 'Ḟ', G: 'Ġ', H: 'Ḣ',
  I: 'İ', J: 'J̇', K: 'K̇', L: 'L̇', M: 'Ṁ', N: 'Ṅ', O: 'Ȯ', P: 'Ṗ',
  Q: 'Q̇', R: 'Ṙ', S: 'Ṡ', T: 'Ṫ', U: 'U̇', V: 'V̇', W: 'Ẇ', X: 'Ẋ',
  Y: 'Ẏ', Z: 'Ż', a: 'ȧ', b: 'ḃ', c: 'ċ', d: 'ḋ', e: 'ė', f: 'ḟ',
  g: 'ġ', h: 'ḣ', i: 'i̇', j: 'j̇', k: 'k̇', l: 'l̇', m: 'ṁ', n: 'ṅ',
  o: 'ȯ', p: 'ṗ', q: 'q̇', r: 'ṙ', s: 'ṡ', t: 'ṫ', u: 'u̇', v: 'v̇',
  w: 'ẇ', x: 'ẋ', y: 'ẏ', z: 'ż', 'Ä': 'Ȧ̈̇', 'Ö': 'Ȯ̈̇', 'Ü': 'U̇̈̇',
  'ä': 'ȧ̈̇', 'ö': 'ȯ̈̇', 'ü': 'u̇̈̇', 'ß': 'ß̇'
};

export const dotAboveStyle: StyleDefinition = {
  name: 'Dot Above',
  transform: (text: string) => text.split('').map(char => dotAboveMap[char] || char).join('')
};
