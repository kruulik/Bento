json.extract! project, :id, :title
json.owner_ids project.owners.map(&:id)
json.item_ids project.items.map(&:id)
