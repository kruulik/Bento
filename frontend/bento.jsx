import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();


  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Bentöööö</h1>, root);
});
