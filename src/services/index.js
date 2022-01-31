const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FOOD_BY_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DRINK_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const DEFAULT_FOOD_ID = 52771;

const DEFAULT_DRINK_ID = 178319;

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

export const getFoodById = (id = DEFAULT_FOOD_ID) => (
  fetch(`${FOOD_BY_ID_URL}${id}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkById = (id = DEFAULT_DRINK_ID) => (
  fetch(`${DRINK_BY_ID_URL}${id}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);
