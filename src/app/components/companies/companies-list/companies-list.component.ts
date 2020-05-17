import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../../services/companies.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore, selectCompaniesData } from '../../../reducers';
import { loadCompanies } from '../../../actions/companies.actions';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  companies$: Observable<ICompany[]> = this.store.select(selectCompaniesData);

  constructor(
    private store: Store<IStore>
  ) { }

  ngOnInit() {
    this.store.dispatch(loadCompanies());
  }

}
