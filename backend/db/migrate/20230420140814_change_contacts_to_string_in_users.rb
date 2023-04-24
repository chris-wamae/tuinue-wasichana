class ChangeContactsToStringInUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :contacts, :string
  end
end
