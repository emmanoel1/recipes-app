import React, { useEffect, useState } from 'react';

import { PropTypes } from 'prop-types';
import { getFoodRecipes, getDrinkRecipes } from '../services';

import '../css/RecipeRecomendations.css';

function RecipeRecomendations({ recipeRecomendations }) {
  const [recomendations, setRecomendations] = useState([]);
  const getRecomendations = async () => {
    if (recipeRecomendations === 'recomendationsForFoods') {
      const response = await getDrinkRecipes();
      return response.drinks;
    }
    if (recipeRecomendations === 'recomendationsForDrinks') {
      const response = await getFoodRecipes();
      return response.meals;
    }
  };

  const handleResponse = (recipes) => {
    const RECOMENDATIONS = 6;
    const newRecipes = recipes.filter((recipe, i) => i < RECOMENDATIONS);

    setRecomendations(newRecipes);
  };

  useEffect(() => {
    getRecomendations()
      .then((r) => handleResponse(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drinksCarousel = (
    recomendations.map((recomendation, i) => (
      <div
        data-testid={ `${i}-recomendation-card` }
        className="image-container"
        key={ i }
      >
        <img className="recomendation-img" src={ recomendation.strDrinkThumb } alt="" />
        <p
          className="recomendation-title"
          data-testid={ `${i}-recomendation-title` }
        >
          { recomendation.strDrink }
        </p>
        <p className="recomendation-category">{ recomendation.strAlcoholic }</p>
      </div>
    ))
  );

  const foodsCarousel = (
    recomendations.map((recomendation, i) => (
      <div
        data-testid={ `${i}-recomendation-card` }
        className="image-container"
        key={ i }
      >
        <img className="recomendation-img" src={ recomendation.strMealThumb } alt="" />
        <p
          className="recomendation-title"
          data-testid={ `${i}-recomendation-title` }
        >
          { recomendation.strMeal }
        </p>
        <p className="recomendation-category">{ recomendation.strCategory }</p>
      </div>
    ))
  );

  return (
    <div>
      <h1 className="recommendations-title">Recommended</h1>
      <div className="recomendations-container">
        {
          recipeRecomendations === 'recomendationsForFoods'
            ? drinksCarousel : foodsCarousel
        }
      </div>
    </div>
  );
}

RecipeRecomendations.propTypes = {
  recipeRecomendations: PropTypes.string.isRequired,
};

export default RecipeRecomendations;
