import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/scss/global.scss'
import { App } from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
