question = Question.find_by(id: @answer.question_id)

tags = []
question.tags.each do |tag|
    tags.push(tag.name)
end

author_name = User.find_by(id: @answer.author_id).username

json.answer do
    json.extract! @answer, :id, :body, :author_id, :question_id
    json.set!("author_name", author_name)
end
json.question do
    author_name = User.find_by(id: question.author_id).username
    json.extract! question, :id, :title, :body, :author_id, :answer_ids
    json.set!("tags", tags.join(" "))
    json.set!("author_name", author_name)
end


