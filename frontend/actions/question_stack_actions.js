import * as QuestionStackAPIUtil from '../util/question_stack_api_util';
export const RECEIVE_ALL_QUESTIONS_AND_ANSWERS = 'RECEIVE_ALL_QUESTIONS_AND_ANSWERS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const CLEAR_QUESTION_ERRORS = 'CLEAR_QUESTION_ERRORS';

export const receiveAllQuestionsAndAnswers = (payload) => {
    return {
        type: RECEIVE_ALL_QUESTIONS_AND_ANSWERS,
        payload
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
    QuestionStackAPIUtil.fetchAllQuestions()
    .then(payload => dispatch(receiveAllQuestionsAndAnswers(payload)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const requestQuestion = questionId => dispatch => (
    QuestionStackAPIUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const postQuestion = question => dispatch => (
    QuestionStackAPIUtil.postQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const updateQuestion = question => dispatch => (
    QuestionStackAPIUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)

export const deleteQuestion = questionId => dispatch => (
    QuestionStackAPIUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
    .fail(errors => dispatch(receiveQuestionErrors(errors.responseJSON)))
)