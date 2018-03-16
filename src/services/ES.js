'use strict';

// Local elasticSearch 4571

import AWS from 'aws-sdk';

export default endpoint => class ES extends AWS.ES {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4578');
      options.endpoint = ep;
    }
    super(options);
  }
};
