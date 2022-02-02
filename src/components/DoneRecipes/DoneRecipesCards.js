import React, { useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';

function DoneRecipesCards() {
  const doneFoods = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    setDoneRecipes(doneFoods);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {
        doneRecipes.map((recipe, index) => (
          <div
            key={ index }
          >
            {
              recipe.type === 'food'
                ? (
                  <RecipeCard
                    index={ index }
                    image={ recipe.image }
                    category={ recipe.category }
                    name={ recipe.name }
                    doneDate={ recipe.doneDate }
                    tags={ recipe.tags }
                  />
                )
                : (
                  <RecipeCard
                    index={ index }
                    image={ recipe.image }
                    category={ recipe.category }
                    name={ recipe.name }
                    doneDate={ recipe.doneDate }
                    tags={ recipe.tags }
                  />
                )
            }
          </div>
        ))
      }
    </div>
  );
}

export default DoneRecipesCards;
