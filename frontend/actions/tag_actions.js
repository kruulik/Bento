import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});


export const getTags = projectId => dispatch => (
  APIUtil.getTags(projectId).then(
    tags => dispatch(receiveTags(tags))
));

export const createTag = tag => dispatch => (
  APIUtil.createTag(tag).then(
    newTag => dispatch(receiveTag(newTag))
));

export const createTagging = tagging => dispatch => (
  APIUtil.createTagging(tagging).then(
    tagging => dispatch(receiveTagging(tagging))
));

export const deleteTag = id => dispatch => (
  APIUtil.destroyTag(id).then(
    tag => dispatch(removeTag(tag))
));

export const deleteTagging = tagging => dispatch => (
  APIUtil.destroyTagging(tagging).then(tagging => dispatch(removeTag(tagging)))
);
