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
    .select(:id, :title, :views,'COUNT(question_id) as answers_count')
    .joins(:answers)
    .group(:id)
    .order('answers_count DESC')
    .limit(5)
end

json.questions do
    @questions.each do |question|
        json.set!(question.id) do 
            json.extract! question, :id, :title, :body, :author_id, :views, :answer_ids
            json.set!('tags', joiner(question))
            json.set!('full_tags', question.tags)
            json.set!('author_name', find_author_name(question))
            json.set!('votes_count', votes_count(question))
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
                json.set!('votes_count', votes_count(answer))
            end
        end
    end
end

json.set!('top_questions', find_top_questions)
# @questions.each do |question|
#     json.set!(question.id) do 
#         json.extract! question, :id, :title, :body, :views, :answer_ids
#     end
# end