import {PersonalInfoModel} from './personalInfo.model';
import {LabelModel} from './label.model';
import {ScoreModel} from './score.model';

export class UserInfoModel {
  total_experience: string;
  id: string;
  labels: LabelModel;
  personal_info: PersonalInfoModel;
  scores: ScoreModel;
  stability: string;


  constructor(total_experience: string, id: string, labels: LabelModel, personal_info: PersonalInfoModel, scores: ScoreModel, stability: string) {
    this.total_experience = total_experience;
    this.id = id;
    this.labels = labels;
    this.personal_info = personal_info;
    this.scores = scores;
    this.stability = stability;
  }
}
