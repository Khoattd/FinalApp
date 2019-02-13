class AddDetailToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :title, :string
    add_column :albums, :picture_count, :integer
  end
end
