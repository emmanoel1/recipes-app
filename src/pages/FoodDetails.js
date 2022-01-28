import React, { useState, useEffect } from 'react';

import { getFoodRecipes } from '../services';

import FoodPicture from '../components/FoodDetails/FoodPicture';
import FoodTitle from '../components/FoodDetails/FoodTitle';
import ShareButton from '../components/FoodDetails/ShareButton';
import FavoriteButton from '../components/FoodDetails/FavoriteButton';
import FoodCategory from '../components/FoodDetails/FoodCategory';
import FoodIngredients from '../components/FoodDetails/FoodIngredients';

import '../css/FoodDetails.css';

function FoodDetails() {
  const [recipe, setRecipe] = useState({});
  const getRecipe = async () => {
    const response = await getFoodRecipes();
    const food = response.meals[0];
    return food;
  };
  useEffect(() => {
    getRecipe()
      .then((r) => setRecipe(r));
  }, []);

  // ---------------------------------------

  const [ingredients, setIngredients] = useState([]);
  const getIngredients = () => {
    const TOTAL_POSSIBLE_INGREDIENTS = 21;
    const arrayOfIngredients = [];
    for (let i = 1; i < TOTAL_POSSIBLE_INGREDIENTS; i += 1) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient !== '') {
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
      if (quantity !== ' ') {
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
      <FoodPicture foodImgUrl={ recipe.strMealThumb } />
      <div className="food-details-header-container">
        <div className="food-title-container">
          <FoodTitle foodTitle={ recipe.strMeal } />
        </div>
        <div className="share-icon-container">
          <ShareButton />
        </div>
        <div className="favorite-icon-container">
          <FavoriteButton />
        </div>
        <div className="food-category-container">
          <FoodCategory foodCategory={ recipe.strCategory } />
        </div>
      </div>
      <div className="food-ingredients-container">
        <FoodIngredients ingredients={ ingredients } quantities={ quantities } />
      </div>
    </div>
  );
}

export default FoodDetails;
