import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ICompany } from './companies.service';
import { ICategory } from './categories.service';

interface IViewsResponse {
  categoryId?: string;
  categories: ICategory[] | undefined;
  companies: ICompany[] | undefined;
}

@Injectable()
export class ViewsService {

  constructor(private http: HttpClient) { }
  endpoint = 'views';

  get(categoryId?: string): Observable<IViewsResponse> {
    const url = this.endpoint + (categoryId ? ('?categoryId=' + categoryId) : '');
    return this.http.get<IViewsResponse>(url);
  }
}
