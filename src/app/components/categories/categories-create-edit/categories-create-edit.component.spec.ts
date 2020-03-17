import { CategoriesCreateEditComponent } from './categories-create-edit.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesService } from '../../../services/categories.service';
import { CompaniesService } from '../../../services/companies.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoriesCreateEditComponent', () => {
  let component: CategoriesCreateEditComponent;
  let fixture: ComponentFixture<CategoriesCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ CategoriesCreateEditComponent ],
      providers: [CategoriesService, CompaniesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCreateEditComponent);
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
