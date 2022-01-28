import React from 'react';

import { PropTypes } from 'prop-types';

import '../../css/FoodIngredients.css';

function FoodIngredients({ ingredients, quantities }) {
  return (
    <div
      className="ingredients-container"
    >
      {
        ingredients.map((ingredient, index) => (
          <li
            key={ index }
            className="ingredient-item-element"
          >
            {
              `${ingredient} - ${quantities[index]}`
            }
          </li>
        ))
      }
    </div>
  );
}

FoodIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  quantities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodIngredients;
