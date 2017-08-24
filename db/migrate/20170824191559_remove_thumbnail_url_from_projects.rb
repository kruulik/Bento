class RemoveThumbnailUrlFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :thumbnail_url
    remove_column :projects, :user_id
  end
end
