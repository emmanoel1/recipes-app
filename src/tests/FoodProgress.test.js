import React from 'react';
import userEvent from '@testing-library/user-event';
import FoodProgress from '../pages/FoodProgress';
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
  const defaultPathandRoute = {
    path: '/foods/:foodId/in-progress',
    route: '/foods/52771/in-progress',
  };

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
    const { findByTestId } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const recipeTitle = await findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
  });
  it('A página contém uma imagem', async () => {
    const imgSrc = 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg';
    const { findByTestId } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const recipePhoto = await findByTestId('recipe-photo');
    expect(recipePhoto).toHaveAttribute('src', imgSrc);
  });
  it('A página possui botões de favoritar e compartilhar', async () => {
    const { findByTestId } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const shareBtn = await findByTestId('share-btn');
    const favoriteBtn = (await findByTestId('favorite-btn')).parentNode;

    expect(shareBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
  });
  it('O botão de favoritar opera corretamente', async () => {
    const localStorageContent = [{ id: '52771', alcoholicOrNot: '', type: 'food', nationality: 'Italian', category: 'Vegetarian', name: 'Spicy Arrabiata Penne', image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' }];
    const { findByTestId } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const favoriteBtn = (await findByTestId('favorite-btn')).parentNode;
    userEvent.click(favoriteBtn);
    const recipeOnLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(recipeOnLocalStorage).toEqual(localStorageContent);
  });
  it('A página contém uma categoria', async () => {
    const { findByRole } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const category = await findByRole('heading', { name: /vegetarian/i });
    expect(category).toBeInTheDocument();
  });
  it('A página contém uma lista de ingredientes', async () => {
    const {
      findByText,
      findAllByTestId,
    } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const INGREDIENTS_LENGTH = 8;
    const instructions = await findByText('Ingredients');
    const ingredients = await findAllByTestId(/ingredient-step/i);
    for (let i = 0; i < ingredients.length; i += 1) {
      expect(ingredients[i]).toBeInTheDocument();
    }
    expect(ingredients).toHaveLength(INGREDIENTS_LENGTH);
    expect(instructions).toBeInTheDocument();
  });
  it('A lista de ingredientes começa desmarcada', async () => {
    const {
      findAllByTestId,
    } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const ingredients = await findAllByTestId(/ingredient-step/i);
    for (let i = 0; i < ingredients.length; i += 1) {
      expect(ingredients[i].firstChild).not.toHaveAttribute('checked');
    }
  });
  it('A página contém um bloco de instruções', async () => {
    const {
      findByTestId,
      findByRole,
    } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const instructionsHeader = await findByRole('heading', { name: /instructions/i });
    const instructions = await findByTestId('instructions');
    expect(instructions).toBeInTheDocument();
    expect(instructionsHeader).toBeInTheDocument();
  });
  it('A página contém o botão correto', async () => {
    const {
      findByTestId,
    } = RenderWithRouter(<FoodProgress />, defaultPathandRoute);
    const finishRecipe = await findByTestId('finish-recipe-btn');
    expect(finishRecipe).toHaveTextContent(/finish recipe/i);
    expect(finishRecipe).toBeDisabled();
  });
});
