import { connect } from 'react-redux';
import ProjectSidebar from './project_sidebar';


const mapDispatchToProps = dispatch => {
  return {
    requestOwners: () => dispatch(requestOwners)
  };
};

export default connect(mapDispatchToProps)(ProjectSidebar);
