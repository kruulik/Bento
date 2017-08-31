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

# json.comments do
#   @projects.each do |project|
#     project.comments.each do |comment|
#       json.set! comment.id do
#         # json.extract! comment, :id, :body, :project_id, :user_id
#         json.id comment.id
#         json.body comment.body
#         json.user_id comment.user_id
#         json.project_id comment.project_id
#         json.username (comment.user.f_name + ' ' + comment.user.l_name)
#         json.user_avatar comment.user.avatar
#       end
#     end
#   end
# end
