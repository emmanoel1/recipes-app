import React, { useState, useEffect } from 'react';

import RecipePicture from '../components/RecipePicture';
import RecipeTitle from '../components/RecipeTitle';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeCategory from '../components/RecipeCategory';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeRecomendations from '../components/RecipeRecomendations';
import StartRecipeButton from '../components/StartRecipeButton';

import { getDrinkById } from '../services';

import '../css/FoodDetails.css';

function DrinkDetails() {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getDrinkById()
      .then((r) => setRecipe(r.drinks[0]));
  }, []);

  const [ingredients, setIngredients] = useState([]);
  const getIngredients = () => {
    const TOTAL_POSSIBLE_INGREDIENTS = 21;
    const arrayOfIngredients = [];
    for (let i = 1; i < TOTAL_POSSIBLE_INGREDIENTS; i += 1) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient !== '' && ingredient !== null && ingredient !== undefined) {
        arrayOfIngredients.push(ingredient);
      }
    }
    setIngredients(arrayOfIngredients);
  };

  const [quantities, setQuantities] = useState([]);
  const getQuantities = () => {
    const TOTAL_POSSIBLE_QUANTITIES = 21;
    const arrayOfQuantities = [];
    for (let i = 1; i < TOTAL_POSSIBLE_QUANTITIES; i += 1) {
      const quantity = recipe[`strMeasure${i}`];
      if (quantity !== '' && quantity !== null && quantity !== undefined) {
        arrayOfQuantities.push(quantity);
      }
    }
    setQuantities(arrayOfQuantities);
  };

  useEffect(() => {
    getIngredients();
    getQuantities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe]);

  return (
    <div>
      <RecipePicture recipeImgUrl={ recipe.strDrinkThumb } />
      <div className="food-details-header-container">
        <div className="food-title-container">
          <RecipeTitle recipeTitle={ recipe.strDrink } />
        </div>
        <div className="share-icon-container">
          <ShareButton />
        </div>
        <div className="favorite-icon-container">
          <FavoriteButton />
        </div>
        <div className="food-category-container">
          <RecipeCategory recipeCategory={ recipe.strAlcoholic } />
        </div>
      </div>
      <div className="food-ingredients-container">
        <RecipeIngredients ingredients={ ingredients } quantities={ quantities } />
      </div>
      <div className="food-instructions-container">
        <RecipeInstructions recipeInstructions={ recipe.strInstructions } />
      </div>
      <div className="recipe-recomendations-container">
        <RecipeRecomendations recipeRecomendations="recomendationsForDrinks" />
      </div>
      <div>
        <StartRecipeButton />
      </div>
    </div>
  );
}

export default DrinkDetails;
