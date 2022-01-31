import React, { useContext } from 'react';
import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function FoodRecipes() {
  const { meals } = useContext(MainContext);

  return (
    <div className="mainRecipesContainer">
      <Header
        title
        profile
        explore
        pageTitle="Foods"
      />
      <main className="mainContent">
        {meals.length > 0 && meals.map((meal, index) => (
          index < RECIPES && (
            <Card
              index={ index }
              image={ meal.strMealThumb }
              key={ meal.idMeal }
              name={ meal.strMeal }
            />
          )
        ))}
      </main>
      <Footer />
    </div>
  );
}
export default FoodRecipes;
