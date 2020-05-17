import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, ActionsSubject } from '@ngrx/store';
import { IStore, selectEditedCategory } from '../../../reducers';
import * as categoriesActions from '../../../actions/categories.actions';
import { take } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-categories-create-edit',
  templateUrl: './categories-create-edit.component.html',
  styleUrls: ['./categories-create-edit.component.scss']
})
export class CategoriesCreateEditComponent implements OnInit, OnDestroy {
  actionSub = new Subscription();
  createEditForm: FormGroup;
  routeSub = new Subscription();
  type: string;

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
    });

    this.actionSub = actionsSubject.pipe(
      ofType(categoriesActions.createCategorySuccess, categoriesActions.editCategorySuccess)
    ).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
      if (this.type === 'edit') {
        this.store.select(selectEditedCategory)
          .pipe(take(2))
          .subscribe((data) => this.createEditForm.patchValue(data));
        this.store.dispatch(categoriesActions.loadCategory({ categoryId: params.get('id') }));
      }
    });
  }

  onSubmit() {
    const action = this.type === 'edit' ? 'editCategory' : 'createCategory';
    const formData = this.createEditForm.value;
    if (!formData.id) {
      delete formData.id;
    }

    this.store.select(selectEditedCategory)
      .pipe(take(1))
      .subscribe((data) => this.createEditForm.patchValue(data));

    this.store.dispatch(categoriesActions[action]({ data: formData }));

    this.createEditForm.reset();
  }

  ngOnDestroy() {
    this.actionSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
