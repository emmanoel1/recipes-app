import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

const renderWithRouterAndRedux = (
  component,
  initialEntries = ['/'],
  initialState = {},
) => {
  const history = createMemoryHistory(initialEntries);
  const store = createStore(rootReducer, initialState);

  return {
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {
            component
          }
        </Provider>
      </Router>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;
