class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :posts
  has_many :relationships

  def self.follow_list(current_user)
    where("id != ?", current_user.id)
    .where.not(id: current_user.following)
    .order("random()").all
  end

  def following
    list = Relationship.all.map do |r|
      if r.follower_id == self.id
        r.followed_id
      end
    end
    followed_ids = list.filter do |n|
      n != nil
    end
  end

  def following_list
    User.where(id: self.following)
  end

  def gravatar
    hash = Digest::MD5.hexdigest(self.email)
    "https://www.gravatar.com/avatar/#{hash}"
  end

  def as_json(options={})
    {
      id: self.id,
      username: self.name,
      gravatar: self.gravatar
    }
  end
  
end
