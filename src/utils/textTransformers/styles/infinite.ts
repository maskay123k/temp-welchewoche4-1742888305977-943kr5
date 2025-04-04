import type { StyleDefinition } from '../types';

const infiniteMap: Record<string, string> = {
  A: 'A͚', B: 'B͚', C: 'C͚', D: 'D͚', E: 'E͚', F: 'F͚', G: 'G͚', H: 'H͚',
  I: 'I͚', J: 'J͚', K: 'K͚', L: 'L͚', M: 'M͚', N: 'N͚', O: 'O͚', P: 'P͚',
  Q: 'Q͚', R: 'R͚', S: 'S͚', T: 'T͚', U: 'U͚', V: 'V͚', W: 'W͚', X: 'X͚',
  Y: 'Y͚', Z: 'Z͚', a: 'a͚', b: 'b͚', c: 'c͚', d: 'd͚', e: 'e͚', f: 'f͚',
  g: 'g͚', h: 'h͚', i: 'i͚', j: 'j͚', k: 'k͚', l: 'l͚', m: 'm͚', n: 'n͚',
  o: 'o͚', p: 'p͚', q: 'q͚', r: 'r͚', s: 's͚', t: 't͚', u: 'u͚', v: 'v͚',
  w: 'w͚', x: 'x͚', y: 'y͚', z: 'z͚', 'Ä': 'Ä͚͚', 'Ö': 'Ö͚͚', 'Ü': 'Ü͚͚',
  'ä': 'ä͚͚', 'ö': 'ö͚͚', 'ü': 'ü͚͚', 'ß': 'ß͚'
};

export const infiniteStyle: StyleDefinition = {
  name: 'Infinite',
  transform: (text: string) => text.split('').map(char => infiniteMap[char] || char).join('')
};
