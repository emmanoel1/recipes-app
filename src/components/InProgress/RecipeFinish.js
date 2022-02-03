import React from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './RecipeFinish.css';

function RecipeFinish({ goTo, id }) {
  const history = useHistory();

  function handleClick() {
    if (goTo === 'foodProgress') {
      history.push(`/foods/${id}/done-recipe`);
    }
    if (goTo === 'drinkProgress') {
      history.push(`/drinks/${id}/done-recipe`);
    }
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

RecipeFinish.propTypes = {
  goTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeFinish;
