import * as AnswerStackAPIUtil from '../util/answer_stack_api_util';
// export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const CLEAR_ANSWER_ERRORS = 'CLEAR_ANSWER_ERRORS';

// export const receiveAllAnswers = (answers) => {
//     return {
//         type: RECEIVE_ALL_ANSWERS,
//         answers
//     }
// }

export const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer
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
    .then(answer => dispatch(receiveAnswer(answer)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const postAnswer = answer => dispatch => (
    AnswerStackAPIUtil.postAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const updateAnswer = answer => dispatch => (
    AnswerStackAPIUtil.updateAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)

export const deleteAnswer = answerId => dispatch => (
    AnswerStackAPIUtil.deleteAnswer(answerId)
    .then(() => dispatch(removeAnswer(answerId)))
    .fail(errors => dispatch(receiveAnswerErrors(errors.responseJSON)))
)