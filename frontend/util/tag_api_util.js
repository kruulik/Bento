export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: '/api/tags',
    data: tag
  })
);

export const requestTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tags'
  })
);

export const createTagging = tagging => (
  $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: tagging
  })
);

export const destroyTag = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${id}`,
  })
);

export const destroyTagging = tagging => (
  $.ajax({
    method: 'DELETE',
    url: `/api/taggings/${tagging.id}`,
  })
);
