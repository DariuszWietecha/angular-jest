import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../services/categories.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore, selectCategoriesData } from '../../../reducers';
import { loadCompanies } from '../../../actions/companies.actions';
import { loadCategories } from 'src/app/actions/categories.actions';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories$: Observable<ICategory[]> = this.store.select(selectCategoriesData);
  constructor(
    private store: Store<IStore>
  ) { }

  ngOnInit() {
    this.store.dispatch(loadCategories());
  }

}
