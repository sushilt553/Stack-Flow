def joiner(question)
    tags = []
    question.tags.each do |tag|
        tags.push(tag.name)
    end
    tags.join(" ")
end

def find_author_name(question)
    User.find_by(id: question.author_id).username
end

json.questions do
    @questions.each do |question|
        json.set!(question.id) do 
            json.extract! question, :id, :title, :body, :author_id, :answer_ids
            json.set!('tags', joiner(question))
            json.set!('author_name', find_author_name(question))
        end
    end
end

json.answers do
    @questions.each do |question|
        question.answers.each do |answer|
            json.set!(answer.id) do
                author_name = User.find_by(id: answer.author_id).username
                json.extract! answer, :id, :body, :question_id, :author_id
                json.set!('author_name', author_name)
            end
        end
    end
end