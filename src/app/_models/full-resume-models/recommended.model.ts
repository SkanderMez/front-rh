import {PersonalInfoModel} from './personalInfo.model';
import {LabelModel} from './label.model';

export class RecommendedModel {
  id: string;
  similarity: number;
  personal_info: PersonalInfoModel;
  stability: number;
  total_experience: number;
  labels: LabelModel;


  constructor(id: string, similarity: number, personal_info: PersonalInfoModel, stability: number, total_experience: number, labels: LabelModel) {
    this.id = id;
    this.similarity = similarity;
    this.personal_info = personal_info;
    this.stability = stability;
    this.total_experience = total_experience;
    this.labels = labels;
  }
}
