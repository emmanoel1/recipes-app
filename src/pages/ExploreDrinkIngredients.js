import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/main/MainContext';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function ExploreDrinkIngredients({ history }) {
  const { drinkIngredients, setFilteredDrinks } = useContext(MainContext);

  const handleClick = (name) => {
    API.getDrinkByIngredients(name).then((e) => {
      setFilteredDrinks(e.drinks);
      history.push('/drinks');
    });
  };

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Explore Ingredients"
      />
      <main className="mainContent">
        {drinkIngredients.length > 0 && drinkIngredients.map((ingredient, index) => {
          const { strIngredient1: name } = ingredient;
          return (
            index < RECIPES && (
              <button
                className="explore-button"
                key={ index }
                onClick={ () => handleClick(name) }
                type="button"
              >
                <Card
                  cardType="ingredient"
                  image={
                    `https://www.thecocktaildb.com/images/ingredients/${name}-Small.pngg`
                  }
                  index={ index }
                  name={ name }
                />
              </button>
            )
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

ExploreDrinkIngredients.propTypes = ({
  history: PropTypes.shape().isRequired,
});

export default ExploreDrinkIngredients;
