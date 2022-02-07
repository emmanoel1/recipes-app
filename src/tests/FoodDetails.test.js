import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FoodDetails from '../pages/FoodDetails';
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
      <FoodDetails />,
      {
        path: 'foods/:foodId',
        route: 'foods/52771',
      },
    );
  });

  it('A página contém um título', async () => {
    const pageTitle = await screen.findByRole(
      'heading', { name: 'Spicy Arrabiata Penne' },
    );
    expect(pageTitle).toBeInTheDocument();
  });
  it('A página contém uma imagem no Header', async () => {
    const headerImg = await screen.findByTestId('recipe-photo');
    expect(headerImg).toBeInTheDocument();
  });
  it('A página contém uma categoria', async () => {
    const recipeCategory = await screen.findByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
  });
  it('Existem botões de favoritar e compartilhar', async () => {
    const shareBtn = await screen.findAllByAltText('share-button');
    expect(shareBtn).toHaveLength(2);
    expect(shareBtn[0]).toBeInTheDocument();
    expect(shareBtn[1]).toBeInTheDocument();
  });
  it('A página contém uma lista de ingredientes', async () => {
    const ingredients = await screen.findByRole('heading', { name: 'Ingredients' });
    expect(ingredients).toBeInTheDocument();
  });
  it('Existe uma seção de instruções', async () => {
    const instruction = await screen.findByRole('heading', { name: 'Instructions' });
    const text = await screen.findByTestId('instructions');
    expect(instruction).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  it('Existe uma seção de vídeo', async () => {
    const videoHeader = await screen.findByRole('heading', { name: 'Video' });
    const video = await screen.findByTestId('video');
    expect(videoHeader).toBeInTheDocument();
    expect(video).toBeInTheDocument();
  });
  it('Existe uma seção de recomendados', async () => {
    const recHeader = await screen.findByRole('heading', { name: 'Recommended' });
    const rec = await screen.findByTestId('0-recomendation-card');
    expect(recHeader).toBeInTheDocument();
    expect(rec).toBeInTheDocument();
  });
  it('Existe um botão de iniciar receita', async () => {
    const startBtn = await screen.findByTestId('start-recipe-btn');
    expect(startBtn).toBeInTheDocument();
  });
});

describe('Testa o Redirecionamento dos links da página Food Details', () => {
  it('O botão redireciona corretamente', async () => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
    const { history } = RenderWithRouter(
      <FoodDetails />,
      {
        path: '/foods/:foodId',
        route: '/foods/52771',
      },
    );
    const startBtn = await screen.findByTestId('start-recipe-btn');
    userEvent.click(startBtn);
    expect(history.location.pathname).toEqual('/foods/52771/in-progress');
  });
});
