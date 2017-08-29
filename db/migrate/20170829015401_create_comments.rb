class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :project_id, null: false
      t.text :body

      t.timestamps
    end
    add_index :comments, :project_id
  end
end
