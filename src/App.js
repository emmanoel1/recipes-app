import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderMainScreen from './Components/HeaderMainScreen';

// .

function App() {
  return (
    <HeaderMainScreen />
    // <Switch>
    //   <Route exact path="/" component={ Login } />
    //   <Route exact path="/foods" component={ FoodRecipes } />
    //   <Route exact path="/drinks" component={ DrinkRecipes } />
    //   <Route exact path="/foods/:id-da-receita" component={ FoodDetails } />
    //   <Route exact path="/drinks/:id-da-receita" component={ DrinkDetails } />
    //   <Route exact path="/foods/:id-da-receita/in-progress" component={ FoodProgress } />
    //   <Route
    //     exact
    //     path="/drinks/:id-da-receita/in-progress"
    //     component={ DrinkProgress }
    //   />
    //   <Route exact path="/explore" component={ Explore } />
    //   <Route exact path="/explore/foods" component={ ExploreFoods } />
    //   <Route exact path="/explore/drinks" component={ ExploreDrinks } />
    //   <Route
    //     exact
    //     path="/explore/foods/ingredients"
    //     component={ ExploreFoodIngredients }
    //   />
    //   <Route
    //     exact
    //     path="/explore/drinks/ingredients"
    //     component={ ExploreDrinkIngredients }
    //   />
    //   <Route
    //     exact
    //     path="/explore/foods/nationalities"
    //     component={ ExploreFoodNationalities }
    //   />
    //   <Route exact path="/profile" component={ Profile } />
    //   <Route exact path="/done-recipes" component={ DoneRecipes } />
    //   <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    //   <Route path="*" component={ NotFound } />
    // </Switch>
  );
}

export default App;
