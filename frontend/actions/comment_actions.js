import * as APIUtil from '../util/comment_api_util.js';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = ({ comments, errors}) => ({
  type: RECEIVE_COMMENTS,
  comments,
  errors
});

export const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestComments = projectId => (dispatch) => {
  return APIUtil.requestComments(projectId)
  .then(payload => dispatch(receiveComments(payload))
  );
};

export const createComment = comment => dispatch => (
  APIUtil.postComment(comment)
    .then(payload => dispatch(receiveComments(payload)))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
);
