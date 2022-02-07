import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
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
// const beefMeals = require('../../cypress/mocks/beefMeals');
// const breakfastMeals = require('../../cypress/mocks/breakfastMeals');
// const chickenMeals = require('../../cypress/mocks/chickenMeals');
// const dessertMeals = require('../../cypress/mocks/dessertMeals');
// const goatMeals = require('../../cypress/mocks/goatMeals');

describe('Testa a página FoodDetails', () => {
  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
    // API.getFoodPerCategory.mockResolvedValue();
    // API.getDrinkPerCategory.mockResolvedValue();

    RenderWithRouter(
      <Profile />,
    );
  });

  it('A página contém um Header', async () => {
    const profileBtn = await screen.findByTestId('profile-top-btn');
    const pageTitle = await screen.findByTestId('page-title');
    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('A página mostra o e-mail do usuário', async () => {
    const userEmail = await screen.findByTestId('profile-email');
    expect(userEmail).toBeInTheDocument();
  });
  it('A página contém os botões corretos', async () => {
    const doneBtn = await screen.findByRole('button', { name: /done recipes/i });
    const favBtn = await screen.findByRole('button', { name: /favorite recipes/i });
    const logoutBtn = await screen.findByRole('button', { name: /logout/i });
    expect(doneBtn).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });
  it('A página contem um footer', async () => {
    const drinksBtn = await screen.findByAltText('Go to drinks');
    const explore = await screen.findByAltText('Go to explore');
    const foods = await screen.findByAltText('Go to foods');

    expect(drinksBtn).toBeInTheDocument();
    expect(explore).toBeInTheDocument();
    expect(foods).toBeInTheDocument();
  });
});

describe('Testa as rotas da página foodDetails', () => {
  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
    // API.getFoodPerCategory.mockResolvedValue();
    // API.getDrinkPerCategory.mockResolvedValue();
  });

  it('é realizado o direcionamento para as receitas feitas', async () => {
    const { history } = RenderWithRouter(
      <Profile />,
    );
    const doneBtn = await screen.findByRole('button', { name: /done recipes/i });
    userEvent.click(doneBtn);
    expect(history.location.pathname).toEqual('/done-recipes');
  });
  it('é realizado o direcionamento para as receitas favoritas', async () => {
    const { history } = RenderWithRouter(
      <Profile />,
    );
    const favBtn = await screen.findByRole('button', { name: /favorite recipes/i });
    userEvent.click(favBtn);
    expect(history.location.pathname).toEqual('/favorite-recipes');
  });
  it('é realizado o direcionamento para o login', async () => {
    const { history } = RenderWithRouter(
      <Profile />,
    );
    const logoutBtn = await screen.findByRole('button', { name: /logout/i });
    userEvent.click(logoutBtn);
    expect(history.location.pathname).toEqual('/');
  });
});
