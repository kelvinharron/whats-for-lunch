import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import {aws_kms} from "aws-cdk-lib";
import * as iam from 'aws-cdk-lib/aws-iam';

export class WhatsForLunchAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new s3.Bucket(this, 'myBucket', {
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryptionKey: new aws_kms.Key(this, 'myBucketKMSKey')
    });

    bucket.grantRead(new iam.AccountRootPrincipal())
  }
}
