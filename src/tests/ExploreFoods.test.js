import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExploreFoods from '../pages/ExploreFoods';
import RenderWithRouter from '../helpers/RenderWithRouter';
import * as API from '../services';

jest.mock('../services');
const meals = require('../../cypress/mocks/meals');
const drinks = require('../../cypress/mocks/drinks');
const mealCategories = require('../../cypress/mocks/mealCategories');
const drinkCategories = require('../../cypress/mocks/drinkCategories');
const mealIngredients = require('../../cypress/mocks/mealIngredients');
const drinkIngredients = require('../../cypress/mocks/drinkIngredients');
const oneMeal = require('../../cypress/mocks/oneMeal');
const oneDrink = require('../../cypress/mocks/oneDrink');
// const beefMeals = require('../../cypress/mocks/beefMeals');
// const breakfastMeals = require('../../cypress/mocks/breakfastMeals');
// const chickenMeals = require('../../cypress/mocks/chickenMeals');
// const dessertMeals = require('../../cypress/mocks/dessertMeals');
// const goatMeals = require('../../cypress/mocks/goatMeals');

describe('Testa a página ExploreFoods', () => {
  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
    API.getSurpriseFood.mockResolvedValue(oneMeal);
    API.getSurpriseDrink.mockResolvedValue(oneDrink);
    // API.getFoodPerCategory.mockResolvedValue();
    // API.getDrinkPerCategory.mockResolvedValue();

    RenderWithRouter(
      <ExploreFoods />,
    );
  });

  it('A página contém um header', async () => {
    const pageTitle = await screen.findByRole(
      'heading', { name: 'Explore Foods' },
    );
    const profileBtn = await screen.findByTestId('profile-top-btn');
    expect(pageTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });
  it('A página contém um footer', async () => {
    const drinksBtn = await screen.findByAltText('Go to drinks');
    const exploreBtn = await screen.findByAltText('Go to explore');
    const foodsBtn = await screen.findByAltText('Go to foods');

    expect(drinksBtn).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
    expect(foodsBtn).toBeInTheDocument();
  });
  it('Existe um link para explorar por ingrediente', async () => {
    const exploreByIng = await screen.findByRole('heading', { name: /by ingredient/i });
    const exploreByNat = await screen.findByRole('heading', { name: /by nationality/i });
    const surprise = await screen.findByRole('heading', { name: /surprise me/i });

    expect(exploreByIng).toBeInTheDocument();
    expect(exploreByNat).toBeInTheDocument();
    expect(surprise).toBeInTheDocument();
  });
});

describe('Testa as rotas da página ExploreFoods', () => {
  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
    API.getSurpriseFood.mockResolvedValue(oneMeal);
    API.getSurpriseDrink.mockResolvedValue(oneDrink);
    // API.getFoodPerCategory.mockResolvedValue();
    // API.getDrinkPerCategory.mockResolvedValue();
  });

  it('Explorar por ingredientes funciona corretamente', async () => {
    const { history } = RenderWithRouter(
      <ExploreFoods />,
    );

    const exploreByIng = await screen.findByRole('heading', { name: /by ingredient/i });
    userEvent.click(exploreByIng);
    history.push('/explore/foods/ingredients');
    expect(history.location.pathname).toEqual('/explore/foods/ingredients');
  });
  it('Explorar por nacionalidade funciona corretamente', async () => {
    const { history } = RenderWithRouter(
      <ExploreFoods />,
    );

    const exploreByNat = await screen.findByRole('heading', { name: /by nationality/i });
    userEvent.click(exploreByNat);
    history.push('/explore/foods/nationalities');
    expect(history.location.pathname).toEqual('/explore/foods/nationalities');
  });
  it('Link de receita surpresa funcipna corretamente', async () => {
    const { history } = RenderWithRouter(
      <ExploreFoods />,
    );

    const surprise = await screen.findByRole('heading', { name: /surprise me/i });
    userEvent.click(surprise);
    history.push('/explore/foods/52771');
    expect(history.location.pathname).toEqual('/explore/foods/52771');
  });
});
