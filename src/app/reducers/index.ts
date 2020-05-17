import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ICompany } from '../services/companies.service';
import { ICategory } from '../services/categories.service';
import * as categoriesActions from '../actions/categories.actions';
import * as companiesActions from '../actions/companies.actions';
import * as viewsActions from '../actions/views.actions';

export interface IStore {
  categories: ICategory[];
  companies: ICompany[];
  categoryId: string;
  editedCategory: ICategory | {};
  editedCompany: ICompany | {};
}

const categoriesReducer = createReducer([],
  on(viewsActions.loadHomeDataSuccess, (state, payload) => payload.categories),
  on(categoriesActions.loadCategoriesSuccess, (state, payload) => payload.data),
);

const companiesReducer = createReducer([],
  on(viewsActions.loadHomeDataSuccess, (state, payload) => payload.companies),
  on(companiesActions.loadCompaniesSuccess, (state, payload) => payload.data),
);

const categoryIdReducer = createReducer('',
  on(viewsActions.loadHomeDataSuccess, (state, payload) => payload.categoryId),
);

const editedCategoryReducer = createReducer({} as ICategory,
  on(categoriesActions.loadCategoriesSuccess, () => ({})),
  on(categoriesActions.loadCategorySuccess, (state, payload) => payload),
);

const editedCompanyReducer = createReducer({} as ICompany,
  on(companiesActions.loadCompaniesSuccess, () => ({})),
  on(companiesActions.loadCompanySuccess, (state, payload) => payload),
);

export const reducers: ActionReducerMap<IStore> = {
  categories: categoriesReducer,
  companies: companiesReducer,
  categoryId: categoryIdReducer,
  editedCategory: editedCategoryReducer,
  editedCompany: editedCompanyReducer,
};

export const selectHomeData = (state: IStore) => state;
export const selectCompaniesData = (state: IStore) => state.companies;
export const selectCategoriesData = (state: IStore) => state.categories;
export const selectEditedCategory = (state: IStore) => state.editedCategory;
export const selectEditedCompany = (state: IStore) => state.editedCompany;

export const metaReducers: MetaReducer<IStore>[] = !environment.production ? [] : [];
