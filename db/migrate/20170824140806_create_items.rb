class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :project_id, null: false
      t.text :body
      t.timestamps
    end
    add_index :items, :project_id
  end
end
