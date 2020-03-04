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