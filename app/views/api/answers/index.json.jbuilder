@answers.each do |answer|
    json.set!(answer.id) do 
        json.extract! answer, :id, :body, :author_id, :question_id
    end
end