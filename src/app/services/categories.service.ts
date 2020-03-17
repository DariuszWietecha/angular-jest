import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

export interface ICategoryInput {
  name: string;
}

export interface ICategory extends ICategoryInput {
  id: string;
}

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }
  endpoint = 'categories/';

  get(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(this.endpoint + id);
  }

  list(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.endpoint);
  }

  create(company: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.endpoint, company);
  }

  edit(company: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(this.endpoint, company);
  }
}
