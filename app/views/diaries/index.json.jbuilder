json.array!(@diaries) do |diary|
  json.extract! diary, :id, :name
end
