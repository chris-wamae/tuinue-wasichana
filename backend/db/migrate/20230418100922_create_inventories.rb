class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.string :item_name
      t.integer :quantity
      t.integer :beneficiary_id
      t.integer :charity_id
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
