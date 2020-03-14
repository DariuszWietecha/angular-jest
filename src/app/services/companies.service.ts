import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

export interface ICompanyInput {
  name: string;
  logoUrl: string;
  email: string;
  categories: { id: string; }[];
}

export interface ICompany extends ICompanyInput {
  id?: string;
}

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://express-rest-api-100.herokuapp.com/companies/';

  get(id: string): Observable<ICompany> {
    return this.http.get<ICompany>(this.baseUrl + id);
  }

  list(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.baseUrl);
  }

  create(company: ICompany): Observable<ICompany> {
    return this.http.post<ICompany>(this.baseUrl, company);
  }

  edit(company: ICompany): Observable<ICompany> {
    return this.http.put<ICompany>(this.baseUrl, company);
  }
}
