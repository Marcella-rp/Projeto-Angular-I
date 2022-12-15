export interface ImageSnippet {
  src: string;
  file: File;

  constructor(src: string, file: File): void;
}
