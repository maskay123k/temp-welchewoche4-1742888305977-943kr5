import type { StyleDefinition } from '../types';

const soHotMap: Record<string, string> = {
  A: 'Aͣ', B: 'B𞀓', C: 'Cͨ', D: 'Dͩ', E: 'Eͤ', F: 'F̾', G: 'G̾', H: 'Hͪ',
  I: 'Iͥ', J: 'J̾', K: 'K̾', L: 'L̾', M: 'Mͫ', N: 'N̾', O: 'Oͦ', P: 'P𞀐',
  Q: 'Q̾', R: 'Rͬ', S: 'S̾', T: 'Tͭ', U: 'Uͧ', V: 'V̾', W: 'W𞀞', X: 'Xͯ',
  Y: 'Y̾', Z: 'Z̾', a: 'aͣ', b: 'b𞀓', c: 'cͨ', d: 'dͩ', e: 'eͤ', f: 'f̾',
  g: 'g̾', h: 'hͪ', i: 'iͥ', j: 'j̾', k: 'k̾', l: 'l̾', m: 'mͫ', n: 'n̾',
  o: 'oͦ', p: 'p𞀐', q: 'q̾', r: 'rͬ', s: 's̾', t: 'tͭ', u: 'uͧ', v: 'v̾',
  w: 'w𞀞', x: 'xͯ', y: 'y̾', z: 'z̾', 'Ä': 'Aͣ̈', 'Ö': 'Oͦ̈', 'Ü': 'Uͧ̈',
  'ä': 'aͣ̈', 'ö': 'oͦ̈', 'ü': 'uͧ̈', 'ß': 'ß'
};

export const soHotStyle: StyleDefinition = {
  name: 'So Hot',
  transform: (text: string) => text.split('').map(char => soHotMap[char] || char).join('')
};
