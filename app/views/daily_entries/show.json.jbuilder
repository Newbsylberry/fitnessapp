json.(@daily_entry, :id, :date, :diary_id)
json.diary_average_weight @diary.weights.average(:measured_weight)

json.weights @daily_entry.weights do |json, weight|
    json.(weight, :id, :measured_weight, :time_weighed, :diary_average_weight)
    json.daily_average_weight @daily_entry.weights.average(:measured_weight)
    json.difference_from_daily_average weight.measured_weight - @daily_entry.weights.average(:measured_weight)
    json.difference_from_diary_average weight.measured_weight - @diary.weights.average(:measured_weight)
    end



