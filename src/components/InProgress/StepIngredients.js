import React, { useEffect, useState } from 'react';

import { PropTypes } from 'prop-types';

import '../../css/RecipeIngredients.css';

function StepIngredients({ ingredients, quantities }) {
  const [checkbox, setCheckbox] = useState([]);
  // const [mount, setMount] = useState([]);

  // useEffect(() => {
  //   const results = JSON.parse(localStorage.getItem('recipeProgress'));
  //   setMount(results);
  // }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      arr.push({
        index: i,
        bool: false,
      });
    }
    setCheckbox(arr);
  }, [ingredients]);

  function handleChange({ target }) {
    const index = Number(target.name);
    const arr = checkbox;
    arr[index].bool = !checkbox[index].bool;
    setCheckbox(arr);
    localStorage.setItem('recipeProgress', JSON.stringify(arr));
  }
  const results = JSON.parse(localStorage.getItem('recipeProgress'));
  console.log(results);

  return (
    <div>
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
              checked={ false }
              onChange={ handleChange }
            />
            {`${ingredient} - ${quantities[index]}`}
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
