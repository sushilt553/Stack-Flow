Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :questions do 
      resources :answers, only: [:create]
      resources :votes, only: [:create]
    end

    resources :answers, only: [:show, :edit, :update, :destroy] do
      resources :votes, only: [:create]
    end

    get 'search', to: 'search#search'

    resources :tags, only: [:index, :show]

    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]
  end
  
end
