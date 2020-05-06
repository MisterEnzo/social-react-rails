Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#home'
  get '/profile', to: 'users_profiles#edit'
  patch '/profile', to: 'users_profiles#update', as: 'update_profile'
end
