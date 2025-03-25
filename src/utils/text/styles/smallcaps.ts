import { createCharacterMap, applyCharacterMap } from '../mappers';
import type { StyleDefinition } from '../types';

const smallCapsChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ';
const normalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const smallCapsMap = createCharacterMap(normalChars.split(''), smallCapsChars.split(''));

export const smallCapsStyle: StyleDefinition = {
  name: 'Small Caps',
  transform: (text: string) => applyCharacterMap(text, smallCapsMap)
};
