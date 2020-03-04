import * as StackAPIUtil from '../util/stack_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

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

export const requestAllQuestions = () => dispatch => (
    StackAPIUtil.fetchAllQuestions()
    .then(questions => dispatch(receiveAllQuestions(questions)))
)

export const requestQuestion = questionId => dispatch => (
    StackAPIUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)))
)

export const postQuestion = question => dispatch => (
    StackAPIUtil.postQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
)

export const updateQuestion = question => dispatch => (
    StackAPIUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = questionId => dispatch => (
    StackAPIUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
)