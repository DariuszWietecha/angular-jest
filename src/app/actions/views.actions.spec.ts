import * as fromViews from './views.actions';

describe('loadViewss', () => {
  it('should return an action', () => {
    expect(fromViews.loadHomeData({categoryId: 'xxx'}).type).toBe('[Home] Load Home data');
  });
});
