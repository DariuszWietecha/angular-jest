import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesCreateEditComponent } from './companies-create-edit.component';

describe('CompaniesCreateEditComponent', () => {
  let component: CompaniesCreateEditComponent;
  let fixture: ComponentFixture<CompaniesCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesCreateEditComponent ]
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
});
