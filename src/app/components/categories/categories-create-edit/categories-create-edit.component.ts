import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-create-edit',
  templateUrl: './categories-create-edit.component.html',
  styleUrls: ['./categories-create-edit.component.scss']
})
export class CategoriesCreateEditComponent implements OnInit {
  createEditForm: FormGroup;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.createEditForm = this.formBuilder.group({
      id: '',
      name: '',
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');

      if (this.type === 'edit') {
        this.categoriesService.get(params.get('id'))
          .subscribe((data) => {
            this.createEditForm.patchValue(data);
          });
      }
    });
  }

  onSubmit() {
    const method = this.type === 'edit' ? 'edit' : 'create';
    const formData = this.createEditForm.value;
    if (!formData.id) {
      delete formData.id;
    }

    this.categoriesService[method](formData)
      .subscribe(() => {
        this.router.navigate(['']);
      });

    this.createEditForm.reset();
  }
}
