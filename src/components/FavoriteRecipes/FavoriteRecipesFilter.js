import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FavoriteRecipesFilter.css';

function FavoriteRecipesFilter({ filterFavoriteRecipes }) {
  return (
    <div
      className="favorite-recipes-filter-container"
    >
      <button
        type="button"
        className="favorite-recipes-filter-button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ filterFavoriteRecipes }
      >
        All
      </button>
      <button
        className="favorite-recipes-filter-button"
        type="button"
        data-testid="filter-by-food-btn"
        name="food"
        onClick={ filterFavoriteRecipes }
      >
        Food
      </button>
      <button
        type="button"
        className="favorite-recipes-filter-button"
        data-testid="filter-by-drink-btn"
        name="drink"
        onClick={ filterFavoriteRecipes }
      >
        Drinks
      </button>
    </div>
  );
}

FavoriteRecipesFilter.propTypes = {
  filterFavoriteRecipes: PropTypes.func.isRequired,
};

export default FavoriteRecipesFilter;
