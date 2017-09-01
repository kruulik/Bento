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

  has_attached_file :thumbnail, styles: { thumb: "202X158>" }, default_url: ""
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

  has_many :items, dependent: :destroy
  has_many :ownerships, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :likers,
    through: :likes,
    source: :user
  has_many :owners,
    through: :ownerships,
    source: :user
  has_many :tags,
    through: :taggings,
    source: :tag

end
