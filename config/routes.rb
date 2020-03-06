Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :questions do 
      resources :answers, only: [:create]
    end

    resources :answers, only: [:index, :show, :edit, :update, :destroy]

    resources :tags, only: [:index]

    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]

  end
  
end
