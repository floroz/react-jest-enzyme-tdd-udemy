export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
};

const { CORRECT_GUESS } = actionTypes;

export const correctGuess = () => {
  return { type: CORRECT_GUESS };
};
