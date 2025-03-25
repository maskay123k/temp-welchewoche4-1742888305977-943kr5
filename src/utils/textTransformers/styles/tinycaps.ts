import type { StyleDefinition } from '../types';

const tinyCapsMap: Record<string, string> = {
  A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ',
  I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ',
  Q: 'ϙ', R: 'ʀ', S: 'ᴤ', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x',
  Y: 'ʏ', Z: 'ᴢ', a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ',
  g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
  o: 'ᴏ', p: 'ᴘ', q: 'ϙ', r: 'ʀ', s: 'ᴤ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ',
  w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ', 'Ä': 'ᴀ̈', 'Ö': 'ᴏ̈', 'Ü': 'ᴜ̈',
  'ä': 'ᴀ̈', 'ö': 'ᴏ̈', 'ü': 'ᴜ̈', 'ß': 'ß'
};

export const tinyCapsStyle: StyleDefinition = {
  name: 'Tiny Caps',
  transform: (text: string) => text.split('').map(char => tinyCapsMap[char] || char).join('')
};
