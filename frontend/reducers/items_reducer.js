import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
  CLEAR_ITEMS
} from '../actions/item_actions';
import {
  merge
} from 'lodash';

const ItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return merge({}, state, action.items);
    case RECEIVE_ITEM:
      return merge({}, state, {
        [action.item.id]: action.item
      });
    case CLEAR_ITEMS:
      return {};
    default:
      return state;
  }
};

export default ItemsReducer;
