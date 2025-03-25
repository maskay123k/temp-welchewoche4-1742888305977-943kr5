import type { StyleDefinition } from '../types';

// Convert to full-width characters (used in East Asian typography)
function toFullWidth(char: string): string {
  const code = char.charCodeAt(0);
  if (code >= 33 && code <= 126) {
    return String.fromCharCode(code + 0xFEE0);
  }
  return char;
}

export const fullWidthStyle: StyleDefinition = {
  name: 'Full Width',
  transform: (text: string) => text.split('').map(toFullWidth).join('')
};
