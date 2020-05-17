import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewsService } from '../../services/views.service';

import { CompanyComponent } from '../companies/company/company.component';
import { HomeComponent } from './home.component';
import { ListComponent } from '../list/list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const categoriesListMock = require('../../../test/data/categories/categories-get.json');
  const comapaniesListMock = require('../../../test/data/companies/companies-get.json');
  const categoryId = 'a0308830-660b-11ea-9266-adf5decb4537';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyComponent, HomeComponent, ListComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ViewsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.categories = categoriesListMock;
    component.companies = comapaniesListMock;
    component.categoryId = categoryId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
