import {
  getByIngredients,
  getByName,
  getByLetter,
  getDrinkByIngredient,
  getDrinkByLetter,
  getDrinkByName,
} from '../../services';

const urlFilter = window.location.pathname.split('/');
const actualRoute = urlFilter[1];
console.log(actualRoute);

function foodsSearchFunction(radio, input) {
  if (radio === 'ingredient') {
    const byIngredients = getByIngredients(input);
    return byIngredients;
  }

  if (radio === 'name') {
    const byName = getByName(input);
    return byName;
  }

  if (radio === 'letter' && input.length === 1) {
    const byLetter = getByLetter(input);
    return byLetter;
  }

  if (radio === 'letter' && input.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
}

function drinksSearchFunction(radio, input) {
  if (radio === 'ingredient') {
    const byIngredients = getDrinkByIngredient(input);
    return byIngredients;
  }

  if (radio === 'name') {
    const byName = getDrinkByName(input);
    return byName;
  }

  if (radio === 'letter' && input.length === 1) {
    const byLetter = getDrinkByLetter(input);
    return byLetter;
  }

  if (radio === 'letter' && input.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
}

const handleBtn = (radio, input) => {
  if (actualRoute === 'foods') {
    foodsSearchFunction(radio, input);
  }

  if (actualRoute === 'drinks') {
    drinksSearchFunction(radio, input);
  }
};

export default handleBtn;
