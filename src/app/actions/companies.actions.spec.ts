import * as fromCompanies from './companies.actions';

describe('loadCompaniess', () => {
  it('should return an action', () => {
    expect(fromCompanies.loadCompanies().type).toBe('[Companies] Load Companiess');
  });
});
