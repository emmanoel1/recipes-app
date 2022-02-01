import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

import * as API from '../../services';

function MainProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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
    API.getFoodRecipes().then((e) => setMeals(e.meals));
    API.getDrinkRecipes().then((e) => setDrinks(e.drinks));
    getFavoriteRecipes();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const mainContextObject = {
    meals,
    drinks,
    favoriteRecipes,
    addRecipeToFavorites,
    removeRecipeFromFavorites,
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
