json.extract! project, :id, :title
json.owner_ids project.owners.map(&:id)
json.item_ids project.items.map(&:id)
json.comment_ids project.comments.map(&:id)
json.likes project.likers.map(&:id)
json.tags project.tags.map(&:id)
