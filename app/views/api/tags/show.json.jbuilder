# json.set!(@tag.id) do
#     json.extract! @tag, :questions
# end

json.set!(@tag.id) do
    @tag.questions.each do |question|
        json.set!(question.id, question)
    end
end