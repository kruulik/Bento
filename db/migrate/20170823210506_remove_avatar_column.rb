class RemoveAvatarColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :avatar_url
  end
end
