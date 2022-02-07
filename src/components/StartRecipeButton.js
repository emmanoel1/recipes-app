import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import '../css/StartRecipeButton.css';

function StartRecipeButton({ goTo, id }) {
  const history = useHistory();

  const [isFinished, setIsFinished] = useState(false);
  const [inProgress, setInProgress] = useState('');

  useEffect(() => {
    const progressFoods = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progressFoods === null) {
      setInProgress('Start Recipe');
    } else {
      setInProgress('Continue Recipe');
    }
    const finishedFoods = JSON.parse(localStorage.getItem('doneRecipes'));
    if (finishedFoods === null) {
      setIsFinished(false);
    } else {
      const foodFinishedStatus = finishedFoods.some((food) => food.id === id);
      setIsFinished(foodFinishedStatus);
    }
  }, [id]);

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
      {
        isFinished && null
      }
      {
        !isFinished && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe-button"
            onClick={ handleClick }
          >
            {`${inProgress}`}
          </button>
        )
      }
    </div>
  );
}

StartRecipeButton.propTypes = {
  goTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StartRecipeButton;
