import { connect } from 'react-redux';
import ProjectWrap from './project_wrap';

import { requestItems } from '../actions/item_actions';
import { selectItems } from '../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  return {
    projectItems: selectItems(state, project),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestItems: projectId => dispatch(requestItems(projectId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectWrap);
