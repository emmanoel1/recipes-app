import React from 'react';

import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

import '../../css/FavoriteButton.css';

function FavoriteButton() {
  return (
    <div
      className="favorite-button-container"
    >
      <button
        className="favorite-button"
        type="button"
        data-testid="favorite-btn"
      >
        <img
          className="favorite-button-icon"
          src={ whiteHeartIcon }
          alt="share-button"
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
