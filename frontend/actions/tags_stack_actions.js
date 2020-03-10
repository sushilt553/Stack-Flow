import * as TagsStackAPIUtil from '../util/tags_stack_api_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveAllTags = (tags) => {
    return {
        type: RECEIVE_ALL_TAGS,
        tags
    }
}

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const requestAllTags = () => dispatch => (
    TagsStackAPIUtil.fetchAllTags()
    .then(tags => dispatch(receiveAllTags(tags)))
)

export const requestTag = (tagId) => dispatch => (
    TagsStackAPIUtil.fetchTag(tagId)
    .then(questions => dispatch(receiveQuestions(questions)))
)