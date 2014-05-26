class Weight < ActiveRecord::Base
  belongs_to :daily_entry

  def difference_from_daily_average
    measured_weight - daily_entry.weights.average(:measured_weight)
  end

  def difference_from_diary_average
    measured_weight - daily_entry.diary.weights.average(:measured_weight)
  end

end
