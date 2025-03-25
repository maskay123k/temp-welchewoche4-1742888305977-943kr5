import type { StyleDefinition } from '../types';

const circlesMap: Record<string, string> = {
  '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④',
  '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

export const circleNumbersStyle: StyleDefinition = {
  name: 'Circle Numbers',
  transform: (text: string) => text.split('').map(char => circlesMap[char] || char).join('')
};
