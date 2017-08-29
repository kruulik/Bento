# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  body       :text             not null
#

class Comment < ApplicationRecord
  validates :body, :user_id, :project_id, presence: true

  belongs_to :user
  belongs_to :project

end
