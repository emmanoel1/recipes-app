import React, { useState, useEffect } from 'react';

import { getFoodRecipes } from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function FoodRecipes() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFoodRecipes().then((e) => setMeals(e.meals));
  }, []);

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
