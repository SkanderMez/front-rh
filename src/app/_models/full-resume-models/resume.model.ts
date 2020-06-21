import {SkillModel} from './skill.model';
import {ExperienceModel} from './experience.model';
import {PersonalInfoModel} from './personalInfo.model';
import {LabelModel} from './label.model';

export class ResumeModel {
  id: number;
  url: string;
  personal_info: PersonalInfoModel;
  skills: SkillModel[];
  experiences: ExperienceModel;
  labels: LabelModel;
  stability: number;
  total_experience: number;


  constructor(id: number, url: string, personal_info: PersonalInfoModel, skills: SkillModel[], experiences: ExperienceModel, labels: LabelModel, stability: number, total_experience: number) {
    this.id = id;
    this.url = url;
    this.personal_info = personal_info;
    this.skills = skills;
    this.experiences = experiences;
    this.labels = labels;
    this.stability = stability;
    this.total_experience = total_experience;
  }
}
