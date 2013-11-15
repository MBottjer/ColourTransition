require 'sinatra'

get '/' do 
  erb :index
end

get '/cube' do 
  erb :cube 
end