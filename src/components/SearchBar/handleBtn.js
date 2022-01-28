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
console.log('actual route:', actualRoute);

function FoodsSearchFunction(radio, input, history) {
  if (radio === 'ingredient') {
    const byIngredients = getByIngredients(input);
    return byIngredients;
  }

  if (radio === 'name') {
    const byName = getByName(input);
    history.push(`/foods/${input}`);
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

function DrinksSearchFunction(radio, input, history) {
  if (radio === 'ingredient') {
    const byIngredients = getDrinkByIngredient(input);
    return byIngredients;
  }

  if (radio === 'name') {
    const byName = getDrinkByName(input);
    console.log(byName);
    history.push(`/drinks/${input}`);
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

const handleBtn = (radio, input, history) => {
  if (actualRoute === 'foods') {
    FoodsSearchFunction(radio, input, history);
  }

  if (actualRoute === 'drinks') {
    DrinksSearchFunction(radio, input, history);
  }
};

export default handleBtn;
