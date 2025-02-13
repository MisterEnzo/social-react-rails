module ApplicationHelper
  def login_helper
    if !current_user
      (link_to "Login", new_user_session_path, class: 'btn btn-primary') + ' ' +
      (link_to "Sign-up", new_user_registration_path, class: 'btn btn-outline-primary')
    else
      (link_to "Logout", destroy_user_session_path, method: :delete, class: 'btn btn-outline-primary')
    end
  end
end
