export const fetchAllConversations = (profileId) => {
    
    return $.ajax({
        url: '/api/conversations',
        method: 'GET',
        data: { profileId }
    })
}

export const fetchConversation = (conversationId) => {
    
    return $.ajax({
        url: `/api/conversations/${conversationId}`,
        method: 'GET'
    })
}

export const createConversation = (conversation) => {  
    
    return $.ajax({
        url: '/api/conversations',
        method: 'POST',
        data: { conversation }
    })
}