class Diary < ActiveRecord::Base
  has_many :daily_entries
  has_many :weights, through: :daily_entries

  def average_weight
    weights.average(:measured_weight)
  end

  def total_weight_loss
    first_weight = weights.first
    last_weight = weights.last
    weight_loss = first_weight.measured_weight - last_weight.measured_weight
  end


end
