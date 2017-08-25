# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create(f_name: 'Karolis', l_name: 'Krulis', email: 'karoliskrulis@gmail.com', password: 'password', bio: 'Designer & Developer')
guest2 = User.create(f_name: 'Bob', l_name: 'Bo', email: 'bobby@gmail.com', password: 'password', bio: 'Blob')

Project.destroy_all
p1 = Project.create(title: 'Project_1')
p2 = Project.create(title: 'Project_2')

Ownership.destroy_all
o1 = Ownership.create(user_id: guest.id, project_id: p1.id)
o2 = Ownership.create(user_id: guest.id, project_id: p2.id)
o3 = Ownership.create(user_id: guest2.id, project_id: p2.id)
