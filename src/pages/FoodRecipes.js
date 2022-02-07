import React, { useContext } from 'react';
import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';
import ShowCategories from '../components/ShowCategories';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

const recipesContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

function FoodRecipes() {
  const { foodCategories, filteredMeals, handleClick } = useContext(MainContext);

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
          type="food"
        />
        <div style={ recipesContentStyle }>
          {filteredMeals.length > 0 && filteredMeals.map((meal, index) => {
            const { strMealThumb: image, strMeal: name, idMeal: id } = meal;
            return (
              index < RECIPES && (
                <a
                  key={ index }
                  href={ `/foods/${id}` }
                >
                  <Card
                    cardType="recipe"
                    image={ image }
                    index={ index }
                    name={ name }
                  />
                </a>
              )
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default FoodRecipes;
