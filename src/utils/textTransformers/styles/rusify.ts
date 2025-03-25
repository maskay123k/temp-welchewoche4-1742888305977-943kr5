import type { StyleDefinition } from '../types';

const rusifyMap: Record<string, string> = {
  A: 'А', B: 'Б', C: 'C', D: 'Д', E: 'Є', F: 'F', G: 'G', H: 'H',
  I: 'Ї', J: 'J', K: 'К', L: 'Г', M: 'Ѫ', N: 'Й', O: 'Ѳ', P: 'P',
  Q: 'Ф', R: 'Я', S: '$', T: 'T', U: 'Ц', V: 'Ѵ', W: 'Ш', X: 'Ж',
  Y: 'Ч', Z: 'З', a: 'а', b: 'б', c: 'c', d: 'д', e: 'ё', f: 'f',
  g: 'g', h: 'н', i: 'ї', j: 'j', k: 'к', l: 'г', m: 'ѫ', n: 'п',
  o: 'ѳ', p: 'p', q: 'ф', r: 'я', s: '$', t: 'т', u: 'ц', v: 'ѵ',
  w: 'щ', x: 'ж', y: 'ч', z: 'з', 'Ä': 'Ӓ', 'Ö': 'Ѳ̈', 'Ü': 'Ц̈',
  'ä': 'ӓ', 'ö': 'ѳ̈', 'ü': 'ц̈', 'ß': 'ß'
};

export const rusifyStyle: StyleDefinition = {
  name: 'Rusify',
  transform: (text: string) => text.split('').map(char => rusifyMap[char] || char).join('')
};
