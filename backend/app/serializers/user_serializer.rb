class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :charity_name, :charity_website, :charity_image, :about_charity, :mission, :contacts, :location, :status, :role
end
