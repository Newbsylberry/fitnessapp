class AddDiaryAverageColumnToWeights < ActiveRecord::Migration
  def change
    add_column :weights, :diary_average_weight, :decimal
  end
end
