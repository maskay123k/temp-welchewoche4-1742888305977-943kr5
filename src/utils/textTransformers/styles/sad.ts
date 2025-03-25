import type { StyleDefinition } from '../types';

const sadMap: Record<string, string> = {
  A: 'Ȃ̈', B: 'B̑̈', C: 'C̑̈', D: 'D̑̈', E: 'Ȇ̈', F: 'F̑̈', G: 'G̑̈', H: 'H̑̈',
  I: 'Ȋ̈', J: 'J̑̈', K: 'K̑̈', L: 'L̑̈', M: 'M̑̈', N: 'N̑̈', O: 'Ȏ̈', P: 'P̑̈',
  Q: 'Q̑̈', R: 'Ȓ̈', S: 'S̑̈', T: 'T̑̈', U: 'Ȗ̈', V: 'V̑̈', W: 'W̑̈', X: 'X̑̈',
  Y: 'Y̑̈', Z: 'Z̑̈', a: 'ȃ̈', b: 'b̑̈', c: 'c̑̈', d: 'd̑̈', e: 'ȇ̈', f: 'f̑̈',
  g: 'g̑̈', h: 'h̑̈', i: 'ȋ̈', j: 'j̑̈', k: 'k̑̈', l: 'l̑̈', m: 'm̑̈', n: 'n̑̈',
  o: 'ȏ̈', p: 'p̑̈', q: 'q̑̈', r: 'ȓ̈', s: 's̑̈', t: 't̑̈', u: 'ȗ̈', v: 'v̑̈',
  w: 'w̑̈', x: 'x̑̈', y: 'y̑̈', z: 'z̑̈', 'Ä': 'Ȃ̈̈̑̈', 'Ö': 'Ȏ̈̈̑̈', 'Ü': 'Ȗ̈̈̑̈',
  'ä': 'ȃ̈̈̑̈', 'ö': 'ȏ̈̈̑̈', 'ü': 'ȗ̈̈̑̈', 'ß': 'ß̑̈'
};

export const sadStyle: StyleDefinition = {
  name: 'Sad',
  transform: (text: string) => text.split('').map(char => sadMap[char] || char).join('')
};
