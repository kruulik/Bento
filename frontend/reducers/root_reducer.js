import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import UsersReducer from './users_reducer';
import ItemsReducer from './items_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  users: UsersReducer,
  items: ItemsReducer
});

export default rootReducer;
