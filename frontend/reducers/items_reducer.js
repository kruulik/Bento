import {
  RECEIVE_ITEMS
} from '../actions/item_actions';
import {
  merge
} from 'lodash';

const ItemsReducer = (state = {}, action) => {
  Object.freeze(state);
// debugger
  switch (action.type) {
    case RECEIVE_ITEMS:
      return merge({}, state, action.items);
    default:
      return state;
  }
};

export default ItemsReducer;
