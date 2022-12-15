import { ImageSnippet } from './image-snippet.models';

export interface PersonaInformationData {
  imageUser: ImageSnippet;
  name: string;
  occupation: string;
  cpf: string;
  zipCode: string;
  city: string;
  state: string;
  email?: string;
  phone?: string;
}
