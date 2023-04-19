class CreateReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :reminders do |t|
      t.integer :donor_id
      t.integer :charity_id
      t.date :reminder_date

      t.timestamps
    end
  end
end
