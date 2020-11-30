import { setStar } from '../../../src/store/action/StarAction';

describe('user actions', () => {
  it('should create an action to set saved stars', () => {
    const payload = {stars: [{id: 123123, name: 'Justin Bibor'}]};
    const expectedAction = {
      type: 'SET_STAR',
      payload,
    };
    expect(setStar(payload)).toEqual(expectedAction);
  });
});