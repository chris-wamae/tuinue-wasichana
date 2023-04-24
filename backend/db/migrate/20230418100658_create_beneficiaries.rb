class CreateBeneficiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :beneficiaries do |t|
      t.string :name
      t.integer :age
      t.text :story
      t.string :image
      t.integer :charity_id
      t.integer :donor_id


      t.timestamps
    end
  end
end
