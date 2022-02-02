import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../context/main/MainContext';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';
import ShowCategories from '../components/ShowCategories';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function DrinkRecipes() {
  const { drinks, drinkCategories } = useContext(MainContext);

  const [filteredDrinks, setFilter] = useState([]);
  const [usedFilter, setUsedFilter] = useState('');

  useEffect(() => { setFilter(drinks); }, [drinks]);

  const handleClick = (category) => {
    if (usedFilter === category) {
      setFilter(drinks);
      setUsedFilter('');
    } else if (category === 'all') {
      setFilter(drinks);
      setUsedFilter('all');
    } else {
      API.getDrinkPerCategory(category).then((e) => setFilter(e.drinks));
      setUsedFilter(category);
    }
  };

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
        />
        {filteredDrinks.length > 0 && filteredDrinks.map((drink, index) => {
          const { strDrinkThumb: image, strDrink: name, idDrink: id } = drink;
          return (
            index < RECIPES && (
              <Card
                cardType="recipe"
                image={ image }
                index={ index }
                key={ index }
                name={ name }
                path={ `/drinks/${id}` }
              />
            )
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
export default DrinkRecipes;
