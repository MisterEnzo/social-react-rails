Rails.application.routes.draw do
  devise_for :users
  root to: 'static_pages#home'
  get '/profile', to: 'users_profiles#edit'
  patch '/profile', to: 'users_profiles#update', as: 'update_profile'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts
      get '/follow_list', to: 'relationships#follow_list'
      get '/followers', to: 'relationships#followers'
      get '/following', to: 'relationships#following'
      resources :relationships, only: [:create, :destroy]
    end
  end

  get '/follow', to: 'static_pages#home'
end
