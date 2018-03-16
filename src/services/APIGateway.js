'use strict';

import AWS from 'aws-sdk';

export default endpoint => class APIGateway extends AWS.APIGateway {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4567');
      options.endpoint = ep;
    }
    super(options);
  }
};
