class AddDayNotesToDailyEntries < ActiveRecord::Migration
  def change
    add_column :daily_entries, :daily_description, :string
  end
end
