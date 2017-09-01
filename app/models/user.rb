# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  f_name              :string           not null
#  l_name              :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  bio                 :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: {mini: "20X20#", small: "50X50#", medium: "100X100#"}, default_url: "default_avatar.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :ownerships, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes
  has_many :liked_project,
    through: :likes,
    source: :project

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: session_token)
      self.session_token = new_session_token
    end
    session_token
  end
end
