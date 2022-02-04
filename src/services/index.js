const FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FOOD_BY_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DRINK_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const FOOD_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINK_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const FOOD_PER_CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const DRINK_PER_CATEGORY_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const SURPRISE_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const SURPRISE_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const FOOD_INGREDIENTS_LIST_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const FOOD_BY_INGREDIENTS = (ingredient) => (
  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
);
const DRINK_INGREDIENTS_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const DRINK_BY_INGREDIENTS = (ingredient) => (
  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
);
const FOOD_NATIONALITIES_LIST_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const FOOD_BY_NATIONALITIES = (nationality) => (
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`
);

export const getFoodNationalitiesList = () => (
  fetch(FOOD_NATIONALITIES_LIST_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getFoodByNationalities = (nationality) => (
  fetch(FOOD_BY_NATIONALITIES(nationality))
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkIngredientsList = () => (
  fetch(DRINK_INGREDIENTS_LIST_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkByIngredients = (ingredient) => (
  fetch(DRINK_BY_INGREDIENTS(ingredient))
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getFoodByIngredients = (ingredient) => (
  fetch(FOOD_BY_INGREDIENTS(ingredient))
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getFoodIngredientsList = () => (
  fetch(FOOD_INGREDIENTS_LIST_URL)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getSurpriseFood = () => (
  fetch(SURPRISE_FOOD)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getSurpriseDrink = () => (
  fetch(SURPRISE_DRINK)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

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

export const getFoodPerCategory = (category) => (
  fetch(`${FOOD_PER_CATEGORY_URL}${category}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkById = (id) => (
  fetch(`${DRINK_BY_ID_URL}${id}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getFoodById = (id) => (
  fetch(`${FOOD_BY_ID_URL}${id}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkPerCategory = (category) => (
  fetch(`${DRINK_PER_CATEGORY_URL}${category}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getByIngredients = (ingredient) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getByName = (name) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getByLetter = (firstLetter) => (
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkByIngredient = (ingredient) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkByName = (name) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export const getDrinkByLetter = (firstLetter) => (
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))))
);
