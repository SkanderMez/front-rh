import {SkillModel} from './skill.model';
import {ExperienceModel} from './experience.model';
import {PersonalInfoModel} from './personalInfo.model';

export class ResumeModel {
  id: number;
  url: string;
  personal_info: PersonalInfoModel;
  skills: SkillModel[];
  experiences: ExperienceModel;


  constructor(id: number, url: string, personal_info: PersonalInfoModel, skills: SkillModel[], experiences: ExperienceModel) {
    this.id = id;
    this.url = url;
    this.personal_info = personal_info;
    this.skills = skills;
    this.experiences = experiences;
  }
}
