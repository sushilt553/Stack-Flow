import * as SearchAPIUtil from '../util/search_stack_api_util';
export const RECEIVE_SEARCH_ITEMS = 'RECEIVE_SEARCH_ITEMS';

export const receiveSearchItems = (payload) => {
    return {
        type: RECEIVE_SEARCH_ITEMS,
        payload
    }
}

export const findQuestions = (tags) => dispatch => (
    SearchAPIUtil.findQuestions(tags)
    .then(payload => dispatch(receiveSearchItems(payload)))
)