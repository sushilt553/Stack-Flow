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

@questions.each do |question|
    json.set!(question.id) do 
        json.extract! question, :id, :title, :body, :author_id
        json.set!('tags', joiner(question))
        json.set!('author_name', find_author_name(question))
    end
end