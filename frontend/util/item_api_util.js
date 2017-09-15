export const requestItems = (projectId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/items`,
    method: "GET"
  });
};

export const createItem = item => {
  return $.ajax({
    url: `/api/items`,
    method: "POST",
    data: { item }
  });
};
