import React, { useEffect, useState } from 'react';

import { PropTypes } from 'prop-types';
import { getFoodRecipes, getDrinkRecipes } from '../services';

import '../css/RecipeRecomendations.css';

function RecipeRecomendations({ recipeRecomendations }) {
  const [recomendations, setRecomendations] = useState([]);
  const getRecomendations = async () => {
    if (recipeRecomendations === 'recomendationsForFoods') {
      const response = await getDrinkRecipes();
      const recomendedDrinks = response.drinks;
      console.log(recomendedDrinks);
      return recomendedDrinks;
    }
    if (recipeRecomendations === 'recomendationsForDrinks') {
      const response = await getFoodRecipes();
      const recomendedFoods = response.meals;
      return recomendedFoods;
    }
  };

  useEffect(() => {
    getRecomendations()
      .then((r) => setRecomendations(r));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RECOMENDATIONS_QUANTITY = 2;

  const drinksCarousel = (
    recomendations.map(
      (recomendation, index) => index < RECOMENDATIONS_QUANTITY && (
        <div className="carousel-item-container" key={ index }>
          <img
            className="carousel-img"
            src={ recomendation.strDrinkThumb }
            alt="drinkThumb"
          />
          <strong className="drink-alcoholic">{ recomendation.strAlcoholic }</strong>
          <p className="drink-name">{ recomendation.strDrink }</p>
        </div>
      ),
    )
  );

  const foodsCarousel = (
    recomendations.map(
      (recomendation, index) => index < RECOMENDATIONS_QUANTITY && (
        <div
          className="carousel-item-container"
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            className="carousel-img"
            src={ recomendation.strMealThumb }
            alt="mealThumb"
          />
          <strong className="drink-alcoholic">{ recomendation.strCategory }</strong>
          <p className="drink-name">{ recomendation.strMeal }</p>
        </div>
      ),
    )
  );

  return (
    <div>
      <h1 className="recommendations-title">Recommended</h1>
      <div className="recomendations-carousel">
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
