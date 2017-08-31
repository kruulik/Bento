import {
  RECEIVE_PROJECTS
} from '../actions/project_actions';
import {
  LIKE,
  UNLIKE
} from '../actions/like_actions';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import {
  merge
} from 'lodash';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      let removeComment = nextState[action.comment.project_id].comment_ids.indexOf(action.comment.id);
      if (removeComment > -1) {
        nextState[action.comment.project_id].comment_ids.splice(removeComment, 1);
      }
      return nextState;
    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      let toAdd = action.comment.id;
      nextState[action.comment.project_id].comment_ids.push(toAdd);
      return nextState;
    case LIKE:
      // debugger
      nextState = merge({}, state);
      if (!state[action.like.project_id].likes.includes(action.like.user_id)) {
         nextState[action.like.project_id].likes.push(action.like.user_id);
       }
       return nextState;
    case UNLIKE:
      // debugger
      nextState = merge({}, state);
      if (state[action.like.project_id].likes.includes(action.like.user_id)) {
        let position = nextState[action.like.project_id].likes.indexOf(action.like.user_id);
        nextState[action.like.project_id].likes.splice(position, 1);
      }
      return nextState;
    default:
      return state;
  }
};

export default ProjectsReducer;
