Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:create, :index, :show, :update, :destroy] do
      member do 
        post 'like'
        post 'unlike'
        post 'dislike'
        post 'undislike'
      end
    end
    resources :comments, only: [ :show, :create, :update, :destroy] do
      # member do 
      #   post 'like'
      #   post 'unlike'
      #   post 'dislike'
      #   post 'undislike'
      # end
    end
  end
  


  root "static_pages#root"
end
