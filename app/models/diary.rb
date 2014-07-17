class Diary < ActiveRecord::Base
  has_many :daily_entries
  has_many :weights, through: :daily_entries

  def average_weight
    weights.average(:measured_weight) if weights
  end

  def total_weight_loss
    unless daily_entries.empty?
      first_weight = daily_entries.first
      last_weight = daily_entries.last
      if first_weight.average_daily_weight and last_weight.average_daily_weight
       weight_loss = first_weight.average_daily_weight -
        last_weight.average_daily_weight
      end
    else
      return 0
    end
  end

  def last_week_weight_loss
    previous_week = Array.new
    daily_entries.each do |daily_entry|
      if Time.now - daily_entry.date < 60*60*24*7 and daily_entry.average_daily_weight
        previous_week.push daily_entry
      end
    end
      if previous_week.count <= 1
        return 0
      else
        first_weight = previous_week.first
        last_weight = previous_week.last
        weight_loss = first_weight.average_daily_weight -
            last_weight.average_daily_weight

        end
  end


end
