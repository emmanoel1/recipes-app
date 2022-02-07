import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FoodRecipes from '../pages/FoodRecipes';
import RenderWithRouter from '../helpers/RenderWithRouter';
import * as API from '../services';

jest.mock('../services');
const meals = require('../../cypress/mocks/meals');
const drinks = require('../../cypress/mocks/drinks');
const mealCategories = require('../../cypress/mocks/mealCategories');
const drinkCategories = require('../../cypress/mocks/drinkCategories');
const mealIngredients = require('../../cypress/mocks/mealIngredients');
const drinkIngredients = require('../../cypress/mocks/drinkIngredients');
const beefMeals = require('../../cypress/mocks/beefMeals');
const breakfastMeals = require('../../cypress/mocks/breakfastMeals');
const chickenMeals = require('../../cypress/mocks/chickenMeals');
const dessertMeals = require('../../cypress/mocks/dessertMeals');
const goatMeals = require('../../cypress/mocks/goatMeals');

describe('Testa a página FoodRecipes', () => {
  beforeEach(() => {
    API.getFoodRecipes.mockResolvedValue(meals);
    API.getDrinkRecipes.mockResolvedValue(drinks);
    API.getFoodCategories.mockResolvedValue(mealCategories);
    API.getDrinkCategories.mockResolvedValue(drinkCategories);
    API.getFoodIngredientsList.mockResolvedValue(mealIngredients);
    API.getDrinkIngredientsList.mockResolvedValue(drinkIngredients);
  });

  it('A página contém um header', async () => {
    RenderWithRouter(<FoodRecipes />);
    const profileBtn = await screen.findByTestId('profile-top-btn');
    const pageTitle = await screen.findByRole('heading', { name: /foods/i });
    const exploreBtn = await screen.findByAltText(/search-button/i);
    expect(profileBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
  });
  it('A página contém um footer', async () => {
    RenderWithRouter(<FoodRecipes />);
    const drinksBtn = await screen.findByAltText('Go to drinks');
    const exploreBtn = await screen.findByAltText('Go to explore');
    const foodsBtn = await screen.findByAltText('Go to foods');

    expect(drinksBtn).toBeInTheDocument();
    expect(exploreBtn).toBeInTheDocument();
    expect(foodsBtn).toBeInTheDocument();
  });
  it('A página contém botões de filtro', async () => {
    RenderWithRouter(<FoodRecipes />);
    const filterByAll = await screen.findByTestId('All-category-filter');
    const filterByBeef = await screen.findByTestId('Beef-category-filter');
    const filterByBreakfast = await screen.findByTestId('Breakfast-category-filter');
    const filterByChicken = await screen.findByTestId('Chicken-category-filter');
    const filterByDessert = await screen.findByTestId('Dessert-category-filter');
    const filterByGoat = await screen.findByTestId('Goat-category-filter');
    expect(filterByAll).toBeInTheDocument();
    expect(filterByBeef).toBeInTheDocument();
    expect(filterByBreakfast).toBeInTheDocument();
    expect(filterByChicken).toBeInTheDocument();
    expect(filterByDessert).toBeInTheDocument();
    expect(filterByGoat).toBeInTheDocument();
  });
  it('O filtro beef funciona corretamente', async () => {
    API.getFoodPerCategory.mockResolvedValue(beefMeals);
    RenderWithRouter(<FoodRecipes />);
    const filterByBeef = await screen.findByTestId('Beef-category-filter');
    userEvent.click(filterByBeef);
    const firstResult = await screen.findByRole('heading', { name: /beef and mustard/i });
    expect(firstResult).toBeInTheDocument();
  });
  it('O filtro breakfast funciona corretamente', async () => {
    API.getFoodPerCategory.mockResolvedValue(breakfastMeals);
    RenderWithRouter(<FoodRecipes />);
    const filterByBreakfast = await screen.findByTestId('Breakfast-category-filter');
    userEvent.click(filterByBreakfast);
    const firstResult = await screen.findByRole('heading', { name: /breakfast potat/i });
    expect(firstResult).toBeInTheDocument();
  });
  it('O filtro chicken funciona corretamente', async () => {
    API.getFoodPerCategory.mockResolvedValue(chickenMeals);
    RenderWithRouter(<FoodRecipes />);
    const filterByChicken = await screen.findByTestId('Chicken-category-filter');
    userEvent.click(filterByChicken);
    const firstResult = await screen.findByRole('heading', { name: /brown stew chick/i });
    expect(firstResult).toBeInTheDocument();
  });
  it('O filtro dessert funciona corretamente', async () => {
    API.getFoodPerCategory.mockResolvedValue(dessertMeals);
    RenderWithRouter(<FoodRecipes />);
    const filterByDessert = await screen.findByTestId('Dessert-category-filter');
    userEvent.click(filterByDessert);
    const firstResult = await screen.findByRole('heading', { name: /Apple & Blackber/i });
    expect(firstResult).toBeInTheDocument();
  });
  it('O filtro goat funciona corretamente', async () => {
    API.getFoodPerCategory.mockResolvedValue(goatMeals);
    RenderWithRouter(<FoodRecipes />);
    const filterByGoat = await screen.findByTestId('Goat-category-filter');
    userEvent.click(filterByGoat);
    const firstResult = await screen.findByRole('heading', { name: /mbuzi choma/i });
    expect(firstResult).toBeInTheDocument();
  });
  it('A página contém a quantidade correta de receitas', async () => {
    RenderWithRouter(<FoodRecipes />);
    const TOTAL_RECIPES_QTY = 12;
    const allRecipes = await screen.findAllByTestId(/recipe-card/i);
    expect(allRecipes).toHaveLength(TOTAL_RECIPES_QTY);
  });
  it('Cada card de receita contém um header', async () => {
    RenderWithRouter(<FoodRecipes />);
    const corba = await screen.findByTestId('0-card-name');
    expect(corba).toBeInTheDocument();
    expect(corba).toHaveTextContent(/corba/i);
  });
  it('Cada card Contém uma imagem', async () => {
    RenderWithRouter(<FoodRecipes />);
    const corbaImg = await screen.findByTestId('0-card-img');
    const corbaImgSrc = 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg';
    expect(corbaImg).toBeInTheDocument();
    expect(corbaImg).toHaveAttribute('src');
    expect(corbaImg.src).toEqual(corbaImgSrc);
  });
});
