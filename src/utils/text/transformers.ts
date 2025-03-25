// Core text transformation utilities
export function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

export function alternateCase(text: string): string {
  return text.split('').map((char, i) => 
    i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}

export function addSpacing(text: string): string {
  return text.split('').join(' ');
}

export function wrapInBrackets(text: string): string {
  return text.split('').map(char => `[${char}]`).join('');
}

export function toFullWidth(char: string): string {
  const code = char.charCodeAt(0);
  return code >= 33 && code <= 126 
    ? String.fromCharCode(code + 0xFEE0)
    : char;
}
