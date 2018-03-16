'use strict';

import AWS from 'aws-sdk';

export default endpoint => class CloudFormation extends AWS.CloudFormation {
  constructor(options) {
    options = options || {};
    if (!options.endpoint) {
      const ep = new AWS.Endpoint(endpoint || 'http://localhost:4581');
      options.endpoint = ep;
    }
    super(options);
  }
};
