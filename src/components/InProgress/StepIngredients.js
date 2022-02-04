import React, { useEffect, useState } from 'react';

import { PropTypes } from 'prop-types';

import '../../css/RecipeIngredients.css';

function StepIngredients({ ingredients, quantities }) {
  const [checkbox, setCheckbox] = useState();
  const results = JSON.parse(localStorage.getItem('recipeProgress'));

  if (results === null) {
    const arr = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      arr.push({
        index: i,
        bool: false,
      });
    }
    setCheckbox(results);
    localStorage.setItem('recipeProgress', JSON.stringify(arr));
  }

  const handleChange = ({ target }) => {
    const index = Number(target.name);
    const arr = checkbox;
    if (arr !== null && arr !== undefined) {
      arr[index].bool = !checkbox[index].bool;
      setCheckbox(arr);
      localStorage.setItem('recipeProgress', JSON.stringify(arr));
    }
    const result = JSON.parse(localStorage.getItem('recipeProgress'));
    target.checked = result[index].bool;
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('recipeProgress'));
    if (result !== null) {
      setCheckbox(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {results !== null && checkbox !== undefined && checkbox !== null ? (
        <div className="ingredients-container">
          <h1 className="ingredients-header">Ingredients</h1>
          {ingredients.map((ingredient, index) => (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              htmlFor={ ingredient }
              className="progress-item-element"
            >
              <input
                type="checkbox"
                id={ ingredient }
                name={ index }
                checked={ results[index].bool }
                onChange={ handleChange }
              />
              {`${ingredient} - ${quantities[index]}`}
            </label>
          ))}
        </div>) : (<p>loading</p>)}
    </div>
  );
}

StepIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(String).isRequired,
  quantities: PropTypes.arrayOf(String).isRequired,
};

export default StepIngredients;
