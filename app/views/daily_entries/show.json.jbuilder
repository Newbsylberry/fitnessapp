json.(@daily_entry, :id, :date)

json.weights @daily_entry.weights do |json, weight|
    json.(weight, :id, :measured_weight, :time_weighed)
    end