import React from 'react';

import { PropTypes } from 'prop-types';

function RecipeCard({ image, category, name, doneDate, tags, index }) {
  return (
    <div>
      <img
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { category }
      </p>
      <p
        data-testid={ `${index}-horizontal-name` }
      >
        { name }
      </p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { doneDate }
      </p>
      {
        tags.map(
          (tag, i) => (
            <p
              key={ i }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              { tag }
            </p>
          ),
        )
      }
    </div>
  );
}

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
