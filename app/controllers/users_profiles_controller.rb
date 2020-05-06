class UsersProfilesController < ApplicationController
  before_action :authenticate_user!

  def edit
    @user = current_user
  end

  def update
    current_user.update(user_params)
    redirect_to '/profile'
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
