class RemoveColumnFromWeights < ActiveRecord::Migration
  def change
    remove_column :weights, :daily_average_weight, :string
  end
end
