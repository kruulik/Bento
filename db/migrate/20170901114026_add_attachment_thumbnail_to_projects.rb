class AddAttachmentThumbnailToProjects < ActiveRecord::Migration[5.1]
  def self.up
    change_table :projects do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :projects, :thumbnail
  end
end
