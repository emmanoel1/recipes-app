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

async function FoodsSearchFunction(radio, input, history) {
  if (radio === 'ingredient') {
    const result = [];
    await getByIngredients(input)
      .then((e) => result.push(e.meals));
    return result[0];
  }

  if (radio === 'name') {
    const byName = [];
    await getByName(input)
      .then((e) => byName.push(e.meals));
    const MEAL_ID = byName[0][0].idMeal;
    if (MEAL_ID !== undefined) {
      history.push(`/foods/${MEAL_ID}`);
    }
    return byName[0];
  }

  if (radio === 'letter' && input.length === 1) {
    const byLetter = [];
    await getByLetter(input)
      .then((e) => byLetter.push(e.meals));
    return byLetter[0];
  }

  if (radio === 'letter' && input.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
}

async function DrinksSearchFunction(radio, input, history) {
  if (radio === 'ingredient') {
    const byIngredients = [];
    await getDrinkByIngredient(input)
      .then((e) => byIngredients.push(e.drinks));
    return byIngredients[0];
  }

  if (radio === 'name') {
    const byName = [];
    await getDrinkByName(input)
      .then((e) => byName.push(e.drinks));
    const DRINK_ID = byName[0][0].idDrink;
    if (DRINK_ID !== undefined) {
      history.push(`/drinks/${DRINK_ID}`);
    }
    return byName[0];
  }

  if (radio === 'letter' && input.length === 1) {
    const byLetter = [];
    await getDrinkByLetter(input)
      .then((e) => byLetter.push(e.drinks));
    return byLetter[0];
  }

  if (radio === 'letter' && input.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
}

const handleBtn = (radio, input, history) => {
  if (actualRoute === 'foods') {
    const resultFoods = FoodsSearchFunction(radio, input, history);
    return resultFoods;
  }

  if (actualRoute === 'drinks') {
    const resultDrinks = DrinksSearchFunction(radio, input, history);
    return resultDrinks;
  }
};

export default handleBtn;
