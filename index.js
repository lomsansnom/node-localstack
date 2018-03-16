'use strict';

import services from './src/services';

// const endpoints = {
//     'APIGateway': '',
//     'CloudFormation': '',
//     'CloudWatch': '',
//     'DynamoDB': '',
//     'ES': '',
//     'Firehose': '',
//     'Kinesis': '',
//     'Lambda': '',
//     'Redshift': '',
//     'Route53': '',
//     'S3': '',
//     'SES': '',
//     'SNS': '',
//     'SQS': '',
//     'SSM': ''
// };

export default (endpoints) => {
  endpoints = endpoints || {};
  return services(endpoints);
};

