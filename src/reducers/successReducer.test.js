import successReducer from './successReducer';
import { actionTypes } from '../actions/index';

describe('successReducer ', () => {
  it('should return the default state of false when no actions is passed ', () => {
    const newState = successReducer();

    expect(newState).toBe(false);
  });

  it('should return state of true upon receiving an action of type CORRECT_GUESS', () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });

    expect(newState).toBe(true);
  });
});
