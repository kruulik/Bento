# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
karolis = User.create(f_name: 'Karolis', l_name: 'Krulis', email: 'karoliskrulis@gmail.com', password: 'password', bio: 'Designer & Developer', avatar: File.new("#{Rails.root}/app/assets/images/avatars/Karolis.jpeg"))
andrewK = User.create(f_name: 'Andrew', l_name: 'Kay', email: 'kayandrewj@gmail.com', password: 'go_user_go', bio: 'Developer', avatar: File.new("#{Rails.root}/app/assets/images/avatars/Andrew_Kay.jpeg"))
anthonyR = User.create(f_name: 'Anthony', l_name: 'Rondinone', email: 'a.rondinone@gmail.com', password: 'go_user_go', bio: 'Developer', avatar: File.new("#{Rails.root}/app/assets/images/avatars/Anthony_R.jpeg"))
jonathanL = User.create(f_name: 'Jonathan', l_name: 'Liu', email: 'jonathan.liu137@gmail.com', password: 'go_user_go', bio: 'Developer', avatar: File.new("#{Rails.root}/app/assets/images/avatars/Jonathan_Liu.jpeg"))
edcarl = User.create(f_name: 'Edcarl', l_name: 'Adraincem', email: 'edcarl.adraincem@gmail.com', password: 'go_user_go', bio: 'Developer', avatar: File.new("#{Rails.root}/app/assets/images/avatars/Edcarl.jpeg"))



Project.destroy_all
p1 = Project.create(title: 'Bentö', thumbnail: File.new("#{Rails.root}/app/assets/images/bn/b_1.jpg"))
p2 = Project.create(title: 'Branding for Tutoring Service', thumbnail: File.new("#{Rails.root}/app/assets/images/ga/ga_1.png"))
p3 = Project.create(title: 'Project Expedition', thumbnail: File.new("#{Rails.root}/app/assets/images/pe/pe_a.png"))
p4 = Project.create(title: 'Wing and a Prayer Farm', thumbnail: File.new("#{Rails.root}/app/assets/images/wa/wa_1.jpg"))
p5 = Project.create(title: 'artHouse', thumbnail: File.new("#{Rails.root}/app/assets/images/ah/ah_a.png"))
p6 = Project.create(title: 'AUX', thumbnail: File.new("#{Rails.root}/app/assets/images/au/au_a.png"))
p7 = Project.create(title: 'Ask()', thumbnail: File.new("#{Rails.root}/app/assets/images/ask/ask_a.png"))
p8 = Project.create(title: 'Jewelry Photography', thumbnail: File.new("#{Rails.root}/app/assets/images/ak_i/2.jpg"))
p9 = Project.create(title: 'Jewelry Photography Posters', thumbnail: File.new("#{Rails.root}/app/assets/images/ak_p/a.jpg"))
p10 = Project.create(title: 'readRSS', thumbnail: File.new("#{Rails.root}/app/assets/images/rss/rss_a.png"))


Ownership.destroy_all
o1 = Ownership.create(user_id: karolis.id, project_id: p1.id)
o2 = Ownership.create(user_id: karolis.id, project_id: p2.id)
o3 = Ownership.create(user_id: karolis.id, project_id: p3.id)
o4 = Ownership.create(user_id: karolis.id, project_id: p4.id)
o5 = Ownership.create(user_id: anthonyR.id, project_id: p5.id)
o6 = Ownership.create(user_id: andrewK.id, project_id: p6.id)
o7 = Ownership.create(user_id: jonathanL.id, project_id: p7.id)
o8 = Ownership.create(user_id: karolis.id, project_id: p8.id)
o9 = Ownership.create(user_id: karolis.id, project_id: p9.id)
o10 = Ownership.create(user_id: edcarl.id, project_id: p10.id)

o11 = Ownership.create(user_id: karolis.id, project_id: p5.id)
o12 = Ownership.create(user_id: karolis.id, project_id: p6.id)
o13 = Ownership.create(user_id: edcarl.id, project_id: p6.id)
o14 = Ownership.create(user_id: anthonyR.id, project_id: p8.id)




Item.destroy_all
i1a = Item.create(project_id: p1.id, body: 'BENTÖ')
i1b = Item.create(project_id: p1.id, body: 'Why Bentö? Because bento is modular. ')
i1c = Item.create(project_id: p1.id, body: 'Bento (弁当 bentō)[1] is a single-portion take-out or home-packed meal common in Japanese cuisine. A traditional bento holds rice or noodles, fish or meat, with pickled and cooked vegetables, in a box.[2] Containers range from disposable mass-produced to hand-crafted lacquerware. Bentos are readily available in many places throughout Japan, including convenience stores, bento shops (弁当屋 bentō-ya), railway stations, and department stores. However, Japanese homemakers often spend time and energy on a carefully prepared lunch box for their spouse, child, or themselves.​​​​​​​')
i1d = Item.create(project_id: p1.id, body: ' ​​​​')
i1e = Item.create(project_id: p1.id, body: 'It\'s also delicious... ​and so is my code.')
i1f = Item.create(project_id: p1.id, body: ' ​​​​')

