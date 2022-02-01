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
        {
          ingredients.map((ingredient, index) => (
            <li
              key={ index }
              className="ingredient-item-element"
              data-testid={ `${index}-ingredient-step` }
            >
              {
                `${ingredient} - ${quantities[index]}`
              }
            </li>
          ))
        }
      </div>
    </div>
  );
}

StepIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StepIngredients;
