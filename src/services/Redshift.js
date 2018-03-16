'use strict';

import AWS from 'aws-sdk';

export default endpoint => class Redshift extends AWS.Redshift {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4577');
      options.endpoint = ep;
    }
    super(options);
  }
};
