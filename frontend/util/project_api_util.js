export const requestProjects = () => {
  return $.ajax({
    url: 'api/projects',
    method: 'GET'
  });
};

export const createProject = project => {
  return $.ajax({
    url: `/api/projects`,
    method: "POST",
    data: { project }
  });
};
