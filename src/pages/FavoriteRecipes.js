import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import FavoriteRecipesFilter from '../components/FavoriteRecipes/FavoriteRecipesFilter';
import FavoriteRecipesCards from '../components/FavoriteRecipes/FavoriteRecipesCards';

function FavoriteRecipes() {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]);
  const [filteredFavoritedRecipes, setFilteredFavoritedRecipes] = useState([]);

  useEffect(() => {
    const favoritedRecipesOnLocalStorage = JSON.parse(
      localStorage.getItem('favoriteRecipes'),
    );
    console.log(favoritedRecipesOnLocalStorage);
    setFavoritedRecipes(favoritedRecipesOnLocalStorage);
    setFilteredFavoritedRecipes(favoritedRecipesOnLocalStorage);
  }, []);

  const filterFavoriteRecipes = ({ target: { name } }) => {
    const filterFavoriteRecipesObject = {
      all: () => setFilteredFavoritedRecipes(favoritedRecipes),
      food: () => setFilteredFavoritedRecipes(
        favoritedRecipes.filter((r) => r.type !== 'drink'),
      ),
      drink: () => setFilteredDoneRecipes(
        favoritedRecipes.filter((r) => r.type !== 'food'),
      ),
    };

    return filterFavoriteRecipesObject[name]();
  };

  return (
    <div>
      <Header
        profile
        title
        pageTitle="Favorite Recipes"
      />
      <div className="mainContent">
        <FavoriteRecipesFilter
          filterFavoriteRecipes={ filterFavoriteRecipes }
        />
        {
          filteredFavoritedRecipes.length > 0 && (
            <FavoriteRecipesCards
              filteredFavoritedRecipes={ filteredFavoritedRecipes }
            />
          )
        }
      </div>
    </div>
  );
}
export default FavoriteRecipes;
