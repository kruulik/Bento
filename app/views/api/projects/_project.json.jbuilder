json.extract! project, :id, :title
json.owner_ids project.owners.map(&:id)
