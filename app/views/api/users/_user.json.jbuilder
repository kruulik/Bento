json.extract! user, :id, :email, :f_name, :l_name, :bio
json.avatar_url asset_path(user.avatar.url(:original))
