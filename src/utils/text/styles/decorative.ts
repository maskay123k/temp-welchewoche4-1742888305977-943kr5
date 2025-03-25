import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';
import { wrapInBrackets, addSpacing } from '../transformers';

const decorativeChars = '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const decorativeMap = createCharacterMap(normalChars.split(''), decorativeChars.split(''));

export const decorativeStyles: StyleDefinition[] = [
  {
    name: 'Decorative',
    transform: (text: string) => applyCharacterMap(text, decorativeMap)
  },
  {
    name: 'Brackets',
    transform: wrapInBrackets
  },
  {
    name: 'Spaced',
    transform: addSpacing
  }
];
