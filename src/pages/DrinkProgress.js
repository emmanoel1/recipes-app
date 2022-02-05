import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import RecipePicture from '../components/RecipePicture';
import RecipeTitle from '../components/RecipeTitle';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeCategory from '../components/RecipeCategory';
import RecipeInstructions from '../components/RecipeInstructions';

import { getDrinkById } from '../services';

import '../css/FoodDetails.css';
import StepIngredients from '../components/InProgress/StepIngredients';
import RecipeFinishBtn from '../components/InProgress/RecipeFinishBtn';

function DrinkProgress() {
  const { drinkId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getDrinkById(drinkId)
      .then((r) => setRecipe(r.drinks[0]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="recipe-details-header-container">
        <div className="recipe-title-container">
          <RecipeTitle recipeTitle={ recipe.strDrink } />
        </div>
        <div className="share-icon-container">
          <ShareButton />
        </div>
        <div className="favorite-icon-container">
          <FavoriteButton currentRecipe={ recipe } recipeType="drink" />
        </div>
        <div className="recipe-category-container">
          <RecipeCategory recipeCategory={ recipe.strAlcoholic } />
        </div>
      </div>
      <div className="food-ingredients-container">
        {ingredients !== undefined
          && ingredients[0] !== undefined
          && quantities !== undefined
          && quantities[0] !== undefined ? (
            <StepIngredients
              ingredients={ ingredients }
              quantities={ quantities }
              recipe={ recipe }
            />
          ) : (<div>Loading</div>)}
      </div>
      <div className="food-instructions-container">
        <RecipeInstructions recipeInstructions={ recipe.strInstructions } />
      </div>
      <div>
        <RecipeFinishBtn />
      </div>
    </div>
  );
}

export default DrinkProgress;
