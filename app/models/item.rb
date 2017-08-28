# == Schema Information
#
# Table name: items
#
#  id                 :integer          not null, primary key
#  project_id         :integer          not null
#  body               :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Item < ApplicationRecord
  validates :project_id, presence: true

  validates :image, attachment_presence: true, :unless => :body?
  validates :body, presence: true, :unless => :image?

  # validates :body, allow_nil: true
  # validates :image, allow_nil: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # validates :image_or_text

  belongs_to :project
  has_one :user,
    through: :project

  private

  def image_or_text
    unless body.empty? ^ image.empty?
      errors.add(:base, "Please select an image or enter text, not both!")
    end
  end


end
