Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :show, :index]
    resources :owners, only: [:create, :show, :index]
  end

  root "static_pages#root"
end
