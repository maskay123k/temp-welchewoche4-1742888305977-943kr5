import type { StyleDefinition } from '../types';

const h4k3rMap: Record<string, string> = {
  A: '4', B: '8', C: '(', D: 'D', E: '3', F: 'F', G: '9', H: 'H', I: '!',
  J: 'J', K: 'K', L: '1', M: 'M', N: 'N', O: '0', P: 'P', Q: 'Q', R: 'R',
  S: '5', T: '7', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: '2',
  a: '4', b: '8', c: '(', d: 'd', e: '3', f: 'f', g: '9', h: 'h', i: '!',
  j: 'j', k: 'k', l: '1', m: 'm', n: 'n', o: '0', p: 'p', q: 'q', r: 'r',
  s: '5', t: '7', u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: '2',
  'Ä': '4̈', 'Ö': '0̈', 'Ü': 'Ü', 'ä': '4̈', 'ö': '0̈', 'ü': 'ü', 'ß': 'ß'
};

export const h4k3rStyle: StyleDefinition = {
  name: 'H4k3r',
  transform: (text: string) => text.split('').map(char => h4k3rMap[char] || char).join('')
};
