class DailyEntry < ActiveRecord::Base
  belongs_to :diary
  has_many :weights

  def average_daily_weight
    weights.average(:measured_weight)
  end

  def average_weight_at_date
    weights.average(:diary_average_weight)
  end

  def next
    diary.daily_entries.where("id > ?", id).order("id ASC").first
  end

  def prev
    diary.daily_entries.where("id < ?", id).order("id DESC").first
  end

  def weight_difference_from_previous_day
    average_daily_weight - prev.average_daily_weight if prev
  end

end

