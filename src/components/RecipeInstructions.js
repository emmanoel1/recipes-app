import React from 'react';

import { PropTypes } from 'prop-types';

import '../css/RecipeInstructions.css';

function RecipeInstructions({ recipeInstructions }) {
  return (
    <div>
      <h1 className="food-instructions-header">Instructions</h1>
      <div
        className="food-instructions-container"
      >
        <p data-testid="instructions" className="food-instructions">
          {
            recipeInstructions
          }
        </p>
      </div>
    </div>
  );
}

RecipeInstructions.propTypes = {
  recipeInstructions: PropTypes.string.isRequired,
};

export default RecipeInstructions;
