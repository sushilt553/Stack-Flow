import * as SearchAPIUtil from '../util/search_stack_api_util';
export const RECEIVE_SEARCH_ITEMS = 'RECEIVE_SEARCH_ITEMS';
export const CLEAR_SEARCH_ITEMS = 'CLEAR_SEARCH_ITEMS';

export const receiveSearchItems = (payload) => {
    return {
        type: RECEIVE_SEARCH_ITEMS,
        payload
    }
}

export const clearSearchItems = () => {
    return {
        type: CLEAR_SEARCH_ITEMS
    }
}

export const findQuestions = (tags) => dispatch => (
    SearchAPIUtil.findQuestions(tags)
    .then(payload => dispatch(receiveSearchItems(payload)))
)