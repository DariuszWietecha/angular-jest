import { createAction, props } from '@ngrx/store';
import { ICategory } from '../services/categories.service';

export const loadCategories = createAction(
  '[Categories] Load Categories'
);
export const loadCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{ data: ICategory[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Categories] Load Categories Failure',
  props<{ error: any }>()
);

export const loadCategory = createAction(
  '[Categories] Load Category',
  props<{ categoryId?: string }>()
);
export const loadCategorySuccess = createAction(
  '[Categories] Load Category Success',
  props<ICategory>()
);
export const loadCategoryFailure = createAction(
  '[Categories] Load Category Failure',
  props<{ error: any }>()
);

export const createCategory = createAction(
  '[Categories] Create Category',
  props<{ data: ICategory }>()
);
export const createCategorySuccess = createAction(
  '[Categories] Create Category Success',
);
export const createCategoryFailure = createAction(
  '[Categories] Create Category Failure',
  props<{ error: any }>()
);

export const editCategory = createAction(
  '[Categories] Edit Category',
  props<{ data: ICategory }>()
);
export const editCategorySuccess = createAction(
  '[Categories] Edit Category Success'
);
export const editCategoryFailure = createAction(
  '[Categories] Edit Category Failure',
  props<{ error: any }>()
);
