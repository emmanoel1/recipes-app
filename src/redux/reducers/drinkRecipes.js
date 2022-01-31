import actionTypes from '../actions';

const INITIAL_STATE = {
  drinks: [],
};

export default function foodRecipes(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_DRINKS_API:
    return {
      ...state,
      drinks: action.drinks,
    };
  default: return state;
  }
}
