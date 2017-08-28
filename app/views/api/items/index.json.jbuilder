@items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :project_id, :body
    json.image_url asset_path(item.image.url)
  end
end
