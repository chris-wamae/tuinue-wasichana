class ReminderController < ApplicationController
  def create
      @reminder = Reminder.new(reminder_params)
    if @reminder.save
      render json: @reminder, status: :created
    else
      render json: { errors: @reminder.errors.full_messages }, status: :unprocessable_entity
    end
  end
    
  def update
      @reminder = Reminder.find(params[:id])
    if @reminder.update(reminder_params)
      render json: @reminder
    else
      render json: { errors: @reminder.errors.full_messages }, status: :unprocessable_entity
    end
  end
    
  def destroy
    @reminder = Reminder.find(params[:id])
    @reminder.destroy
    head :no_content
  end
    
    private
    
  def reminder_params
    params.require(:reminder).permit(:title, :description, :date_time, :user_id)
  end
end
