import { connect } from 'react-redux';
import Comments from './comments';

import { requestComments, deleteComment, createComment } from '../actions/comment_actions';
import { selectComments } from '../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  return {
    projectComments: selectComments(state, project),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestComments: projectId => dispatch(requestComments(projectId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    createComment: comment => dispatch(createComment(comment))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
