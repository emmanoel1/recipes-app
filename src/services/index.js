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

const FOOD_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINK_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export const getFoodCategories = () => (
  fetch(FOOD_CATEGORIES_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkCategories = () => (
  fetch(DRINK_CATEGORIES_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

const FOOD_PER_CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const DRINK_PER_CATEGORY_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export const getFoodPerCategory = (category) => (
  fetch(`${FOOD_PER_CATEGORY_URL}${category}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkPerCategory = (category) => (
  fetch(`${DRINK_PER_CATEGORY_URL}${category}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);
