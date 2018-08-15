const util = require('util')
const status = require('statuses')

class BaseError extends Error {
  constructor(options = {}) {
    super()
    // // Ensure the name of this error is the same as the class name
    // this.name = this.constructor.name

    // Capture stack trace
    Error.captureStackTrace(this, new.target)

    const {
      statusCode = status('500'),
      code = 'E5500',
      message = 'Internal Server Error',
      name = this.constructor.name,
      type = null,
      details = null
    } = options

    this.name = name
    this.code = code
    this.type = type
    this.details = details
    this.message = message
    this.statusCode = statusCode
  }

  [util.inspect.custom]() {
    return this.toJSON()
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      type: this.type,
      details: this.details,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

class InternalServerError extends BaseError {
  // constructor(options = {}) {
  //     super()
  //     const {type = 'E_INTERNAL_SERVER_ERROR'} = options
  //     this.type = type
  // }
}

class ValidationError extends BaseError {
  constructor({message = status['400'], type = null, details = null} = {}) {
    super()

    this.code = 'E4400'
    this.type = type
    this.details = details
    this.message = message
    this.statusCode = status('400')
  }
}

class AuhtorizationError extends BaseError {
  constructor({message = status['401'], type = null, details = null} = {}) {
    super()

    this.code = 'E4401'
    this.type = type
    this.details = details
    this.message = message
    this.statusCode = status('401')
  }
}

class ForbiddenError extends BaseError {
  constructor({message = status['403'], type = null, details = null} = {}) {
    super()

    this.code = 'E4403'
    this.type = type
    this.details = details
    this.message = message
    this.statusCode = status('403')
  }
}

class ResourceNotFound extends BaseError {
  constructor({message = status['401'], type = null, details = null} = {}) {
    super()

    this.code = 'E4404'
    this.type = type
    this.details = details
    this.message = message
    this.statusCode = status('404')
  }
}

class TooManyRequestsError extends BaseError {
  constructor({message = status['429'], type = null, details = null} = {}) {
    super()

    this.code = 'E4429'
    this.type = type
    this.details = details
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
  InternalServerError,
  ValidationError,
  AuhtorizationError,
  ForbiddenError,
  ResourceNotFound,
  TooManyRequestsError,
  CustomError
}
