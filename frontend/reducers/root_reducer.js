import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import UsersReducer from './users_reducer';
import ItemsReducer from './items_reducer';
import CommentsReducer from './comments_reducer';
import TagReducer from './tag_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  users: UsersReducer,
  items: ItemsReducer,
  comments: CommentsReducer,
  tags: TagReducer,
  editing: ProjectsReducer
});

export default rootReducer;
