import { Developed } from './developed.models';
import { SocialMedia } from './social-media.models';

export interface Footer {
  info: string;
  socialMedia: SocialMedia[];
  developed: Developed;
}
