json.extract! project, :id, :title
json.thumbnail_url asset_path(project.thumbnail.url(:original))
json.owner_ids project.owners.map(&:id)
json.item_ids project.items.map(&:id)
json.comment_ids project.comments.map(&:id)
json.likes project.likers.map(&:id)
json.tags project.tags.map(&:id)
