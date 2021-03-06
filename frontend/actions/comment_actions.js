import * as APIUtil from '../util/comment_api_util.js';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const receiveComments = ({ comments, errors}) => {
return   ({
  type: RECEIVE_COMMENTS,
  comments
});
};

export const receiveComment = comment => {
  return ({type: RECEIVE_COMMENT,
  comment});
};

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearComments = () => {
  return {
    type: CLEAR_COMMENTS
  };
};

export const requestComments = projectId => (dispatch) => {
  return APIUtil.requestComments(projectId)
  .then(comments => dispatch(receiveComments(comments))
  );
};

export const createComment = comment => dispatch => (
  APIUtil.postComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);
// export const createComment = comment => dispatch => (
//   APIUtil.postComment(comment)
//     .then(comments => dispatch(receiveComments(comments)))
// );

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment.id)
    .then(() => dispatch(removeComment(comment)))
);
