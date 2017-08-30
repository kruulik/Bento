import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import {
  merge
} from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  // debugger
  switch (action.type) {
    case RECEIVE_COMMENTS:
    // debugger
    return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
    debugger
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
    // debugger
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
