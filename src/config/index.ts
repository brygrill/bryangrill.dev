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
import github from '../images/github-icon.svg';

import azure from '../images/azure.svg';
import docker from '../images/docker-icon.svg';

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
  { title: 'github', src: faGithub, href: '' },
  { title: 'medium', src: faMediumM, href: '' },
  { title: 'twitter', src: faTwitter, href: '' },
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
    { id: 'github', src: github },
  ],
  sometimes: [
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
    { id: 'azure', src: azure },
    { id: 'docker', src: docker },
  ],
};
