json.array! @posts do |post|
  json.id post.id
  json.username post.user.name
  json.content post.content
  json.timeStamp time_ago_in_words(post.created_at)
end