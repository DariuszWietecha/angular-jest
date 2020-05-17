import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CategoriesService } from '../services/categories.service';
import * as categoriesActions from '../actions/categories.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  @Effect()
  loadCategories$ = this.actions$
    .pipe(
      ofType(categoriesActions.loadCategories),
      mergeMap(() => this.categoriesService.list()
        .pipe(
          map((data) => categoriesActions.loadCategoriesSuccess({data})),
          catchError((error) => of(categoriesActions.loadCategoriesFailure({ error })))
        ))
    );

  @Effect()
  loadCategory$ = this.actions$
    .pipe(
      ofType(categoriesActions.loadCategory),
      mergeMap((action) => this.categoriesService.get(action.categoryId)
        .pipe(
          map((data) => categoriesActions.loadCategorySuccess(data)),
          catchError((error) => of(categoriesActions.loadCategoryFailure({ error })))
        ))
    );

  @Effect()
  createCategory$ = this.actions$
    .pipe(
      ofType(categoriesActions.createCategory),
      mergeMap((action) => this.categoriesService.create(action.data)
        .pipe(
          map(() => categoriesActions.createCategorySuccess()),
          catchError((error) => of(categoriesActions.createCategoryFailure({ error })))
        ))
    );

  @Effect()
  editCategory$ = this.actions$
    .pipe(
      ofType(categoriesActions.editCategory),
      mergeMap((action) => this.categoriesService.edit(action.data)
        .pipe(
          map(() => categoriesActions.editCategorySuccess()),
          catchError((error) => of(categoriesActions.editCategoryFailure({ error })))
        ))
    );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) { }
}