i1g = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/bn/b_1.jpg"))
i1h = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/bn/b_2.jpg"))
i1i = Item.create(project_id: p1.id, image: File.new("#{Rails.root}/app/assets/images/bn/b_2.jpg"))


# ###################
# PROJECT 2

i2a = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/ga/ga_1.png"))
i2b = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/ga/ga_2.png"))
i2c = Item.create(project_id: p2.id, image: File.new("#{Rails.root}/app/assets/images/ga/ga_3.png"))


i3a = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/pe/pe_1.png"))
i3b = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/pe/pe_2.png"))
i3c = Item.create(project_id: p3.id, image: File.new("#{Rails.root}/app/assets/images/pe/pe_3.png"))

i4a = Item.create(project_id: p4.id, image: File.new("#{Rails.root}/app/assets/images/wa/wa_1.jpg"))
i4b = Item.create(project_id: p4.id, image: File.new("#{Rails.root}/app/assets/images/wa/wa_2.jpg"))
i4c = Item.create(project_id: p4.id, image: File.new("#{Rails.root}/app/assets/images/wa/wa_3.jpg"))
i4d = Item.create(project_id: p4.id, image: File.new("#{Rails.root}/app/assets/images/wa/wa_4.jpg"))
i4e = Item.create(project_id: p4.id, image: File.new("#{Rails.root}/app/assets/images/wa/wa_5.jpg"))

i5a = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/SignUp.png"))
i5b = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/LogIn.png"))
i5c = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/Feed.png"))
i5d = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/UserShow.png"))
i5e = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/UserEdit.png"))
i5f = Item.create(project_id: p5.id, image: File.new("#{Rails.root}/app/assets/images/ah/PostShowModal.png"))

i6a = Item.create(project_id: p6.id, image: File.new("#{Rails.root}/app/assets/images/au/HomePage.png"))
i6a = Item.create(project_id: p6.id, image: File.new("#{Rails.root}/app/assets/images/au/ArtistShowPage.png"))
i6a = Item.create(project_id: p6.id, image: File.new("#{Rails.root}/app/assets/images/au/AlbumShowPage.png"))
i6a = Item.create(project_id: p6.id, image: File.new("#{Rails.root}/app/assets/images/au/UserShowPage.png"))

i7a = Item.create(project_id: p7.id, image: File.new("#{Rails.root}/app/assets/images/ask/home-container.png"))
i7b = Item.create(project_id: p7.id, image: File.new("#{Rails.root}/app/assets/images/ask/login-page.png"))
i7c = Item.create(project_id: p7.id, image: File.new("#{Rails.root}/app/assets/images/ask/question-detail-container.png"))
i7d = Item.create(project_id: p7.id, image: File.new("#{Rails.root}/app/assets/images/ask/topic_question_index_container.png"))

i8a = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/1.jpg"))
i8b = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/2.jpg"))
i8c = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/3.jpg"))
i8d = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/4.jpg"))
i8e = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/5.jpg"))
i8f = Item.create(project_id: p8.id, image: File.new("#{Rails.root}/app/assets/images/ak_i/6.jpg"))

i9a = Item.create(project_id: p9.id, image: File.new("#{Rails.root}/app/assets/images/ak_p/a.jpg"))
i9b = Item.create(project_id: p9.id, image: File.new("#{Rails.root}/app/assets/images/ak_p/b.jpg"))

i10a = Item.create(project_id: p10.id, image: File.new("#{Rails.root}/app/assets/images/rss/sign_up.png"))
i10a = Item.create(project_id: p10.id, image: File.new("#{Rails.root}/app/assets/images/rss/login.png"))
i10a = Item.create(project_id: p10.id, image: File.new("#{Rails.root}/app/assets/images/rss/feed_collection.png"))
i10a = Item.create(project_id: p10.id, image: File.new("#{Rails.root}/app/assets/images/rss/feed_all.png"))






Comment.destroy_all
c1 = Comment.create(project_id: p1.id, user_id: anthonyR.id, body: 'Yum')
c2 = Comment.create(project_id: p1.id, user_id: andrewK.id, body: 'Great pun dude!')
c3 = Comment.create(project_id: p1.id, user_id: karolis.id, body: 'Looks Good!')
c4 = Comment.create(project_id: p4.id, user_id: karolis.id, body: 'Yay farm animals')
c5 = Comment.create(project_id: p3.id, user_id: edcarl.id, body: 'What is UX?')
c6 = Comment.create(project_id: p9.id, user_id: jonathanL.id, body: 'Shiny')
c7 = Comment.create(project_id: p8.id, user_id: edcarl.id, body: 'So shiny')
c8 = Comment.create(project_id: p8.id, user_id: anthonyR.id, body: 'Much Dazzle')
c9 = Comment.create(project_id: p1.id, user_id: anthonyR.id, body: 'Great Work!')
c10 = Comment.create(project_id: p6.id, user_id: jonathanL.id, body: 'Neat')
c11 = Comment.create(project_id: p7.id, user_id: edcarl.id, body: 'Cool!')
c12 = Comment.create(project_id: p8.id, user_id: edcarl.id, body: 'Fuzzy')
c13 = Comment.create(project_id: p4.id, user_id: andrewK.id, body: 'Hey this looks like Wisconsin!')



