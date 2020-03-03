# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: 'guest', email: 'sushil1@sushil.com', password: 'hunter12')
User.create!(username: 'sushil2', email: 'sushil2@sushil.com', password: 'hunter13')
User.create!(username: 'sushil3', email: 'sushil3@sushil.com', password: 'hunter14')