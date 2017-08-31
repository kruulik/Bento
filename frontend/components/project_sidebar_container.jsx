import { connect } from 'react-redux';
import ProjectSidebar from './project_sidebar';
import { selectOwners } from '../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  // debugger
  return {
    projectOwners: selectOwners(state, project),
    likes: project.likes.length
    // state
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     requestOwners: () => dispatch(requestOwners)
//   };
// };

export default connect(mapStateToProps, null)(ProjectSidebar);
