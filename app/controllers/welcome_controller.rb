class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:fetch_data]

  def index
    if user_signed_in?
      @username = current_user.username
    end
  end

  def fetch_data
    require 'net/http'
    require 'json'

    url = 'https://cat-fact.herokuapp.com/facts'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    @facts = JSON.parse(response)
  end
end
