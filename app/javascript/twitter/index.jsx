import React from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
  return (
    <h1>React Baby</h1>
  )
}

const appContainer = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, appContainer);
  console.log("hello from webpack!")
})