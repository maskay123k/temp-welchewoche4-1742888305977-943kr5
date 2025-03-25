import type { StyleDefinition } from '../types';

const upsideDownMap: Record<string, string> = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ',
  k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ',
  u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  '.': '˙', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']', ']': '['
};

export const upsideDownStyle: StyleDefinition = {
  name: 'Upside Down',
  transform: (text: string) => 
    text.toLowerCase()
        .split('')
        .map(char => upsideDownMap[char] || char)
        .reverse()
        .join('')
};
