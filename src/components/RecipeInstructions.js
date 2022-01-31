import React from 'react';

import { PropTypes } from 'prop-types';

import '../css/RecipeInstructions.css';

function RecipeInstructions({ recipeInstructions }) {
  return (
    <div>
      <h1 className="recipe-instructions-header">Instructions</h1>
      <div
        className="recipe-instructions-container"
      >
        <p data-testid="instructions" className="recipe-instructions">
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
