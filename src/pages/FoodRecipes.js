import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../context/main/MainContext';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';
import ShowCategories from '../components/ShowCategories';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function FoodRecipes() {
  const { meals, foodCategories } = useContext(MainContext);

  const [filteredMeals, setFilter] = useState([]);
  const [usedFilter, setUsedFilter] = useState('');

  useEffect(() => { setFilter(meals); }, [meals]);

  const handleClick = (category) => {
    if (usedFilter === category) {
      setFilter(meals);
      setUsedFilter('');
    } else if (category === 'all') {
      setFilter(meals);
      setUsedFilter('all');
    } else {
      API.getFoodPerCategory(category).then((e) => setFilter(e.meals));
      setUsedFilter(category);
    }
  };

  return (
    <div className="mainRecipesContainer">
      <Header
        title
        profile
        explore
        pageTitle="Foods"
      />
      <main className="mainContent">
        <ShowCategories
          categories={ foodCategories }
          handleClick={ handleClick }
        />
        {filteredMeals.length > 0 && filteredMeals.map((meal, index) => (
          index < RECIPES && (
            <Card
              index={ index }
              image={ meal.strMealThumb }
              id={ meal.idMeal }
              key={ meal.idMeal }
              name={ meal.strMeal }
              type="foods"
            />
          )
        ))}
      </main>
      <Footer />
    </div>
  );
}
export default FoodRecipes;
