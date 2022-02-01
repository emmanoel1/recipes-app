import React from 'react';
import './RecipeFinish.css';

function RecipeFinish() {
  function handleClick({ target }) {
    console.log(target);
  }

  return (
    <div className="finish-button-container">
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="finish-recipe-button"
        onClick={ handleClick }
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default RecipeFinish;
