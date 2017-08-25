import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProjectsIndex from './projects_index';

import { requestProjects, requestOwners } from '../actions/project_actions';
import { selectAllProjects } from '../reducers/selectors';

const mapStateToProps = state => {

  return {
    allProjects: selectAllProjects(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestProjects: () => dispatch(requestProjects),
    requestOwners: () => dispatch(requestOwners)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);
