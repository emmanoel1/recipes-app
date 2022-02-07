import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteRecipes from '../pages/FavoriteRecipes';
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

describe('Testa a página FavoriteRecipes', () => {
  const favoriteRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    },
  ];

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

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    RenderWithRouter(
      <FavoriteRecipes />,
    );
  });

  it('A página contém um header', async () => {
    const pageTitle = await screen.findByRole(
      'heading', { name: 'Favorite Recipes' },
    );
    const profileBtn = await screen.findByTestId('profile-top-btn');
    expect(pageTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });
  it('A página contém botões de filtro', async () => {
    const allFilter = await screen.findByTestId('filter-by-all-btn');
    const foodFilter = await screen.findByTestId('filter-by-food-btn');
    const drinkFilter = await screen.findByTestId('filter-by-drink-btn');

    expect(allFilter).toBeInTheDocument();
    expect(foodFilter).toBeInTheDocument();
    expect(drinkFilter).toBeInTheDocument();
  });
  it('Os botões de filtro funcionam corretamente', async () => {
    const allFilter = await screen.findByTestId('filter-by-all-btn');
    const arrabiata = await screen.findByText('Spicy Arrabiata Penne');
    const aquamarine = await screen.findByText('Aquamarine');

    userEvent.click(allFilter);
    expect(aquamarine).toBeInTheDocument();
    expect(arrabiata).toBeInTheDocument();
  });
  it('Exibe as receitas de comida corretamente', async () => {
    const arrabiata = await screen.findByText(/arrabiata/i);
    expect(arrabiata).toBeInTheDocument();
  });
  it('Exibe as receitas de bebida corretamente', async () => {
    const aquamarine = await screen.findByText(/aquamarine/i);
    expect(aquamarine).toBeInTheDocument();
  });
  it('As receitas possuem categorias', async () => {
    const arrabiata = await screen.findByText(/italian - vegetarian/i);
    expect(arrabiata).toBeInTheDocument();
  });
  it('As receitas possuem um botão de compartilhar', async () => {
    const arrabiata = await screen.findByTestId(/0-horizontal-share-btn/i);
    expect(arrabiata).toBeInTheDocument();
  });
  it('As receitas possuem um botão de favorito', async () => {
    const arrabiata = await screen.findByTestId(/0-horizontal-favorite-btn/i);
    expect(arrabiata).toBeInTheDocument();
  });
});
