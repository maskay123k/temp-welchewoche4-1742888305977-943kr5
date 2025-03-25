import type { StyleDefinition } from '../types';

const currencyMap: Record<string, string> = {
  A: '₳', B: '฿', C: '₵', D: 'Đ', E: 'Ɇ', F: '₣', G: '₲', H: 'Ⱨ',
  I: 'ł', J: 'J', K: '₭', L: 'Ⱡ', M: '₥', N: '₦', O: 'Ø', P: '₱',
  Q: 'Q', R: 'Ɽ', S: '₴', T: '₮', U: 'Ʉ', V: 'V', W: '₩', X: 'Ӿ',
  Y: 'Ɏ', Z: 'Ⱬ', a: '₳', b: '฿', c: '₵', d: 'Đ', e: 'Ɇ', f: '₣',
  g: '₲', h: 'Ⱨ', i: 'ł', j: 'J', k: '₭', l: 'Ⱡ', m: '₥', n: '₦',
  o: 'Ø', p: '₱', q: 'Q', r: 'Ɽ', s: '₴', t: '₮', u: 'Ʉ', v: 'V',
  w: '₩', x: 'Ӿ', y: 'Ɏ', z: 'Ⱬ', 'Ä': '₳̈', 'Ö': 'Ø̈', 'Ü': 'Ʉ̈',
  'ä': '₳̈', 'ö': 'Ø̈', 'ü': 'Ʉ̈', 'ß': 'ß'
};

export const currencyStyle: StyleDefinition = {
  name: 'Currency',
  transform: (text: string) => text.split('').map(char => currencyMap[char] || char).join('')
};
