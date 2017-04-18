class AddAttachmentImageToShops < ActiveRecord::Migration
  def self.up
    change_table :shops do |t|
      t.has_attached_file :image
    end
  end

  def self.down
    drop_attached_file :shops, :image
  end
end
