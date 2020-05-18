class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def index
    @posts = Post.includes(:user).order(created_at: :desc)
  end

  def create
    post = Post.new(post_params)
    post.user = current_user
    post.save
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end

end