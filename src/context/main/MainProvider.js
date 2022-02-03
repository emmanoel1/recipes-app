import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

import * as API from '../../services';

function MainProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [usedFilter, setUsedFilter] = useState('');
  const [drinkIngredients, setDrinkIngredients] = useState([]);

  const handleClick = (category, type) => {
    if (usedFilter === category || category === 'all') {
      if (type === 'food') {
        setFilteredMeals(meals);
      } else {
        setFilteredDrinks(drinks);
      }
      setUsedFilter('');
    } else if (type === 'food') {
      API.getFoodPerCategory(category).then((e) => setFilteredMeals(e.meals));
      setUsedFilter(category);
    } else {
      API.getDrinkPerCategory(category).then((e) => setFilteredDrinks(e.drinks));
      setUsedFilter(category);
    }
  };

  const getFavoriteRecipes = () => {
    const currentFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (currentFavoriteRecipes === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else {
      setFavoriteRecipes(currentFavoriteRecipes);
    }
  };

  const addRecipeToFavorites = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const removeRecipeFromFavorites = (recipe, type) => {
    if (type === 'food' || type === 'comida') {
      const newRecipes = favoriteRecipes.filter(
        (r) => r.idMeal !== recipe.idMeal,
      );
      setFavoriteRecipes(newRecipes);
    }
    if (type === 'drink') {
      const newRecipes = favoriteRecipes.filter(
        (r) => r.idDrink !== recipe.idDrink,
      );
      setFavoriteRecipes(newRecipes);
    }
  };

  useEffect(() => {
    API.getFoodRecipes().then((e) => {
      setMeals(e.meals);
      setFilteredMeals(e.meals);
    });
    API.getDrinkRecipes().then((e) => {
      setDrinks(e.drinks);
      setFilteredDrinks(e.drinks);
    });
    API.getFoodCategories().then((e) => setFoodCategories(e.meals));
    API.getDrinkCategories().then((e) => setDrinkCategories(e.drinks));
    API.getFoodIngredientsList().then((e) => setFoodIngredients(e.meals));
    API.getDrinkIngredientsList().then((e) => setDrinkIngredients(e.drinks));
    getFavoriteRecipes();
  }, []);

  const handleSearchApi = (result) => {
    setSearchResult(result);
  };

  const updateBySameName = (result) => {
    if (result === null) {
      global.alert(
        'Sorry, we haven\'t found any recipes for these filters.',
      );
    }
    if (result !== null) {
      if (result[0].idMeal) {
        setMeals(result);
      }
      if (result[0].idDrink) {
        setDrinks(result);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const mainContextObject = {
    meals,
    filteredMeals,
    drinks,
    filteredDrinks,
    foodIngredients,
    drinkIngredients,
    foodCategories,
    drinkCategories,
    searchResult,
    favoriteRecipes,
    handleSearchApi,
    updateBySameName,
    addRecipeToFavorites,
    removeRecipeFromFavorites,
    handleClick,
  };

  return (
    <MainContext.Provider value={ mainContextObject }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});

export default MainProvider;
