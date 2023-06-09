# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Planting the seeds of menstrual equity..."

#charities
charity1 = Charity.create!(
  username: "girlshelpinggirlsperiod",
  email: "girlshelpinggirlsperiod@gmail.com",
  charity_name: "Girls Helping Girls. Period.",
  charity_website: "https://girlshelpinggirlsperiod.org",
  charity_image: "https://www.charityforgirls.org/images/logo.png",
  about_charity: "At Girls Helping Girls. Period., we believe menstrual health leads to overall health. And human dignity.We are dedicated to educating people about the need, collecting/distributing products, and advocating for systemic change.",
  mission: "Empowering individuals to manage their periods with dignity and equity by providing menstrual products, education, and advocacy.",
  contacts: "0734567890",
  location: "New York, NY",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity2 = Charity.create!(
  username: "couldyougirlshealthinitiative",
  email: "couldyougirlshealthinitiative@gmail.com",
  charity_name: "Could You? Girls' Health Initiative",
  charity_website: "https://www.couldyoucup.org/",
  charity_image: "https://www.couldyoucup.org/wp-content/uploads/2022/06/1-2.png",
  about_charity: "The CouldYou? Girls Health Initiative is sustainably addressing the menstrual hygiene management( MHM) needs of women and girls through immediate access to health education and menstrual cups.",
  mission: "Our mission is to provide scaling solutions to period poverty",
  contacts: "0745689076",
  location: "California, USA",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity3 = Charity.create!(
  username: "freedomforgirls",
  email: "freedomforgirls@gmail.com",
  charity_name: "Freedom 4 Girls",
  charity_website: "https://www.freedom4girls.co.uk",
  charity_image: "https://usercontent.one/wp/www.freedom4girls.co.uk/wp-content/uploads/2020/05/products_cartoon4.png",
  about_charity: "We work to support those who menstruate by challenging the stigmas, taboos and gender inequalities associated with menstruation. We do this by providing education, providing period products, promoting product choice and supporting environmentally and financially sustainable options..",
  mission: "Our mission is to create a world that provides for menstrual equity and a reduction in socio-economic inequality",
  contacts: "0767890760",
  location: "London, UK",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity4 = Charity.create!(
  username: "bloodygoodperiod",
  email: "bloodygoodperiod@gmail.com",
  charity_name: "Bloody Good Period",
  charity_website: "https://www.bloodygoodperiod.com",
  charity_image: "https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/340489340_206669708731243_8611342731081522428_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=EMdoNRQaSV4AX-bSfI6&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBVihmvtlXOVQyuXhjiMARUL_GBVUvQ3Zx7oFbYR3wkiQ&oe=6447B527",
  about_charity: "Bloody Good Period is a non-profit organization that give period products to those who can’t afford them and provide reproductive health education to those less likely to access it. And we help everybody talk about periods!We are proudly inclusive of everyone who menstruates.",
  mission: "We fight for menstrual equity and the rights of all people who bleed.",
  contacts: "0118377890",
  location: "London, UK",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity5 = Charity.create!(
  username: "girltalkfoundation",
  email: "girltalkfoundation@gmail.com",
  charity_name: "Girl Talk Foundation",
  charity_website: "https://www.girltalkfoundationinc.org",
  charity_image: "https://images.squarespace-cdn.com/content/v1/5b7779a44611a007bf6a80e0/1535124765576-NYQ9CSKD2C5U764GWDW3/TTFS8.jpg?format=750w.jpg",
  about_charity: "Girl Talk Foundation is a non-profit organization that provides mentorship and resources to girls, including access to menstrual products.",
  mission: "Our mission is to empower girls to become confident, successful, and self-sufficient leaders through mentorship, education, and wellness programs.",
  contacts: "0776574838",
  location: "Atlanta, GA",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity6 = Charity.create!(
  username: "daysforgirls",
  email: "daysforgirls@gmail.com",
  charity_name: "Days for Girls",
  charity_website: "https://www.daysforgirls.org",
  charity_image: "https://marketplace.canva.com/EAFB3MgDsNU/1/0/1200w/canva-red-pink-cute-illustrative-period-education-poster-bwetgJz23Xw.jpg",
  about_charity: "Days for Girls is a non-profit organization that provides sustainable menstrual care solutions and education for girls and women in developing countries.",
  mission: "Our mission is to create a world with dignity, health, and opportunity for all by providing access to menstrual care and education.",
  contacts: "0114647658",
  location: "Seattle, WA",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

charity7 = Charity.create!(
  username: "shesthefirst",
  email: "shesthefirst@gmail.com",
  charity_name: "She's the First",
  charity_website: "https://www.shesthefirst.org",
  charity_image: "https://images.squarespace-cdn.com/content/v1/5790e3a52994cad33481f188/5f7495ce-7c21-47d1-8807-0d28b0d4ef95/STRENGTHEN+ECOSYSTEM.JPG?format=750w.jpg",
  about_charity: "She's the First is a non-profit organization that provides education and resources to girls, including menstrual products, in low-income countries.",
  mission: "Our mission is to support girls who will be the first in their families to graduate high school and to help them become leaders in their communities.",
  contacts: "0176490002",
  location: "New York, NY",
  status: 0,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

# # The Pad Project
charity8 = Charity.create!(
  username: "thepadproject",
  email: "thepadproject@gmail.com",
  charity_name: "The Pad Project",
  charity_website: "https://www.thepadproject.org",
  charity_image: "https://marketplace.canva.com/EAFB3HQ7YSw/1/0/1200w/canva-red-pink-white-cute-illustrative-period-education-poster-eDIRVsDSwyo.jpg",
  about_charity: "The Pad Project is a non-profit organization that provides menstrual products and menstrual education to girls in India.",
  mission: "Our mission is to create and cultivate local and global partnerships to end period stigma and empower women worldwide.",
  contacts: "0712446368",
  location: "Los Angeles, CA",
  status: 1,
  role: :charity,
  password: "password",
  password_confirmation: "password"
)

# #donors
donor1 = Donor.create!(
  username: "benard",
  email: "benard@gmail.com",
  role: :donor,
  password: "benard",
  password_confirmation: "benard"
)

donor2 = Donor.create!(
  username: "sandra",
  email: "sandra@gmail.com",
  role: :donor,
  password: "sandra",
  password_confirmation: "sandra"
)

#admin
admin1 = Admin.create!(
  username: "vanessa",
  email: "vanessa@gmail.com",
  role: :admin,
  password: "vanessa",
  password_confirmation: "vanessa"
)


#Seed data for reminders
Reminder.create!([
  { donor_id: donor1.id, charity_id: charity1.id, reminder_date: Date.today + 1.month },
  { donor_id: donor2.id, charity_id: charity1.id, reminder_date: Date.today + 1.month },
  { donor_id: donor1.id, charity_id: charity2.id, reminder_date: Date.today + 1.month }
])

#beneficiaries
beneficiary1 = Beneficiary.create!(
  name: "Kayla Macharia",
  age: 16,
  story: "Kayla is a bright student who loves to read and learn new things. Her dream is to become a doctor and help people in need. Unfortunately, her family cannot afford to pay for her education, and she is at risk of dropping out of school. Your donation can help Jane stay in school and achieve his dreams.",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aurovilleradio.org%2Fnammal-mudiyam-tamil%2F&psig=AOvVaw3-PxHzpubiW8P3Bf1rFa5Z&ust=1682578780879000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCKv8v8xv4CFQAAAAAdAAAAABAf",
  charity_id: charity1.id,
  donor_id: donor1.id
)

beneficiary2 = Beneficiary.create!(
  name: "Emma Ouma",
  age: 15,
  story: "Emma is a talented artist who loves to paint and draw. She has won several awards for her artwork, but she faces a big challenge. Her family cannot afford menstrual pads for Emma, and she often misses school and social events because of her period. This makes her feel ashamed and isolated from her peers. Your donation can help Emma get the pads she needs and pursue her passion for art without interruption.",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fafrican-orphan-girls&psig=AOvVaw3-PxHzpubiW8P3Bf1rFa5Z&ust=1682578780879000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCKv8v8xv4CFQAAAAAdAAAAABAn",
  charity_id: charity1.id,
  donor_id: donor2.id
)

beneficiary3 = Beneficiary.create!(
  name: "Sophie Ahmed",
  age: 17,
  story: "Sophie is a happy and energetic girl who loves to dance and play with her friends. She lives with her single mother, who struggles to make ends meet. Sophie has started her periods recently, but her mother cannot afford to buy her menstrual pads. This makes Sophie feel embarrassed and uncomfortable, and she often misses school because of her period. Your donation can help Sophie get the pads she needs and continue her education.",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fafrican-orphan-girls&psig=AOvVaw3-PxHzpubiW8P3Bf1rFa5Z&ust=1682578780879000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCKv8v8xv4CFQAAAAAdAAAAABAv",
  charity_id: charity2.id,
  donor_id: donor1.id
)

beneficiary4 = Beneficiary.create!(
  name: "Lily Anderson",
  age: 10,
  story: "Lily is a bright student who loves to read and learn new things. She dreams of becoming a doctor and helping people in need, but she faces a big challenge. Her family struggles to make ends meet, and they cannot afford menstrual pads for Lily. This puts her education and health at risk, and she often misses school because of her period. Your donation can help Lily get the pads she needs and stay in school.",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fafrican-american-teen-girl-palm&psig=AOvVaw3-PxHzpubiW8P3Bf1rFa5Z&ust=1682578780879000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCKv8v8xv4CFQAAAAAdAAAAABA2",
  charity_id: charity3.id,
  donor_id: donor1.id
)

#Seed data for inventories
Inventory.create!({ item_name: 'Pads', quantity: 100, beneficiary_id: beneficiary1.id, charity_id: charity1.id })
Inventory.create!({ item_name: 'Tampons', quantity: 50, beneficiary_id: beneficiary2.id, charity_id: charity1.id })
Inventory.create!({ item_name: 'Menstrual cups', quantity: 30, beneficiary_id: beneficiary3.id, charity_id: charity2.id })

#donations
donation1 = Donation.create(
  donor_id: donor1.id,
  charity_id: charity1.id,
  amount: 5000.00,
  anonymous: false,
  is_monthly: true
)

donation2 = Donation.create(
  donor_id: donor1.id,
  charity_id: charity3.id,
  amount: 2500.00,
  anonymous: true,
  is_monthly: false
)

donation3 = Donation.create(
  donor_id: donor2,
  charity_id: charity1.id,
  amount: 1000.00,
  anonymous: false,
  is_monthly: true
)

donation4 = Donation.create(
  donor_id: donor2.id,
  charity_id: charity4.id,
  amount: 7500.00,
  anonymous: true,
  is_monthly: false
)

donation5 = Donation.create(
  donor_id: donor1.id,
  charity_id: charity2.id,
  amount: 3000.00,
  anonymous: false,
  is_monthly: false
)





puts "Done!Let's cultivate change one cycle at a time!"
