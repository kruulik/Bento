class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :likes, [:user_id, :project_id], unique: true
  end
end
