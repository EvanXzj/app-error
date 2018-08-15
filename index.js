const status = require('statuses')

class BaseError extends Error {
    constructor(options = {}) {
        super()
        // // Ensure the name of this error is the same as the class name
        // this.name = this.constructor.name

        // Capture stack trace
        Error.captureStackTrace(this, new.target)

        const {statusCode=status('500'), code = 'E5500', message = 'Internal Server Error', name = this.constructor.name} = options

        this.name = name 
        this.code = code
        this.message = message
        this.statusCode = statusCode
    }
}

class ServerError extends BaseError {
    // constructor(options = {}) {
    //     super()

    //     const {type = 'E_INTERNAL_SERVER_ERROR'} = options
    //     this.type = type
    // }
}

class ValidateError extends BaseError {
    constructor({message = status['400']} = {}) {
        super()
        this.code = 'E4400'
        this.message = message
        this.statusCode = status('400')
    }
}

class AuthError extends BaseError {
    constructor({message = status['401']} = {}) {
        super()

        this.code = 'E4401'
        this.message = message
        this.statusCode = status('401')
    }
}

class ForbiddenError extends BaseError {
    constructor({message = status['403']} = {}) {
        super()
        this.code = 'E4403'
        this.message = message
        this.statusCode = status('403')
   }
}

class ResourceNotFound extends BaseError {
    constructor({message = status['401']} = {}) {
        super()
        
        this.code = 'E4404'
        this.message = message
        this.statusCode = status('404')
    }
}

class TooManyRequestsError extends BaseError {
    constructor({message = status['429']} = {}) {
        super()
        
        this.code = 'E4429'
        this.message = message
        this.statusCode = status('429')
    }
}

/**
 * default to ServerError
 */
class CustomError extends BaseError {
    // code here...
}

module.exports = {
    ServerError,
    ValidateError,
    AuthError,
    ForbiddenError,
    ResourceNotFound,
    TooManyRequestsError,
    CustomError
}