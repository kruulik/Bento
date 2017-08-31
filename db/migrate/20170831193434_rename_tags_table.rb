class RenameTagsTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :create_tags, :tags
  end
end
