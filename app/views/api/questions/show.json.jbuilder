tags = []
@question.tags.each do |tag|
    tags.push(tag.name)
end

def votes_count(model)
    pos = model.votes.where(status: true).count
    neg = model.votes.where(status: false).count
    return (pos - neg)
end

author_name = User.find_by(id: @question.author_id).username
json.question do
    json.extract! @question, :id, :title, :body, :author_id, :answer_ids
    json.set!('author_name', author_name)
    json.set!('tags', tags.join(" "))
    json.set!('full_tags', @question.tags)
    json.set!('votes_count', votes_count(@question))
end

json.answers do
    @question.answers.each do |answer|
        json.set!(answer.id) do
            author_name = User.find_by(id: answer.author_id).username
            json.extract! answer, :id, :body, :question_id, :author_id
            json.set!('author_name', author_name)
            json.set!('votes_count', votes_count(answer))
        end
    end
end