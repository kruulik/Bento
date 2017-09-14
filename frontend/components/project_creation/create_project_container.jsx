import { connect } from 'react-redux';
import CreateProject from './create_project';

import { createProject } from '../../actions/project_actions';
import { createItem, removeItem } from '../../actions/item/item_actions';

const mapStateToProps = state =>  {

};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
