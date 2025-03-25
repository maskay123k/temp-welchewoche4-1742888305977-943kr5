import type { StyleDefinition } from '../types';

const stinkyMap: Record<string, string> = {
  A: 'A̾', B: 'B̾', C: 'C̾', D: 'D̾', E: 'E̾', F: 'F̾', G: 'G̾', H: 'H̾',
  I: 'I̾', J: 'J̾', K: 'K̾', L: 'L̾', M: 'M̾', N: 'N̾', O: 'O̾', P: 'P̾',
  Q: 'Q̾', R: 'R̾', S: 'S̾', T: 'T̾', U: 'U̾', V: 'V̾', W: 'W̾', X: 'X̾',
  Y: 'Y̾', Z: 'Z̾', a: 'a̾', b: 'b̾', c: 'c̾', d: 'd̾', e: 'e̾', f: 'f̾',
  g: 'g̾', h: 'h̾', i: 'i̾', j: 'j̾', k: 'k̾', l: 'l̾', m: 'm̾', n: 'n̾',
  o: 'o̾', p: 'p̾', q: 'q̾', r: 'r̾', s: 's̾', t: 't̾', u: 'u̾', v: 'v̾',
  w: 'w̾', x: 'x̾', y: 'y̾', z: 'z̾',
  // Special characters
  Ä : "A" + " " + "̈", Ö : "O" + " " + "̈", Ü : "U" + " " + "̈", 
  ä : "a" + " " + "̈", ö : "o" + " " + "̈", ü : "u" + " " + "̈", 
  ß : "ß" + " " + ""
};

export const stinkyStyle: StyleDefinition = {
  name: 'Stinky',
  transform: (text: string) => text.split('').map(char => stinkyMap[char] || char).join('')
};
