# app/controllers/data_controller.rb

class DataController < ApplicationController
  before_action :authenticate_user!

  def fetch
    url = URI.parse('https://cat-fact.herokuapp.com/facts')
    response = Net::HTTP.get_response(url)
    data = JSON.parse(response.body)

    @formatted_data = data.map do |fact|
      {
        fact: fact['text'],
        verified: fact['status']['verified'].to_s,
        created_at: DateTime.parse(fact['createdAt']).strftime('%d-%m-%Y %H:%M:%S')
      }
    end
  end
end
