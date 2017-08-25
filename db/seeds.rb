# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create(f_name: 'Karolis', l_name: 'Krulis', email: 'karoliskrulis@gmail.com', password: 'password', bio: 'Designer & Developer')
user2 = User.create(f_name: 'Bob', l_name: 'Bo', email: 'bobby@gmail.com', password: 'password', bio: 'Blob')
user3 = User.create(f_name: 'John', l_name: 'Doe', email: 'John@gmail.com', password: 'password', bio: 'Blob')
user4 = User.create(f_name: 'Jannet', l_name: 'Jackson', email: 'Jannet@gmail.com', password: 'password', bio: 'Blob')

Project.destroy_all
p1 = Project.create(title: 'Project_1')
p2 = Project.create(title: 'Project_2')
p3 = Project.create(title: 'Project_3')
p4 = Project.create(title: 'Project_4')
p5 = Project.create(title: 'Project_5')
p6 = Project.create(title: 'Project_6')
p7 = Project.create(title: 'Project_7')
p8 = Project.create(title: 'Project_8')
p9 = Project.create(title: 'Project_9')

Ownership.destroy_all
o1 = Ownership.create(user_id: guest.id, project_id: p1.id)
o2 = Ownership.create(user_id: guest.id, project_id: p2.id)
o3 = Ownership.create(user_id: user2.id, project_id: p2.id)
o4 = Ownership.create(user_id: user2.id, project_id: p3.id)
o5 = Ownership.create(user_id: user3.id, project_id: p3.id)
o5 = Ownership.create(user_id: user3.id, project_id: p4.id)
o6 = Ownership.create(user_id: user4.id, project_id: p5.id)
o6 = Ownership.create(user_id: user4.id, project_id: p6.id)
o6 = Ownership.create(user_id: user4.id, project_id: p7.id)
o6 = Ownership.create(user_id: user4.id, project_id: p8.id)
o6 = Ownership.create(user_id: user4.id, project_id: p9.id)
