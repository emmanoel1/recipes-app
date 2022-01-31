import React, { useState } from 'react';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../css/FavoriteButton.css';

function FavoriteButton() {
  const [heartIcon, setHeartIcon] = useState(false);

  const handleFavoriteRecipe = () => {
    setHeartIcon(!heartIcon);
  };

  return (
    <div
      className="favorite-button-container"
    >
      <button
        className="favorite-button"
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavoriteRecipe }
      >
        <img
          className="favorite-button-icon"
          src={ heartIcon ? blackHeartIcon : whiteHeartIcon }
          alt="share-button"
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
