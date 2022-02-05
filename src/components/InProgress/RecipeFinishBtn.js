import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './RecipeFinish.css';
import MainContext from '../../context/main/MainContext';

function RecipeFinishBtn() {
  const history = useHistory();
  const { finishRecipeBtn: disabled } = useContext(MainContext);

  function handleClick() {
    history.push('/done-recipes');
  }

  return (
    <div className="finish-button-container">
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="finish-recipe-button"
        onClick={ handleClick }
        disabled={ disabled }
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default RecipeFinishBtn;
