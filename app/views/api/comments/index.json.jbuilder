


json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.body comment.body
      json.user_id comment.user_id
      json.project_id comment.project_id
      json.username (comment.user.f_name + ' ' + comment.user.l_name)
      json.createdOn comment.created_at
      # json.username comment.user.f_name
      # json.user_avatar comment.user.avatar
      json.avatar asset_path(comment.user.avatar.url)
    end
  end
end
