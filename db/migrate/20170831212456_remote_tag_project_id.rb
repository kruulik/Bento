class RemoteTagProjectId < ActiveRecord::Migration[5.1]
  def change
    remove_column :tags, :project_id 
  end
end
