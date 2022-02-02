import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/DoneRecipesFilter.css';

function DoneRecipesFilter({ filterDoneRecipes }) {
  return (
    <div
      className="done-recipes-filter-container"
    >
      <button
        type="button"
        className="done-recipes-filter-button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ filterDoneRecipes }
      >
        All
      </button>
      <button
        className="done-recipes-filter-button"
        type="button"
        data-testid="filter-by-food-btn"
        name="food"
        onClick={ filterDoneRecipes }
      >
        Food
      </button>
      <button
        type="button"
        className="done-recipes-filter-button"
        data-testid="filter-by-drink-btn"
        name="drink"
        onClick={ filterDoneRecipes }
      >
        Drinks
      </button>
    </div>
  );
}

DoneRecipesFilter.propTypes = {
  filterDoneRecipes: PropTypes.func.isRequired,
};

export default DoneRecipesFilter;
