import React from 'react';
import { screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import RenderWithRouter from '../helpers/RenderWithRouter';

describe('13: Barra De Busca - Header', () => {
  test('Radio Button - Buscar Por Ingrediente', () => {
    RenderWithRouter(<SearchBar />);
    const radioIngredient = screen.findByTestId('ingredient-search-radio');
    expect(radioIngredient).toBeDefined();
  });

  test('Radio Button - Buscar Por Nome', () => {
    RenderWithRouter(<SearchBar />);
    const radioName = screen.findByTestId('name-search-radio');
    expect(radioName).toBeDefined();
  });

  test('Radio Button - Buscar Pela Primeira Letra', () => {
    RenderWithRouter(<SearchBar />);
    const radioByLetter = screen.findByTestId('first-letter-search-radio');
    expect(radioByLetter).toBeDefined();
  });

  test('Botão De Busca Pela Primeira Letra', () => {
    RenderWithRouter(<SearchBar />);
    const execBtn = screen.findByTestId('exec-search-btn');
    expect(execBtn).toBeDefined();
  });
});
