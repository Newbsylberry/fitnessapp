class DropColumnFromWeights < ActiveRecord::Migration
  def change
    remove_column :weights, :weight_at_time
  end
end
