class Api::V1::PostsController < ApplicationController

  def index
    render json: Post.includes(:user).order(created_at: :desc)
  end

end