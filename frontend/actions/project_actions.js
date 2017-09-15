import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProjects = ({
  projects,
  owners
}) => ({
  type: RECEIVE_PROJECTS,
  projects,
  owners
});

export const receiveProject = project => {
  return ({
    type: RECEIVE_PROJECT,
    project
  })
};

export const requestProjects = dispatch => {
  return APIUtil.requestProjects()
    .then(projects => {
      dispatch(receiveProjects(projects));
    });
};

export const requestUserProjects = id => dispatch => {
  APIUtil.requestUserProjects(id)
    .then(projects => dispatch(receiveProjects(projects)));
};

export const requestOwners = ids => dispatch => {
  APIUtil.requestOwners(ids)
    .then(data => dispatch(requestOwners(data)));
};

export const createProject = project => dispatch => {
  APIUtil.createProject(project)
  .then(project => dispatch(receiveProject(project)));
};
