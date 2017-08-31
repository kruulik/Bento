class AddtoTags < ActiveRecord::Migration[5.1]
  def change
    add_column :taggings, :project_id, :integer, null: false
    add_index :taggings, :project_id

    add_column :taggings, :tag_id, :integer, null: false
    add_index :taggings, :tag_id
  end
end
