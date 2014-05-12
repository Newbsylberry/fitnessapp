class CreateWeights < ActiveRecord::Migration
  def change
    create_table :weights do |t|
      t.integer :daily_entry_id
      t.datetime :time_weighed
      t.decimal :weight

      t.timestamps
    end
  end
end
