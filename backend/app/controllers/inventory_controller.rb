class InventoryController < ApplicationController
  def create
    @inventory_item = Inventory.new(inventory_params)
    if @inventory_item.save
      render json: @inventory_item, status: :created
    else
      render json: { errors: @inventory_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @inventory_item = Inventory.find(params[:id])
    if @inventory_item.update(inventory_params)
      render json: @inventory_item
    else
      render json: { errors: @inventory_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def inventory_params
    params.require(:inventory).permit(:name, :item, :quantity, :beneficiary_id, :charity_id)
  end
end
