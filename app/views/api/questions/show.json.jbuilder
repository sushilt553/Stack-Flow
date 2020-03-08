tags = []
@question.tags.each do |tag|
    tags.push(tag.name)
end

author_name = User.find_by(id: @question.author_id).username
json.question do
    json.extract! @question, :id, :title, :body, :author_id, :answer_ids
    json.set!('author_name', author_name)
    json.set!('tags', tags.join(" "))
end

json.answers do
    @question.answers.each do |answer|
        json.set!(answer.id) do
            author_name = User.find_by(id: answer.author_id).username
            json.extract! answer, :id, :body, :question_id, :author_id
            json.set!('author_name', author_name)
        end
    end
end