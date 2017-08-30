import { connect } from 'react-redux';
import Comments from './comments';

import { requestComments, deleteComment } from '../actions/comment_actions';
import { selectComments } from '../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  return {
    projectComments: selectComments(state, project),
    state
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestComments: projectId => dispatch(requestComments(projectId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
