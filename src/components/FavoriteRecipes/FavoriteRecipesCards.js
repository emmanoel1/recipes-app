import React from 'react';

import { PropTypes } from 'prop-types';

import FavoriteRecipeCard from './FavoriteRecipeCard';

import '../../css/DoneRecipesCards.css';

function FavoriteRecipesCards({ filteredFavoritedRecipes }) {
  return (
    <div
      className="favorite-recipes-cards-container"
    >
      {
        filteredFavoritedRecipes.map((recipe, index) => (
          <div
            key={ index }
          >
            <FavoriteRecipeCard
              recipe={ recipe }
              index={ index }
            />
          </div>
        ))
      }
    </div>
  );
}

FavoriteRecipesCards.propTypes = {
  filteredFavoritedRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoriteRecipesCards;
