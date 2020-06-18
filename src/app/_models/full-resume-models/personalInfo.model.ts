export class PersonalInfoModel {
  headline: string;
  name: string;
  company: string;
  school: string;
  location: string;
  summary: string;
  image: string;
  followers: string;
  email: string;
  phone: string;

  constructor(headline: string, name: string, company: string, school: string,
              location: string, summary: string, image: string,
              followers: string, email: string, phone: string) {
    this.headline = headline;
    this.name = name;
    this.company = company;
    this.school = school;
    this.location = location;
    this.summary = summary;
    this.image = image;
    this.followers = followers;
    this.email = email;
    this.phone = phone;
  }
}
