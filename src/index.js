import React from 'react';
import ReactDOM from 'react-dom';
import { store, persistor } from './redux/store';
import './index.css';
import App from './App';

console.log('STORE LOG: ', store);
console.log('PERSISTOR LOG: ', persistor);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
