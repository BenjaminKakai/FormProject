Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Allow requests from all origins
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head] # Support common HTTP methods
    end
  end
  