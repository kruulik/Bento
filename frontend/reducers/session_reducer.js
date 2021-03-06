import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';
import {
  LIKE,
  UNLIKE
} from '../actions/like_actions';
import {
  merge
} from 'lodash';


const nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: [],
      };
    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors: action.errors
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, {errors: []});
    case LIKE:
      let nextState = merge({}, state);
      nextState.currentUser.likes.push(action.like.project_id);
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
