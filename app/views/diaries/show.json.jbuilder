json.(@diary, :id, :name)
json.diary_average_weight @diary.weights.average(:measured_weight)

json.daily_entries @diary.daily_entries do |json, daily_entry|
    json.(daily_entry, :id, :date, :average_daily_weight, :average_weight_at_date)
    end