import { actionTypes } from '../actions/index';

export default function(state = false, action = {}) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return false;
  }
}
