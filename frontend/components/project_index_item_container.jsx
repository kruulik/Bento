import { connect } from 'react-redux';
import ProjectIndexItem from './project_index_item';

import { requestProjects, requestOwners } from '../actions/project_actions';
import { selectAllProjects, selectOwners, selectTags } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  return {
    projectOwners: selectOwners(state, project),
    projectTags: selectTags(state, project),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestOwners: () => dispatch(requestOwners),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndexItem);
