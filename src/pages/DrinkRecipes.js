import React, { useContext } from 'react';

import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function DrinkRecipes() {
  const { drinks } = useContext(MainContext);

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
