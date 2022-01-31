import React from 'react';

import { useHistory } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import '../css/StartRecipeButton.css';

function StartRecipeButton({ goTo, id }) {
  const history = useHistory();

  const handleClick = () => {
    if (goTo === 'foodProgress') {
      history.push(`/foods/${id}/in-progress`);
    }
    if (goTo === 'drinkProgress') {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div className="button-container">
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-recipe-button"
        onClick={ handleClick }
      >
        Start Recipe
      </button>
    </div>
  );
}

StartRecipeButton.propTypes = {
  goTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StartRecipeButton;
