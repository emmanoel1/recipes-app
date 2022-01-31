import React, { useState, useContext } from 'react';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../css/FavoriteButton.css';

function FavoriteButton() {
  const [heartIcon, setHeartIcon] = useState(false);
  // const { favoriteRecipes, setFavoriteRecipes } = useContext();

  // const handleFavoriteRecipeStorage = (currState) => {
  //   if (currState) {
  //     setFavoriteRecipes([...favoriteRecipes, ])
  //   }
  // };

  const handleFavoriteRecipe = () => {
    setHeartIcon(!heartIcon);
    handleFavoriteRecipeStorage(heartIcon);
  };

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

export default FavoriteButton;
