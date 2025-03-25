import type { StyleDefinition } from '../types';

const zalgoChars = [
  '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307',
  '\u0308', '\u0309', '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F'
];

export const zalgoStyle: StyleDefinition = {
  name: 'Zalgo',
  transform: (text: string) => {
    return text.split('').map(char => {
      let zalgoChar = char;
      for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
        zalgoChar += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
      }
      return zalgoChar;
    }).join('');
  }
};
