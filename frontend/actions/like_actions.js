import * as APIUtil from '../util/like_api_util';

export const LIKE = 'LIKE';
export const UNLIKE = 'UNLIKE';

export const receiveLike = like => ({
  type: LIKE,
  like
});

export const removeLike = like => ({
  type: UNLIKE,
  like
});

export const likeProject = like => dispatch => (
  APIUtil.createLike(like)
  .then(like => (dispatch(receiveLike(like))
  ))
);

export const unlikeProject = like => dispatch => (
  APIUtil.destroyLike(like)
  .then(like => (dispatch(removeLike(like))
  ))
);
