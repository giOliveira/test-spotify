export const STATUS = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }

    if (response.status === 400) {
        return Promise.resolve(response)
    }

    return Promise.reject(new Error(response.statusText))
}

export const JSONFormat = (response) => response.json()