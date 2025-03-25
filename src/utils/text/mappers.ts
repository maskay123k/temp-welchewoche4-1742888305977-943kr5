// Character mapping utilities
export const createCharacterMap = (normalChars: string[], specialChars: string[]): Record<string, string> => {
  return normalChars.reduce((map, char, index) => {
    map[char] = specialChars[index];
    return map;
  }, {} as Record<string, string>);
};

export const applyCharacterMap = (text: string, map: Record<string, string>): string => {
  return text.split('').map(char => map[char] || char).join('');
};
