'use strict';

import AWS from 'aws-sdk';

export default endpoint => class SES extends AWS.SES {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4579');
      options.endpoint = ep;
    }
    super(options);
  }
};
