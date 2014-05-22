class Diary < ActiveRecord::Base
  has_many :daily_entries
  has_many :weights, through: :daily_entries

  def average_weight
    weights.average(:measured_weight)
  end

  def total_weight_loss
    first_weight = daily_entries.first
    last_weight = daily_entries.last
    weight_loss = first_weight.average_daily_weight - last_weight.average_daily_weight
  end

  def last_week_weight_loss
    previous_week = Array.new
    daily_entries.each do |daily_entry|
      if Time.now - daily_entry.date < 60*60*24*7
        previous_week.push daily_entry
      end
    end
    puts previous_week.count
        first_weight = previous_week.first
        last_weight = previous_week.last
        weight_loss = first_weight.average_daily_weight - last_weight.average_daily_weight
  end
end
