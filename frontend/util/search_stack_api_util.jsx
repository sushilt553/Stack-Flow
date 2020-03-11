export const findQuestions = (tags) => {
    return $.ajax({
        method: 'get',
        url: `/api/search?tags=${tags}`
    })
}