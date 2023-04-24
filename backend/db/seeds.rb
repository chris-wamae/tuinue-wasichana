# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Seed data for inventories table
Inventory.create(item_name: "Blankets", quantity: 10, beneficiary_id: 1, charity_id: 1)
Inventory.create(item_name: "Food Packs", quantity: 20, beneficiary_id: 2, charity_id: 2)
Inventory.create(item_name: "Medicine", quantity: 5, beneficiary_id: 3, charity_id: 3)

