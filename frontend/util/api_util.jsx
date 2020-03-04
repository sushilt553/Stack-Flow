const fetchQuestions = () => {
    return $.ajax({
        method: 'get',
        url: `/api/questions`
    })
}