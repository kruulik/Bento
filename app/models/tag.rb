# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  tag        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :tag, presence: true

  has_many :taggings

  has_many :projects,
  through: :taggings,
  source: :project
end
