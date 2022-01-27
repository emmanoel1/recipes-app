import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderMainScreen from '../Components/HeaderMainScreen';
// import userEvent from '@testing-library/user-event';

describe('Testa o componente HeaderMainScreen', () => {
  it('Verifica se o componente é renderizado com os botões corretos', () => {
    render(<HeaderMainScreen />);
    const profileButton = screen.getByRole('button', { name: /profile-top-btn/i });
    const searchButton = screen.getByRole('button', { name: /search-top-btn/i });
    expect(profileButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('Verifica se o título do Header é renderizado corretamente', () => {
    render(<HeaderMainScreen />);
    const headerTitle = screen.getByRole('heading', { level: 1 });
    expect(headerTitle).toBeInTheDocument();
  });
});
