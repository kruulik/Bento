class CreateCreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :project_id, null: false
      t.string :tag, null: false
      t.timestamps
    end
    add_index :tags, [:project_id, :tag], unique: true
  end
end
