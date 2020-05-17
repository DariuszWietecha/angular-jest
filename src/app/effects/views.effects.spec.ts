import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
import { ViewsEffects } from './views.effects';
import { ViewsService } from '../services/views.service';
import { empty } from 'rxjs';
import * as viewsActions from '../actions/views.actions';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('ViewsEffects', () => {
  let actions$: TestActions;
  let effects: ViewsEffects;
  let viewsService: ViewsService;
  const homeDataMock = {
    categories: require('../../../test/data/categories/categories-get.json'),
    companies: require('../../../test/data/companies/companies-get.json'),
    categoryId: 'a0308830-660b-11ea-9266-adf5decb4537',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ViewsEffects,
        {
          provide: Actions,
          useFactory: getActions
        },
        {
          provide: ViewsService,
          useValue: { get: jest.fn() },
        },
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.get(ViewsEffects);
    viewsService = TestBed.get(ViewsService);
    actions$ = TestBed.get(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it.only('loadHomeDataSuccess', () => {
    const action = viewsActions.loadHomeData({ categoryId: '123' });
    const completion = viewsActions.loadHomeDataSuccess(homeDataMock);
    const response = cold('a|', { a: homeDataMock });
    const expected = cold('-b', { b: completion });

    actions$.stream = hot('-a', { a: action });

    viewsService.get = jest.fn(() => response);

    // expect(effects.loadHomeData$).toMatchSnapshot();
    expect(effects.loadHomeData$).toEqual(expected);
  });

  it('loadHomeDataFailure', () => {
    const action = viewsActions.loadHomeData({ categoryId: '123' });
    const completion = viewsActions.loadHomeDataFailure({ error: 'Error' });
    const response = cold('#');
    const expected = cold('-b', { b: completion });

    actions$.stream = hot('-a', { a: action });

    viewsService.get = jest.fn(() => response);

    expect(effects.loadHomeData$).toMatchSnapshot();
    // expect(effects.loadHomeData$).toEqual(expected);
  });
});
