class AddUserToComment < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :user_id, :integer, null: false
    add_index :comments, :user_id

    remove_column :comments, :body
    add_column :comments, :body, :text, null: false
  end
end
