import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
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

describe('Testa a página Login', () => {
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
    RenderWithRouter(<Login />);
    const loginTitle = await screen.findByText(/bem vindo ao/i);
    const secondTitle = await screen.findByText(/code and cooking/i);

    expect(loginTitle).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
  });
  it('Existem os inputs corretos', async () => {
    RenderWithRouter(<Login />);
    const emailInput = await screen.findByPlaceholderText(/enter your email/i);
    const passwordInput = await screen.findByPlaceholderText(/enter your password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('Existe um botão de login', async () => {
    RenderWithRouter(<Login />);
    const loginBtn = await screen.findByRole('button', { name: /login/i });
    expect(loginBtn).toBeInTheDocument();
  });
  it('O botão de login redireciona para a rota correta', async () => {
    const { history } = RenderWithRouter(<Login />);

    const loginBtn = await screen.findByRole('button', { name: /login/i });
    const emailInput = await screen.findByPlaceholderText(/enter your email/i);
    const passwordInput = await screen.findByPlaceholderText(/enter your password/i);
    userEvent.type(emailInput, 'adran.carnavale@gmail.com');
    userEvent.type(passwordInput, 'testedesenha123');
    userEvent.click(loginBtn);
    expect(history.location.pathname).toEqual('/foods');
  });
});
