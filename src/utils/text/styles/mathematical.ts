import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';

const doubleStruckChars = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const doubleStruckMap = createCharacterMap(normalChars.split(''), doubleStruckChars.split(''));

export const mathematicalStyles: StyleDefinition[] = [
  {
    name: 'Double-Struck',
    transform: (text: string) => applyCharacterMap(text, doubleStruckMap)
  }
];
