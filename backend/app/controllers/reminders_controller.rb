class RemindersController < ApplicationController
  def create
    reminder = Reminder.new(reminder_params)
    if reminder.save
      render json: reminder, status: :created
    else
      render json: reminder.errors, status: :unprocessable_entity
    end
  end

  private

  def reminder_params
    params.require(:reminder).permit(:donor_id, :charity_id, :reminder_date)
  end
end

