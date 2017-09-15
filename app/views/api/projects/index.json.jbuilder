json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
      json.likes project.likers.map(&:id)
    end
  end
end

json.owners do
  @projects.each do |project|
    project.owners.each do |owner|
      json.set! owner.id do
        json.avatar_url asset_path(owner.avatar.url(:medium))
        json.extract! owner, :id, :f_name, :l_name
      end
    end
  end
end

json.items do
  @projects.each do |project|
    project.items.each do |item|
      json.set! item.id do
        json.image_url asset_path(item.image.url(:medium))
        json.extract! item, :id, :body 
      end
    end
  end
end

json.tags do
  @projects.each do |project|
    project.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end
end
