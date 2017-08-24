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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
