# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Vote.destroy_all
Tagging.destroy_all
Tag.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all

User.create!(username: 'guest', email: 'sushil1@sushil.com', password: 'hunter12')

20.times {
    User.create!(
        username: Faker::Name.unique.name,
        password: Faker::String.random(length: 8),
        email: Faker::Internet.email
    )
}

20.times {
    author_id = User.all.sample.id
    Question.create!(
        title: Faker::GreekPhilosophers.quote,
        body: Faker::GreekPhilosophers.quote,
        author_id: author_id,
        views: (1..100).to_a.sample
    )
}

20.times {
    author_id = User.all.sample.id
    question_id = Question.all.sample.id
    Answer.create!(
        body: Faker::GreekPhilosophers.quote,
        author_id: author_id,
        question_id: question_id
    )
}

20.times{
    Tag.create!(name: Faker::ProgrammingLanguage.name)
}

20.times {
    question_id = Question.all.sample.id
    tag_id = Tag.all.sample.id
    Tagging.create!(
        question_id: question_id,
        tag_id: tag_id
    )
}

10.times {
    voter_id = User.all.sample.id
    votable_type = "Question"
    votable_id = Question.all.sample.id
    Vote.create!(
        voter_id: voter_id,
        votable_type: votable_type,
        votable_id: votable_id,
        status: [true, false].sample
    )
}

10.times {
    voter_id = User.all.sample.id
    votable_type = "Answer"
    votable_id = Answer.all.sample.id
    Vote.create!(
        voter_id: voter_id,
        votable_type: votable_type,
        votable_id: votable_id,
        status: [true, false].sample
    )
}