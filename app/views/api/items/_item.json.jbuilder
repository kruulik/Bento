json.extract! item, :id, :body
json.image_url asset_path(item.image.url(:original))
