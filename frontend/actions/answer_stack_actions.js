import * as AnswerStackAPIUtil from '../util/answer_stack_api_util';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const CLEAR_ANSWER_ERRORS = 'CLEAR_ANSWER_ERRORS';

export const receiveAllAnswers = (answers) => {
    return {
        type: RECEIVE_ALL_ANSWERS,
        answers
    }
}