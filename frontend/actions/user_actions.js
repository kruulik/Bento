import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const receiveProjects = ({ projects, owners }) => ({
  type: RECEIVE_PROJECTS,
  projects,
  owners
});

export const requestProjects = dispatch => {
  // debugger
  return APIUtil.requestProjects()
  .then(projects => dispatch(receiveProjects(projects))
  );
};

export const requestUserProjects = id => dispatch => {
  APIUtil.fetchUserProjects(id)
  .then(data => dispatch(receiveProjects(data))
  );
};
