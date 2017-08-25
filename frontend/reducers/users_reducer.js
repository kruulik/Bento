import {
  RECEIVE_PROJECTS
} from '../actions/project_actions';
import {
  merge
} from 'lodash';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default UsersReducer;
