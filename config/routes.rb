Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]

    resources :projects, only: [:create, :show, :index, :update, :destroy] do
      resources :items, only: [:index, :show]
      resources :comments, only: [:index, :create, :destroy]
      resources :likes, only: [:show, :create, :destroy]
      resources :tags, only: [:index]
    end

    resources :owners, only: [:create, :show, :index]
    resources :comments, only: [:create, :destroy, :index]
    resources :items, only: [:index, :show]
    resources :likes, only: [:create, :destroy]
    resources :tags, only: [:create, :destroy, :show]
    resources :taggings, only: [:create, :destroy, :show, :index]

  end

  root "static_pages#root"
end
