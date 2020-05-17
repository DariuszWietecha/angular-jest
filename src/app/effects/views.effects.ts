import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ViewsService } from '../services/views.service';
import { loadHomeData, loadHomeDataSuccess, loadHomeDataFailure } from '../actions/views.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ViewsEffects {
  @Effect()
  loadHomeData$ = this.actions$
    .pipe(
      ofType(loadHomeData),
      mergeMap((action) => this.viewsService.get(action.categoryId)
        .pipe(
          map((data) => loadHomeDataSuccess(data)),
          catchError((error) => of(loadHomeDataFailure({ error })))
        ))
    );

  constructor(
    private actions$: Actions,
    private viewsService: ViewsService
  ) { }
}
