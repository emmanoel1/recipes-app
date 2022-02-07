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
      <main style={ mainStyle }>
        {foodIngredients.length > 0 && foodIngredients.map((ingredient, index) => {
          const { strIngredient: name } = ingredient;
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
