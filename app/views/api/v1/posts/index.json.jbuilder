json.array! @posts do |post|
  json.username post.user.name
  json.content post.content
  json.timeStamp post.created_at
end