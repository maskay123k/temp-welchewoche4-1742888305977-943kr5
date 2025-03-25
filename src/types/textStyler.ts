export type TextTransformer = (text: string) => string;

export interface StyleDefinition {
  name: string;
  transform: TextTransformer;
}

export interface TextStylerProps {
  language: string;
}
