# app-error
custom app error

## install

```bash 
# npm
npm install app-error

# yarn
yarn add app-error
```

## usage

```js
const {TooManyRequestsError} = require('./error')

try {
    throw new TooManyRequestsError({message: 'You have exceeded your API rate limit'})  
} catch (error) {
    console.error(error.message)
    console.log()
    console.error(error)
}

// prints:

// You have exceeded your API rate limit

// { TooManyRequestsError: You have exceeded your API rate limit
//     at Object.<anonymous> (/Users/xxxx/error/index.js:5:11)
//     at Module._compile (internal/modules/cjs/loader.js:689:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
//     at Module.load (internal/modules/cjs/loader.js:599:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:530:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
//     at startup (internal/bootstrap/node.js:266:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)
//   name: 'TooManyRequestsError',
//   code: 'E4429',
//   message: 'You have exceeded your API rate limit',
//   statusCode: 429 }
```