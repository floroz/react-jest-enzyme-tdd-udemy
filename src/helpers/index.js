export function getLetterMatchCount(guessedWord, secretWord) {
  const guess = guessedWord
    .trim()
    .replace(' ', '')
    .split('');
  const secret = secretWord.trim().split('');

  const result = guess.filter(letter => secret.includes(letter));

  return result.filter((letter, index, self) => index === self.indexOf(letter))
    .length;
}
