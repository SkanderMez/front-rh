export class JobModel {
  title: string;
  company: string;
  date_range: string;
  location: string;
  li_company_url: string;
  description: string;


  constructor(title: string, company: string, date_range: string, location: string, li_company_url: string, description: string) {
    this.title = title;
    this.company = company;
    this.date_range = date_range;
    this.location = location;
    this.li_company_url = li_company_url;
    this.description = description;
  }
}
