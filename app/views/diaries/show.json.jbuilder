json.(@diary, :id, :name, :average_weight, :total_weight_loss)


json.daily_entries @diary.daily_entries do |json, daily_entry|
    json.(daily_entry, :id, :date, :average_daily_weight, :average_weight_at_date)
    end