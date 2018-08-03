const Transport = require("winston-transport");
const omit = require("./omit");

/**
 * This transport will send all messages with level "error" to Bugsnag.
 */
module.exports = class BugsnagTransport extends Transport {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name || "Bugsnag";
    this.level = opts.level || "";
    // Bugsnag should be initialized (`bugsnag.register` should be called before using the logger).
    // For more information, check https://docs.bugsnag.com/platforms/nodejs/other/#2-register-the-bugsnag-notifier-with-your-api-key
    this.bugsnag = opts.bugsnag;
  }

  log(info, callback) {
    const { message, level } = info;

    if (level === "error") {
      this.bugsnag.notify(message, omit(info, ["level", "message"]));
    }

    callback();
  }
};
