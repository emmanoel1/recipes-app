import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExploreFoodNationalities from '../pages/ExploreFoodNationalities';
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
const areas = require('../../cypress/mocks/areas');
const japanese = require('../../cypress/mocks/japaneseMeals');

describe('Testa a página ExploreFoodNationalities', () => {
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
    API.getFoodNationalitiesList.mockResolvedValue(areas);
    API.getFoodByNationalities.mockResolvedValue(japanese);
  });

  it('A página contém um header', async () => {
    RenderWithRouter(<ExploreFoodNationalities />);
    const pageTitle = await screen.findByRole(
      'heading', { name: 'Explore Nationalities' },
    );
    const profileBtn = await screen.findByTestId('profile-top-btn');
    const exploreBtn = await screen.findByTestId('search-top-btn');
    expect(pageTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
  });
  it('A página contém um footer', async () => {
    RenderWithRouter(<ExploreFoodNationalities />);
    const drinksBtn = await screen.findByAltText('Go to drinks');
    const exploreBtn = await screen.findByAltText('Go to explore');
    const foodsBtn = await screen.findByAltText('Go to foods');

    expect(drinksBtn).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
    expect(foodsBtn).toBeInTheDocument();
  });
  it('A página contém um dropdown', async () => {
    RenderWithRouter(<ExploreFoodNationalities />);
    const dropdown = await screen.findByTestId(/dropdown/i);
    expect(dropdown).toBeInTheDocument();
  });
  it('As opções de prato são exibidas', async () => {
    RenderWithRouter(<ExploreFoodNationalities />);
    const recipes = await screen.findAllByTestId(/recipe-card/i);
    const RECIPES_LENGTH = 12;
    expect(recipes).toHaveLength(RECIPES_LENGTH);
    expect((recipes[0]).firstChild).toHaveTextContent(/corba/i);
  });
  it('Ao selecionar outro filtro, as receitas mudam', async () => {
    RenderWithRouter(<ExploreFoodNationalities />);
    const selector = await screen.findByTestId(/dropdown/i);
    userEvent.selectOptions(selector, 'Japanese');
    const recipes = await screen.findAllByTestId(/recipe-card/i);
    expect((recipes[0]).firstChild).toHaveTextContent(/karaage/i);
  });
});
