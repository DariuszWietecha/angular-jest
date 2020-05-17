import { createAction, props } from '@ngrx/store';
import { ICompany } from '../services/companies.service';

export const loadCompanies = createAction(
  '[Companies] Load Companiess'
);
export const loadCompaniesSuccess = createAction(
  '[Companies] Load Companiess Success',
  props<{ data: ICompany[] }>()
);
export const loadCompaniesFailure = createAction(
  '[Companies] Load Companiess Failure',
  props<{ error: any }>()
);

export const loadCompany = createAction(
  '[Companies] Load Company',
  props<{ companyId?: string }>()
);
export const loadCompanySuccess = createAction(
  '[Companies] Load Company Success',
  props<ICompany>()
);
export const loadCompanyFailure = createAction(
  '[Companies] Load Company Failure',
  props<{ error: any }>()
);

export const createCompany = createAction(
  '[Companies] Create Company',
  props<{ data: ICompany }>()
);
export const createCompanySuccess = createAction(
  '[Companies] Create Company Success'
);
export const createCompanyFailure = createAction(
  '[Companies] Create Company Failure',
  props<{ error: any }>()
);

export const editCompany = createAction(
  '[Companies] Edit Company',
  props<{ data: ICompany }>()
);
export const editCompanySuccess = createAction(
  '[Companies] Edit Company Success'
);
export const editCompanyFailure = createAction(
  '[Companies] Edit Company Failure',
  props<{ error: any }>()
);

