'use strict';

const APIGateway = require('./APIGateway');
const CloudFormation = require('./CloudFormation');
const CloudWatch = require('./CloudWatch');
const DynamoDB = require('./DynamoDB');
const ES = require('./ES');
const Firehose = require('./Firehose');
const Kinesis = require('./Kinesis');
const Lambda = require('./Lambda');
const Redshift = require('./Redshift');
const Route53 = require('./Route53');
const S3 = require('./S3');
const SES = require('./SES');
const SNS = require('./SNS');
const SQS = require('./SQS');
const SSM = require('./SSM');

module.exports = endpoints => ({
  APIGateway: APIGateway(endpoints.APIGateway),
  CloudFormation: CloudFormation(endpoints.CloudFormation),
  CloudWatch: CloudWatch(endpoints.CloudWatch),
  DynamoDB: DynamoDB(endpoints.DynamoDB),
  ES: ES(endpoints.ES),
  Firehose: Firehose(endpoints.Firehose),
  Kinesis: Kinesis(endpoints.Kinesis),
  Lambda: Lambda(endpoints.Lambda),
  Redshift: Redshift(endpoints.Redshift),
  Route53: Route53(endpoints.Route53),
  S3: S3(endpoints.S3),
  SES: SES(endpoints.SES),
  SNS: SNS(endpoints.SNS),
  SQS: SQS(endpoints.SQS),
  SSM: SSM(endpoints.SSM)
});
