const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const getFoodRecipes = () => (
  fetch(FOOD_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkRecipes = () => (
  fetch(DRINK_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);
