class Error {
    where: string
    message: string

    constructor(code: string, message: string) {
        this.where = code
        this.message = message
    }
}

export default Error;