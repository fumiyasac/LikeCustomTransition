class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :title
      t.string :category
      t.string :catch
      t.text :detail

      t.timestamps
    end
  end
end
