'use strict';

import APIGateway from './APIGateway';
import CloudFormation from './CloudFormation';
import CloudWatch from './CloudWatch';
import DynamoDB from './DynamoDB';
import ES from './ES';
import Firehose from './Firehose';
import Kinesis from './Kinesis';
import Lambda from './Lambda';
import Redshift from './Redshift';
import Route53 from './Route53';
import S3 from './S3';
import SES from './SES';
import SNS from './SNS';
import SQS from './SQS';
import SSM from './SSM';

export default endpoints => ({
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
