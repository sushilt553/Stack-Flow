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

def votes_count(model)
    pos = model.votes.where(status: true).count
    neg = model.votes.where(status: false).count
    return (pos - neg)
end

def find_top_questions
    Question
    .select(:id, :title, 'COUNT(question_id) as answers_count')
    .joins(:answers)
    .group(:id)
    .order('answers_count DESC')
    .limit(5)
end

json.set!(@tag.id) do 
    @tag.questions.each do |question|
        json.set!(question.id) do 
            json.extract! question, :id, :title, :body, :author_id, :answer_ids
            json.set!('tags', joiner(question))
            json.set!('author_name', find_author_name(question))
            json.set!('full_tags', question.tags)
            json.set!('votes_count', votes_count(question))
        end
    end
end

# json.set!(@tag.id) do
#     @tag.questions.each do |question|
#         json.set!(question.id, question)
#     end
# end