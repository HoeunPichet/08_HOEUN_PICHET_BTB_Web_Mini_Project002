// Response successfully
export const successResponse = (message) => {
    return {
        status: "SUCCESS",
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