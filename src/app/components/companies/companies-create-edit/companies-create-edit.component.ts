import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, ActionsSubject } from '@ngrx/store';
import { IStore, selectEditedCompany, selectCategoriesData } from '../../../reducers';
import * as companiesActions from '../../../actions/companies.actions';
import * as categoriesActions from '../../../actions/categories.actions';
import { take } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-companies-create-edit',
  templateUrl: './companies-create-edit.component.html',
  styleUrls: ['./companies-create-edit.component.scss']
})
export class CompaniesCreateEditComponent implements OnInit, OnDestroy {
  actionSub = new Subscription();
  categories = [];
  createEditForm: FormGroup;
  routeSub = new Subscription();
  type: string;

  isCategorySelected = (categoryId) => this.createEditForm.value.categories &&
    this.createEditForm.value.categories.some((category) => category.id === categoryId)

  constructor(
    private actionsSubject: ActionsSubject,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<IStore>
  ) {
    this.createEditForm = this.formBuilder.group({
      id: '',
      name: '',
      logoUrl: '',
      email: '',
      categories: [],
    });

    this.actionSub = actionsSubject.pipe(
      ofType(companiesActions.createCompanySuccess, companiesActions.editCompanySuccess)
    ).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.store.select(selectCategoriesData)
        .pipe(take(2))
        .subscribe((data) => {
          this.categories = data;
        });
      this.store.dispatch(categoriesActions.loadCategories());

      this.type = params.get('type');
      if (this.type === 'edit') {
        this.store.select(selectEditedCompany)
          .pipe(take(2))
          .subscribe((data) => this.createEditForm.patchValue(data));
        this.store.dispatch(companiesActions.loadCompany({ companyId: params.get('id') }));
      }
    });
  }

  onSubmit() {
    const action = this.type === 'edit' ? 'editCompany' : 'createCompany';
    const formData = this.createEditForm.value;
    if (!formData.id) {
      delete formData.id;
    }

    this.store.select(selectEditedCompany)
      .pipe(take(1))
      .subscribe((data) => this.createEditForm.patchValue(data));

    this.store.dispatch(companiesActions[action]({ data: formData }));

    this.createEditForm.reset();
  }

  ngOnDestroy() {
    this.actionSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
