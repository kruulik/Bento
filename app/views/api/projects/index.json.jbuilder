json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
    end
  end
end

json.owners do
  @projects.each do |project|
    project.owners.each do |owner|
      json.set! owner.id do
        json.avatar_url asset_path(owner.avatar.url)
        json.extract! owner, :id, :f_name, :l_name
      end
    end
  end
end

json.items do
  @projects.each do |project|
    project.items.each do |item|
      json.set! item.id do
        json.image_url asset_path(item.image.url)
        json.extract! item, :id, :body, :project_id
      end
    end
  end
end
