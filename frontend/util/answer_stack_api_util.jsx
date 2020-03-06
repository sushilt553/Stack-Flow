export const fetchAllAnswers = () => {
    return $.ajax({
        method: 'get',
        url: `/api/answers`
    })
}

export const fetchAnswer = (answerId) => {
    return $.ajax({
        method: 'get',
        url: `/api/answers/${answerId}`
    })
}

export const postAnswer = (answer) => {
    return $.ajax({
        method: 'post',
        url: `/api/questions/${answer.question_id}/answers`,
        data: {answer}
    })
}

export const updateAnswer = (answer) => {
    return $.ajax({
        method: 'patch',
        url: `/api/answers/${answer.id}`,
        data: {answer}
    })
}

export const deleteAnswer = (answerId) => {
    return $.ajax({
        method: 'delete',
        url: `/api/answers/${answerId}`
    })
}