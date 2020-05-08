import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const appContainer = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, appContainer);
  console.log("hello from webpack!")
})