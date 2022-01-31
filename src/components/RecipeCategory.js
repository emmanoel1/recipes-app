import React from 'react';

import { PropTypes } from 'prop-types';

import '../css/RecipeCategory.css';

function RecipeCategory({ recipeCategory }) {
  return (
    <div
      className="recipe-category-container"
    >
      <h2
        data-testid="recipe-category"
      >
        { recipeCategory }
      </h2>
    </div>
  );
}

RecipeCategory.propTypes = {
  recipeCategory: PropTypes.string.isRequired,
};

export default RecipeCategory;
