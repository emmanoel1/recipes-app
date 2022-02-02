import React, { useContext } from 'react';

import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function ExploreFoodIngredients() {
  const { foodIngredients } = useContext(MainContext);

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Explore foodIngredients"
      />
      <main className="mainContent">
        {foodIngredients.length > 0 && foodIngredients.map((ingredient, index) => {
          const { strIngredient: name } = ingredient;
          return (
            index < RECIPES && (
              <Card
                cardType="ingredient"
                image={
                  `https://www.themealdb.com/images/ingredients/${name}-Small.png`
                }
                index={ index }
                key={ index }
                name={ name }
                path="/foods"
              />
            )
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
export default ExploreFoodIngredients;
