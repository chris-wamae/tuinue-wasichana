class AddDeviseFieldsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :encrypted_password, :string, null: false, default: ""
    add_column :users, :reset_password_token, :string
    
    add_index :users, :email, unique: true
    add_index :users, :reset_password_token, unique: true

    #delete password_digest column
    remove_column :users, :password_digest
  end
end
