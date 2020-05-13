class Api::V1::PostsController < ApplicationController

  def index
    @posts = Post.includes(:user).order(created_at: :desc)
  end

end