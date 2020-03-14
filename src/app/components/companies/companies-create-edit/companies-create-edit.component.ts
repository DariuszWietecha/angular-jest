import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService, ICategory } from '../../../services/categories.service';
import { CompaniesService } from '../../../services/companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-create-edit',
  templateUrl: './companies-create-edit.component.html',
  styleUrls: ['./companies-create-edit.component.scss']
})
export class CompaniesCreateEditComponent implements OnInit {
  categories = [];
  createEditForm: FormGroup;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService,
    private companiesService: CompaniesService
  ) {
    this.createEditForm = this.formBuilder.group({
      id: '',
      name: '',
      logoUrl: '',
      email: '',
      categories: [],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoriesService.list()
        .subscribe((data) => {
          this.categories = data;
        });

      this.type = params.get('type');
      if (this.type === 'edit') {
        this.companiesService.get(params.get('id'))
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

    this.companiesService[method](formData)
      .subscribe(() => {
        this.router.navigate(['']);
      });

    this.createEditForm.reset();
  }
}
