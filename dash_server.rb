require "json"
require "net/http"
require "sinatra"
require "uri"

get "/" do
  erb :index
end

get "/healthz" do
  "Dash is healthy"
end

get "/route/:destination" do
  p "====="
  uri = "https://maps.googleapis.com/maps/api/distancematrix/json?"
  #params = "origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&key=" + api_key
  params = "origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC"
  uri += params

  # generate the request
  uri = URI.encode(uri)
  uri = URI.parse(uri)
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  request = Net::HTTP::Get.new(uri.request_uri)

  # make the request
  response = http.request(request)
  p response.code
  p JSON.parse(response.body)
  #JSON.parse(response.body)
  response.body
end
