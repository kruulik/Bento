# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create(f_name: 'Karolis', l_name: 'Krulis', email: 'karoliskrulis@gmail.com', password: 'password', bio: 'Designer & Developer')

Project.destroy_all
p1 = Project.create(title: 'Project_1')
p2 = Project.create(title: 'Project_2')

Ownership.destroy_all
o1 = Ownership.create(user_id: guest.id, project_id: p1.id)
