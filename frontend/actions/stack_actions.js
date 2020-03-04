import * as StackAPIUtil from '../util/stack_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';

export const receiveAllQuestions = (questions) => {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions
    }
}

export const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question
    }
}

export const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}

export const clearQuestionErrors = () => {
    return {
        type: CLEAR_QUESTION_ERRORS
    }
}

export const receiveQuestionErrors = errors => {
    return {
        type: RECEIVE_QUESTION_ERRORS,
        errors
    }
}

export const requestAllQuestions = () => dispatch => (
    StackAPIUtil.fetchAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const requestQuestion = questionId => dispatch => (
    StackAPIUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const postQuestion = question => dispatch => (
    StackAPIUtil.postQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const updateQuestion = question => dispatch => (
    StackAPIUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const deleteQuestion = questionId => dispatch => (
    StackAPIUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)