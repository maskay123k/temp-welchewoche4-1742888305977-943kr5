import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';

const scriptChars = '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const scriptMap = createCharacterMap(normalChars.split(''), scriptChars.split(''));

export const scriptStyle: StyleDefinition = {
  name: 'Script',
  transform: (text: string) => applyCharacterMap(text, scriptMap)
};
