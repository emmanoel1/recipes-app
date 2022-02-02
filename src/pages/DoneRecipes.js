import React from 'react';

import Header from '../components/Header';
import DoneRecipesFilter from '../components/DoneRecipes/DoneRecipesFilters';
import DoneRecipesCards from '../components/DoneRecipes/DoneRecipesCards';

import '../css/MainContainerRecipes.css';

function DoneRecipes() {
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
  const [filteredDoneRecipes, setFilteredDoneRecipes] = useState([]);

  useEffect(() => {
    setDoneRecipes(doneFoods);
    setFilteredDoneRecipes(doneFoods);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Done Recipes"
      />
      <div className="mainContent">
        <DoneRecipesFilter
          filterDoneRecipes={ filterDoneRecipes }
        />
        <DoneRecipesCards
          filteredDoneRecipes={ filteredDoneRecipes }
        />
      </div>
    </div>
  );
}
export default DoneRecipes;
