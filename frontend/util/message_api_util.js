export const fetchAllMessages = () => {
    debugger
    return $.ajax({
        url: '/api/messages',
        method: 'GET'
    })
}

export const fetchMessage = (messageId) => {
    debugger
    return $.ajax({
        url: `/api/messages/${messageId}`,
        method: 'GET'
    })
}

export const createMessage = (message) => {
    debugger
    return $.ajax({
        url: '/api/messages',
        method: 'POST',
        data: { message }
    })
}