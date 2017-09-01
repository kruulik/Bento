import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProjectsIndex from './projects_index';
import { withRouter } from 'react-router-dom';

import { requestProjects } from '../actions/project_actions';
import { requestTags } from '../actions/tag_actions';
import { selectAllProjects } from '../reducers/selectors';

const mapStateToProps = state => {
  return {
    allProjects: selectAllProjects(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestProjects: () => dispatch(requestProjects),
    requestTags: () => dispatch(requestTags)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex));
