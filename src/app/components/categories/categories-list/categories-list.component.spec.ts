import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriesService } from '../../../services/categories.service';

import { CategoriesListComponent } from './categories-list.component';
import { ListComponent } from '../../list/list.component';

describe('CategoriesListComponent', () => {
  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;
  const categoriesListMock = require('../../../../../test/data/categories/categories-get.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesListComponent, ListComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [CategoriesService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    component.categories = categoriesListMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
