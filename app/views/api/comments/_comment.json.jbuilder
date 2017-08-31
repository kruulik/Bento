json.extract! comment, :id, :body, :user_id, :project_id, :created_at 
# json.user_avatar comment.user.avatar
json.username (comment.user.f_name + ' ' + comment.user.l_name)
