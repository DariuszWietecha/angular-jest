import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewsService } from '../../services/views.service';
import { ICompany } from '../../services/companies.service';
import { ICategory } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: ICategory[];
  companies: ICompany[];
  categoryId;

  constructor(
    private route: ActivatedRoute,
    private viewsService: ViewsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');

      this.viewsService.get(this.categoryId)
        .subscribe((data) => {
          this.companies = data.companies;
          this.categories = data.categories;
          this.categoryId = data.categoryId;
        });
    });
  }
}
