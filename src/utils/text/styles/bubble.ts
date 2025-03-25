import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';

const bubbleChars = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const bubbleMap = createCharacterMap(normalChars.split(''), bubbleChars.split(''));

export const bubbleStyle: StyleDefinition = {
  name: 'Bubble',
  transform: (text: string) => applyCharacterMap(text, bubbleMap)
};
