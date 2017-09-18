import { connect } from 'react-redux';
import UploadItems from './upload_items';

import { createItem, editItem, deleteItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const section = ownProps.section;
  debugger
  return {
    imageUrl: null,
    textContent: '',
    linkUrl: '',
    state,
    section
  };
};

const mapDispatchToProps = dispatch => {

  return {
    createItem: item => dispatch(createItem(item)),
    editItem: item => dispatch(editItem(item)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UploadItems);
