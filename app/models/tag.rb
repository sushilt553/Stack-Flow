# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord

    validates :name, presence: true

    has_many :taggings,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tagging

    has_many :questions,
        through: :taggings

end
