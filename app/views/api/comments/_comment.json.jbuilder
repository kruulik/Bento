json.extract! comment, :id, :body, :user_id, :project_id, :created_at
json.avatar asset_path(comment.user.avatar.url)
json.username (comment.user.f_name + ' ' + comment.user.l_name)
