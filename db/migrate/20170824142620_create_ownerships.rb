class CreateOwnerships < ActiveRecord::Migration[5.1]
  def change
    create_table :ownerships do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :ownerships, :user_id
    add_index :ownerships, :project_id
    add_index :ownerships, [:user_id, :project_id], unique: true
  end
end
