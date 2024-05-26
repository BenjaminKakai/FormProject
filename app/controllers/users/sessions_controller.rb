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
