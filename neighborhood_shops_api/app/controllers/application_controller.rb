class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  if Rails.env == "production"
    BASIC_AUTH_USER_NAME     = ENV['BASIC_AUTH_USER_NAME']
    BASIC_AUTH_USER_PASSWORD = ENV['BASIC_AUTH_USER_PASSWORD']
  elsif Rails.env == "development"
    BASIC_AUTH_USER_NAME     = 'user'
    BASIC_AUTH_USER_PASSWORD = 'password'
  end
end
