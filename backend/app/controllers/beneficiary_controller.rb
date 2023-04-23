class BeneficiariesController < ApplicationController
  before_action :set_beneficiary, only: [:show, :edit, :update, :destroy]

  def index
    @beneficiaries = Beneficiary.all
  end

  def show
  end

  def new
    @beneficiary = Beneficiary.new
  end

  def create
    @beneficiary = Beneficiary.new(beneficiary_params)
    if @beneficiary.save
      redirect_to @beneficiary, notice: "Beneficiary was successfully created."
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @beneficiary.update(beneficiary_params)
      redirect_to @beneficiary, notice: "Beneficiary was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @beneficiary.destroy
    redirect_to beneficiaries_url, notice: "Beneficiary was successfully destroyed."
  end

  private

  def set_beneficiary
    @beneficiary = Beneficiary.find(params[:id])
  end

  def beneficiary_params
    params.require(:beneficiary).permit(:name, :age, :story, :image, :charity_id, :donor_id)
  end
end
