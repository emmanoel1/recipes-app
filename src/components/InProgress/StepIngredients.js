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
          <label key={ index } htmlFor={ ingredient }>
            <input
              type="checkbox"
              id={ ingredient }
              className="progress-item-element"
              data-testid={ `${index}-ingredient-step` }
              onChange={ ({ target }) => {
                target.style.textDecoration = 'line-through';
              } }
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
