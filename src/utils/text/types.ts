export interface StyleDefinition {
  name: string;
  transform: (text: string) => string;
}

export interface StyleCategory {
  name: string;
  styles: StyleDefinition[];
}
