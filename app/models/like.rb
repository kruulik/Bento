# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :project_id, presence: true
  validates :project_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :project
end
