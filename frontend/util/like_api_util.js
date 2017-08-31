
export const createLike = like => {
  // debugger
  return $.ajax({
   method: 'POST',
   url: `/api/projects/${like.project_id}/likes`,
   data: {like}
 });
};

export const destroyLike = like => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${like.project_id}/likes/${like.id}`,
     data: { like }
  })
);
