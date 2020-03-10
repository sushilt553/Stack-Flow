def questions_count(tag)
    tag.questions.length
end

@tags.each do |tag|
    json.set!(tag.id) do
        json.extract! tag, :id, :name
        json.set!('questions_count', questions_count(tag))
    end
end