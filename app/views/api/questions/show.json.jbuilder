json.extract! @question, :id, :title, :body
json.set!('tag', @question.tag.name) 