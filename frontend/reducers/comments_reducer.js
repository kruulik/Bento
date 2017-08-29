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

  switch (action.type) {
    case RECEIVE_COMMENTS:
    // debugger
    return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
    // debugger
      return merge({}, state, action.payload.comment);
    case REMOVE_COMMENT:
    // debugger
      return merge({}, state, action.comment);
    default:
      return state;
  }
};

export default CommentsReducer;
