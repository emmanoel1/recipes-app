import React, { useState, useEffect } from 'react';

import { getDrinkRecipes } from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function DrinkRecipes() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    getDrinkRecipes().then((e) => setDrinks(e.drinks));
  }, []);

  return (
    <div className="mainRecipesContainer">
      <Header
        title
        profile
        explore
        pageTitle="Drinks"
      />
      <main className="mainContent">
        {drinks.length > 0 && drinks.map((meal, index) => (
          index < RECIPES && (
            <Card
              index={ index }
              image={ meal.strDrinkThumb }
              key={ meal.idDrink }
              name={ meal.strDrink }
            />
          )
        ))}
      </main>
      <Footer />
    </div>
  );
}
export default DrinkRecipes;
