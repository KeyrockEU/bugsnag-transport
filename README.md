# `winston-bugsnag-transport`

`winston` transport for Bugsnag. Sends all messages with level `error` to Bugsnag.

## Usage

First, you'll need to install the package with `yarn` or `npm`:

```
yarn add @keyrock/winston-bugsnag-transport
```

or

```
npm install --save @keyrock/winston-bugsnag-transport
```

Then, when instantiating `winston`:

```js
const winston = require("winston");
const bugsnag = require("bugsnag");
const BugsnagTransport = require("@keyrock/winston-bugsnag-transport");

// You need to properly initialize your bugsnag instance. Refer to the documentation.
bugsnag.register("your api key");

// ...

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new BugsnagTransport({
      bugsnag: bugsnag // Your Busgnag instance
    })
    // ... your other transports
  ]
});
```

Note that the initialization of the Bugnsag library should be done before initializing Winston.

## License

MIT
