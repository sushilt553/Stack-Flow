import * as AnswerStackAPIUtil from '../util/answer_stack_api_util';
// export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER_AND_QUESTION = 'RECEIVE_ANSWER_AND_QUESTION';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const CLEAR_ANSWER_ERRORS = 'CLEAR_ANSWER_ERRORS';

// export const receiveAllAnswers = (answers) => {
//     return {
//         type: RECEIVE_ALL_ANSWERS,
//         answers
//     }
// }

export const receiveAnswerAndQuestion = (payload) => {
    // debugger;
    return {
        type: RECEIVE_ANSWER_AND_QUESTION,
        payload
    }
}

export const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}

export const clearAnswerErrors = () => {
    return {
        type: CLEAR_ANSWER_ERRORS
    }
}

export const receiveAnswerErrors = (errors) => {
    return {
        type: RECEIVE_ANSWER_ERRORS,
        errors
    }
}

// export const requestAllAnswers = () => dispatch => (
//     AnswerStackAPIUtil.fetchAllAnswers()
//     .then(answers => dispatch(receiveAllAnswers(answers)))
//     .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
// )

export const requestAnswer = answerId => dispatch => (
    AnswerStackAPIUtil.fetchAnswer(answerId)
    .then(payload => dispatch(receiveAnswerAndQuestion(payload)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const postAnswer = answer => dispatch => (
    AnswerStackAPIUtil.postAnswer(answer)
    .then(payload => {
        dispatch(receiveAnswerAndQuestion(payload))
        return payload.question.id
    })
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const updateAnswer = answer => dispatch => (
    AnswerStackAPIUtil.updateAnswer(answer)
    .then(payload => {
        dispatch(receiveAnswerAndQuestion(payload))
        return payload.question.id
    })
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const deleteAnswer = answerId => dispatch => (
    AnswerStackAPIUtil.deleteAnswer(answerId)
    .then(() => dispatch(removeAnswer(answerId)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)