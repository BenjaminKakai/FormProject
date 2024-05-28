**Step 1: Set Up Your Rails Application **

**Install Rails** (if you haven't already): 

gem install rails -v 7.1.3.2 

**Create a new Rails application: **

rails new starter_online_app -T --api 

cd starter_online_app 

**Add the necessary gems: Edit your Gemfile to include the required gems: **

gem 'devise' 

gem 'jsonapi-serializer' 

**Install the gems: **

bundle install 

**Step 2: Set Up Devise **

**Install Devise: ** 

rails generate devise:install 

**Configure Devise:** Open config/initializers/devise.rb and set config.navigational_formats to an empty array: 

config.navigational_formats = [] 

**Generate User Model: **

rails generate devise User 

rails db:migrate 


**Update User Model:** Edit the app/models/user.rb to include the username attribute: 

 

class User < ApplicationRecord 

  devise :database_authenticatable, :registerable, 

         :recoverable, :rememberable, :validatable 

 

  validates :username, presence: true, uniqueness: true 

end 



**Update the Users Migration:** Add the username field to the db/migrate/xxxxxx_devise_create_users.rb file: 

 

t.string :username, null: false, default: "" 

add_index :users, :username, unique: true 

**Run the Migration:** 

 

rails db:migrate 

**Step 3: Customize Controllers **

Generate Devise Controllers: 


rails generate devise:controllers users -c=sessions registrations 

**Add respond_to :json to Controllers:** 
Edit app/controllers/users/sessions_controller.rb and app/controllers/users/registrations_controller.rb to include respond_to :json and the necessary methods to format responses in JSON. 

sessions_controller.rb: 

 

class Users::SessionsController < Devise::SessionsController 

  respond_to :json 

 

  private 

 

  def respond_with(resource, _opts = {}) 

    render json: UserSerializer.new(resource).serializable_hash.to_json, status: :ok 

  end 

 

  def respond_to_on_destroy 

    head :no_content 

  end 

end 

**registrations_controller.rb:** 

class Users::RegistrationsController < Devise::RegistrationsController 

  respond_to :json 

  private 

  def respond_with(resource, _opts = {}) 

    render json: UserSerializer.new(resource).serializable_hash.to_json, status: :ok 

  end 

  def respond_to_on_destroy 

    head :no_content 

  end 

end 

Update Routes: Configure config/routes.rb to use the customized controllers: 


Rails.application.routes.draw do 

  devise_for :users, controllers: { 

    sessions: 'users/sessions', 

    registrations: 'users/registrations' 

  } 


  # Define your application routes here 

end 


**Step 4: Create Serializer **

**Generate Serializer: **

rails g serializer user id email username created_at 

**Edit Serializer:** 
Edit app/serializers/user_serializer.rb to include the desired attributes: 

class UserSerializer 

  include JSONAPI::Serializer 

  attributes :id, :email, :username, :created_at 

end 

**Step 5: Fetch Data from External API **

**Create a Controller to Fetch Data:** Generate a new controller to handle fetching data from the external API: 

rails g controller data fetch 

**Define the Fetch Action:** Edit app/controllers/data_controller.rb to fetch and render the data: 

require 'net/http' 

require 'json' 

class DataController < ApplicationController 

  before_action :authenticate_user! 


  def fetch 

    url = URI.parse('https://cat-fact.herokuapp.com/facts') 

    response = Net::HTTP.get_response(url) 

    data = JSON.parse(response.body) 

    formatted_data = data.map do |fact| 

      { 

        fact: fact['text'], 

        verified: fact['status']['verified'].to_s, 

        created_at: DateTime.parse(fact['createdAt']).strftime('%d-%m-%Y %H:%M:%S') 

      } 

    end 

    render json: formatted_data 

  end 

end 


**Add Route for Fetch Action:** Add a route to config/routes.rb for the new fetch action: 

Rails.application.routes.draw do 

  devise_for :users, controllers: { 

    sessions: 'users/sessions', 

    registrations: 'users/registrations' 

  } 

  get 'fetch_data', to: 'data#fetch' 

  # Define your application routes here 

end 

**Step 6: Frontend Integration (React) **

**Create React App:** 

npx create-react-app frontend 

cd frontend 

**Set Up API Calls:** Install necessary packages for making API calls (like axios) and setting up React Router if needed. 

**Create Registration and Login Forms:** Implement forms for user registration and login, making API calls to your Rails backend. 

**Fetch and Display Data:** Implement the functionality to fetch data from the /fetch_data endpoint and display it in a table format. 

**Step 7: Testing and Deployment **

Run the Rails server: 

rails server 

**Run the React development server: ** 

npm start 

**Test the application:** Ensure all functionality works as expected, including user registration, login, and fetching data. 

**Final Notes** 

Ensure to handle errors gracefully and provide meaningful error messages. 

Restart your Rails server after making changes to the routes.rb or when installing new gems. 

 
