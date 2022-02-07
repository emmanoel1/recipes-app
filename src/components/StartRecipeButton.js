import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import '../css/StartRecipeButton.css';

function StartRecipeButton({ goTo, id }) {
  const history = useHistory();

  const [isFinished, setIsFinished] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    const finishedFoods = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressFoods = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(inProgressFoods);
    console.log(finishedFoods);
    if (finishedFoods === null) {
      setIsFinished(false);
    } else {
      const foodFinishedStatus = finishedFoods.some((food) => food.id === id);
      setIsFinished(foodFinishedStatus);
    }

    if (inProgressFoods === null) {
      setIsInProgress(false);
    } else {
      const foodInProgressStatus = inProgressFoods.some(
        (food) => food.idMeal === id || food.idDrink === id,
      );
      setIsInProgress(foodInProgressStatus);
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
        isInProgress && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe-button"
            onClick={ handleClick }
          >
            Continue Recipe
          </button>
        )
      }
      {
        !isFinished && !isInProgress && (
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe-button"
            onClick={ handleClick }
          >
            Start Recipe
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
