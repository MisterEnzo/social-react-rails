class Post < ApplicationRecord
  include ActionView::Helpers
  belongs_to :user
  validates :content, presence: true

  def as_json(options={})
    {
      id: id,
      username: self.user.name,  
      content: content,
      timeStamp: time_ago_in_words(created_at),
      gravatar: self.gravatar
    }
  end

  def gravatar
    user.gravatar
  end
end
