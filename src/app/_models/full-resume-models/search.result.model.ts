import {UserInfoModel} from './user.info.model';

export class SearchResultModel {
  labeled_users: UserInfoModel[];
  count: number;
  pages: number;


  constructor(labeled_users: UserInfoModel[], count: number, pages: number) {
    this.labeled_users = labeled_users;
    this.count = count;
    this.pages = pages;
  }
}
