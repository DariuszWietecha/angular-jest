import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreateEditComponent } from './categories-create-edit.component';

describe('CategoriesCreateEditComponent', () => {
  let component: CategoriesCreateEditComponent;
  let fixture: ComponentFixture<CategoriesCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesCreateEditComponent ]
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
});
