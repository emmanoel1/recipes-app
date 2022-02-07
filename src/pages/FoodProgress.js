import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodById } from '../services';
import '../css/FoodDetails.css';
import FavoriteButton from '../components/FavoriteButton';
import RecipeCategory from '../components/RecipeCategory';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipePicture from '../components/RecipePicture';
import RecipeTitle from '../components/RecipeTitle';
import ShareButton from '../components/ShareButton';
import StepIngredients from '../components/InProgress/StepIngredients';
import RecipeFinishBtn from '../components/InProgress/RecipeFinishBtn';

function FoodProgress() {
  const { foodId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [quant, setQuant] = useState();
  const [ingredients, setIngredient] = useState();

  useEffect(() => {
    getFoodById(foodId)
      .then((r) => setRecipe(r.meals[0]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIngredients = () => {
    const TOTAL_POSSIBLE_INGREDIENTS = 21;
    const arrayOfIngredients = [];
    for (let i = 1; i < TOTAL_POSSIBLE_INGREDIENTS; i += 1) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient !== '' && ingredient !== null) {
        arrayOfIngredients.push(ingredient);
      }
    }
    setIngredient(arrayOfIngredients);
  };

  const getQuantities = () => {
    const TOTAL_POSSIBLE_QUANTITIES = 21;
    const arrayOfQuantities = [];
    for (let i = 1; i < TOTAL_POSSIBLE_QUANTITIES; i += 1) {
      const quantity = recipe[`strMeasure${i}`];
      if (quantity !== '' && quantity !== null) {
        arrayOfQuantities.push(quantity);
      }
    }
    setQuant(arrayOfQuantities);
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
        {ingredients !== undefined
          && ingredients[0] !== undefined
          && quant !== undefined
          && quant[0] !== undefined ? (
            <StepIngredients
              ingredients={ ingredients }
              quantities={ quant }
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

export default FoodProgress;
