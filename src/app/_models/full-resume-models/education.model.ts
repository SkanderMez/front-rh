export class EducationModel {
  name: string;
  degree: string;
  grades: string;
  field_of_study: string;
  activities: string;
  date_range: string;


  constructor(name: string, degree: string, grades: string, field_of_study: string, activities: string, date_range: string) {
    this.name = name;
    this.degree = degree;
    this.grades = grades;
    this.field_of_study = field_of_study;
    this.activities = activities;
    this.date_range = date_range;
  }
}
