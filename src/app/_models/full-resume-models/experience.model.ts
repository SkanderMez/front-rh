import {JobModel} from './job.model';
import {EducationModel} from './education.model';

export class ExperienceModel {
  jobs: JobModel[];
  education: EducationModel[];


  constructor(jobs: JobModel[], education: EducationModel[]) {
    this.jobs = jobs;
    this.education = education;
  }
}
