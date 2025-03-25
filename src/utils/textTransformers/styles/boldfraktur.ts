import type { StyleDefinition } from '../types';

const boldFrakturMap: Record<string, string> = {
  A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲', H: '𝕳',
  I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹', O: '𝕺', P: '𝕻',
  Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀', V: '𝖁', W: '𝖂', X: '𝖃',
  Y: '𝖄', Z: '𝖅', a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋',
  g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓',
  o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚', v: '𝖛',
  w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟', 'Ä': '𝕬̈', 'Ö': '𝕺̈', 'Ü': '𝖀̈',
  'ä': '𝖆̈', 'ö': '𝖔̈', 'ü': '𝖚̈', 'ß': 'ß'
};

export const boldFrakturStyle: StyleDefinition = {
  name: 'Bold Fraktur',
  transform: (text: string) => text.split('').map(char => boldFrakturMap[char] || char).join('')
};
