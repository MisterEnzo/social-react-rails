class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts

  def gravatar
    hash = Digest::MD5.hexdigest(self.email)
    "https://www.gravatar.com/avatar/#{hash}"
  end
  
end
