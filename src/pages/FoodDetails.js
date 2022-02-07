import React, { useState, useEffect } from 'react';
// test

import { useParams } from 'react-router-dom';

import RecipePicture from '../components/RecipePicture';
import RecipeTitle from '../components/RecipeTitle';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeCategory from '../components/RecipeCategory';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';
import FoodVideo from '../components/FoodDetails/FoodVideo';
import RecipeRecomendations from '../components/RecipeRecomendations';
import StartRecipeButton from '../components/StartRecipeButton';

import { getFoodById } from '../services';

import '../css/FoodDetails.css';

function FoodDetails() {
  const { foodId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getFoodById(foodId)
      .then((r) => setRecipe(r.meals[0]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [ingredients, setIngredients] = useState([]);
  const getIngredients = () => {
    const TOTAL_POSSIBLE_INGREDIENTS = 21;
    const arrayOfIngredients = [];
    for (let i = 1; i < TOTAL_POSSIBLE_INGREDIENTS; i += 1) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient !== '' && ingredient !== null) {
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
      if (quantity !== '' && quantity !== null) {
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
      <RecipePicture recipeImgUrl={ recipe.strMealThumb } />
      <div className="recipe-details-header-container">
        <div className="recipe-title-container">
          <RecipeTitle recipeTitle={ recipe.strMeal } />
        </div>
        <div className="share-icon-container">
          <ShareButton category="foods" id={ recipe.idMeal } />
        </div>
        <div className="favorite-icon-container">
          <FavoriteButton currentRecipe={ recipe } recipeType="meal" />
        </div>
        <div className="recipe-category-container">
          <RecipeCategory recipeCategory={ recipe.strCategory } />
        </div>
      </div>
      <div className="food-ingredients-container">
        <RecipeIngredients ingredients={ ingredients } quantities={ quantities } />
      </div>
      <div className="food-instructions-container">
        <RecipeInstructions recipeInstructions={ recipe.strInstructions } />
      </div>
      <div className="food-video-container">
        <FoodVideo foodVideo={ recipe.strYoutube } />
      </div>
      <div className="recipe-recomendations-container">
        <RecipeRecomendations recipeRecomendations="recomendationsForFoods" />
      </div>
      <div>
        <StartRecipeButton goTo="foodProgress" id={ foodId } />
      </div>
    </div>
  );
}

export default FoodDetails;
