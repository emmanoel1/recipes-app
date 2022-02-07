import React, { useContext, useEffect, useState } from 'react';

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

function ExploreFoodNacionalities() {
  const { filteredMeals } = useContext(MainContext);

  const [nationalities, setNationalities] = useState([]);
  const [meals, setMeals] = useState([]);
  const [nationality, setNationality] = useState('all');

  useEffect(() => {
    API.getFoodNationalitiesList().then((e) => setNationalities(e.meals));
    setMeals(filteredMeals);
  }, [filteredMeals]);

  const handleChange = ({ target }) => {
    if (target.value === 'all') {
      setMeals(filteredMeals);
      setNationality('all');
    } else {
      setNationality(target.value);
      API.getFoodByNationalities(target.value).then((e) => setMeals(e.meals));
    }
  };

  return (
    <div>
      <Header
        profile
        title
        explore
        pageTitle="Explore Nationalities"
      />
      <main style={ mainStyle }>
        <div className="select is-fullwidth">
          <select
            data-testid="explore-by-nationality-dropdown"
            value={ nationality }
            onChange={ handleChange }
          >
            <option
              data-testid="All-option"
              selected
              value="all"
            >
              All
            </option>
            {nationalities.map((e, index) => {
              const { strArea: name } = e;
              return (
                <option
                  data-testid={ `${name}-option` }
                  key={ index }
                  value={ name }
                >
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        {meals.length > 0 && meals.map((meal, index) => {
          const { strMealThumb: image, strMeal: name, idMeal: id } = meal;
          return (
            index < RECIPES && (
              <a key={ index } href={ `/foods/${id}` }>
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
export default ExploreFoodNacionalities;
