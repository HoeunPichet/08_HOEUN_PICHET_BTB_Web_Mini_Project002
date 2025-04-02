// Response successfully
export const successResponse = (message) => {
    return {
        status: 200,
        message: message
    }
}

// Bad request error response
export const failedResponse = (error) => {
    return {
        status: 500,
        message: error
    }
}