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
        json.extract! owner, :id, :f_name, :l_name
      end
    end
  end
end
