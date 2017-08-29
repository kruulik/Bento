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

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE"
  })
);
