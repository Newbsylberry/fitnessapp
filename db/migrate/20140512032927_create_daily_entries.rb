class CreateDailyEntries < ActiveRecord::Migration
  def change
    create_table :daily_entries do |t|
      t.datetime :date

      t.timestamps
    end
  end
end
