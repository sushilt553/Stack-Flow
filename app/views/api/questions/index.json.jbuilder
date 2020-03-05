def joiner(question)
    tags = []
    question.tags.each do |tag|
        tags.push(tag.name)
    end
    tags.join(" ")
end

@questions.each do |question|
    json.set!(question.id) do 
        json.extract! question, :id, :title, :body, :author_id
        json.set!('tags', joiner(question))
    end
end