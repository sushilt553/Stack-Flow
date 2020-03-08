export const find_answers = (question, state) => {
    const answerIds = question.answer_ids
        // debugger;
    return answerIds.map(answerId => state.entities.answers[answerId])
}