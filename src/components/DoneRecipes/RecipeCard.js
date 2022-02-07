import React, { useState } from 'react';

import { PropTypes } from 'prop-types';

import shareIcon from '../../images/shareIcon.svg';

import '../../css/RecipeCard.css';
import '../../css/ShareButton.css';

function RecipeCard({ recipe, index }) {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (type, id) => {
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    // eslint-disable-next-line no-alert
    setCopy(!copy);
  };

  return (
    <div
      className="recipe-card-container"
    >
      <a
        href={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
        />
      </a>
      <a
        href={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
      >
        <p
          data-testid={ `${index}-horizontal-name` }
        >
          { recipe.name }
        </p>
      </a>
      {
        recipe.type === 'drink'
          && (
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
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
              {`${recipe.nationality} - ${recipe.category}`}
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
          && recipe.tags !== ''
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
      {
        copy
          ? (
            <button
              className="share-button"
              onClick={ () => copyToClipboard(recipe.type, recipe.id) }
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
            >
              Link copied!
            </button>
          )
          : (
            <button
              className="share-button"
              type="button"
              onClick={ () => copyToClipboard(recipe.type, recipe.id) }
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
            >
              <img
                className="share-button-icon"
                src={ shareIcon }
                alt="share-button"
              />
            </button>
          )
      }
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
