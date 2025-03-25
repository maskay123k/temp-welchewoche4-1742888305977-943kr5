import type { StyleDefinition } from '../types';

const flakyMap: Record<string, string> = {
  A: 'ᗩ', B: 'ᗷ', C: 'ᑕ', D: 'ᗪ', E: 'ᗴ', F: 'ᖴ', G: 'Ǥ', H: 'ᕼ',
  I: 'I', J: 'ᒎ', K: 'ᛕ', L: 'ᒪ', M: 'ᗰ', N: 'ᑎ', O: 'ᗝ', P: 'ᑭ',
  Q: 'Ɋ', R: 'ᖇ', S: 'ᔕ', T: '丅', U: 'ᑌ', V: 'ᐯ', W: 'ᗯ', X: '᙭',
  Y: 'Ƴ', Z: '乙', a: 'ᗩ', b: 'ᗷ', c: 'ᑕ', d: 'ᗪ', e: 'ᗴ', f: 'ᖴ',
  g: 'Ǥ', h: 'ᕼ', i: 'I', j: 'ᒎ', k: 'ᛕ', l: 'ᒪ', m: 'ᗰ', n: 'ᑎ',
  o: 'ᗝ', p: 'ᑭ', q: 'Ɋ', r: 'ᖇ', s: 'ᔕ', t: '丅', u: 'ᑌ', v: 'ᐯ',
  w: 'ᗯ', x: '᙭', y: 'Ƴ', z: '乙', 'Ä': 'ᗩ̈', 'Ö': 'ᗝ̈', 'Ü': 'ᑌ̈',
  'ä': 'ᗩ̈', 'ö': 'ᗝ̈', 'ü': 'ᑌ̈', 'ß': 'ß'
};

export const flakyStyle: StyleDefinition = {
  name: 'Flaky',
  transform: (text: string) => text.split('').map(char => flakyMap[char] || char).join('')
};
