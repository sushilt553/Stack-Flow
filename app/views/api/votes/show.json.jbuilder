def votes_count(model)
    pos = model.votes.where(status: true).count
    neg = model.votes.where(status: false).count
    return (pos - neg)
end

obj = ""

if @vote.votable_type === 'Question'
    obj = Question.find_by(id: @vote.votable_id)
    json.set!("question_id", obj.id)
    json.set!("votes_count", votes_count(obj))    
else
    obj = Answer.find_by(id: @vote.votable_id)
    votes_count(obj)
    json.set!("answer_id", obj.id)
    json.set!("votes_count", votes_count(obj))    
end





