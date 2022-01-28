import React, { useState, useEffect } from 'react';

import { getFoodRecipes } from '../services';

import FoodPicture from '../components/FoodDetails/FoodPicture';
import FoodTitle from '../components/FoodDetails/FoodTitle';
import ShareButton from '../components/FoodDetails/ShareButton';
import FavoriteButton from '../components/FoodDetails/FavoriteButton';
import FoodCategory from '../components/FoodDetails/FoodCategory';

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
    </div>
  );
}

export default FoodDetails;
