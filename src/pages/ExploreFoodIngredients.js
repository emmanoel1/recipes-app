import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/main/MainContext';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

import '../css/MainContainerRecipes.css';

const RECIPES = 12;

function ExploreFoodIngredients({ history }) {
  const { foodIngredients, setFilteredMeals } = useContext(MainContext);

  const handleClick = (name) => {
    API.getFoodByIngredients(name).then((e) => {
      setFilteredMeals(e.meals);
      history.push('/foods');
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
        {foodIngredients.length > 0 && foodIngredients.map((ingredient, index) => {
          const { strIngredient: name } = ingredient;
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
                    `https://www.themealdb.com/images/ingredients/${name}-Small.png`
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

ExploreFoodIngredients.propTypes = ({
  history: PropTypes.shape().isRequired,
});

export default ExploreFoodIngredients;
