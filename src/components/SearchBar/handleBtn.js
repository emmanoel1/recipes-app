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

async function FoodsSearchFunction(radio, input, history, updateBySameName) {
  if (radio === 'ingredient') {
    const result = [];
    await getByIngredients(input)
      .then((e) => result.push(e.meals));
    return result[0];
  }

  if (radio === 'name') {
    const byName = [];
    await getByName(input)
      .then((e) => byName.push(e.meals))
      .then((error) => byName.push(error));
    if (byName[0] !== null) {
      const MEAL_ID = byName[0][0].idMeal;
      if (byName[0].length > 1) {
        updateBySameName(byName[0]);
      }
      if (MEAL_ID !== undefined && byName[0].length === 1) {
        history.push(`/foods/${MEAL_ID}`);
      }
      return byName[0];
    }
    updateBySameName(byName[0]);
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

async function DrinksSearchFunction(radio, input, history, updateBySameName) {
  if (radio === 'ingredient') {
    const byIngredients = [];
    await getDrinkByIngredient(input)
      .then((e) => byIngredients.push(e.drinks));
    return byIngredients[0];
  }

  if (radio === 'name') {
    const byName = [];
    await getDrinkByName(input)
      .then((e) => byName.push(e.drinks))
      .then((error) => byName.push(error));
    if (byName[0] !== null) {
      const DRINK_ID = byName[0][0].idDrink;
      if (byName[0].length > 1) {
        updateBySameName(byName[0]);
      }
      if (DRINK_ID !== undefined && byName[0].length === 1) {
        history.push(`/drinks/${DRINK_ID}`);
      }
      return byName[0];
    }
    updateBySameName(byName[0]);
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

const handleBtn = (radio, input, history, updateBySameName) => {
  if (actualRoute === 'foods') {
    const resultFoods = FoodsSearchFunction(radio, input, history, updateBySameName);
    return resultFoods;
  }

  if (actualRoute === 'drinks') {
    const resultDrinks = DrinksSearchFunction(radio, input, history, updateBySameName);
    return resultDrinks;
  }
};

export default handleBtn;
