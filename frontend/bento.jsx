import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// TESTING ONLY
import {createComment} from './actions/comment_actions';
// import {
//   RECEIVE_COMMENTS,
//   RECEIVE_COMMENT,
//   REMOVE_COMMENT
// } from '../actions/comment_actions';
// //

document.addEventListener('DOMContentLoaded', () => {



  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createComment = createComment;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
