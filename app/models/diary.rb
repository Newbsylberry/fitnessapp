class Diary < ActiveRecord::Base
  has_many :daily_entries
  has_many :weights, through: :daily_entries
end
