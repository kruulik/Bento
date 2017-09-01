json.extract! user, :id, :email, :f_name, :l_name, :bio
json.avatar_url_medium asset_path(user.avatar.url(:medium))
json.avatar_url_small asset_path(user.avatar.url(:small))
json.avatar_url_mini asset_path(user.avatar.url(:mini))
json.likes user.likes.map(&:project_id)

json.avatar_url asset_path(user.avatar.url(:medium))
