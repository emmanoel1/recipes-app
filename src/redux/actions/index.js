import * as API from '../../services';

const actionTypes = {
  GET_MEALS_API: 'GET_MEALS_API',
  GET_DRINKS_API: 'GET_DRINKS_API',
};

export const getMealsApiThunk = () => (dispatch) => {
  API.getFoodRecipes().then(({ meals }) => dispatch({
    type: actionTypes.GET_MEALS_API,
    meals,
  }));
};

export const getDrinksApiThunk = () => (dispatch) => {
  API.getDrinkRecipes().then(({ drinks }) => dispatch({
    type: actionTypes.GET_DRINKS_API,
    drinks,
  }));
};

export default actionTypes;
