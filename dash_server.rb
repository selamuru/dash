require "sinatra"

get "/" do
  erb :index
end

get "/healthz" do
  "Dash is healthy"
end

get "/route/:destination" do
  #dishes = Menus.match(name: params[:name])
  #dishes.raw_plain["hits"]["hits"].map { |dish| dish["_source"] }.to_json
  #slim :index, local: { menus: Menus.match(name: params[:word])}
end
