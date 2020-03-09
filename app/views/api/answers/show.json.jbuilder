question = Question.find_by(id: @answer.question_id)

tags = []
question.tags.each do |tag|
    tags.push(tag.name)
end

def votes_count(model)
    pos = model.votes.where(status: true).count
    neg = model.votes.where(status: false).count
    return (pos - neg)
end

author_name = User.find_by(id: @answer.author_id).username

json.answer do
    json.extract! @answer, :id, :body, :author_id, :question_id
    json.set!("author_name", author_name)
    json.set!("votes_count", votes_count(@answer))
end
json.question do
    author_name = User.find_by(id: question.author_id).username
    json.extract! question, :id, :title, :body, :author_id, :answer_ids
    json.set!("tags", tags.join(" "))
    json.set!("author_name", author_name)
    json.set!("votes_count", votes_count(question))
end


