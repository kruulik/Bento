@items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :project_id, :body
  end
end
