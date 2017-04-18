class Shop < ActiveRecord::Base

  #添付ファイルアップロードに関する設定
  has_attached_file :image,
  :styles => {
    :small => "50x50#",
    :medium => "300x200#",
    :large => "640x640#"
  },
  :storage        => :s3,
  :s3_permissions => :private,
  :s3_credentials => "#{Rails.root}/config/s3.yml",
  :path           => ":class/:attachment/:id/:style.:extension"

  #データに関するバリデーション
  validates :title, presence: true
  validates :category, presence: true
  validates :catch, presence: true
  validates :detail, presence: true
  validates :image, presence: true

  #画像ファイルに関するバリデーション
  validates_attachment_content_type :image,
  :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  validates_attachment_size :image,
  :less_than => 2.megabytes

  #S3の画像ファイルURLを取得する（管理画面でのみの使用）
  def authenticated_image_url(style)
    image.s3_object(style).url_for(:read, :secure => true)
  end

end
