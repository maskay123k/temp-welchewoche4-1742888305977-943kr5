import type { StyleDefinition } from '../types';

const symbolsMap: Record<string, string> = {
  A: 'ꍏ', B: '♭', C: '☾', D: 'ᕲ', E: '€', F: 'Ϝ', G: '❡', H: '♄',
  I: '♗', J: '♪', K: 'ϰ', L: '↳', M: 'ᗰ', N: '♫', O: '⊙', P: 'ρ',
  Q: 'ᵠ', R: '☈', S: '∫', T: '†', U: '☋', V: '✓', W: 'ω', X: '⌘',
  Y: '⚧', Z: '☡', a: 'ꍏ', b: '♭', c: '☾', d: 'ᕲ', e: '€', f: 'Ϝ',
  g: '❡', h: '♄', i: '♗', j: '♪', k: 'ϰ', l: '↳', m: 'ᗰ', n: '♫',
  o: '⊙', p: 'ρ', q: 'ᵠ', r: '☈', s: '∫', t: '†', u: '☋', v: '✓',
  w: 'ω', x: '⌘', y: '⚧', z: '☡',
  // Special characters
  Ä: 'ꍏ̈',
  Ö: '⊙̈',
  Ü: '☋̈',
  ä: 'ꍏ̈',
  ö: '⊙̈',
  ü: '☋̈',
  ß: 'ß'
};

export const symbolsStyle: StyleDefinition = {
  name: "Symbols",
  transform(text) {
    return text.split("").map((char) => symbolsMap[char] || char).join("");
  },
};
