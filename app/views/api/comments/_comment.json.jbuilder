json.extract! comment, :id, :body, :user_id, :project_id
json.username {comment.user.f_name + comment.user.l_name}
json.user_avatar comment.user.avatar
