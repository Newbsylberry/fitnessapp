class AddMeasuredWeightColumnToWeights < ActiveRecord::Migration
  def change
    add_column :weights, :measured_weight, :decimal
  end
end
