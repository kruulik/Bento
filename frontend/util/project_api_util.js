export const requestProjects = () => {
  return $.ajax({
    url: 'api/projects',
    method: 'GET'
  });
};
