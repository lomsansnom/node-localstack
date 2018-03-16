'use strict';

import AWS from 'aws-sdk';

export default endpoint => class S3 extends AWS.S3 {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4572');
      options.endpoint = ep;
    }
    super(options);
  }
};
