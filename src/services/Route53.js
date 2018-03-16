'use strict';

import AWS from 'aws-sdk';

export default endpoint => class Route53 extends AWS.Route53 {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4580');
      options.endpoint = ep;
    }
    super(options);
  }
};
