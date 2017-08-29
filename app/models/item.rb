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

  # validates :image, attachment_presence: true, unless: :body?
  # validates :body, presence: true, unless: :image?
  validate :body_if_no_image

  has_attached_file :image, default_url: ''
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :project
  has_one :user,
    through: :project

  private

  def body_if_no_image
    unless image.present? || image != ''
      unless body.present?
        errors[:image] << 'Must attach image or text!'
      else
        errors[:image] << 'Cannot have both image and text!'
      end
    end
  end

end
