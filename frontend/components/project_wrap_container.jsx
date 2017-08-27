import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import ProjectWrap from './project_wrap';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;

  return {
    project,
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestOwners: () => dispatch(requestOwners)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectWrap);
