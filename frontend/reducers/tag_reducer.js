import {
  merge
} from 'lodash';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TAGS:
      // debugger
      return action.tags;
    case RECEIVE_TAG:
      // debugger
      newState = {
        [action.tag.id]: action.tag
      };
      return merge({}, state, newTag);
    case REMOVE_TAG:
    // debugger
      newState = merge({}, state);
      delete newState[action.tag];
      return merge({}, newState);
    default:
      return state;
  }
};

export default TagReducer;
