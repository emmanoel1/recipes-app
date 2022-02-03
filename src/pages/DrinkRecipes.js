import React, { useContext } from 'react';
import MainContext from '../context/main/MainContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';
import ShowCategories from '../components/ShowCategories';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function DrinkRecipes() {
  const { drinkCategories, filteredDrinks, handleClick } = useContext(MainContext);

  return (
    <div className="mainRecipesContainer">
      <Header
        title
        profile
        explore
        pageTitle="Drinks"
      />
      <main className="mainContent">
        <ShowCategories
          categories={ drinkCategories }
          handleClick={ handleClick }
          type="drink"
        />
        {filteredDrinks.length > 0 && filteredDrinks.map((drink, index) => {
          const { strDrinkThumb: image, strDrink: name, idDrink: id } = drink;
          return (
            index < RECIPES && (
              <a key={ index } href={ `/drinks/${id}` }>
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
      </main>
      <Footer />
    </div>
  );
}
export default DrinkRecipes;
