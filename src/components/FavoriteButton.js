import React, { useState, useContext, useEffect } from 'react';

import { PropTypes } from 'prop-types';

import MainContext from '../context/main/MainContext';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../css/FavoriteButton.css';

function FavoriteButton({ currentRecipe, recipeType }) {
  const [heartIcon, setHeartIcon] = useState(false);
  const {
    addRecipeToFavorites,
    removeRecipeFromFavorites,
    favoriteRecipes,
    meals,
    drinks,
  } = useContext(MainContext);

  const mountFavoriteMealObject = () => {
    if (recipeType === 'meal') {
      const recipeObject = {
        id: currentRecipe.idMeal,
        alcoholicOrNot: '',
        type: 'food',
        nationality: currentRecipe.strArea || '',
        category: currentRecipe.strCategory || '',
        name: currentRecipe.strMeal,
        image: currentRecipe.strMealThumb,
      };
      return recipeObject;
    }

    if (recipeType === 'drink') {
      const recipeObject = {
        id: currentRecipe.idDrink,
        type: 'drink',
        nationality: '',
        category: currentRecipe.strCategory || '',
        alcoholicOrNot: currentRecipe.strAlcoholic,
        name: currentRecipe.strDrink,
        image: currentRecipe.strDrinkThumb,
      };
      return recipeObject;
    }
  };

  const handleFavoriteRecipeStorage = (isFavorited) => {
    const favoritedRecipeObject = mountFavoriteMealObject();

    if (isFavorited) {
      addRecipeToFavorites(favoritedRecipeObject);
    } else {
      removeRecipeFromFavorites(favoritedRecipeObject, favoritedRecipeObject.type);
    }
  };

  const handleFavoriteRecipe = () => {
    setHeartIcon(!heartIcon);
    handleFavoriteRecipeStorage(!heartIcon);
  };

  useEffect(() => {
    const isAlreadyFavorited = favoriteRecipes.some(
      (r) => r.id === currentRecipe.idDrink || r.id === currentRecipe.idMeal,
    );
    if (isAlreadyFavorited) {
      setHeartIcon(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meals, drinks]);

  return (
    <div
      className="favorite-button-container"
    >
      <button
        className="favorite-button"
        type="button"
        onClick={ handleFavoriteRecipe }
        src={ heartIcon ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          className="favorite-button-icon"
          data-testid="favorite-btn"
          src={ heartIcon ? blackHeartIcon : whiteHeartIcon }
          alt="share-button"
        />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  currentRecipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default FavoriteButton;
