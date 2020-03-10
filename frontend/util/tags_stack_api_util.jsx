export const fetchAllTags = () => {
    return $.ajax({
        method: 'get',
        url: `/api/tags`
    })
}