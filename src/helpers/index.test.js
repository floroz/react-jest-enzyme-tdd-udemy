import { getLetterMatchCount } from './index';

describe('getLetterMatchCount ', () => {
  const secretWord = 'party';

  it('should return the correct count when there are no matching letters', () => {
    const expectation = getLetterMatchCount('joke', secretWord);

    expect(expectation).toBe(0);
  });

  it('should return the correct count when there are 3 matching letters', () => {
    const expectation = getLetterMatchCount('train', secretWord);

    expect(expectation).toBe(3);
  });

  it('should return the correct count when there are duplicate letters in the guess', () => {
    const expectation = getLetterMatchCount('parka', secretWord);

    expect(expectation).toBe(3);
  });
});
