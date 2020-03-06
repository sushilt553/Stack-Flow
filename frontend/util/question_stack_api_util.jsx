export const fetchAllQuestions = () => {
    return $.ajax({
        method: 'get',
        url: `/api/questions`
    })
}

export const fetchQuestion = (questionId) => {
    return $.ajax({
        method: 'get',
        url: `/api/questions/${questionId}`
    })
}

export const postQuestion = (question) => {
    return $.ajax({
        method: 'post',
        url: `/api/questions`,
        data: { question }
    })
}

export const updateQuestion = (question) => {
    return $.ajax({
        method: 'patch',
        url: `/api/questions/${question.id}`,
        data: { question }
    })
}

export const deleteQuestion = (questionId) => {
    return $.ajax({
        method: 'delete',
        url: `/api/questions/${questionId}`
    })
}