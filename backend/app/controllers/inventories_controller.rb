class InventoriesController < ApplicationController
  before_action :find_charity, only: [:index, :create, :update, :destroy]
  before_action :find_inventory, only: [:update, :destroy]

  #displays all inventories for a specific charity 
  def index
    inventories = @charity.inventories
    render json: inventories
  end

  #creates an inventory for a specific charity 
  def create
    inventory = @charity.inventories.new(inventory_params)

    if inventory.save
      render json: inventory, status: :created
    else
      render json: { errors: inventory.errors.full_messages }, status: :unprocessable_entity
    end
  end

  #updates an inventory for a specific charity 
  def update
    #puts "Inventory charity: #{@inventory.charity.inspect}"
    #puts "Current charity: #{@charity.inspect}"

    if @inventory.charity_id == @charity.id
      if @inventory.update(inventory_params)
        render json: @inventory, status: :ok
      else
        render json: { errors: @inventory.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Forbidden action! You are not authorized to update this inventory' }, status: :forbidden
    end
  end
  
  #deletes an inventory for a specific charity 
  def destroy
    if @inventory.charity_id == @charity.id
      @inventory.destroy
      render json: { message: 'Inventory successfully deleted' }, status: :ok
    else
      render json: { error: 'Forbidden action! You are not authorized to delete this inventory' }, status: :forbidden
    end
  end
  
  private

  def inventory_params
    params.permit(:item_name, :quantity, :beneficiary_id)
  end

  def find_inventory
    @inventory = Inventory.find_by(id: params[:id], charity_id: params[:charity_id])
    if @inventory.nil?
      render json: { error: "Inventory not found" }, status: :not_found
    end
  end

  def find_charity
    user = User.charity.find(params[:charity_id])
    @charity = user.becomes(Charity)
  end
end

