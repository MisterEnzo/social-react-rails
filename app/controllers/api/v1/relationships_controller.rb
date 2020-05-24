class Api::V1::RelationshipsController < ApplicationController
  before_action :authenticate_user!

  def follow_list
    render json: User.where(["id != ?", current_user.id]).order("random()").all
  end

  def create
    relationship = Relationship.new(followed_id: params[:user_id])
    relationship.follower_id = current_user.id
    if relationship.save
      render json: relationship
    end
  end

  def destroy
    relationship = Relationship.find_by(followed_id: params[:user_id], follower_id: current_user.id)
    if relationship.destroy
      render json: relationship
    end
  end
end