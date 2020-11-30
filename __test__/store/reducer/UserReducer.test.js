import reducer from '../../../src/store/reducer/UserReducer';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        uid: null,
        displayName: '',
      },
    );
  });
});
