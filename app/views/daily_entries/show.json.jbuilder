json.(@daily_entry, :id, :date)

json.weights @daily_entry.weights do |json, weight|
    json.(weight, :id, :measured_weight, :time_weighed)
    json.difference_from_daily_average weight.measured_weight - @daily_entry.weights.average(:measured_weight)
    end

