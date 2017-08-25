import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProjectIndexItem from './project_index_item';

import { requestProjects, requestOwners } from '../actions/project_actions';
import { selectAllProjects } from '../reducers/selectors';
import { selectOwners } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
// Working on creating project item container to pass SelectOwners as a prop


  return {
    projectOwners: selectOwners(state, project),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestOwners: () => dispatch(requestOwners)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndexItem);
