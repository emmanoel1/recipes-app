import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import DoneRecipesFilter from '../components/DoneRecipes/DoneRecipesFilters';
import DoneRecipesCards from '../components/DoneRecipes/DoneRecipesCards';

import '../css/MainContainerRecipes.css';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredDoneRecipes, setFilteredDoneRecipes] = useState([]);

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    setFilteredDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterDoneRecipes = ({ target: { name } }) => {
    const filterDoneRecipesObject = {
      all: () => setFilteredDoneRecipes(doneRecipes),
      food: () => setFilteredDoneRecipes(
        doneRecipes.filter((r) => r.type !== 'drink'),
      ),
      drink: () => setFilteredDoneRecipes(
        doneRecipes.filter((r) => r.type !== 'food'),
      ),
    };

    return filterDoneRecipesObject[name]();
  };

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Done Recipes"
      />
      <div className="mainContent">
        <DoneRecipesFilter
          filterDoneRecipes={ filterDoneRecipes }
        />
        <DoneRecipesCards
          filteredDoneRecipes={ filteredDoneRecipes }
        />
      </div>
    </div>
  );
}
export default DoneRecipes;
