import values from 'lodash/values';

export const selectAllProjects = state => values(state.projects);

export const selectOwners = (state, project) => {
  return project.owner_ids.map(id => state.users[id]);
};

export const selectItems = (state, project) => {
  if (project){
    return project.item_ids.map(id => state.items[id]);
  } else {

  }
};

export const selectComments = (state, project) => {
  return project.comment_ids.map(id => state.comments[id]);
};

export const allTags = state => values(state.tags);

export const selectTags = (state, project) => {
  return project.tags.map(id => state.tags[id]);
};
