'use strict';

import AWS from 'aws-sdk';

export default endpoint => class Lambda extends AWS.Lambda {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4574');
      options.endpoint = ep;
    }
    super(options);
  }
};
