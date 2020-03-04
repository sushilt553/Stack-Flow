tags = []
@question.tags.each do |tag|
    tags.push(tag.name)
end

json.extract! @question, :id, :title, :body
json.set!('tags', tags.join(" "))