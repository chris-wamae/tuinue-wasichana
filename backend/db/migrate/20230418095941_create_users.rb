class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :charity_name
      t.string :charity_website
      t.string :charity_image
      t.text :about_charity
      t.text :mission
      t.integer :contacts
      t.string :location
      t.integer :status
      t.integer :role
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
