import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../context/main/MainContext';

import * as API from '../services';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/CardComponents/Card';

const RECIPES = 12;

const mainStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  margin: '0 auto',
  paddingBottom: '70px',
  paddingTop: '90px',
  top: '50px',
  width: '85%',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const buttonStyle = {
  height: 'fit-content',
  width: '90%',
  maxWidth: '300px',
  maxHeight: '300px',
  margin: '0 auto',
  marginTop: '15px',
};

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
      <main style={ mainStyle }>
        {drinkIngredients.length > 0 && drinkIngredients.map((ingredient, index) => {
          const { strIngredient1: name } = ingredient;
          return (
            index < RECIPES && (
              <button
                className="button"
                key={ index }
                onClick={ () => handleClick(name) }
                type="button"
                style={ buttonStyle }
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
