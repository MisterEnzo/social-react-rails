class Post < ApplicationRecord
  belongs_to :user
  validates :content, presence: true

  def as_json(options={})
    {
      username: self.user.name,  
      content: content,
      timeStamp: created_at
    }
  end
end
