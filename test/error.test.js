const errors = require('../index')

test('# Internal Server Error Test', () => {
   const InternalServerError = new errors.InternalServerError()

   expect(InternalServerError).toHaveProperty('statusCode')
   expect(InternalServerError).toHaveProperty('statusCode', 500)
   expect(InternalServerError instanceof Error)
})

describe('# Custmized Error Test', () => {
  const res = {
    name: 'TooManyRequestsError',
    code: 'E4429',
    type: 'E_EXCEEDED_API_RATE_LIMIT',
    details: {limitCounts: 100, currentRequestCounts: 101},
    message: 'You have exceeded your API rate limit',
    statusCode: 429
  }

  const err1 = new errors.CustomError({
    name: 'TooManyRequestsError',
    code: 'E4429',
    statusCode: 429,
    message: 'You have exceeded your API rate limit',
    type: 'E_EXCEEDED_API_RATE_LIMIT',
    details: {limitCounts: 100, currentRequestCounts: 101}
  })

  const err2 = new errors.TooManyRequestsError({
    message: 'You have exceeded your API rate limit',
    type: 'E_EXCEEDED_API_RATE_LIMIT',
    details: {limitCounts: 100, currentRequestCounts: 101}
  })

  expect(err1 instanceof Error)
  expect(err2 instanceof Error)
  expect(err1.toJSON()).toEqual(res)
  expect(err2.toJSON()).toEqual(res)
  expect(err1.toJSON()).toEqual(err2.toJSON())
})
