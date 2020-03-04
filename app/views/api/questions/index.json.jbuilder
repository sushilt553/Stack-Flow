@questions.each do |question|
    json.set!(question.id) do 
        json.extract! question, :id, :title, :body
        json.set!('tags') do 
            question.tags.each do |tag|
                json.set!(tag.id, tag)
            end
        end
    end
end