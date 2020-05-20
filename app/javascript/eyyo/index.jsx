import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';

import App from './components/app';

import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(
    promiseMiddleware
  )
)
const appContainer = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    appContainer
  );
})