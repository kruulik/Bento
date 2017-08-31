# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  tag_id     :integer          not null
#

class Tagging < ApplicationRecord
  validates :tag_id, uniqueness: {scope: :project_id}

  belongs_to :tag
  belongs_to :project
end
