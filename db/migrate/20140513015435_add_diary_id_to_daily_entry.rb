class AddDiaryIdToDailyEntry < ActiveRecord::Migration
  def change
    add_column :daily_entries, :diary_id, :integer
  end
end
