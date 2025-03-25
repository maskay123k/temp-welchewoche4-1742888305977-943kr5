import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';

const fancyChars = '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const fancyMap = createCharacterMap(normalChars.split(''), fancyChars.split(''));

export const basicStyles: StyleDefinition[] = [
  {
    name: 'Fancy',
    transform: (text: string) => applyCharacterMap(text, fancyMap)
  }
];
