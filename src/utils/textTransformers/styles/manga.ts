import type { StyleDefinition } from '../types';

const mangaMap: Record<string, string> = {
  A: '卂', B: '乃', C: '匚', D: 'ᗪ', E: '乇', F: '千', G: 'Ꮆ', H: '卄',
  I: '丨', J: 'ﾌ', K: 'Ҝ', L: 'ㄥ', M: '爪', N: '几', O: 'ㄖ', P: '卩',
  Q: 'Ҩ', R: '尺', S: '丂', T: 'ㄒ', U: 'ㄩ', V: 'ᐯ', W: '山', X: '乂',
  Y: 'ㄚ', Z: '乙', a: '卂', b: '乃', c: '匚', d: 'ᗪ', e: '乇', f: '千',
  g: 'Ꮆ', h: '卄', i: '丨', j: 'ﾌ', k: 'Ҝ', l: 'ㄥ', m: '爪', n: '几',
  o: 'ㄖ', p: '卩', q: 'Ҩ', r: '尺', s: '丂', t: 'ㄒ', u: 'ㄩ', v: 'ᐯ',
  w: '山', x: '乂', y: 'ㄚ', z: '乙', 'Ä': '卂̈', 'Ö': 'ㄖ̈', 'Ü': 'ㄩ̈',
  'ä': '卂̈', 'ö': 'ㄖ̈', 'ü': 'ㄩ̈', 'ß': 'ß'
};

export const mangaStyle: StyleDefinition = {
  name: 'Manga',
  transform: (text: string) => text.split('').map(char => mangaMap[char] || char).join('')
};
