import * as APIUtil from '../util/item_api_util.js';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

export const receiveItems =  items  => ({
  type: RECEIVE_ITEMS,
  items
});

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  };
};

export const requestItems = projectId => dispatch => {
  return APIUtil.requestItems(projectId)
  .then(items => dispatch(receiveItems(items))
  );
};
