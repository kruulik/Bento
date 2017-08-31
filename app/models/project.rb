# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord

  validates :title, presence: true
  # do I user_id if I already have ownerships? I'm going to assume that multiple users will have access to editing the same project.

  has_many :items, dependent: :destroy
  has_many :ownerships, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :likers,
    through: :likes,
    source: :user 
  has_many :owners,
    through: :ownerships,
    source: :user

end
