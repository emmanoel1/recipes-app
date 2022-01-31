import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

import * as API from '../../services';

function MainProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getFavoriteRecipes = () => {
    const currentFavoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (currentFavoriteRecipes === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else {
      setFavoriteRecipes(JSON.parse(currentFavoriteRecipes));
    }
  };

  //   [{
  //     id: id-da-receita,
  //     type: comida-ou-bebida,
  //     nationality: nacionalidade-da-receita-ou-texto-vazio,
  //     category: categoria-da-receita-ou-texto-vazio,
  //     alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
  //     name: nome-da-receita,
  //     image: imagem-da-receita
  //   }]

  useEffect(() => {
    API.getFoodRecipes().then((e) => setMeals(e.meals));
    API.getDrinkRecipes().then((e) => setDrinks(e.drinks));
    getFavoriteRecipes();
  }, []);

  const mainContextObject = {
    meals,
    drinks,
    favoriteRecipes,
    setFavoriteRecipes,
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
