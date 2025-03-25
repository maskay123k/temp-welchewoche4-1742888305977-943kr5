import type { StyleDefinition } from '../types';

const sorcererMap: Record<string, string> = {
  A: 'ǟ', B: 'ɮ', C: 'ƈ', D: 'ɖ', E: 'ɛ', F: 'ʄ', G: 'ɢ', H: 'ɦ',
  I: 'ɨ', J: 'ʝ', K: 'ӄ', L: 'ʟ', M: 'ʍ', N: 'ռ', O: 'օ', P: 'ք',
  Q: 'զ', R: 'ʀ', S: 'ֆ', T: 'ȶ', U: 'ʊ', V: 'ʋ', W: 'ա', X: 'Ӽ',
  Y: 'ʏ', Z: 'ʐ', a: 'ǟ', b: 'ɮ', c: 'ƈ', d: 'ɖ', e: 'ɛ', f: 'ʄ',
  g: 'ɢ', h: 'ɦ', i: 'ɨ', j: 'ʝ', k: 'ӄ', l: 'ʟ', m: 'ʍ', n: 'ռ',
  o: 'օ', p: 'ք', q: 'զ', r: 'ʀ', s: 'ֆ', t: 'ȶ', u: 'ʊ', v: 'ʋ',
  w: 'ա', x: 'Ӽ', y: 'ʏ', z: 'ʐ', 'Ä': 'ǟ̈', 'Ö': 'օ̈', 'Ü': 'ʊ̈',
  'ä': 'ǟ̈', 'ö': 'օ̈', 'ü': 'ʊ̈', 'ß': 'ß'
};

export const sorcererStyle: StyleDefinition = {
  name: 'Sorcerer',
  transform: (text: string) => text.split('').map(char => sorcererMap[char] || char).join('')
};
