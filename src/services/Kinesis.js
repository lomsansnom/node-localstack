'use strict';

import AWS from 'aws-sdk';

export default endpoint => class Kinesis extends AWS.Kinesis {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4568');
      options.endpoint = ep;
    }
    super(options);
  }
};
