import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-crud'`, () => {
    expect(component.title).toEqual('angular-crud');
  });

  it('should render title in display-4 class', () => {
    const compiledComponent = fixture.debugElement.nativeElement;
    expect(compiledComponent.querySelector('.display-4').textContent).toContain('Angular-crud');
  });

  it('snapShot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
