# == Schema Information
#
# Table name: items
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Item < ApplicationRecord
  validates :project_id, presence: true, uniqueness: true
  # will need custom validation for image or body presence true 

  belongs_to :project

end
