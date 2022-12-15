import { Footer } from './footer.models';
import { Experiences } from './experiences.models';
import { BasicInfo } from './basic-info.models';
import { Knowledge } from './knowledge.models';
import { KnowledgeSectionData } from './knowledge-section-data.models';


export interface DataApp {
    basicInfo : BasicInfo;
    skilss: KnowledgeSectionData;
    languages: KnowledgeSectionData;
    experience: Experiences[];
    footer : Footer;
  }
