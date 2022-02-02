import React from 'react';

import { PropTypes } from 'prop-types';

import ShareButton from '../ShareButton';

import '../../css/RecipeCard.css';

function RecipeCard({ recipe, index }) {
  return (
    <div
      className="recipe-card-container"
    >
      <img
        data-testid={ `${index}-horizontal-image` }
        src={ recipe.image }
        alt={ recipe.name }
      />
      <p
        data-testid={ `${index}-horizontal-name` }
      >
        { recipe.name }
      </p>
      {
        recipe.type === 'drink'
          && (
            <p>
              {
                recipe.alcoholicOrNot
              }
            </p>
          )
      }
      {
        recipe.type === 'food'
          && (
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipe.category}
            </p>
          )
      }
      {
        recipe.type === 'food'
          && (
            <p>
              {
                recipe.nationality
              }
            </p>
          )
      }
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { recipe.doneDate }
      </p>
      {
        recipe.type === 'food'
          && recipe.tags.map(
            (tag, i) => (
              i < 2 && (
                <p
                  key={ i }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              )
            ),
          )
      }
      <ShareButton category={ `${recipe.type}s` } id={ recipe.id } />
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
