export const requestItems = (projectId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/items`,
    method: "GET"
  });
};
