class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.integer :donor_id
      t.integer :charity_id
      t.decimal :amount
      t.boolean :anonymous
      t.boolean :is_monthly
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
