import React from 'react';

import { PropTypes } from 'prop-types';

import '../css/RecipeTitle.css';

function RecipeTitle({ recipeTitle }) {
  return (
    <div
      className="header-container"
    >
      <h1
        data-testid="recipe-title"
      >
        { recipeTitle }
      </h1>
    </div>
  );
}

RecipeTitle.defaultProps = {
  recipeTitle: '',
};

RecipeTitle.propTypes = {
  recipeTitle: PropTypes.string,
};

export default RecipeTitle;
