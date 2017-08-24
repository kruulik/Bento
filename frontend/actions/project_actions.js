import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const receiveProjects = req => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const requestProjects = () => {
  return APIUtil.fetchProjects().then(
    data => dispatch(receiveProjects(data))
  );
};
