import React from 'react';
import ReactDOM from 'react-dom/client'; // import to'g'ri
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store.js';

// createRoot bilan ishlash
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
