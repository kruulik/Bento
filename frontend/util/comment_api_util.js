export const requestComments = projectId => {
  return $.ajax({
    url: `/api/projects/${projectId}/comments`,
    method: "GET"
  });
};

export const postComment = comment => {
  return $.ajax({
    url: `/api/comments`,
    method: "Post"
  });
};

export const deleteComment = comment => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "DELETE"
  })
);
