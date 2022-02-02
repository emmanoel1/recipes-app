import React from 'react';

import Header from '../components/Header';
import DoneRecipesFilter from '../components/DoneRecipes/DoneRecipesFilters';
import DoneRecipesCards from '../components/DoneRecipes/DoneRecipesCards';

import '../css/MainContainerRecipes.css';

function DoneRecipes() {
  return (
    <div>
      <Header
        profile
        title
        pageTitle="Done Recipes"
      />
      <div className="mainContent">
        <DoneRecipesFilter />
        <DoneRecipesCards />
      </div>
    </div>
  );
}
export default DoneRecipes;
