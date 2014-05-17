class AddDiaryAverageToWeights < ActiveRecord::Migration
  def change
    add_column :weights, :daily_average_weight, :decimal
  end
end
