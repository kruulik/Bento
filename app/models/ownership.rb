# == Schema Information
#
# Table name: ownerships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ownership < ApplicationRecord

  belongs_to :user
  belongs_to :project

end
