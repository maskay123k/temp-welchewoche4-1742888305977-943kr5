import { basicStyles } from './styles/basic';
import { mathematicalStyles } from './styles/mathematical';
import { decorativeStyles } from './styles/decorative';
import { effectStyles } from './styles/effects';
import type { StyleCategory } from './types';

export const textStyles: StyleCategory[] = [
  {
    name: 'Basic Styles',
    styles: basicStyles
  },
  {
    name: 'Mathematical Styles',
    styles: mathematicalStyles
  },
  {
    name: 'Decorative Styles',
    styles: decorativeStyles
  },
  {
    name: 'Text Effects',
    styles: effectStyles
  }
];

export * from './types';
export * from './transformers';
export * from './mappers';
