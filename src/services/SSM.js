'use strict';

import AWS from 'aws-sdk';

export default endpoint => class SSM extends AWS.SSM {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4583');
      options.endpoint = ep;
    }
    super(options);
  }
};
