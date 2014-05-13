class Diary < ActiveRecord::Base
  has_many :daily_entries
end
