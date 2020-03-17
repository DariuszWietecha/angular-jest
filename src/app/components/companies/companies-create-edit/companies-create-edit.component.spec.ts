import { CompaniesCreateEditComponent } from './companies-create-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { CompaniesService } from '../../../services/companies.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompaniesCreateEditComponent', () => {
  let component: CompaniesCreateEditComponent;
  let fixture: ComponentFixture<CompaniesCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ CompaniesCreateEditComponent ],
      providers: [CategoriesService, CompaniesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
