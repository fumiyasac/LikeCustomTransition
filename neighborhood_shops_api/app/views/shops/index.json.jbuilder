json.shops do
  json.contents do
    json.array!(@shops) do |shop|
      json.id shop.id.to_s
      json.title shop.title
      json.category shop.category
      json.kcpy shop.catch
      json.detail shop.detail
      json.image_url ('https://' + shop.authenticated_image_url(:large).host + shop.authenticated_image_url(:large).path)
    end
  end
end
