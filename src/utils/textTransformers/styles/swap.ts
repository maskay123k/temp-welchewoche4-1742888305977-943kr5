import type { StyleDefinition } from '../types';

const swapMap: Record<string, string> = {
  A: 'Â̬', B: 'B̬̂', C: 'Ĉ̬', D: 'D̬̂', E: 'Ê̬', F: 'F̬̂', G: 'Ĝ̬', H: 'Ĥ̬',
  I: 'Î̬', J: 'Ĵ̬', K: 'K̬̂', L: 'L̬̂', M: 'M̬̂', N: 'N̬̂', O: 'Ô̬', P: 'P̬̂',
  Q: 'Q̬̂', R: 'R̬̂', S: 'Ŝ̬', T: 'T̬̂', U: 'Û̬', V: 'V̬̂', W: 'Ŵ̬', X: 'X̬̂',
  Y: 'Ŷ̬', Z: 'Ẑ̬', a: 'â̬', b: 'b̬̂', c: 'ĉ̬', d: 'd̬̂', e: 'ê̬', f: 'f̬̂',
  g: 'ĝ̬', h: 'ĥ̬', i: 'î̬', j: 'ĵ̬', k: 'k̬̂', l: 'l̬̂', m: 'm̬̂', n: 'n̬̂',
  o: 'ô̬', p: 'p̬̂', q: 'q̬̂', r: 'r̬̂', s: 'ŝ̬', t: 't̬̂', u: 'û̬', v: 'v̬̂',
  w: 'ŵ̬', x: 'x̬̂', y: 'ŷ̬', z: 'ẑ̬', 'Ä': 'Â̬̬̈̂', 'Ö': 'Ô̬̬̈̂', 'Ü': 'Û̬̬̈̂',
  'ä': 'â̬̬̈̂', 'ö': 'ô̬̬̈̂', 'ü': 'û̬̬̈̂', 'ß': 'ß̬̂'
};

export const swapStyle: StyleDefinition = {
  name: 'Swap',
  transform: (text: string) => text.split('').map(char => swapMap[char] || char).join('')
};
