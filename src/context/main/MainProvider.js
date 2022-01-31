import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

import * as API from '../../services';

function MainProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);

  useEffect(() => {
    API.getFoodRecipes().then((e) => setMeals(e.meals));
    API.getDrinkRecipes().then((e) => setDrinks(e.drinks));
    API.getFoodCategories().then((e) => setFoodCategories(e.meals));
    API.getDrinkCategories().then((e) => setDrinkCategories(e.drinks));
  }, []);

  return (
    <MainContext.Provider value={ { meals, drinks, foodCategories, drinkCategories } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});

export default MainProvider;
