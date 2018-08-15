# app-error
custom app error

## install

```bash
# npm
npm install customized-errors

# yarn
yarn add customized-errors
```

## Test

```bash
npm test

# or with yarn 
yarn run test
```

## usage

```js
const {TooManyRequestsError} = require('./error')

try {
    throw new TooManyRequestsError({message: 'You have exceeded your API rate limit', type: 'E_EXCEEDED_API_RATE_LIMIT', details:{limitCounts: 100, currentRequestCounts: 101}})
} catch (error) {
    console.error(error.message)
    console.log()
    console.error(error)
}

// prints:

// You have exceeded your API rate limit

// { name: 'TooManyRequestsError',
//   code: 'E4429',
//   type: 'E_EXCEEDED_API_RATE_LIMIT',
//   details: { limitCounts: 100, currentRequestCounts: 101 },
//   message: 'You have exceeded your API rate limit',
//   statusCode: 429 }
```

## TODO

1. add test
2. update readme
3. ...

## Dependencies

1. [statuses](https://github.com/jshttp/statuses#readme)