Tag.destroy_all
t1 = Tag.create(tag: 'Architecture')
t2 = Tag.create(tag: 'Art Direction')
t3 = Tag.create(tag: 'Branding')
t4 = Tag.create(tag: 'Fashion')
t5 = Tag.create(tag: 'Graphic Design')
t6 = Tag.create(tag: 'Illustration')
t7 = Tag.create(tag: 'Industrial Design')
t8 = Tag.create(tag: 'Interaction Design')
t9 = Tag.create(tag: 'Motion Graphics')
t10 = Tag.create(tag: 'Photography')
t11 = Tag.create(tag: 'UI / UX')
t12 = Tag.create(tag: 'Web Design')

Tagging.destroy_all

tg1a = Tagging.create(project_id: p1.id, tag_id: t5.id)
tg1b = Tagging.create(project_id: p1.id, tag_id: t6.id)
tg1c = Tagging.create(project_id: p1.id, tag_id: t11.id)
tg1d = Tagging.create(project_id: p1.id, tag_id: t12.id)

tg2a = Tagging.create(project_id: p2.id, tag_id: t3.id)
tg2b = Tagging.create(project_id: p2.id, tag_id: t5.id)
tg2c = Tagging.create(project_id: p2.id, tag_id: t6.id)
tg2d = Tagging.create(project_id: p2.id, tag_id: t11.id)

tg3a = Tagging.create(project_id: p3.id, tag_id: t3.id)
tg3b = Tagging.create(project_id: p3.id, tag_id: t5.id)
tg3c = Tagging.create(project_id: p3.id, tag_id: t6.id)
tg3d = Tagging.create(project_id: p3.id, tag_id: t11.id)

tg4a = Tagging.create(project_id: p4.id, tag_id: t10.id)

tg5a = Tagging.create(project_id: p5.id, tag_id: t12.id)
tg5b = Tagging.create(project_id: p5.id, tag_id: t11.id)
tg5c = Tagging.create(project_id: p5.id, tag_id: t6.id)
tg5d = Tagging.create(project_id: p5.id, tag_id: t5.id)

tg6a = Tagging.create(project_id: p6.id, tag_id: t12.id)
tg6b = Tagging.create(project_id: p6.id, tag_id: t11.id)
tg6c = Tagging.create(project_id: p6.id, tag_id: t6.id)
tg6d = Tagging.create(project_id: p6.id, tag_id: t5.id)

tg7a = Tagging.create(project_id: p7.id, tag_id: t12.id)
tg7b = Tagging.create(project_id: p7.id, tag_id: t11.id)
tg7c = Tagging.create(project_id: p7.id, tag_id: t6.id)
tg7d = Tagging.create(project_id: p7.id, tag_id: t5.id)

tg8a = Tagging.create(project_id: p8.id, tag_id: t10.id)

tg9a = Tagging.create(project_id: p9.id, tag_id: t10.id)

tg10a = Tagging.create(project_id: p10.id, tag_id: t12.id)
tg10b = Tagging.create(project_id: p10.id, tag_id: t11.id)
tg10c = Tagging.create(project_id: p10.id, tag_id: t6.id)
tg10d = Tagging.create(project_id: p10.id, tag_id: t5.id)


Like.destroy_all

l1a = Like.create(user_id: karolis.id, project_id: p1.id)
l2a = Like.create(user_id: andrewK.id, project_id: p1.id)
l3a = Like.create(user_id: anthonyR.id, project_id: p1.id)
l4a = Like.create(user_id: edcarl.id, project_id: p1.id)
l5a = Like.create(user_id: jonathanL.id, project_id: p1.id)

l1b = Like.create(user_id: karolis.id, project_id: p2.id)
l2b = Like.create(user_id: andrewK.id, project_id: p3.id)
l3b = Like.create(user_id: anthonyR.id, project_id: p5.id)
l4b = Like.create(user_id: edcarl.id, project_id: p6.id)
l5b = Like.create(user_id: jonathanL.id, project_id: p7.id)

l1c = Like.create(user_id: karolis.id, project_id: p3.id)
l2c = Like.create(user_id: andrewK.id, project_id: p5.id)
l3c = Like.create(user_id: anthonyR.id, project_id: p7.id)
l4c = Like.create(user_id: edcarl.id, project_id: p4.id)
l5c = Like.create(user_id: jonathanL.id, project_id: p3.id)

l1c = Like.create(user_id: karolis.id, project_id: p5.id)
l2c = Like.create(user_id: andrewK.id, project_id: p7.id)
l3c = Like.create(user_id: anthonyR.id, project_id: p3.id)
l4c = Like.create(user_id: edcarl.id, project_id: p8.id)
l5c = Like.create(user_id: jonathanL.id, project_id: p5.id)
