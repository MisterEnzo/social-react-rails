module ApplicationHelper
  def login_helper
    if !current_user
      (link_to "Login", new_user_session_path) + ' ' +
      (link_to "Sign-up", new_user_registration_path)
    else
      (link_to "Logout", destroy_user_session_path, method: :delete)
    end
  end
end
