import * as APIUtil from '../util/comment_api_util.js';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const requestComments = projectId => dispatch => {
  return APIUtil.requestComments(projectId)
  .then(comments => dispatch(receiveComments(comments))
  );
};

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);
