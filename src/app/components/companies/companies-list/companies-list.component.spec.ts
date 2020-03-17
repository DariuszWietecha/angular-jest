import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniesService } from '../../../services/companies.service';
import { CompaniesListComponent } from './companies-list.component';
import { CompanyComponent } from '../company/company.component';
import { HttpClientModule } from '@angular/common/http';

describe('CompaniesListComponent', () => {
  let component: CompaniesListComponent;
  let fixture: ComponentFixture<CompaniesListComponent>;
  const comapaniesListMock = require('../../../../../test/data/companies/companies-get.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [CompanyComponent, CompaniesListComponent],
      providers: [CompaniesService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListComponent);
    component = fixture.componentInstance;
    component.companies = comapaniesListMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
