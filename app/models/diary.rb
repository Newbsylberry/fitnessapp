class Diary < ActiveRecord::Base
  has_many :daily_entries
  has_many :weights, through: :daily_entries

  def average_weight
    weights.average(:measured_weight)
  end

  def total_weight_loss
    total = 0
    daily_entries.each do |daily_entry|
      total += daily_entry.average_daily_weight - average_weight
      return total
    end
  end
end
