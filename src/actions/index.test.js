import { correctGuess, actionTypes } from './index';

describe('correctGuess', () => {
  it('should return an action creator of type CORRECT_GUESS', () => {
    const action = correctGuess();

    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
