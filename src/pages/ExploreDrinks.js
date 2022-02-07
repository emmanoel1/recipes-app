import React, { useState, useEffect } from 'react';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';

const titleStyle = {
  width: 'fit-content',
  margin: '10px',
  justifySelf: 'center',
};

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
        <a style={ titleStyle } href="/explore/drinks/ingredients">
          <h1 className="title" data-testid="explore-by-ingredient">
            By Ingredient
          </h1>
        </a>
        <a style={ titleStyle } href={ `/drinks/${randomDrink}` }>
          <h1 className="title" data-testid="explore-surprise">
            Surprise me!
          </h1>
        </a>
      </main>
      <Footer />
    </div>
  );
}
export default ExploreDrinks;
