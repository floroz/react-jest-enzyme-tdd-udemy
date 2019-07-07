import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';
import { getLetterMatchCount } from './helpers/index';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord, success: false };

    beforeEach(() => {
      store = storeFactory(initialState);
    });
    it('should update correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: getLetterMatchCount(unsuccessfulGuess, secretWord)
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });

    it('should update correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        success: true,
        secretWord,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(secretWord, secretWord)
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    let store;
    const guessedWords = [{ guessedWord: 'parke', letterMatchCount: 3 }];
    const initialState = {
      secretWord,
      success: false,
      guessedWords
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('should update correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: getLetterMatchCount(unsuccessfulGuess, secretWord)
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });

    it('should update correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      console.log(newState);

      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(secretWord, secretWord)
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
