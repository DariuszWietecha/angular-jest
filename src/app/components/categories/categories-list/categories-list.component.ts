import { Component, OnInit } from '@angular/core';
import {CategoriesService, ICategory} from '../../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: ICategory[];
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.list()
    .subscribe( (data) => {
      this.categories = data;
    });
  }

}
