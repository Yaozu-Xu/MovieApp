import { setLogin, setLogout } from '../../../src/store/action/UserAction';

describe('user actions', () => {
  it('should create an action to set user info', () => {
    const payload = {uid: 123123231, displayName: 'tester'};
    const expectedAction = {
      type: 'SET_USER',
      payload,
    };
    expect(setLogin(payload)).toEqual(expectedAction);
  });

  it('should create an action to log out', () => {
    const expectedAction = {
      type: 'SET_LOGOUT',
    };
    expect(setLogout()).toEqual(expectedAction);
  });
});