import type { StyleDefinition } from '../types';

const blackSquareMap: Record<string, string> = {
  A: '🅰', B: '🅱', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷',
  I: '🅸', J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾', P: '🅿',
  Q: '🆀', R: '🆁', S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇',
  Y: '🆈', Z: '🆉', a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵',
  g: '🅶', h: '🅷', i: '🅸', j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽',
  o: '🅾', p: '🅿', q: '🆀', r: '🆁', s: '🆂', t: '🆃', u: '🆄', v: '🆅',
  w: '🆆', x: '🆇', y: '🆈', z: '🆉', 'Ä': '🅰̈', 'Ö': '🅾̈', 'Ü': '🆄̈',
  'ä': '🅰̈', 'ö': '🅾̈', 'ü': '🆄̈', 'ß': 'ß'
};

export const blackSquareStyle: StyleDefinition = {
  name: 'Black Square',
  transform: (text: string) => text.split('').map(char => blackSquareMap[char] || char).join('')
};
