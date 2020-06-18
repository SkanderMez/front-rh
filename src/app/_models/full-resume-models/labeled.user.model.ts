export class LabeledUserModel {
  labeled_users: any[];
  count: number;
  pages: number;


  constructor(labeled_users: any[], count: number, pages: number) {
    this.labeled_users = labeled_users;
    this.count = count;
    this.pages = pages;
  }
}
