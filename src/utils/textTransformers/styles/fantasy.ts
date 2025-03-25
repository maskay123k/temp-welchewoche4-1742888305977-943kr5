import type { StyleDefinition } from '../types';

const fantasyMap: Record<string, string> = {
  A: 'ꪖ', B: 'ꪉ', C: 'ᨶ', D: 'ᦔ', E: 'ꫀ', F: 'ᠻ', G: 'ᦋ', H: 'ꫝ',
  I: 'ỉ', J: '᧒', K: 'ƙ', L: 'ꪶ', M: 'ꪑ', N: '᭢', O: 'ꪮ', P: 'ᩏ',
  Q: 'ᧁ', R: 'ꪹ', S: 'క', T: 'ᡶ', U: 'ꪊ', V: 'ꪜ', W: '᭙', X: '᥊',
  Y: 'ꪗ', Z: 'ɀ', a: 'ꪖ', b: 'ꪉ', c: 'ᨶ', d: 'ᦔ', e: 'ꫀ', f: 'ᠻ',
  g: 'ᦋ', h: 'ꫝ', i: 'ỉ', j: '᧒', k: 'ƙ', l: 'ꪶ', m: 'ꪑ', n: '᭢',
  o: 'ꪮ', p: 'ᩏ', q: 'ᧁ', r: 'ꪹ', s: 'క', t: 'ᡶ', u: 'ꪊ', v: 'ꪜ',
  w: '᭙', x: '᥊', y: 'ꪗ', z: 'ɀ', 'Ä': 'ꪖ̈', 'Ö': 'ꪮ̈', 'Ü': 'ꪊ̈',
  'ä': 'ꪖ̈', 'ö': 'ꪮ̈', 'ü': 'ꪊ̈', 'ß': 'ß'
};

export const fantasyStyle: StyleDefinition = {
  name: 'Fantasy',
  transform: (text: string) => text.split('').map(char => fantasyMap[char] || char).join('')
};
