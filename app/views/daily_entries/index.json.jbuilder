json.array!(@daily_entries) do |daily_entry|
  json.extract! daily_entry, :id, :date
end
