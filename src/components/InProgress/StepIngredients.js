import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/RecipeIngredients.css';

function StepIngredients({ ingredients, quantities }) {
  return (
    <div>
      <div
        className="ingredients-container"
      >
        <h1
          className="ingredients-header"
        >
          Ingredients
        </h1>
        {ingredients.map((ingredient, index) => (
          <label
            data-testid={ `${index}-ingredient-step` }
            key={ index }
            htmlFor={ ingredient }
            onChange={ ({ target }) => {
              target.style.textDecoration = 'none';
            } }
          >
            <input
              type="checkbox"
              id={ ingredient }
              className="progress-item-element"
            />
            {
              `${ingredient} - ${quantities[index]}`
            }
          </label>
        ))}
      </div>
    </div>
  );
}

StepIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(String).isRequired,
  quantities: PropTypes.arrayOf(String).isRequired,
};

export default StepIngredients;
