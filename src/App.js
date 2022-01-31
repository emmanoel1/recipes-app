import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import MainProvider from './context/main/MainProvider';

import Login from './pages/Login';
import DrinkRecipes from './pages/DrinkRecipes';
import FoodRecipes from './pages/FoodRecipes';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import ExploreFoodNationalities from './pages/ExploreFoodNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';

function App() {
  return (
    <MainProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ FoodRecipes } />
        <Route exact path="/drinks" component={ DrinkRecipes } />
        <Route
          exact
          path="/foods/:foodId"
          render={ (props) => <FoodDetails { ...props } /> }
        />
        <Route
          exact
          path="/drinks/:drinkId"
          render={ (props) => <DrinkDetails { ...props } /> }
        />
        <Route
          exact
          path="/foods/:foodId/in-progress"
          render={ (props) => <FoodProgress { ...props } /> }
        />
        <Route
          exact
          path="/drinks/:drinkId/in-progress"
          render={ (props) => <DrinkProgress { ...props } /> }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinkIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </MainProvider>
  );
}

export default App;
