export const fetchAllTags = () => {
    return $.ajax({
        method: 'get',
        url: `/api/tags`
    })
}

export const fetchTag = (tagId) => {
    return $.ajax({
        method: 'get',
        url: `/api/tags/${tagId}`
    })
}