class DailyEntry < ActiveRecord::Base
  belongs_to :diary
  has_many :weights

end
