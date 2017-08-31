class ChangeTaggings < ActiveRecord::Migration[5.1]
  def change
    remove_column :taggings, :project_id
    remove_column :taggings, :tag_id
  end
end
