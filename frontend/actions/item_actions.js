import * as APIUtil from '../util/item_api_util.js';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

export const receiveItems =  items  => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    item: item,
  };
};

export const requestItems = projectId => dispatch => {
  return APIUtil.requestItems(projectId)
  .then(items => dispatch(receiveItems(items))
  );
};

export const createItem = item => dispatch => {
  return APIUtil.createItem(item)
  .then(item => dispatch(receiveItem(item)));
};

export const editItem = item => {
  return APIUtil.updateItem(item)
  .then(item => dispatch(receiveItem(item)));
};

export const deleteItem = itemId => {
  return APIUtil.destroyItem(itemId)
  .then(deletedItem => dispatch(removeItem(deletedItem)));
};
