'use strict';

const services = require('./src/services');

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

module.exports = (endpoints) => {
  endpoints = endpoints || {};
  return services(endpoints);
};

