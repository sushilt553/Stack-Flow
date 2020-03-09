import * as VoteAPIUtil from '../util/vote_stack_api_util';

export const RECEIVE_QUESTION_VOTE = 'RECEIVE_QUESTION_VOTE';
export const RECEIVE_ANSWER_VOTE = 'RECEIVE_ANSWER_VOTE';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';
export const CLEAR_VOTE_ERRORS = 'CLEAR_VOTE_ERRORS';

export const receiveQuestionVote = (vote) => {
    return {
        type: RECEIVE_QUESTION_VOTE,
        vote
    }
}

export const receiveAnswerVote = (vote) => {
    return {
        type: RECEIVE_ANSWER_VOTE,
        vote
    }
}

export const receiveVoteErrors = (errors) => {
    return {
        type: RECEIVE_VOTE_ERRORS,
        errors
    }
}

export const clearVoteErrors = () => {
    return {
        type: CLEAR_VOTE_ERRORS
    }
}

export const questionVote = vote => dispatch => (
    VoteAPIUtil.createQuestionVote(vote)
    .then(vote => dispatch(receiveQuestionVote(vote)))
    .fail(errors => dispatch(receiveVoteErrors(errors.responseJSON)))
)

export const answerVote = vote => dispatch => (
    VoteAPIUtil.createAnswerVote(vote)
    .then(vote => dispatch(receiveAnswerVote(vote)))
    .fail(errors => dispatch(receiveVoteErrors(errors.responseJSON)))
)