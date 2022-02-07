import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import MainProvider from '../context/main/MainProvider';

const RenderWithRouter = (
  component,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(
    <MainProvider>
      <Router history={ history }>
        <Route path={ path } render={ () => component } />
      </Router>
    </MainProvider>,
  ),
  history,
});

export default RenderWithRouter;
