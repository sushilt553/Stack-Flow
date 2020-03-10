import * as TagsStackAPIUtil from '../util/tags_stack_api_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';

export const receiveAllTags = (tags) => {
    return {
        type: RECEIVE_ALL_TAGS,
        tags
    }
}

export const requestAllTags = () => dispatch => (
    TagsStackAPIUtil.fetchAllTags()
    .then(tags => dispatch(receiveAllTags(tags)))
)