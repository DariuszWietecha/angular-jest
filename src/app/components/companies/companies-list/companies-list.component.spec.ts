import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniesService, ICompany } from '../../../services/companies.service';
import { IStore, selectCompaniesData } from '../../../reducers';

import { CompaniesListComponent } from './companies-list.component';
import { CompanyComponent } from '../company/company.component';
import { ListComponent } from '../../list/list.component';

// import { By } from '@angular/platform-browser';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';

describe('CompaniesListComponent', () => {
  let component: CompaniesListComponent;
  let fixture: ComponentFixture<CompaniesListComponent>;
  // let mockStore: MockStore;
  // let mockSelectCompaniesDataSelector;
  const comapaniesListMock = require('../../../../../test/data/companies/companies-get.json') as ICompany[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyComponent, CompaniesListComponent, ListComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(() => {
              console.log("dispatch------------")
            }),
            select: jest.fn(() => hot('-a', { a: comapaniesListMock }))
          }
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListComponent);
    component = fixture.componentInstance;
    // component.companies$ = comapaniesListMock;
    // mockStore = TestBed.get(MockStore);
    // mockSelectCompaniesDataSelector = mockStore.overrideSelector(
    //   'selectCompaniesData',
    //   comapaniesListMock
    // );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
