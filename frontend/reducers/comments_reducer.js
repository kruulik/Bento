import {
  RECEIVE_COMMENTS
} from '../actions/comment_actions';
import {
  merge
} from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.items);
    default:
      return state;
  }
};

export default CommentsReducer;
