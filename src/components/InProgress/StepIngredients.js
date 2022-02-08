import React, { useContext, useEffect, useState } from 'react';

import { PropTypes } from 'prop-types';

import '../../css/RecipeIngredients.css';
import { useHistory } from 'react-router-dom';
import handleProgressResult from './handleProgressResult';
import handleRenderQuant from './handleRenderQuant';
import finishRecipe from './finishRecipe';
import MainContext from '../../context/main/MainContext';

function StepIngredients({ ingredients, quantities, recipe }) {
  const [checkbox, setCheckbox] = useState();
  const history = useHistory();
  const { finishRecipeButton } = useContext(MainContext);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (result !== null) {
      setCheckbox(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = JSON.parse(localStorage.getItem('inProgressRecipes'));

  if (!results) {
    const arr = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      arr.push({
        index: i,
        bool: false,
      });
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(arr));
  }

  function handleChange({ target }) {
    const index = Number(target.name);
    const urlFilter = window.location.pathname.split('/');
    if (checkbox !== null && checkbox !== undefined) {
      const arr = checkbox;
      arr[index].bool = !checkbox[index].bool;
      setCheckbox(arr);
      localStorage.setItem('inProgressRecipes', JSON.stringify(arr));
    }
    history.push(`/${urlFilter[1]}/${urlFilter[2]}/${urlFilter[3]}`);
  }

  const final = handleProgressResult(ingredients, checkbox);
  finishRecipe(final, recipe);
  finishRecipeButton(final);

  return (
    <div>
      {checkbox !== null
      && checkbox !== undefined
        ? (
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
                  checked={ checkbox[index].bool }
                  onChange={ handleChange }
                />
                {`${ingredient} ${handleRenderQuant(quantities, index)}`}
              </label>
            ))}
          </div>
        ) : (<p>loading</p>)}
    </div>
  );
}

StepIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(String).isRequired,
  quantities: PropTypes.arrayOf(String).isRequired,
  recipe: PropTypes.objectOf(String).isRequired,
};

export default StepIngredients;
