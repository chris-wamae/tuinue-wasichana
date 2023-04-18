class CreateReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :reminders do |t|
      t.date :date
      t.time :time
      t.integer :charity_id
      t.integer :donor_id

      t.timestamps
    end
  end
end
