class Tag < ApplicationRecord

    TAGS = [
        'javascript',
        'java',
        'c#',
        'c++',
        'python',
        'php',
        'jquery',
        'ruby',
        'rails',
        'css',
        'mysql',
        'html',
        'node',
        '.net',
        'react',
        'angular',
        'ajax',
        'mongoDB',
        'postgresql',
        'algorithms',
        'AWS'
    ]

    validates :name, presence: true

    has_many :questions,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Question
end
