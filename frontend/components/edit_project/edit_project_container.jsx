 import { connect } from 'react-redux';
import EditProject from './edit_project';

import { createProject } from '../../actions/project_actions';
import { createItem, deleteItem, editItem } from '../../actions/item_actions';
import { selectItems } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) =>  {
  if (ownProps.project) {
    const project = ownProps.project;
    return {
      projectItems: selectItems(state, project),
      testState,
      state
    };
  } else {
    const ownerId = state.session.currentUser.id;
    return {
      project:{
        title: 'Untitled',
        item_ids: [],
        owner_id: ownerId,
        state
      }
    };
  }

};

const mapDispatchToProps = dispatch => {
  return {
    action: edit =>  dispatch(action(edit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
