import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import './index.css';
import App from './App';

// console.log('STORE LOG: ', store);
// console.log('PERSISTOR LOG: ', persistor);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
