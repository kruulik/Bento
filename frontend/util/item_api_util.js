export const requestItems = (projectId) => {
  // debugger
  return $.ajax({
    url: `/api/projects/${projectId}/items`,
    method: "GET"
  });
};
