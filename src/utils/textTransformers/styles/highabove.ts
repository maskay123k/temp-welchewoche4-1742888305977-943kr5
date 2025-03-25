import type { StyleDefinition } from '../types';

const highAboveMap: Record<string, string> = {
  A: 'ᵃ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʰ',
  I: 'ⁱ', J: 'ʲ', K: 'ᵏ', L: 'ˡ', M: 'ᵐ', N: 'ⁿ', O: 'ᵒ', P: 'ᵖ',
  Q: 'ᵠ', R: 'ʳ', S: 'ˢ', T: 'ᵗ', U: 'ᵘ', V: 'ᵛ', W: 'ʷ', X: 'ˣ',
  Y: 'ʸ', Z: 'ᶻ', a: 'ᵃ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ',
  g: 'ɢ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ',
  o: 'ᵒ', p: 'ᵖ', q: 'ᵠ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ',
  w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
  // Special characters
  Ä : "A" + " " + "̈", Ö : "O" + " " + "̈", Ü : "U" + " " + "̈", 
  ä : "a" + " " + "̈", ö : "o" + " " + "̈", ü : "u" + " " + "̈", 
  ß : "ß"
};

export const highAboveStyle: StyleDefinition = {
  name: 'High Above',
  transform(text) {
    return text.split("").map((char) => highAboveMap[char] || char).join("");
  },
};
