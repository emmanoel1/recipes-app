import React from 'react';

import '../../css/DoneRecipesFilter.css';

function DoneRecipesFilter() {
  return (
    <div
      className="done-recipes-filter-container"
    >
      <button
        type="button"
        className="done-recipes-filter-button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        className="done-recipes-filter-button"
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        className="done-recipes-filter-button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

export default DoneRecipesFilter;
