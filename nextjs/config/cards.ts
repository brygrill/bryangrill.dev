// primary
import reactImg from '../public/images/logos/react.svg';
import tsImg from '../public/images/logos/typescript-icon.svg';
import nodeImg from '../public/images/logos/nodejs-icon.svg';
import rqImg from '../public/images/logos/react-query.svg';

// favs
import nextImg from '../public/images/logos/nextjs.svg';
import tailwindImg from '../public/images/logos/tailwindcss-icon.svg';
import vercelImg from '../public/images/logos/vercel.svg';

// secondary
import jsImg from '../public/images/logos/javascript.svg';
import pyImg from '../public/images/logos/python.svg';
import expressImg from '../public/images/logos/express.svg';
import reactRouterImg from '../public/images/logos/react-router.svg';
import materialImg from '../public/images/logos/material-ui.svg';
import postmanImg from '../public/images/logos/postman-icon.svg';
import denoImg from '../public/images/logos/deno.svg';
import graphqlImg from '../public/images/logos/graphql.svg';
import nginxImg from '../public/images/logos/nginx.svg';
import jestImg from '../public/images/logos/jest.svg';
import gatsbyImg from '../public/images/logos/gatsby.svg';
import sentryImg from '../public/images/logos/sentry.svg';
import webpackImg from '../public/images/logos/webpack.svg';
import apolloImg from '../public/images/logos/apollostack.svg';

// cloud
import awsImg from '../public/images/logos/aws.svg';
import azureImg from '../public/images/logos/azure.svg';
import amplifyImg from '../public/images/logos/aws-amplify.svg';
import apiGateImg from '../public/images/logos/aws-api-gateway.svg';
import lambdaImg from '../public/images/logos/aws-lambda.svg';
import cognitoImg from '../public/images/logos/aws-cognito.svg';
import s3Img from '../public/images/logos/aws-s3.svg';
import cloudfrontImg from '../public/images/logos/aws-cloudfront.svg';
import ec2Img from '../public/images/logos/aws-ec2.svg';
import dockerImg from '../public/images/logos/docker-icon.svg';
import kubernetesImg from '../public/images/logos/kubernetes.svg';
import gcpImg from '../public/images/logos/gcp.svg';
import serverlessImg from '../public/images/logos/serverless.svg';
import cloudflareImg from '../public/images/logos/cloudflare.svg';
import netlifyImg from '../public/images/logos/netlify.svg';

// databases
import postgresImg from '../public/images/logos/postgresql.svg';
import cosmosImg from '../public/images/logos/cosmos.svg';
import firebaseImg from '../public/images/logos/firebase.svg';
import elasticImg from '../public/images/logos/elasticsearch.svg';
import dynamoImg from '../public/images/logos/aws-dynamodb.svg';

export const primary = [
  { label: 'React', src: reactImg },
  { label: 'TypeScript', src: tsImg },
  { label: 'React Query', src: rqImg },
  { label: 'NodeJS', src: nodeImg },
];

export const favorite = [
  { label: 'NextJS', src: nextImg },
  { label: 'Tailwind CSS', src: tailwindImg },
  { label: 'Vercel', src: vercelImg },
];

export const secondary = [
  { label: 'JavaScript', src: jsImg },
  { label: 'Python', src: pyImg },
  { label: 'Express', src: expressImg },
  { label: 'React Router', src: reactRouterImg },
  { label: 'Material UI', src: materialImg },
  { label: 'Postman', src: postmanImg },
  { label: 'Nginx', src: nginxImg },
  { label: 'Deno', src: denoImg },
  { label: 'GraphQL', src: graphqlImg },
  { label: 'Jest', src: jestImg },
  { label: 'Gatsby', src: gatsbyImg },
  { label: 'Sentry', src: sentryImg },
  { label: 'Webpack', src: webpackImg },
  { label: 'Apollo', src: apolloImg },
].sort((a, b) => a.label.localeCompare(b.label));

export const cloud = [
  { label: 'AWS', src: awsImg },
  { label: 'Azure', src: azureImg },
  { label: 'AWS Amplify', src: amplifyImg },
  { label: 'AWS Lambda', src: lambdaImg },
  { label: 'AWS API Gateway', src: apiGateImg },
  { label: 'AWS Cognito', src: cognitoImg },
  { label: 'AWS S3', src: s3Img },
  { label: 'AWS CloudFront', src: cloudfrontImg },
  { label: 'AWS EC2', src: ec2Img },
  { label: 'Docker', src: dockerImg },
  { label: 'Kubernetes', src: kubernetesImg },
  { label: 'GCP', src: gcpImg },
  { label: 'Serverless Framework', src: serverlessImg },
  { label: 'Cloudflare', src: cloudflareImg },
  { label: 'Netlify', src: netlifyImg },
].sort((a, b) => a.label.localeCompare(b.label));

export const database = [
  { label: 'Firebase', src: firebaseImg },
  { label: 'PostgreSQL', src: postgresImg },
  { label: 'CosmosDB', src: cosmosImg },
  { label: 'Elasticsearch', src: elasticImg },
  { label: 'DynamoDB', src: dynamoImg },
].sort((a, b) => a.label.localeCompare(b.label));
