import reducer from '../../../src/store/reducer/StarReducer';

describe('star reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        stars: []
      },
    );
  });
});