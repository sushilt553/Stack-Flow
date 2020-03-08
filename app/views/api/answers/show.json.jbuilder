question = Question.find_by(id: @answer.question_id)

tags = []
question.tags.each do |tag|
    tags.push(tag.name)
end

json.answer do
    json.extract! @answer, :id, :body, :author_id, :question_id
end
json.question do
    json.extract! question, :id, :title, :body, :author_id, :answer_ids
    json.set!("tags", tags.join(" "))
end


