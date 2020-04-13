import {
  faGithub,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import js from '../images/javascript.svg';
import react from '../images/react.svg';
import python from '../images/python.svg';
import ts from '../images/typescript-icon.svg';
import aws from '../images/aws.svg';
import esri from '../images/esri2.svg';
import git from '../images/github-icon.svg';
import nodejs from '../images/nodejs.svg';

import serverless from '../images/serverless.svg';
import circleci from '../images/circleci.svg';
import sentry from '../images/sentry.svg';
import azure from '../images/azure.svg';
import docker from '../images/docker-icon.svg';
import apollo from '../images/apollostack.svg';
import elastic from '../images/elasticsearch.svg';
import firebase from '../images/firebase.svg';
import gatsby from '../images/gatsby.svg';
import gcp from '../images/gcp.svg';
import graphql from '../images/graphql.svg';
import jest from '../images/jest.svg';
import kube from '../images/kubernetes.svg';
import netlify from '../images/netlify.svg';
import mapbox from '../images/mapbox.svg';
import leaflet from '../images/leaflet.svg';
import postgres from '../images/postgresql.svg';
import preact from '../images/preact.svg';
import svelte from '../images/svelte.svg';
import npm from '../images/npm.svg';
import nginx from '../images/nginx.svg';
import lambda from '../images/aws-lambda.svg';
import gateway from '../images/aws-api-gateway.svg';
import cognito from '../images/aws-cognito.svg';
import dynamo from '../images/aws-dynamodb.svg';
import twilio from '../images/twilio.svg';
import sendgrid from '../images/sendgrid.svg';

export const features = {
  nav: true,
};

export const nav = [
  { title: 'HOME', href: '/' },
  // { title: 'PROJECTS', href: 'projects' },
  // { title: 'ARTICLES', href: 'articles' },
  // { title: 'CODE', href: '#code' },
];

export const social = [
  { title: 'github', src: faGithub, href: 'https://github.com/brygrill' },
  { title: 'medium', src: faMediumM, href: 'https://medium.com/@brygrill' },
  { title: 'twitter', src: faTwitter, href: 'https://twitter.com/brygrill' },
];

export const tech = {
  everyday: [
    { id: 'a_js', src: js, label: 'JavaScript' },
    { id: 'b_react', src: react, label: 'React' },
    { id: 'c_python', src: python, label: 'Python' },
    { id: 'd_ts', src: ts, label: 'TypeScript' },
    { id: 'e_nodejs', src: nodejs, label: 'Node' },
    { id: 'f_git', src: git, label: 'Github' },
    { id: 'g_aws', src: aws, label: 'AWS' },
    { id: 'h_esri', src: esri, label: 'Esri' },
  ],
  sometimes: [
    { id: 'serverless', src: serverless, label: 'Serverless' },
    { id: 'circleci', src: circleci, label: 'CircleCI' },
    { id: 'sentry', src: sentry, label: 'Sentry' },
    { id: 'azure', src: azure, label: 'Azure' },
    { id: 'docker', src: docker, label: 'Docker' },
    { id: 'apollo', src: apollo, label: 'Apollo' },
    { id: 'npm', src: npm, label: 'NPM' },
    { id: 'elastic', src: elastic, label: 'Elasticsearch' },
    { id: 'firebase', src: firebase, label: 'Firebase' },
    { id: 'gatsby', src: gatsby, label: 'Gatsby' },
    { id: 'graphql', src: graphql, label: 'GraphQL' },
    { id: 'gcp', src: gcp, label: 'GCP' },
    { id: 'kube', src: kube, label: 'Kubernetes' },
    { id: 'jest', src: jest, label: 'Jest' },
    { id: 'netlify', src: netlify, label: 'Netlify' },
    { id: 'postgres', src: postgres, label: 'PostreSQL' },
    { id: 'preact', src: preact, label: 'Preact' },
    { id: 'svelte', src: svelte, label: 'Svelte' },
    { id: 'mapbox', src: mapbox, label: 'Mapbox' },
    { id: 'leaflet', src: leaflet, label: 'Leaflet' },
    { id: 'nginx', src: nginx, label: 'Nginx' },
    { id: 'lambda', src: lambda, label: 'Lambda' },
    { id: 'gateway', src: gateway, label: 'API Gateway' },
    { id: 'cognito', src: cognito, label: 'Cognito' },
    { id: 'dynamo', src: dynamo, label: 'DynamoDB' },
    { id: 'twilio', src: twilio, label: 'Twilio' },
    { id: 'sendgrid', src: sendgrid, label: 'SendGrid' },
  ],
};
