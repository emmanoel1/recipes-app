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

describe('Testa a página FoodDetails', () => {
  const defaultPathAndRoute = { path: '/foods/:foodId', route: '/foods/52771' };

  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
    API.getFoodById.mockResolvedValue(oneMeal);
  });

  it('A página contém um título', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const pageTitle = await screen.findByRole(
      'heading', { name: 'Spicy Arrabiata Penne' },
    );
    expect(pageTitle).toBeInTheDocument();
  });
  it('A página contém uma imagem no Header', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const headerImg = await screen.findByTestId('recipe-photo');
    expect(headerImg).toBeInTheDocument();
  });
  it('A página contém uma categoria', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const recipeCategory = await screen.findByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
  });
  it('Existem botões de favoritar e compartilhar', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const shareBtn = await screen.findAllByAltText('share-button');
    expect(shareBtn).toHaveLength(2);
    expect(shareBtn[0]).toBeInTheDocument();
    expect(shareBtn[1]).toBeInTheDocument();
  });
  it('A página contém uma lista de ingredientes', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const ingredients = await screen.findByRole('heading', { name: 'Ingredients' });
    expect(ingredients).toBeInTheDocument();
  });
  it('Existe uma seção de instruções', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const instruction = await screen.findByRole('heading', { name: 'Instructions' });
    const text = await screen.findByTestId('instructions');
    expect(instruction).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  it('Existe uma seção de vídeo', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const videoHeader = await screen.findByRole('heading', { name: 'Video' });
    const video = await screen.findByTestId('video');
    expect(videoHeader).toBeInTheDocument();
    expect(video).toBeInTheDocument();
  });
  it('Existe uma seção de recomendados', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const recHeader = await screen.findByRole('heading', { name: 'Recommended' });
    const rec = await screen.findByTestId('0-recomendation-card');
    expect(recHeader).toBeInTheDocument();
    expect(rec).toBeInTheDocument();
  });
  it('Existe um botão de iniciar receita', async () => {
    RenderWithRouter(<FoodDetails />, defaultPathAndRoute);
    const startBtn = await screen.findByTestId('start-recipe-btn');
    expect(startBtn).toBeInTheDocument();
  });
  it('O botão redireciona corretamente', async () => {
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
