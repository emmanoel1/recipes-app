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

  useEffect(() => {
    API.getFoodRecipes().then((e) => setMeals(e.meals));
    API.getDrinkRecipes().then((e) => setDrinks(e.drinks));
    API.getFoodCategories().then((e) => setFoodCategories(e.meals));
    API.getDrinkCategories().then((e) => setDrinkCategories(e.drinks));
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

  const mainContextObject = {
    meals,
    drinks,
    foodCategories,
    drinkCategories,
    searchResult,
    handleSearchApi,
    updateBySameName,
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
