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

Item.destroy_all
i1 = Item.create(project_id: p1.id, body: 'THE TOKYO RESTAURANT.')
i2 = Item.create(project_id: p1.id, body: 'The Tokyo Restaurant. is a Japanese restaurant & bar in Kuala Lumpur, Malaysia. The restaurant offers contemporary dining experience of mixed genres, all with a hint of Japanese twists. ')
i3 = Item.create(project_id: p1.id, body: 'The key concept for the identity is “marriage of authenticity and light-heartedness.” Classic typefaces were chosen to create an authentic atmosphere for the brand, while the abstracted monogram adds a contemporary, approachable look to the logo.​​​​​​​')
i3 = Item.create(project_id: p1.id, body: ' ​​​​')

i1 = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/project-items.png"))
i2 = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/project-items2.png"))
i3 = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/project-items3.png"))
i1b = Item.create(project_id: p1.id, body: 'This is another section of text, with a spacer div below it!.')
i3b = Item.create(project_id: p1.id, body: ' ​​​​')
i4 = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/project-items4.png"))
i5 = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/project-items5.png"))

# ###################
# PROJECT 2


i6 = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/project-items6.png"))
i7 = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/project-items7.png"))
i8 = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/project-items8.png"))
i9 = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/project-items9.png"))
i10 = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/project-items10.png"))

# ###################
# PROJECT 3

i11 = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/project-items11.png"))
i12 = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/project-items12.png"))
i13 = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/project-items13.png"))
i14 = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/project-items14.png"))
i15 = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/project-items15.png"))
i16 = Item.create(project_id: p3.id, body: 'Heyyy and heres some more text, with TWO (user generated) spacers beneath it!.')

i16b = Item.create(project_id: p3.id, body: ' ')

i16c = Item.create(project_id: p3.id, body: ' ')


Comment.destroy_all
# c1 = Comment.create(project_id: p1.id, user_id: guest.id, body: 'guest comment 1')
# c2 = Comment.create(project_id: p1.id, user_id: guest.id, body: 'guest comment 2')
# c3 = Comment.create(project_id: p1.id, user_id: guest.id, body: 'guest comment 3')
# c4 = Comment.create(project_id: p1.id, user_id: guest.id, body: 'guest comment 4')
# c5 = Comment.create(project_id: p1.id, user_id: user2.id, body: 'user2 comment 1')
# c6 = Comment.create(project_id: p1.id, user_id: user2.id, body: 'user2 comment 2')
# c7 = Comment.create(project_id: p1.id, user_id: user2.id, body: 'user2 comment 3')
# c8 = Comment.create(project_id: p1.id, user_id: user2.id, body: 'user2 comment 4')
