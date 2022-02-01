import React, { useState, useEffect } from 'react';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  const [randomMeal, setRandomMeal] = useState({});

  useEffect(() => {
    API.getSurpriseFood().then((e) => setRandomMeal(e.meals[0].idMeal));
  }, []);
  return (
    <div>
      <Header
        profile
        title
        pageTitle="Explore Foods"
      />
      <main className="mainContent">
        <a href="/explore/foods/ingredients">
          <h1 data-testid="explore-by-ingredient">
            By Ingredient
          </h1>
        </a>
        <a href="/explore/foods/nationalities">
          <h1 data-testid="explore-by-nationality">
            By Nationality
          </h1>
        </a>
        <a href={ `/foods/${randomMeal}` }>
          <h1 data-testid="explore-surprise">
            Surprise me!
          </h1>
        </a>
      </main>
      <Footer />
    </div>
  );
}
export default ExploreFoods;
