import actionTypes from '../actions';

const INITIAL_STATE = {
  meals: [],
};

export default function foodRecipes(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_MEALS_API:
    return {
      ...state,
      meals: action.meals,
    };
  default: return state;
  }
}
