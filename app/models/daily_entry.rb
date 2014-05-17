class DailyEntry < ActiveRecord::Base
  belongs_to :diary
  has_many :weights

  def average_daily_weight
    weights.average(:measured_weight)
  end

  def average_weight_at_date
    weights.average(:diary_average_weight)
  end

end
