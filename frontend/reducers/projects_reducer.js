import {
  RECEIVE_PROJECTS
} from '../acitons/project_action';
import {
  merge
} from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        projects: action.projects
      };
    default:
      return state;
  }
};
