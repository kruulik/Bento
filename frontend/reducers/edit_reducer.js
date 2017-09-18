import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM
} from '../actions/item_actions';

const EditReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return merge({}, state, action.items);
    case RECEIVE_ITEM:
      return merge({}, state, {
        [action.item.id]: action.item
      });
    default:
      return state;
  }
};

export default EditReducer;
