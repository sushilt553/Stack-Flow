tags = []
@question.tags.each do |tag|
    tags.push(tag.name)
end

author_name = User.find_by(id: @question.author_id).username

json.extract! @question, :id, :title, :body, :author_id, :answer_ids
json.set!('author_name', author_name)
json.set!('tags', tags.join(" "))
