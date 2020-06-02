# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |n|
  User.create(name: "user_#{n + 1}", email: "user_#{n + 1}@test.com", password: '123123')
  5.times do |p|
    Post.create(content: Faker::Quote.matz , user: User.find(n + 1))
  end
end

User.create(name: 'test',email: 'test@test.com', password: '123123')

Relationship.create(follower_id: User.last.id, followed_id: 2)
Relationship.create(follower_id: User.last.id, followed_id: 3)
Relationship.create(follower_id: User.last.id, followed_id: 4)
Relationship.create(follower_id: User.last.id, followed_id: 5)