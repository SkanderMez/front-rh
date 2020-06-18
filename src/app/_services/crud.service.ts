import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private http: HttpClient) {

  }

  getAll<T>(url) {
    return this.http.get<T>(url);
  }

  getFiltered<T>(url, param) {
    return this.http.get<T>(url + '/filtered?company_code_id=' + param);
  }

  getAllPaginate<T>(url, offset, limit, orderBy?, orderByType?) {
    return this.http.get<T>(url + '?offset=' + offset + '&limit=' + limit);
  }

  search<T>(url, key) {
    return this.http.get<T>(url + '/search' + '?key=' + key);
  }

  searchValid(url, fields: any[]) {
    if (fields.length == 0) {
      console.log('empty fields 0');
      return;
    }
    let searchString = '';
    fields.forEach((item) => {
      searchString = searchString + Object.keys(item) + '=' + Object.values(item) + '&';
    });

    return this.http.get(url + '/validate?offset=0&limit=10&' + searchString);
  }

  searchPaginate<T>(url, key, offset, limit) {
    return this.http.get<T>(url + '/search' + '?key=' + key + '&offset=' + offset + '&limit=' + limit);
  }

  getOne<T>(url, id) {
    return this.http.get<T>(url + '/' + id);
  }

  post(url, values) {
    return this.http.post(url, values);
  }

  update(url, id, values) {
    return this.http.put(url + '/' + id, values);
  }

  delete(url, id) {
    return this.http.delete(url + '/' + id);
  }


}
