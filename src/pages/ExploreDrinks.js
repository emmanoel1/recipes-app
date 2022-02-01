import React, { useState, useEffect } from 'react';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  const [randomDrink, setRandomDrink] = useState({});

  useEffect(() => {
    API.getSurpriseDrink().then((e) => setRandomDrink(e.drinks[0].idDrink));
  }, []);
  return (
    <div>
      <Header
        profile
        title
        pageTitle="Explore Drinks"
      />
      <main className="mainContent">
        <a href="/explore/drinks/ingredients">
          <h1 data-testid="explore-by-ingredient">
            By Ingredient
          </h1>
        </a>
        <a href={ `/drinks/${randomDrink}` }>
          <h1 data-testid="explore-surprise">
            Surprise me!
          </h1>
        </a>
      </main>
      <Footer />
    </div>
  );
}
export default ExploreDrinks;
