# == Schema Information
#
# Table name: taggings
#
#  id          :bigint           not null, primary key
#  question_id :integer
#  tag_id      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tagging < ApplicationRecord

    belongs_to :tag,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tag

    belongs_to :question,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Question
end
