import { connect } from 'react-redux';
import EditProject from './create_project';

import { createProject } from '../../actions/project_actions';
import { createItem, removeItem } from '../../actions/item_actions';
import { selectItems } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) =>  {
  debugger
  const project = ownProps.project;
  if (!project) {
    return {
      projectItems: selectItems(state, project),
      state
    };
  }

};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
