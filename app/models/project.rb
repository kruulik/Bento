# == Schema Information
#
# Table name: projects
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  thumbnail_url :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Project < ApplicationRecord

  validates :title, presence: true
  # do I user_id if I already have ownerships? I'm going to assume that multiple users will have access to editing the same project.

  has_many :items, 
  has_many :ownerships,
  has_many :owners,
    through: :ownerships,
    source: :user




end
