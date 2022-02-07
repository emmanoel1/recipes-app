import React from 'react';

import { PropTypes } from 'prop-types';

import RecipeCard from './RecipeCard';

import '../../css/DoneRecipesCards.css';

function DoneRecipesCards({ filteredDoneRecipes }) {
  return (
    <div
      className="done-recipes-cards-container"
    >
      {
        filteredDoneRecipes !== null && (
          filteredDoneRecipes.map((recipe, index) => (
            <div
              key={ index }
            >
              <RecipeCard
                recipe={ recipe }
                index={ index }
              />
            </div>
          ))
        )
      }
    </div>
  );
}

DoneRecipesCards.propTypes = {
  filteredDoneRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DoneRecipesCards;
