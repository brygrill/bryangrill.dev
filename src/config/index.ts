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
import esri from '../images/esri.svg';
import git from '../images/git-icon.svg';
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
    { id: 'js', src: js },
    { id: 'react', src: react },
    { id: 'python', src: python },
    { id: 'ts', src: ts },
    { id: 'nodejs', src: nodejs },
    { id: 'aws', src: aws },
    { id: 'esri', src: esri },

    { id: 'git', src: git },
  ],
  sometimes: [
    { id: 'serverless', src: serverless },
    { id: 'circleci', src: circleci },
    { id: 'sentry', src: sentry },
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'apollo', src: apollo },
    { id: 'npm', src: npm },
    { id: 'elastic', src: elastic },
    { id: 'firebase', src: firebase },
    { id: 'gatsby', src: gatsby },
    { id: 'graphql', src: graphql },
    { id: 'gcp', src: gcp },
    { id: 'kube', src: kube },
    { id: 'jest', src: jest },
    { id: 'netlify', src: netlify },
    { id: 'postgres', src: postgres },
    { id: 'preact', src: preact },
    { id: 'svelte', src: svelte },
    { id: 'mapbox', src: mapbox },
    { id: 'leaflet', src: leaflet },
    { id: 'nginx', src: nginx },
    { id: 'lambda', src: lambda },
    { id: 'gateway', src: gateway },
    { id: 'cognito', src: cognito },
    { id: 'dynamo', src: dynamo },
    { id: 'twilio', src: twilio },
    { id: 'sendgrid', src: sendgrid },
  ],
};
