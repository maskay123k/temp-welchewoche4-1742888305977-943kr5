import type { StyleDefinition } from '../types';

const messyMap: Record<string, string> = {
  A: 'A꙲꙲', B: 'B꙲꙲', C: 'C꙲꙲', D: 'D꙲꙲', E: 'E꙲꙲', F: 'F꙲꙲', G: 'G꙲꙲', H: 'H꙲꙲',
  I: 'I꙲꙲', J: 'J꙲꙲', K: 'K꙲꙲', L: 'L꙲꙲', M: 'M꙲꙲', N: 'N꙲꙲', O: 'O꙲꙲', P: 'P꙲꙲',
  Q: 'Q꙲꙲', R: 'R꙲꙲', S: 'S꙲꙲', T: 'T꙲꙲', U: 'U꙲꙲', V: 'V꙲꙲', W: 'W꙲꙲', X: 'X꙲꙲',
  Y: 'Y꙲꙲', Z: 'Z꙲꙲', a: 'a꙲꙲', b: 'b꙲꙲', c: 'c꙲꙲', d: 'd꙲꙲', e: 'e꙲꙲', f: 'f꙲꙲',
  g: 'g꙲꙲', h: 'h꙲꙲', i: 'i꙲꙲', j: 'j꙲꙲', k: 'k꙲꙲', l: 'l꙲꙲', m: 'm꙲꙲', n: 'n꙲꙲',
  o: 'o꙲꙲', p: 'p꙲꙲', q: 'q꙲꙲', r: 'r꙲꙲', s: 's꙲꙲', t: 't꙲꙲', u: 'u꙲꙲', v: 'v꙲꙲',
  w: 'w꙲꙲', x: 'x꙲꙲', y: 'y꙲꙲', z: 'z꙲꙲', 'Ä': 'A꙲꙲̈꙲꙲', 'Ö': 'O꙲꙲̈꙲꙲', 'Ü': 'U꙲꙲̈꙲꙲',
  'ä': 'a꙲꙲̈꙲꙲', 'ö': 'o꙲꙲̈꙲꙲', 'ü': 'u꙲꙲̈꙲꙲', 'ß': 'ß꙲꙲'
};

export const messyStyle: StyleDefinition = {
  name: 'Messy',
  transform: (text: string) => text.split('').map(char => messyMap[char] || char).join('')
};
