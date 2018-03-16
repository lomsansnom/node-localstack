'use strict';

import AWS from 'aws-sdk';

export default endpoint => class Firehose extends AWS.Firehose {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4573');
      options.endpoint = ep;
    }
    super(options);
  }
};
