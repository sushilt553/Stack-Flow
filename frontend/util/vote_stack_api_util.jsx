export const createQuestionVote = (vote) => {
    return $.ajax({
        method: 'post',
        url: `/api/questions/${vote.votable_id}/votes`
    })
}

export const createAnswerVote = (vote) => {
    return $.ajax({
        method: 'post',
        url: `/api/answers/${vote.votable_id}/votes`
    })
}