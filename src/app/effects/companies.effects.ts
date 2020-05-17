import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompaniesService } from '../services/companies.service';
import * as companiesActions from '../actions/companies.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class CompaniesEffects {
  @Effect()
  loadCompanies$ = this.actions$
    .pipe(
      ofType(companiesActions.loadCompanies),
      mergeMap(() => this.companiesService.list()
        .pipe(
          map((data) => companiesActions.loadCompaniesSuccess({ data })),
          catchError((error) => of(companiesActions.loadCompaniesFailure({ error })))
        ))
    );

  @Effect()
  loadCompany$ = this.actions$
    .pipe(
      ofType(companiesActions.loadCompany),
      mergeMap((action) => this.companiesService.get(action.companyId)
        .pipe(
          map((data) => companiesActions.loadCompanySuccess(data)),
          catchError((error) => of(companiesActions.loadCompanyFailure({ error })))
        ))
    );

  @Effect()
  createCompany$ = this.actions$
    .pipe(
      ofType(companiesActions.createCompany),
      mergeMap((action) => this.companiesService.create(action.data)
        .pipe(
          map(() => companiesActions.createCompanySuccess()),
          catchError((error) => of(companiesActions.createCompanyFailure({ error })))
        ))
    );

  @Effect()
  editCompany$ = this.actions$
    .pipe(
      ofType(companiesActions.editCompany),
      mergeMap((action) => this.companiesService.edit(action.data)
        .pipe(
          map(() => companiesActions.editCompanySuccess()),
          catchError((error) => of(companiesActions.editCompanyFailure({ error })))
        ))
    );

  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService
  ) { }
}
