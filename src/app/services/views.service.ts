import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ICompany } from './companies.service';
import { ICategory } from './categories.service';
import { IStore } from '../reducers';

export interface IHomeData {
  categories: ICategory[];
  companies: ICompany[];
  categoryId: string;
}

@Injectable()
export class ViewsService {

  constructor(private http: HttpClient) { }
  endpoint = '/views';

  get(categoryId?: string): Observable<IHomeData> {
    const url = this.endpoint + (categoryId ? ('?categoryId=' + categoryId) : '');
    return this.http.get<IHomeData>(url);
  }
}
