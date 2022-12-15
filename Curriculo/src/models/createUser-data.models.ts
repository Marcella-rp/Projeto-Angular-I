import { LanguageData } from './languageSkill.models';
import { LoginData } from './login-data.models';
import { PersonaInformationData } from './personal-information.models';
import { SkillsData } from './skills-data.models';

export interface CreateUserData {
  id?: number | string;
  image?: any;
  loginData: LoginData;
  personalInformationData: PersonaInformationData;
  skillName?: string;
  skillLevel?: string;
  languageName?: string;
  languagelevel?: string;
}
