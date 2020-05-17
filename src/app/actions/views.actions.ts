import { createAction, props } from '@ngrx/store';
import { IHomeData } from '../services/views.service';

export const loadHomeData = createAction(
  '[Home] Load Home data',
  props<{ categoryId?: string }>()
);

export const loadHomeDataSuccess = createAction(
  '[Views] Load Home data Success',
  props<IHomeData>()
);

export const loadHomeDataFailure = createAction(
  '[Views] Load Home data Failure',
  props<{ error: any }>()
);
