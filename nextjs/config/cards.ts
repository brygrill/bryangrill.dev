// primary
import reactImg from '../public/images/logos/react.svg';
import tsImg from '../public/images/logos/typescript-icon.svg';
import nodeImg from '../public/images/logos/nodejs-icon.svg';

// secondary
import jsImg from '../public/images/logos/javascript.svg';
import pyImg from '../public/images/logos/python.svg';
import tailwindImg from '../public/images/logos/tailwindcss-icon.svg';
import expressImg from '../public/images/logos/express.svg';
import reactRouterImg from '../public/images/logos/react-router.svg';
import materialImg from '../public/images/logos/material-ui.svg';
import postmanImg from '../public/images/logos/postman-icon.svg';
import denoImg from '../public/images/logos/deno.svg';
import graphqlImg from '../public/images/logos/graphql.svg';
import nginxImg from '../public/images/logos/nginx.svg';
import nextImg from '../public/images/logos/nextjs.svg';
import jestImg from '../public/images/logos/jest.svg';
import gatsbyImg from '../public/images/logos/gatsby.svg';
import prettierImg from '../public/images/logos/prettier.svg';

// cloud
import awsImg from '../public/images/logos/aws.svg';
import azureImg from '../public/images/logos/azure.svg';
import amplifyImg from '../public/images/logos/aws-amplify.svg';
import firebaseImg from '../public/images/logos/firebase.svg';
import dockerImg from '../public/images/logos/docker-icon.svg';
import kubernetesImg from '../public/images/logos/kubernetes.svg';
import gcpImg from '../public/images/logos/gcp.svg';
import serverlessImg from '../public/images/logos/serverless.svg';
import cloudflareImg from '../public/images/logos/cloudflare.svg';
import vercelImg from '../public/images/logos/vercel.svg';
import netlifyImg from '../public/images/logos/netlify.svg';

// databases
import postgresImg from '../public/images/logos/postgresql.svg';
import cosmosImg from '../public/images/logos/cosmos.svg';

export const primary = [
  { label: 'React', src: reactImg },
  { label: 'TypeScript', src: tsImg },
  { label: 'NodeJS', src: nodeImg },
];

export const secondary = [
  { label: 'JavaScript', src: jsImg },
  { label: 'Python', src: pyImg },
  { label: 'Express', src: expressImg },
  { label: 'React Router', src: reactRouterImg },
  { label: 'Tailwind CSS', src: tailwindImg },
  { label: 'Material UI', src: materialImg },
  { label: 'Postman', src: postmanImg },
  { label: 'Nginx', src: nginxImg },
  { label: 'Deno', src: denoImg },
  { label: 'GraphQL', src: graphqlImg },
  { label: 'NextJS', src: nextImg },
  { label: 'Prettier', src: prettierImg },
  { label: 'Jest', src: jestImg },
  { label: 'Gatsby', src: gatsbyImg },
].sort((a, b) => a.label.localeCompare(b.label));

export const cloud = [
  { label: 'AWS', src: awsImg },
  { label: 'Azure', src: azureImg },
  { label: 'AWS Amplify', src: amplifyImg },
  { label: 'Docker', src: dockerImg },
  { label: 'Kubernetes', src: kubernetesImg },
  { label: 'GCP', src: gcpImg },
  { label: 'Serverless Framework', src: serverlessImg },
  { label: 'Cloudflare', src: cloudflareImg },
  { label: 'Vercel', src: vercelImg },
  { label: 'Netlify', src: netlifyImg },
].sort((a, b) => a.label.localeCompare(b.label));

export const database = [
  { label: 'Firebase', src: firebaseImg },
  { label: 'PostgreSQL', src: postgresImg },
  { label: 'CosmosDB', src: cosmosImg },
].sort((a, b) => a.label.localeCompare(b.label));
