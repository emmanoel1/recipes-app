import React, { useContext } from 'react';

import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function ExploreDrinkIngredients() {
  const { drinkIngredients } = useContext(MainContext);

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Explore Ingredients"
      />
      <main className="mainContent">
        {drinkIngredients.length > 0 && drinkIngredients.map((ingredient, index) => {
          const { strIngredient1 } = ingredient;
          return (
            index < RECIPES && (
              <Card
                cardType="ingredient"
                image={
                  `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.pngg`
                }
                index={ index }
                key={ index }
                name={ strIngredient1 }
                path="/drinks"
              />
            )
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
export default ExploreDrinkIngredients;
