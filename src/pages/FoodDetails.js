import React, { useState, useEffect } from 'react';

import { getFoodRecipes } from '../services';

import FoodPicture from '../components/FoodDetails/FoodPicture';

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
    </div>
  );
}

export default FoodDetails;
