# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord

    validates :title, :body, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :answers,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Answer,
        dependent: :destroy

    has_many :taggings,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Tagging

    has_many :tags,
        through: :taggings

    has_many :votes, as: :votable

    def self.create_tags(tags_arr, question)
        tags_arr.each do |tag|
            new_tag = Tag.find_by(name: tag) || Tag.create!(name: tag)
            Tagging.create(question_id: question.id, tag_id: new_tag.id)
        end
    end

    def self.destroy_tags(tags)
        tags.each do |tag|
            tag.destroy
        end
    end

    def self.find_top_questions

    end
end
