import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

import * as API from '../../services';

function MainProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    API.getFoodRecipes().then((e) => setMeals(e.meals));
    API.getDrinkRecipes().then((e) => setDrinks(e.drinks));
  }, []);

  const handleSearchApi = (result) => {
    setSearchResult(result);
  };

  return (
    <MainContext.Provider value={ { meals, drinks, handleSearchApi, searchResult } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});

export default MainProvider;
