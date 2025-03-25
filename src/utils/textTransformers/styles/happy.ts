import type { StyleDefinition } from '../types';

const happyMap: Record<string, string> = {
  A: 'Ă̈', B: 'B̆̈', C: 'C̆̈', D: 'D̆̈', E: 'Ĕ̈', F: 'F̆̈', G: 'Ğ̈', H: 'H̆̈',
  I: 'Ĭ̈', J: 'J̆̈', K: 'K̆̈', L: 'L̆̈', M: 'M̆̈', N: 'N̆̈', O: 'Ŏ̈', P: 'P̆̈',
  Q: 'Q̆̈', R: 'R̆̈', S: 'S̆̈', T: 'T̆̈', U: 'Ŭ̈', V: 'V̆̈', W: 'W̆̈', X: 'X̆̈',
  Y: 'Y̆̈', Z: 'Z̆̈', a: 'ă̈', b: 'b̆̈', c: 'c̆̈', d: 'd̆̈', e: 'ĕ̈', f: 'f̆̈',
  g: 'ğ̈', h: 'h̆̈', i: 'ĭ̈', j: 'j̆̈', k: 'k̆̈', l: 'l̆̈', m: 'm̆̈', n: 'n̆̈',
  o: 'ŏ̈', p: 'p̆̈', q: 'q̆̈', r: 'r̆̈', s: 's̆̈', t: 't̆̈', u: 'ŭ̈', v: 'v̆̈',
  w: 'w̆̈', x: 'x̆̈', y: 'y̆̈', z: 'z̆̈', 'Ä': 'Ă̈̈̆̈', 'Ö': 'Ŏ̈̈̆̈', 'Ü': 'Ŭ̈̈̆̈',
  'ä': 'ă̈̈̆̈', 'ö': 'ŏ̈̈̆̈', 'ü': 'ŭ̈̈̆̈', 'ß': 'ß̆̈'
};

export const happyStyle: StyleDefinition = {
  name: 'Happy',
  transform: (text: string) => text.split('').map(char => happyMap[char] || char).join('')
};
