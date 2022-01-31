import React from 'react';

import '../css/StartRecipeButton.css';

function StartRecipeButton() {
  return (
    <div className="button-container">
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-button"
      >
        Start Recipe
      </button>
    </div>
  );
}

export default StartRecipeButton;
