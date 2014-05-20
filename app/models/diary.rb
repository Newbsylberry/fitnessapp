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


end
