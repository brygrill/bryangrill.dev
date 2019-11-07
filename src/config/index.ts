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
import serverless from '../images/serverless.svg';
import circleci from '../images/circleci.svg';
import git from '../images/git-icon.svg';

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
import nodejs from '../images/nodejs.svg';
import mapbox from '../images/mapbox.svg';
import leaflet from '../images/leaflet.svg';

export const features = {
  nav: false,
};

export const nav = [
  { title: 'HOME', href: '!' },
  { title: 'PROJECTS', href: 'projects' },
  { title: 'ARTICLES', href: 'articles' },
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
    { id: 'aws', src: aws },
    { id: 'serverless', src: serverless },
    { id: 'circleci', src: circleci },
    { id: 'git', src: git },
  ],
  sometimes: [
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'apollo', src: apollo },
    { id: 'elastic', src: elastic },
    { id: 'firebase', src: firebase },
    { id: 'gatsby', src: gatsby },
    { id: 'graphql', src: graphql },
    { id: 'gcp', src: gcp },
    { id: 'kube', src: kube },
    { id: 'jest', src: jest },
    { id: 'netlify', src: netlify },
    { id: 'nodejs', src: nodejs },
    { id: 'mapbox', src: mapbox },
    { id: 'leaflet', src: leaflet },
  ],
};
