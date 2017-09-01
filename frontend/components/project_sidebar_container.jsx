import { connect } from 'react-redux';
import ProjectSidebar from './project_sidebar';
import { selectOwners } from '../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const projectTags = ownProps.projectTags;
  return {
    projectOwners: selectOwners(state, project),
    likes: project.likes.length,
    projectTags
  };
};

export default connect(mapStateToProps, null)(ProjectSidebar);
