import values from 'lodash/values';

export const selectAllProjects = state => values(state.projects);

export const selectOwners = (state, project) => {
  return project.owner_ids.map(id => state.users[id]);
};

export const selectItems = (state, project) => {
  return project.item_ids.map(id => state.items[id]);
};
